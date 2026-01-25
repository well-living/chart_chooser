// nodes-data.ts

export type GraphNodeData = {
  title: string;
  description?: string;
  childIds?: string[];
  isExpanded?: boolean;
  level?: number;
  isFinal?: boolean;
  isSelected?: boolean;
  isSameChart?: boolean; // 選択中のグラフと同じグラフを指すノード
};

export type FullNode = {
  id: string;
  data: {
    title: string;
    description?: string;
    childIds?: string[];
  };
};

export const FULL_NODES: FullNode[] = [
  // root
  {
    id: "root",
    data: {
      title: "開始",
      description: "何を伝えたい？",
      childIds: ["time", "compare", "ratio", "dist", "relation", "structure", "geo"],
    },
  },

  // ====================================================
  // 1. 時系列 (Time)
  // ====================================================
  {
    id: "time",
    data: {
      title: "時間による変化",
      description: "推移・トレンド・時系列変化",
      childIds: ["time_two_points", "time_multi_points"],
    },
  },
  // 1-A. 2時点間
  {
    id: "time_two_points",
    data: {
      title: "2時点間の変化",
      description: "Before/Afterや複数項目の順位変動を見せたい",
      childIds: ["slope"],
    },
  },
  // 1-B. 3時点以上
  {
    id: "time_multi_points",
    data: {
      title: "3時点以上の推移",
      description: "連続的な変化・トレンドを見せたい",
      childIds: ["time_trend", "time_total", "time_breakdown"],
    },
  },
  // 1-B-1. トレンド
  {
    id: "time_trend",
    data: {
      title: "傾向を見せたい",
      description: "増減・変化の形（トレンド）が主役",
      childIds: ["line"],
    },
  },
  // 1-B-2. 総量
  {
    id: "time_total",
    data: {
      title: "累積・量感を強調",
      description: "ボリューム感・総量の増え方が主役",
      childIds: ["time_total_continuous", "time_total_discrete"],
    },
  },
  {
    id: "time_total_continuous",
    data: {
      title: "連続的な時間軸",
      description: "日次・月次など連続的な推移（資産残高など）",
      childIds: ["area"],
    },
  },
  {
    id: "time_total_discrete",
    data: {
      title: "離散的な時間軸",
      description: "不定期・単発調査など離散的な時点",
      childIds: ["bar_time"],
    },
  },
  // 1-B-3. 内訳
  {
    id: "time_breakdown",
    data: {
      title: "内訳の変化も必要",
      description: "時系列×構成（シェアや量の内訳推移）",
      childIds: ["time_breakdown_vol", "time_breakdown_ratio"],
    },
  },
  // 1-B-3-1. 量＋内訳
  {
    id: "time_breakdown_vol",
    data: {
      title: "全体の量も重要",
      description: "「合計の増減」と「内訳」を同時に見せる",
      childIds: ["time_vol_flow", "time_vol_discrete"],
    },
  },
  {
    id: "time_vol_flow",
    data: {
      title: "推移・流れを強調",
      description: "変化の連続性を重視したい",
      childIds: ["stack_area"],
    },
  },
  {
    id: "time_vol_discrete",
    data: {
      title: "時点ごとの比較",
      description: "各年の数値をはっきり見せたい",
      childIds: ["stack_bar_time"],
    },
  },
  // 1-B-3-2. 比率＋内訳
  {
    id: "time_breakdown_ratio",
    data: {
      title: "シェア(比率)が重要",
      description: "全体を100%として、構成比の推移を見せる",
      childIds: ["time_share_flow", "time_share_discrete"],
    },
  },
  {
    id: "time_share_flow",
    data: {
      title: "推移・流れを強調",
      description: "シェアの連続的な変化を重視したい",
      childIds: ["stack_100_area"],
    },
  },
  {
    id: "time_share_discrete",
    data: {
      title: "時点ごとの比較",
      description: "各年の比率を区切って見せたい",
      childIds: ["stack_100_bar_time"],
    },
  },

  // ====================================================
  // 2. 比較 (Compare)
  // ====================================================
  {
    id: "compare",
    data: {
      title: "大小比較",
      description: "ディメンション（カテゴリ）間の差を見せたい",
      childIds: [
        "compare_basic",
        "compare_multi",
        "compare_composition",
        "compare_profile",
      ],
    },
  },
  // 2-A. 単純比較
  {
    id: "compare_basic",
    data: {
      title: "メジャー1つを比較",
      description: "1つの数値指標でディメンション別の差を見たい",
      childIds: ["compare_basic_v", "compare_basic_h"],
    },
  },
  {
    id: "compare_basic_v",
    data: {
      title: "ディメンション数が少ない",
      description: "項目数が少なめ、縦方向のレイアウトが自然",
      childIds: ["bar"],
    },
  },
  {
    id: "compare_basic_h",
    data: {
      title: "ディメンション数が多い / ラベルが長い",
      description: "項目が多い、ラベルが長い、順位付けを見せたい",
      childIds: ["bar_h"],
    },
  },
  // 2-B. 複数系列
  {
    id: "compare_multi",
    data: {
      title: "メジャー2つ以上を比較",
      description: "複数の数値指標を並べて比較（年別×商品など）",
      childIds: ["group_bar"],
    },
  },
  // 2-C. 構成込み比較
  {
    id: "compare_composition",
    data: {
      title: "内訳・構成も比較",
      description: "全体と構成要素の両方、あるいは比率を見せたい",
      childIds: ["comp_stack_vol", "comp_stack_ratio"],
    },
  },
  {
    id: "comp_stack_vol",
    data: {
      title: "合計値も比較したい",
      description: "「全体の大きさ」と「内訳」の両方が重要",
      childIds: ["stack_bar"],
    },
  },
  {
    id: "comp_stack_ratio",
    data: {
      title: "構成比のみ比較したい",
      description: "合計は無視して、内訳の比率（%）同士を比較する",
      childIds: ["stack_100_bar"],
    },
  },
  // 2-D. 多次元プロフィール比較
  {
    id: "compare_profile",
    data: {
      title: "メジャー3つ以上のバランスを比較",
      description: "対象ごとの多次元的なプロフィールを重ねて見たい",
      childIds: ["radar"],
    },
  },

  // ====================================================
  // 3. 割合 (Ratio)
  // ====================================================
  {
    id: "ratio",
    data: {
      title: "割合・構成比（全体=100%）",
      description: "ある一時点での内訳の比率",
      childIds: [
        "ratio_single",
        "ratio_multi",
        "ratio_hier",
      ],
    },
  },

  // 3-A. 単一グループ
  {
    id: "ratio_single",
    data: {
      title: "ディメンション数が少ない（〜6程度）",
      description: "1つのグループの内訳を見る",
      childIds: ["ratio_style_simple", "ratio_style_center"],
    },
  },
  {
    id: "ratio_style_simple",
    data: {
      title: "シンプルに面積で",
      description: "円全体を使って直感的にシェアを伝える",
      childIds: ["pie"],
    },
  },
  {
    id: "ratio_style_center",
    data: {
      title: "中央に情報を入れる",
      description: "合計値やタイトルを中央に配置して情報を補足",
      childIds: ["donut"],
    },
  },

  // 3-B. 複数グループ
  {
    id: "ratio_multi",
    data: {
      title: "複数対象の構成比を比較",
      description: "複数のグループや時系列で構成比を比べる",
      childIds: ["stack_100_bar_from_ratio"],
    },
  },

  // 3-C. 多項目・階層
  {
    id: "ratio_hier",
    data: {
      title: "ディメンション数が多い / 階層あり",
      description: "細かい内訳や階層構造をまとめて表示",
      childIds: ["ratio_hier_tree", "ratio_hier_sunburst"],
    },
  },
  {
    id: "ratio_hier_tree",
    data: {
      title: "量の大きさも比較したい",
      description: "面積で量を比較でき、スペース効率が良い",
      childIds: ["treemap"],
    },
  },
  {
    id: "ratio_hier_sunburst",
    data: {
      title: "階層構造を強調したい",
      description: "量の比較より親子関係の可視化を重視",
      childIds: ["sunburst"],
    },
  },

  // ====================================================
  // 4. 分布 (Distribution)
  // ====================================================
  {
    id: "dist",
    data: {
      title: "分布・ばらつき",
      description: "メジャーの分布形状・外れ値・群間差",
      childIds: ["dist_single", "dist_multi"],
    },
  },
  {
    id: "dist_single",
    data: {
      title: "ディメンション1つの分布",
      description: "歪み/多峰性/裾の長さを確認したい",
      childIds: ["hist"],
    },
  },
  {
    id: "dist_multi",
    data: {
      title: "ディメンション2つ以上で比較",
      description: "グループ間の分布の違いを見せたい",
      childIds: ["dist_multi_summary", "dist_multi_shape"],
    },
  },
  {
    id: "dist_multi_summary",
    data: {
      title: "要約・外れ値が重要",
      description: "中央値/IQR/外れ値を明確に、説明もしやすい",
      childIds: ["box"],
    },
  },
  {
    id: "dist_multi_shape",
    data: {
      title: "分布形状も比較したい",
      description: "密度・多峰性など形の差を見たい（十分なサンプルが必要）",
      childIds: ["violin"],
    },
  },

  // ====================================================
  // 5. 関係性 (Relation)
  // ====================================================
  {
    id: "relation",
    data: {
      title: "関係性・相関",
      description: "メジャー間の関係を見たい",
      childIds: ["rel_2vars", "rel_3vars"],
    },
  },
  {
    id: "rel_2vars",
    data: {
      title: "メジャー2つの関係",
      description: "相関・外れ値・クラスタ",
      childIds: ["rel_2vars_few", "rel_2vars_many", "rel_explain"],
    },
  },
  {
    id: "rel_2vars_few",
    data: {
      title: "データポイント数が少ない",
      description: "個々の点を見せたい・外れ値を確認したい",
      childIds: ["scatter"],
    },
  },
  {
    id: "rel_2vars_many",
    data: {
      title: "データポイント数が多い / メジャー数が多い",
      description: "多変数間の相関を俯瞰したい",
      childIds: ["heatmap_corr"],
    },
  },
  {
    id: "rel_3vars",
    data: {
      title: "メジャー3つ以上",
      description: "第3のメジャーをサイズ等で表現",
      childIds: ["bubble"],
    },
  },
  {
    id: "rel_explain",
    data: {
      title: "傾向を説明したい",
      description: "回帰線で傾向を補助（相関≠因果に注意）",
      childIds: ["scatter_reg"],
    },
  },

  // ====================================================
  // 6. 構造/流れ (Structure)
  // ====================================================
  {
    id: "structure",
    data: {
      title: "構造/流れ",
      description: "階層・流入流出・関係網",
      childIds: ["structure_flow", "structure_network"],
    },
  },
  {
    id: "structure_flow",
    data: {
      title: "流量・フローを見せたい",
      description: "どこからどこへ、どれだけ流れているか",
      childIds: ["structure_flow_stage", "structure_flow_waterfall", "structure_flow_multi"],
    },
  },
  {
    id: "structure_flow_stage",
    data: {
      title: "段階的な流れ",
      description: "ステージ間の流入・流出・分岐を表現",
      childIds: ["sankey"],
    },
  },
  {
    id: "structure_flow_waterfall",
    data: {
      title: "増減の内訳を見せたい",
      description: "開始値から終了値への変化要因を積み上げで表現",
      childIds: ["waterfall"],
    },
  },
  {
    id: "structure_flow_multi",
    data: {
      title: "多変数の関係・パターン",
      description: "複数の変数間の関係やクラスタを可視化",
      childIds: ["parallel_coords"],
    },
  },
  {
    id: "structure_network",
    data: {
      title: "つながり・関係網を見せたい",
      description: "ノード間の接続関係を表現",
      childIds: ["network"],
    },
  },

  // ====================================================
  // 7. 地図上の可視化 (Geo)
  // ====================================================
  {
    id: "geo",
    data: {
      title: "地図上の可視化",
      description: "地理的な分布・位置情報を表現",
      childIds: ["geo_area", "geo_point"],
    },
  },
  {
    id: "geo_area",
    data: {
      title: "地域ごとの値を比較",
      description: "都道府県・国など領域単位で色分け",
      childIds: ["choropleth"],
    },
  },
  {
    id: "geo_point",
    data: {
      title: "個別の地点を表示",
      description: "店舗・イベントなど点データを地図上にプロット",
      childIds: ["scatter_map"],
    },
  },

  // ====================================================
  // ✅ 終端（おすすめチャート）
  // ====================================================

  // --- 時系列系 ---
  {
    id: "line",
    data: { title: "✅ 折れ線グラフ", description: "時系列の推移・トレンド" },
  },
  {
    id: "area",
    data: { title: "✅ 面グラフ", description: "累積/量感を強調" },
  },
  {
    id: "stack_area",
    data: {
      title: "✅ 積み上げ面グラフ",
      description: "「総量」の推移＋「内訳」の推移を同時に表現",
    },
  },
  {
    id: "stack_bar_time", // 新規追加した時系列用の積み上げ棒
    data: {
      title: "✅ 積み上げ棒グラフ（時系列）",
      description: "時点ごとの合計と内訳を比較しやすい",
    },
  },
  {
    id: "stack_100_area",
    data: {
      title: "✅ 100%積み上げ面グラフ",
      description: "「構成比（シェア）」の推移を流れとして強調",
    },
  },
  {
    id: "stack_100_bar_time",
    data: {
      title: "✅ 100%積み上げ棒グラフ",
      description: "各時点（年/月）ごとの構成比を区切って比較",
    },
  },
  {
    id: "slope",
    data: {
      title: "✅ スロープチャート",
      description: "2時点間の変化・順位変動を直感的に表現",
    },
  },
  {
    id: "bar_time",
    data: {
      title: "✅ 棒グラフ（時系列）",
      description: "離散的な時点の累積値を比較",
    },
  },

  // --- 比較系 ---
  {
    id: "bar",
    data: { title: "✅ 縦棒グラフ", description: "カテゴリの大小比較（基本）" },
  },
  {
    id: "bar_h",
    data: { title: "✅ 横棒グラフ", description: "ラベルが長い/項目が多い" },
  },
  {
    id: "group_bar",
    data: { title: "✅ グループ化棒グラフ", description: "複数系列を並べて比較" },
  },
  {
    id: "stack_bar",
    data: {
      title: "✅ 積み上げ棒グラフ",
      description: "合計値の大小比較＋内訳の確認",
    },
  },
  {
    id: "stack_100_bar",
    data: {
      title: "✅ 100%積み上げ棒グラフ",
      description: "高さは一定。各グループの「構成比」だけを比較",
    },
  },
  {
    id: "radar",
    data: {
      title: "✅ レーダーチャート",
      description: "複数指標のバランス・プロフィールを比較",
    },
  },

  // --- 割合系 ---
  {
    id: "pie",
    data: {
      title: "✅ 円グラフ",
      description: "全体=100%の割合。シンプルに面積で伝える",
    },
  },
  {
    id: "donut",
    data: {
      title: "✅ ドーナツグラフ",
      description: "中央の空白を活用（合計値やラベルを表示）",
    },
  },
  {
    id: "stack_100_bar_from_ratio",
    data: {
      title: "✅ 100%積み上げ棒グラフ",
      description: "複数の対象の構成比を並べて比較",
    },
  },
  {
    id: "treemap",
    data: {
      title: "✅ ツリーマップ",
      description: "面積で量の大きさも比較できる・スペース効率が良い",
    },
  },
  {
    id: "sunburst",
    data: {
      title: "✅ サンバーストグラフ",
      description: "階層構造を強調・量の比較より親子関係の可視化向き",
    },
  },

  // --- 分布系 ---
  {
    id: "hist",
    data: {
      title: "✅ ヒストグラム",
      description: "単一分布の形（歪み/多峰性/裾）を見る",
    },
  },
  {
    id: "box",
    data: {
      title: "✅ 箱ひげ図",
      description: "中央値/IQR/外れ値で群間比較（説明しやすい）",
    },
  },
  {
    id: "violin",
    data: {
      title: "✅ バイオリン図",
      description: "群間の分布形状（密度/多峰性）も比較（十分なサンプル）",
    },
  },

  // --- 関係性 ---
  {
    id: "scatter",
    data: { title: "✅ 散布図", description: "2変数の関係/相関" },
  },
  {
    id: "heatmap_corr",
    data: {
      title: "✅ 相関ヒートマップ",
      description: "多変数間の相関を色で俯瞰（プロット数が多い場合に有効）",
    },
  },
  {
    id: "bubble",
    data: { title: "✅ バブルチャート", description: "3変数（サイズで第3変数）" },
  },
  {
    id: "scatter_reg",
    data: { title: "✅ 回帰線付き散布図", description: "傾向を説明したい" },
  },

  // --- 構造 ---
  {
    id: "sankey",
    data: { title: "✅ サンキー図", description: "流入・流出の量" },
  },
  {
    id: "waterfall",
    data: {
      title: "✅ ウォーターフォールチャート",
      description: "増減の内訳を積み上げで表現（開始→終了の変化要因）",
    },
  },
  {
    id: "parallel_coords",
    data: {
      title: "✅ 並行座標プロット",
      description: "多変数間の関係・パターン・クラスタを可視化",
    },
  },
  {
    id: "network",
    data: { title: "✅ ネットワーク図", description: "関係網（つながり）" },
  },

  // --- 地図 ---
  {
    id: "choropleth",
    data: {
      title: "✅ コロプレスマップ",
      description: "地域ごとの値を色の濃淡で表現",
    },
  },
  {
    id: "scatter_map",
    data: {
      title: "✅ 地図上の散布図",
      description: "個別地点をマーカーでプロット",
    },
  },
];

export const FULL_MAP = new Map(FULL_NODES.map((n) => [n.id, n]));

// 親参照用マップ
export const PARENT_MAP: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const n of FULL_NODES) {
    for (const c of n.data.childIds ?? []) m.set(c, n.id);
  }
  return m;
})();

// 同じチャートタイプをグループ化（異なるIDでも同じグラフを指す場合）
export const CHART_GROUPS: Record<string, string> = {
  // 100%積み上げ棒グラフ（時系列/比較/割合で使われる）
  stack_100_bar_time: "stack_100_bar",
  stack_100_bar: "stack_100_bar",
  stack_100_bar_from_ratio: "stack_100_bar",
  // 積み上げ棒グラフ（時系列/比較で使われる）
  stack_bar_time: "stack_bar",
  stack_bar: "stack_bar",
  // 棒グラフ（時系列/比較で使われる）
  bar_time: "bar",
  bar: "bar",
};

// 選択されたチャートIDから、同じチャートを指す他のIDを取得
export function getSameChartIds(chartId: string): string[] {
  const group = CHART_GROUPS[chartId];
  if (!group) return [];
  return Object.entries(CHART_GROUPS)
    .filter(([id, g]) => g === group && id !== chartId)
    .map(([id]) => id);
}