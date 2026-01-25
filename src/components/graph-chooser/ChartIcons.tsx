// ChartIcons.tsx - グラフタイプ別のSVGアイコン

import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

const defaultProps = { size: 80, color: "#1976d2" };

// 折れ線グラフ
export function LineChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polyline
        points="10,70 30,50 50,60 70,30 90,40"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="70" r="4" fill={color} />
      <circle cx="30" cy="50" r="4" fill={color} />
      <circle cx="50" cy="60" r="4" fill={color} />
      <circle cx="70" cy="30" r="4" fill={color} />
      <circle cx="90" cy="40" r="4" fill={color} />
    </svg>
  );
}

// 面グラフ
export function AreaChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M10,80 L10,70 L30,50 L50,60 L70,30 L90,40 L90,80 Z"
        fill={color}
        opacity="0.3"
      />
      <polyline
        points="10,70 30,50 50,60 70,30 90,40"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 積み上げ面グラフ
export function StackedAreaIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M10,80 L10,60 L30,50 L50,55 L70,40 L90,45 L90,80 Z" fill="#81c784" opacity="0.7" />
      <path d="M10,60 L10,45 L30,35 L50,40 L70,25 L90,30 L90,45 L70,40 L50,55 L30,50 Z" fill="#64b5f6" opacity="0.7" />
      <path d="M10,45 L10,30 L30,20 L50,25 L70,15 L90,18 L90,30 L70,25 L50,40 L30,35 Z" fill={color} opacity="0.7" />
    </svg>
  );
}

// 棒グラフ（縦）
export function BarChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="15" y="50" width="15" height="35" fill={color} rx="2" />
      <rect x="35" y="30" width="15" height="55" fill={color} rx="2" />
      <rect x="55" y="40" width="15" height="45" fill={color} rx="2" />
      <rect x="75" y="20" width="15" height="65" fill={color} rx="2" />
    </svg>
  );
}

// 棒グラフ（横）
export function HBarChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="15" width="70" height="12" fill={color} rx="2" />
      <rect x="10" y="32" width="50" height="12" fill={color} rx="2" />
      <rect x="10" y="49" width="80" height="12" fill={color} rx="2" />
      <rect x="10" y="66" width="40" height="12" fill={color} rx="2" />
    </svg>
  );
}

// グループ化棒グラフ
export function GroupBarIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="45" width="12" height="40" fill={color} rx="2" />
      <rect x="24" y="30" width="12" height="55" fill="#81c784" rx="2" />
      <rect x="42" y="35" width="12" height="50" fill={color} rx="2" />
      <rect x="56" y="50" width="12" height="35" fill="#81c784" rx="2" />
      <rect x="74" y="25" width="12" height="60" fill={color} rx="2" />
      <rect x="88" y="40" width="12" height="45" fill="#81c784" rx="2" />
    </svg>
  );
}

// 積み上げ棒グラフ
export function StackedBarIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="15" y="55" width="15" height="30" fill="#81c784" rx="2" />
      <rect x="15" y="35" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="15" y="20" width="15" height="15" fill={color} rx="2" />
      <rect x="45" y="45" width="15" height="40" fill="#81c784" rx="2" />
      <rect x="45" y="25" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="45" y="10" width="15" height="15" fill={color} rx="2" />
      <rect x="75" y="50" width="15" height="35" fill="#81c784" rx="2" />
      <rect x="75" y="30" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="75" y="15" width="15" height="15" fill={color} rx="2" />
    </svg>
  );
}

// 100%積み上げ棒グラフ
export function Stacked100BarIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="15" y="15" width="15" height="70" fill="#e0e0e0" rx="2" />
      <rect x="15" y="50" width="15" height="35" fill="#81c784" rx="2" />
      <rect x="15" y="30" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="15" y="15" width="15" height="15" fill={color} rx="2" />
      <rect x="45" y="15" width="15" height="70" fill="#e0e0e0" rx="2" />
      <rect x="45" y="55" width="15" height="30" fill="#81c784" rx="2" />
      <rect x="45" y="35" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="45" y="15" width="15" height="20" fill={color} rx="2" />
      <rect x="75" y="15" width="15" height="70" fill="#e0e0e0" rx="2" />
      <rect x="75" y="60" width="15" height="25" fill="#81c784" rx="2" />
      <rect x="75" y="40" width="15" height="20" fill="#64b5f6" rx="2" />
      <rect x="75" y="15" width="15" height="25" fill={color} rx="2" />
    </svg>
  );
}

// 円グラフ
export function PieChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#e0e0e0" />
      <path d="M50,50 L50,10 A40,40 0 0,1 90,50 Z" fill={color} />
      <path d="M50,50 L90,50 A40,40 0 0,1 50,90 Z" fill="#64b5f6" />
      <path d="M50,50 L50,90 A40,40 0 0,1 10,50 Z" fill="#81c784" />
    </svg>
  );
}

// ドーナツグラフ
export function DonutChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#e0e0e0" />
      <path d="M50,50 L50,10 A40,40 0 0,1 90,50 Z" fill={color} />
      <path d="M50,50 L90,50 A40,40 0 0,1 50,90 Z" fill="#64b5f6" />
      <path d="M50,50 L50,90 A40,40 0 0,1 10,50 Z" fill="#81c784" />
      <circle cx="50" cy="50" r="22" fill="white" />
    </svg>
  );
}

// ツリーマップ
export function TreemapIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="10" width="45" height="50" fill={color} rx="3" />
      <rect x="58" y="10" width="32" height="25" fill="#64b5f6" rx="3" />
      <rect x="58" y="38" width="32" height="22" fill="#81c784" rx="3" />
      <rect x="10" y="63" width="25" height="27" fill="#ffb74d" rx="3" />
      <rect x="38" y="63" width="52" height="27" fill="#90a4ae" rx="3" />
    </svg>
  );
}

// サンバースト
export function SunburstIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="15" fill={color} />
      <path d="M50,50 L50,35 A15,15 0 0,1 65,50 Z" fill={color} />
      <path d="M50,50 L35,50 A15,15 0 0,1 50,35 L50,20 A30,30 0 0,1 80,50 L65,50 A15,15 0 0,0 50,35 Z" fill="#64b5f6" />
      <path d="M50,50 L65,50 A15,15 0 0,1 50,65 L50,80 A30,30 0 0,1 20,50 L35,50 A15,15 0 0,0 50,65 Z" fill="#81c784" />
      <path d="M50,20 L50,8 A42,42 0 0,1 92,50 L80,50 A30,30 0 0,0 50,20 Z" fill="#42a5f5" opacity="0.8" />
      <path d="M80,50 L92,50 A42,42 0 0,1 50,92 L50,80 A30,30 0 0,0 80,50 Z" fill="#66bb6a" opacity="0.8" />
      <path d="M50,80 L50,92 A42,42 0 0,1 8,50 L20,50 A30,30 0 0,0 50,80 Z" fill="#ffb74d" opacity="0.8" />
    </svg>
  );
}

// ヒストグラム
export function HistogramIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="70" width="12" height="15" fill={color} />
      <rect x="22" y="55" width="12" height="30" fill={color} />
      <rect x="34" y="35" width="12" height="50" fill={color} />
      <rect x="46" y="20" width="12" height="65" fill={color} />
      <rect x="58" y="30" width="12" height="55" fill={color} />
      <rect x="70" y="50" width="12" height="35" fill={color} />
      <rect x="82" y="65" width="12" height="20" fill={color} />
    </svg>
  );
}

// 箱ひげ図
export function BoxPlotIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <line x1="30" y1="15" x2="30" y2="25" stroke={color} strokeWidth="2" />
      <line x1="30" y1="65" x2="30" y2="80" stroke={color} strokeWidth="2" />
      <rect x="18" y="25" width="24" height="40" fill={color} opacity="0.3" stroke={color} strokeWidth="2" rx="2" />
      <line x1="18" y1="45" x2="42" y2="45" stroke={color} strokeWidth="3" />
      <line x1="22" y1="15" x2="38" y2="15" stroke={color} strokeWidth="2" />
      <line x1="22" y1="80" x2="38" y2="80" stroke={color} strokeWidth="2" />

      <line x1="70" y1="20" x2="70" y2="35" stroke="#81c784" strokeWidth="2" />
      <line x1="70" y1="70" x2="70" y2="85" stroke="#81c784" strokeWidth="2" />
      <rect x="58" y="35" width="24" height="35" fill="#81c784" opacity="0.3" stroke="#81c784" strokeWidth="2" rx="2" />
      <line x1="58" y1="50" x2="82" y2="50" stroke="#81c784" strokeWidth="3" />
      <line x1="62" y1="20" x2="78" y2="20" stroke="#81c784" strokeWidth="2" />
      <line x1="62" y1="85" x2="78" y2="85" stroke="#81c784" strokeWidth="2" />
    </svg>
  );
}

// バイオリン図
export function ViolinPlotIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M30,15 Q40,30 42,50 Q40,70 30,85 Q20,70 18,50 Q20,30 30,15"
        fill={color}
        opacity="0.3"
        stroke={color}
        strokeWidth="2"
      />
      <line x1="30" y1="15" x2="30" y2="85" stroke={color} strokeWidth="1" strokeDasharray="3,3" />
      <line x1="22" y1="50" x2="38" y2="50" stroke={color} strokeWidth="2" />

      <path
        d="M70,20 Q82,35 85,50 Q82,65 70,80 Q58,65 55,50 Q58,35 70,20"
        fill="#81c784"
        opacity="0.3"
        stroke="#81c784"
        strokeWidth="2"
      />
      <line x1="70" y1="20" x2="70" y2="80" stroke="#81c784" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="62" y1="50" x2="78" y2="50" stroke="#81c784" strokeWidth="2" />
    </svg>
  );
}

// 散布図
export function ScatterPlotIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="20" cy="70" r="5" fill={color} />
      <circle cx="30" cy="55" r="5" fill={color} />
      <circle cx="35" cy="65" r="5" fill={color} />
      <circle cx="45" cy="45" r="5" fill={color} />
      <circle cx="55" cy="50" r="5" fill={color} />
      <circle cx="60" cy="35" r="5" fill={color} />
      <circle cx="70" cy="40" r="5" fill={color} />
      <circle cx="75" cy="25" r="5" fill={color} />
      <circle cx="85" cy="30" r="5" fill={color} />
    </svg>
  );
}

// 相関ヒートマップ
export function HeatmapIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="10" width="25" height="25" fill={color} />
      <rect x="37" y="10" width="25" height="25" fill="#64b5f6" />
      <rect x="64" y="10" width="25" height="25" fill="#e3f2fd" />
      <rect x="10" y="37" width="25" height="25" fill="#64b5f6" />
      <rect x="37" y="37" width="25" height="25" fill={color} />
      <rect x="64" y="37" width="25" height="25" fill="#90caf9" />
      <rect x="10" y="64" width="25" height="25" fill="#e3f2fd" />
      <rect x="37" y="64" width="25" height="25" fill="#90caf9" />
      <rect x="64" y="64" width="25" height="25" fill={color} />
    </svg>
  );
}

// バブルチャート
export function BubbleChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="25" cy="65" r="12" fill={color} opacity="0.7" />
      <circle cx="45" cy="45" r="18" fill={color} opacity="0.7" />
      <circle cx="70" cy="55" r="8" fill={color} opacity="0.7" />
      <circle cx="80" cy="30" r="14" fill={color} opacity="0.7" />
      <circle cx="35" cy="25" r="6" fill={color} opacity="0.7" />
    </svg>
  );
}

// 回帰線付き散布図
export function ScatterRegIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <line x1="15" y1="75" x2="85" y2="25" stroke="#e53935" strokeWidth="2" strokeDasharray="5,3" />
      <circle cx="20" cy="70" r="4" fill={color} />
      <circle cx="30" cy="58" r="4" fill={color} />
      <circle cx="35" cy="65" r="4" fill={color} />
      <circle cx="45" cy="48" r="4" fill={color} />
      <circle cx="55" cy="52" r="4" fill={color} />
      <circle cx="60" cy="38" r="4" fill={color} />
      <circle cx="70" cy="42" r="4" fill={color} />
      <circle cx="80" cy="28" r="4" fill={color} />
    </svg>
  );
}

// サンキー図
export function SankeyIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M10,20 C40,20 40,15 70,15 L70,35 C40,35 40,40 10,40 Z" fill={color} opacity="0.7" />
      <path d="M10,45 C40,45 40,40 70,40 L70,55 C40,55 40,60 10,60 Z" fill="#64b5f6" opacity="0.7" />
      <path d="M10,65 C40,65 40,60 70,60 L70,85 C40,85 40,80 10,80 Z" fill="#81c784" opacity="0.7" />
      <rect x="70" y="15" width="20" height="20" fill={color} rx="2" />
      <rect x="70" y="40" width="20" height="15" fill="#64b5f6" rx="2" />
      <rect x="70" y="60" width="20" height="25" fill="#81c784" rx="2" />
    </svg>
  );
}

// ネットワーク図
export function NetworkIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <line x1="50" y1="25" x2="25" y2="50" stroke="#999" strokeWidth="2" />
      <line x1="50" y1="25" x2="75" y2="50" stroke="#999" strokeWidth="2" />
      <line x1="50" y1="25" x2="50" y2="55" stroke="#999" strokeWidth="2" />
      <line x1="25" y1="50" x2="50" y2="75" stroke="#999" strokeWidth="2" />
      <line x1="75" y1="50" x2="50" y2="75" stroke="#999" strokeWidth="2" />
      <line x1="50" y1="55" x2="25" y2="50" stroke="#999" strokeWidth="2" />
      <line x1="50" y1="55" x2="75" y2="50" stroke="#999" strokeWidth="2" />
      <circle cx="50" cy="25" r="10" fill={color} />
      <circle cx="25" cy="50" r="8" fill="#64b5f6" />
      <circle cx="75" cy="50" r="8" fill="#64b5f6" />
      <circle cx="50" cy="55" r="6" fill="#81c784" />
      <circle cx="50" cy="75" r="8" fill="#ffb74d" />
    </svg>
  );
}

// スロープチャート
export function SlopeChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 左側の点 */}
      <circle cx="20" cy="25" r="5" fill={color} />
      <circle cx="20" cy="45" r="5" fill="#64b5f6" />
      <circle cx="20" cy="65" r="5" fill="#81c784" />
      <circle cx="20" cy="80" r="5" fill="#ffb74d" />
      {/* 右側の点 */}
      <circle cx="80" cy="35" r="5" fill={color} />
      <circle cx="80" cy="20" r="5" fill="#64b5f6" />
      <circle cx="80" cy="75" r="5" fill="#81c784" />
      <circle cx="80" cy="55" r="5" fill="#ffb74d" />
      {/* 接続線 */}
      <line x1="25" y1="25" x2="75" y2="35" stroke={color} strokeWidth="2" />
      <line x1="25" y1="45" x2="75" y2="20" stroke="#64b5f6" strokeWidth="2" />
      <line x1="25" y1="65" x2="75" y2="75" stroke="#81c784" strokeWidth="2" />
      <line x1="25" y1="80" x2="75" y2="55" stroke="#ffb74d" strokeWidth="2" />
      {/* 縦軸 */}
      <line x1="20" y1="10" x2="20" y2="90" stroke="#ccc" strokeWidth="1" />
      <line x1="80" y1="10" x2="80" y2="90" stroke="#ccc" strokeWidth="1" />
    </svg>
  );
}

// 並行座標プロット
export function ParallelCoordsIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 縦軸 */}
      <line x1="15" y1="15" x2="15" y2="85" stroke="#ccc" strokeWidth="2" />
      <line x1="38" y1="15" x2="38" y2="85" stroke="#ccc" strokeWidth="2" />
      <line x1="62" y1="15" x2="62" y2="85" stroke="#ccc" strokeWidth="2" />
      <line x1="85" y1="15" x2="85" y2="85" stroke="#ccc" strokeWidth="2" />
      {/* データライン1 */}
      <polyline points="15,30 38,50 62,25 85,45" fill="none" stroke={color} strokeWidth="2" opacity="0.7" />
      {/* データライン2 */}
      <polyline points="15,50 38,35 62,60 85,30" fill="none" stroke="#64b5f6" strokeWidth="2" opacity="0.7" />
      {/* データライン3 */}
      <polyline points="15,70 38,65 62,70 85,75" fill="none" stroke="#81c784" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

// コロプレスマップ
export function ChoroplethIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 地域を模した多角形 */}
      <path d="M10,30 L30,20 L50,25 L45,45 L25,50 Z" fill={color} opacity="0.9" stroke="#fff" strokeWidth="1" />
      <path d="M50,25 L70,15 L90,30 L85,50 L60,55 L45,45 Z" fill={color} opacity="0.5" stroke="#fff" strokeWidth="1" />
      <path d="M25,50 L45,45 L60,55 L55,75 L30,80 L15,65 Z" fill={color} opacity="0.7" stroke="#fff" strokeWidth="1" />
      <path d="M60,55 L85,50 L90,70 L75,85 L55,75 Z" fill={color} opacity="0.3" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

// 地図上の散布図
export function ScatterMapIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 地図の輪郭 */}
      <path
        d="M15,25 Q25,15 45,20 Q65,10 80,25 Q90,40 85,60 Q80,80 60,85 Q40,90 25,80 Q10,70 15,50 Q12,35 15,25"
        fill="#e8f5e9"
        stroke="#81c784"
        strokeWidth="2"
      />
      {/* マーカー */}
      <circle cx="30" cy="40" r="6" fill={color} />
      <circle cx="55" cy="35" r="8" fill={color} opacity="0.8" />
      <circle cx="70" cy="50" r="5" fill={color} />
      <circle cx="45" cy="60" r="7" fill={color} opacity="0.9" />
      <circle cx="60" cy="70" r="4" fill={color} />
    </svg>
  );
}

// レーダーチャート
export function RadarChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  const cx = 50, cy = 50, r = 35;
  // 5角形の頂点を計算
  const points = [0, 1, 2, 3, 4].map(i => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  const axisPoints = points.map(p => `${cx},${cy} ${p.x},${p.y}`).join(" ");
  const outerPath = points.map(p => `${p.x},${p.y}`).join(" ");
  // データ1
  const data1 = [0.9, 0.6, 0.8, 0.5, 0.7].map((v, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: cx + r * v * Math.cos(angle), y: cy + r * v * Math.sin(angle) };
  });
  const data1Path = data1.map(p => `${p.x},${p.y}`).join(" ");
  // データ2
  const data2 = [0.5, 0.8, 0.6, 0.9, 0.4].map((v, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: cx + r * v * Math.cos(angle), y: cy + r * v * Math.sin(angle) };
  });
  const data2Path = data2.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 軸 */}
      {points.map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#ccc" strokeWidth="1" />
      ))}
      {/* 外枠 */}
      <polygon points={outerPath} fill="none" stroke="#ccc" strokeWidth="1" />
      {/* データ1 */}
      <polygon points={data1Path} fill={color} opacity="0.3" stroke={color} strokeWidth="2" />
      {/* データ2 */}
      <polygon points={data2Path} fill="#81c784" opacity="0.3" stroke="#81c784" strokeWidth="2" />
    </svg>
  );
}

// ウォーターフォールチャート
export function WaterfallChartIcon({ size = 80, color = "#1976d2" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* 開始値 */}
      <rect x="8" y="30" width="14" height="50" fill="#666" rx="2" />
      {/* 増加 */}
      <rect x="26" y="20" width="14" height="10" fill="#81c784" rx="2" />
      <line x1="22" y1="30" x2="26" y2="30" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
      {/* 増加 */}
      <rect x="44" y="10" width="14" height="10" fill="#81c784" rx="2" />
      <line x1="40" y1="20" x2="44" y2="20" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
      {/* 減少 */}
      <rect x="62" y="10" width="14" height="25" fill="#e57373" rx="2" />
      <line x1="58" y1="10" x2="62" y2="10" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
      {/* 終了値 */}
      <rect x="80" y="35" width="14" height="45" fill={color} rx="2" />
      <line x1="76" y1="35" x2="80" y2="35" stroke="#999" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}

// アイコンマッピング
export const CHART_ICONS: Record<string, React.FC<IconProps>> = {
  line: LineChartIcon,
  area: AreaChartIcon,
  stack_area: StackedAreaIcon,
  stack_bar_time: StackedBarIcon,
  stack_100_area: StackedAreaIcon,
  stack_100_bar_time: Stacked100BarIcon,
  slope: SlopeChartIcon,
  bar_time: BarChartIcon,
  bar: BarChartIcon,
  bar_h: HBarChartIcon,
  group_bar: GroupBarIcon,
  stack_bar: StackedBarIcon,
  stack_100_bar: Stacked100BarIcon,
  stack_100_bar_from_ratio: Stacked100BarIcon,
  radar: RadarChartIcon,
  pie: PieChartIcon,
  donut: DonutChartIcon,
  treemap: TreemapIcon,
  sunburst: SunburstIcon,
  hist: HistogramIcon,
  box: BoxPlotIcon,
  violin: ViolinPlotIcon,
  scatter: ScatterPlotIcon,
  heatmap_corr: HeatmapIcon,
  bubble: BubbleChartIcon,
  scatter_reg: ScatterRegIcon,
  sankey: SankeyIcon,
  waterfall: WaterfallChartIcon,
  parallel_coords: ParallelCoordsIcon,
  network: NetworkIcon,
  choropleth: ChoroplethIcon,
  scatter_map: ScatterMapIcon,
};
