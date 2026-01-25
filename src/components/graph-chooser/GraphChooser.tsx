"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Node,
  Edge,
  NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";

// 分割したデータファイルをインポート
import {
  FULL_NODES,
  FULL_MAP,
  PARENT_MAP,
  GraphNodeData,
} from "./nodes-data";
import { CHART_ICONS } from "./ChartIcons";

const elk = new ELK();

/**
 * ユーティリティ: 終端ノード判定
 */
function isFinalNode(id: string) {
  const n = FULL_MAP.get(id);
  const kids = n?.data.childIds ?? [];
  return (n?.data.title ?? "").startsWith("✅") && kids.length === 0;
}

/**
 * 現在のexpanded状態に基づいて可視化するノード/エッジIDのリストを作成
 */
function buildVisibleSubgraph(rootId: string, expanded: Set<string>) {
  const nodes: Array<{ id: string; level: number }> = [];
  const edges: Array<{ id: string; source: string; target: string }> = [];

  const walk = (id: string, level: number) => {
    nodes.push({ id, level });
    const full = FULL_MAP.get(id);
    const childIds = full?.data.childIds ?? [];
    if (childIds.length > 0 && expanded.has(id)) {
      for (const childId of childIds) {
        edges.push({ id: `e:${id}->${childId}`, source: id, target: childId });
        walk(childId, level + 1);
      }
    }
  };

  walk(rootId, 0);
  return { nodes, edges };
}

/**
 * 動的レイアウト: 現在見えているノードだけを受け取り配置計算
 */
async function layoutVisibleGraph(
  visibleNodes: Array<{ id: string; level: number }>,
  visibleEdges: Array<{ id: string; source: string; target: string }>
) {
  const NODE_W = 280;
  const NODE_H = 130;
  const FINAL_NODE_H = 150;

  const elkGraph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": "40",
      "elk.layered.spacing.nodeNodeBetweenLayers": "70",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      // データの定義順を極力維持する
      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
    },
    children: visibleNodes.map((n) => ({
      id: n.id,
      width: NODE_W,
      height: isFinalNode(n.id) ? FINAL_NODE_H : NODE_H,
    })),
    edges: visibleEdges.map((e) => ({
      id: e.id,
      sources: [e.source],
      targets: [e.target],
    })),
  };

  const res = await elk.layout(elkGraph as any);
  const pos = new Map<string, { x: number; y: number }>();
  (res.children ?? []).forEach((c: any) =>
    pos.set(c.id, { x: c.x ?? 0, y: c.y ?? 0 })
  );
  return pos;
}

/**
 * カスタムノードコンポーネント
 */
function GraphNode({ id, data }: NodeProps<GraphNodeData>) {
  const canExpand = (data.childIds?.length ?? 0) > 0;
  const ChartIcon = data.isFinal ? CHART_ICONS[id] : null;

  // 状態に応じた配色
  const getBgColor = () => {
    if (data.isFinal && data.isSelected) return "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)";
    if (data.isFinal) return "linear-gradient(135deg, #e8f5e9 0%, #dcedc8 100%)";
    if (data.isSelected) return "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)";
    return "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)";
  };

  const getBorderColor = () => {
    if (data.isFinal && data.isSelected) return "#28a745";
    if (data.isFinal) return "#81c784";
    if (data.isSelected) return "#1976d2";
    return "#e0e0e0";
  };

  // 最終ノード用のレイアウト（アイコン付き）
  if (data.isFinal) {
    return (
      <div
        onClick={() =>
          window.dispatchEvent(new CustomEvent("select-node", { detail: { id } }))
        }
        style={{
          width: 280,
          height: 150,
          borderRadius: 14,
          border: `2px solid ${getBorderColor()}`,
          background: getBgColor(),
          padding: 14,
          boxShadow: data.isSelected
            ? "0 8px 24px rgba(0,0,0,0.15)"
            : "0 4px 12px rgba(0,0,0,0.08)",
          display: "flex",
          gap: 12,
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        title="クリックして選択"
      >
        <Handle type="target" position={Position.Left} style={{ background: "#666" }} />
        <Handle type="target" position={Position.Top} style={{ background: "#666" }} />

        {/* アイコン表示エリア */}
        <div
          style={{
            width: 90,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.7)",
            borderRadius: 10,
            flexShrink: 0,
          }}
        >
          {ChartIcon ? <ChartIcon size={75} color="#2e7d32" /> : null}
        </div>

        {/* テキストエリア */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 1.3,
              color: "#1b5e20",
            }}
          >
            {data.title?.replace("✅ ", "")}
          </div>
          <span
            style={{
              fontSize: 10,
              color: "#2e7d32",
              fontWeight: 600,
              background: "rgba(46, 125, 50, 0.15)",
              padding: "2px 8px",
              borderRadius: 4,
              alignSelf: "flex-start",
            }}
          >
            おすすめ
          </span>
          <div
            style={{
              fontSize: 12,
              lineHeight: 1.4,
              color: "#333",
              marginTop: 4,
            }}
          >
            {data.description ?? ""}
          </div>
        </div>
      </div>
    );
  }

  // 通常ノード用のレイアウト
  return (
    <div
      onClick={() =>
        window.dispatchEvent(new CustomEvent("select-node", { detail: { id } }))
      }
      style={{
        width: 280,
        height: 130,
        borderRadius: 14,
        border: `2px solid ${getBorderColor()}`,
        background: getBgColor(),
        padding: 14,
        boxShadow: data.isSelected
          ? "0 8px 24px rgba(0,0,0,0.15)"
          : "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      title="クリックして選択"
    >
      <Handle type="target" position={Position.Left} style={{ background: "#666" }} />
      <Handle type="source" position={Position.Right} style={{ background: "#666" }} />
      <Handle type="target" position={Position.Top} style={{ background: "#666" }} />
      <Handle type="source" position={Position.Bottom} style={{ background: "#666" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 15,
            lineHeight: 1.3,
            color: "#1a1a1a",
          }}
        >
          {data.title}
        </div>

        {canExpand && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.dispatchEvent(
                new CustomEvent("toggle-node", { detail: { id } })
              );
            }}
            style={{
              borderRadius: 8,
              border: "none",
              padding: "5px 10px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              background: data.isExpanded ? "#1976d2" : "#f5f5f5",
              color: data.isExpanded ? "#fff" : "#333",
              whiteSpace: "nowrap",
              transition: "all 0.15s ease",
            }}
            title={data.isExpanded ? "折りたたむ" : "展開する"}
          >
            {data.isExpanded ? "−" : "+"}
          </button>
        )}
      </div>

      <div
        style={{
          fontSize: 13,
          lineHeight: 1.45,
          color: "#444",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {data.description ?? ""}
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          gap: 12,
          fontSize: 11,
          color: "#666",
          fontWeight: 500,
        }}
      >
        <span
          style={{
            background: "rgba(0,0,0,0.05)",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          Lv.{data.level ?? 0}
        </span>
        {canExpand && (
          <span
            style={{
              background: "rgba(0,0,0,0.05)",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            {data.childIds?.length ?? 0} 選択肢
          </span>
        )}
      </div>
    </div>
  );
}

const nodeTypes = { graphNode: GraphNode };

function GraphChooserInner() {
  const { fitView } = useReactFlow();
  // 初期状態はrootのみ
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["root"])
  );

  const [selectedId, setSelectedId] = useState<string>("root");
  const [finalId, setFinalId] = useState<string | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<GraphNodeData>>(
    []
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // 表示対象のノード構造（expandedに依存）
  const visible = useMemo(
    () => buildVisibleSubgraph("root", expanded),
    [expanded]
  );

  // 可視構造(visible)が変わるたびにレイアウト再計算
  useEffect(() => {
    let cancelled = false;

    const runLayout = async () => {
      // 1. レイアウト計算
      const pos = await layoutVisibleGraph(visible.nodes, visible.edges);
      if (cancelled) return;

      // 2. ReactFlow用にNode/Edgeを作成
      const rfEdges: Edge[] = visible.edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        type: "smoothstep",
        animated: true,
      }));

      const rfNodes: Node<GraphNodeData>[] = visible.nodes.map((n) => {
        const full = FULL_MAP.get(n.id)!;
        const p = pos.get(n.id) ?? { x: 0, y: 0 };
        const kids = full.data.childIds ?? [];
        const final = isFinalNode(n.id);

        return {
          id: n.id,
          type: "graphNode",
          position: { x: p.x, y: p.y },
          data: {
            title: full.data.title,
            description: full.data.description,
            childIds: kids,
            isExpanded: expanded.has(n.id),
            level: n.level,
            isFinal: final,
            isSelected: selectedId === n.id,
          },
        };
      });

      setNodes(rfNodes);
      setEdges(rfEdges);

      // レイアウト変更後にビューをフィット
      setTimeout(() => {
        fitView({ padding: 0.25, duration: 300 });
      }, 50);
    };

    runLayout();
    return () => {
      cancelled = true;
    };
  }, [visible, selectedId, setNodes, setEdges, expanded, fitView]);

  // +/- toggle
  useEffect(() => {
    const handler = (ev: Event) => {
      const { id } = (ev as CustomEvent).detail as { id: string };
      const full = FULL_MAP.get(id);
      const kids = full?.data.childIds ?? [];
      if (kids.length === 0) return;

      setExpanded((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        next.add("root");
        return next;
      });
    };

    window.addEventListener("toggle-node", handler as any);
    return () => window.removeEventListener("toggle-node", handler as any);
  }, []);

  // 選択（クリック）
  useEffect(() => {
    const handler = (ev: Event) => {
      const { id } = (ev as CustomEvent).detail as { id: string };
      setSelectedId(id);

      if (isFinalNode(id)) {
        setFinalId(id);
      } else {
        setFinalId(null);
      }

      // 選択ノードまでの祖先を展開（道筋を維持）
      setExpanded((prev) => {
        const next = new Set(prev);
        next.add("root");
        next.add(id);

        let cur: string | undefined = id;
        while (cur) {
          const parent = PARENT_MAP.get(cur);
          if (!parent) break;
          next.add(parent);
          cur = parent;
        }
        return next;
      });
    };

    window.addEventListener("select-node", handler as any);
    return () => window.removeEventListener("select-node", handler as any);
  }, []);

  const finalTitle = finalId ? FULL_MAP.get(finalId)?.data.title : null;
  const finalDesc = finalId ? FULL_MAP.get(finalId)?.data.description : null;

  return (
    <div style={{ width: "100%", height: "100vh", background: "#f8fafc" }}>
      {/* 上部バー */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: 12,
          left: 12,
          right: 12,
          display: "flex",
          gap: 16,
          alignItems: "center",
          padding: "12px 16px",
          borderRadius: 14,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 16,
            color: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 20 }}>📊</span>
          グラフ選択ガイド
        </div>

        {finalId ? (
          <div
            style={{
              marginLeft: 8,
              padding: "8px 14px",
              borderRadius: 10,
              border: "2px solid #28a745",
              background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1b5e20" }}>
              {finalTitle}
            </div>
            <div style={{ fontSize: 12, color: "#2e7d32", marginTop: 2 }}>
              {finalDesc}
            </div>
          </div>
        ) : (
          <div
            style={{
              fontSize: 13,
              color: "#555",
              background: "#f5f5f5",
              padding: "8px 12px",
              borderRadius: 8,
            }}
          >
            ノードをクリックして選択を進めると、おすすめグラフが表示されます
          </div>
        )}

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
          }}
        >
          <button
            onClick={() => {
              // 全ノードIDを取得して展開
              const allIds = new Set(FULL_NODES.map((n) => n.id));
              setExpanded(allIds);
            }}
            style={{
              padding: "7px 14px",
              borderRadius: 8,
              border: "none",
              background: "#1976d2",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              transition: "all 0.15s ease",
            }}
            title="全展開"
          >
            全展開
          </button>
          <button
            onClick={() => {
              setExpanded(new Set(["root"]));
              setSelectedId("root");
              setFinalId(null);
            }}
            style={{
              padding: "7px 14px",
              borderRadius: 8,
              border: "none",
              background: "#ff5722",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              transition: "all 0.15s ease",
            }}
            title="リセット"
          >
            リセット
          </button>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.25, duration: 400 }}
        proOptions={{ hideAttribution: true }}
        style={{ background: "#f8fafc" }}
      >
        <Background color="#ddd" gap={20} size={1} />
        <Controls
          style={{
            background: "#fff",
            borderRadius: 10,
            border: "1px solid #e0e0e0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <MiniMap
          style={{
            background: "#fff",
            borderRadius: 10,
            border: "1px solid #e0e0e0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          nodeColor={(node) => {
            if (node.data?.isFinal) return "#81c784";
            if (node.data?.isSelected) return "#64b5f6";
            return "#e0e0e0";
          }}
        />
      </ReactFlow>
    </div>
  );
}

export default function GraphChooser() {
  return (
    <ReactFlowProvider>
      <GraphChooserInner />
    </ReactFlowProvider>
  );
}