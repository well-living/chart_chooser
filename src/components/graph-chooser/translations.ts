// translations.ts — 日本語/英語の翻訳辞書

export type Lang = "ja" | "en";

type Translation = { ja: string; en: string };

/** UI テキスト */
export const UI_TEXT: Record<string, Translation> = {
  header_title: {
    ja: "グラフの選び方ガイド",
    en: "Chart Chooser Guide",
  },
  hint_select: {
    ja: "ノードをクリックして選択を進めると、おすすめグラフが表示されます",
    en: "Click nodes to proceed — a recommended chart will appear",
  },
  btn_expand_all: {
    ja: "全展開",
    en: "Expand All",
  },
  btn_reset: {
    ja: "リセット",
    en: "Reset",
  },
  dropdown_placeholder: {
    ja: "グラフ名から選ぶ...",
    en: "Choose by chart name…",
  },
  badge_recommended: {
    ja: "おすすめ",
    en: "Recommended",
  },
  badge_same_chart: {
    ja: "別の用途あり",
    en: "Also used elsewhere",
  },
  tooltip_click_select: {
    ja: "クリックして選択",
    en: "Click to select",
  },
  tooltip_collapse: {
    ja: "折りたたむ",
    en: "Collapse",
  },
  tooltip_expand: {
    ja: "展開する",
    en: "Expand",
  },
};

/** ノードタイトル・説明の英語翻訳 */
export const NODE_TEXT: Record<string, { title: Translation; description?: Translation }> = {
  // root
  root: {
    title: { ja: "開始", en: "Start" },
    description: { ja: "何を伝えたい？", en: "What do you want to convey?" },
  },

  // === 1. 時系列 ===
  time: {
    title: { ja: "時間による変化", en: "Change over Time" },
    description: { ja: "推移・トレンド・時系列変化", en: "Trends and time-series changes" },
  },
  time_two_points: {
    title: { ja: "2時点間の変化", en: "Change between 2 Points" },
    description: { ja: "Before/Afterや複数項目の順位変動を見せたい", en: "Show before/after or rank changes across items" },
  },
  time_multi_points: {
    title: { ja: "3時点以上の推移", en: "3+ Time Points" },
    description: { ja: "連続的な変化・トレンドを見せたい", en: "Show continuous change and trends" },
  },
  time_trend: {
    title: { ja: "傾向を見せたい", en: "Show Trends" },
    description: { ja: "増減・変化の形（トレンド）が主役", en: "Focus on the shape of increase/decrease" },
  },
  time_total: {
    title: { ja: "累積・量感を強調", en: "Emphasize Volume" },
    description: { ja: "ボリューム感・総量の増え方が主役", en: "Focus on total volume growth" },
  },
  time_total_continuous: {
    title: { ja: "連続的な時間軸", en: "Continuous Time Axis" },
    description: { ja: "日次・月次など連続的な推移（資産残高など）", en: "Daily/monthly continuous changes (e.g. balances)" },
  },
  time_total_discrete: {
    title: { ja: "離散的な時間軸", en: "Discrete Time Axis" },
    description: { ja: "不定期・単発調査など離散的な時点", en: "Irregular or one-off survey time points" },
  },
  time_breakdown: {
    title: { ja: "内訳の変化も必要", en: "Breakdown Changes Needed" },
    description: { ja: "時系列×構成（シェアや量の内訳推移）", en: "Time-series × composition (share/volume breakdown)" },
  },
  time_breakdown_vol: {
    title: { ja: "全体の量も重要", en: "Total Volume Matters" },
    description: { ja: "「合計の増減」と「内訳」を同時に見せる", en: "Show total changes and breakdown together" },
  },
  time_vol_flow: {
    title: { ja: "推移・流れを強調", en: "Emphasize Flow" },
    description: { ja: "変化の連続性を重視したい", en: "Focus on continuity of change" },
  },
  time_vol_discrete: {
    title: { ja: "時点ごとの比較", en: "Compare by Time Point" },
    description: { ja: "各年の数値をはっきり見せたい", en: "Show each year's values clearly" },
  },
  time_breakdown_ratio: {
    title: { ja: "シェア(比率)が重要", en: "Share (Ratio) Matters" },
    description: { ja: "全体を100%として、構成比の推移を見せる", en: "Show composition ratio changes (total = 100%)" },
  },
  time_share_flow: {
    title: { ja: "推移・流れを強調", en: "Emphasize Flow" },
    description: { ja: "シェアの連続的な変化を重視したい", en: "Focus on continuous share changes" },
  },
  time_share_discrete: {
    title: { ja: "時点ごとの比較", en: "Compare by Time Point" },
    description: { ja: "各年の比率を区切って見せたい", en: "Show each year's ratio separately" },
  },

  // === 2. 比較 ===
  compare: {
    title: { ja: "大小比較", en: "Comparison" },
    description: { ja: "ディメンション（カテゴリ）間の差を見せたい", en: "Show differences across categories" },
  },
  compare_basic: {
    title: { ja: "メジャー1つを比較", en: "Compare 1 Measure" },
    description: { ja: "1つの数値指標でディメンション別の差を見たい", en: "Compare categories by a single metric" },
  },
  compare_basic_v: {
    title: { ja: "ディメンション数が少ない", en: "Few Categories" },
    description: { ja: "項目数が少なめ、縦方向のレイアウトが自然", en: "Fewer items; vertical layout is natural" },
  },
  compare_basic_h: {
    title: { ja: "ディメンション数が多い / ラベルが長い", en: "Many Categories / Long Labels" },
    description: { ja: "項目が多い、ラベルが長い、順位付けを見せたい", en: "Many items, long labels, or show ranking" },
  },
  compare_multi: {
    title: { ja: "メジャー2つ以上を比較", en: "Compare 2+ Measures" },
    description: { ja: "複数の数値指標を並べて比較（年別×商品など）", en: "Compare multiple metrics side by side" },
  },
  compare_composition: {
    title: { ja: "内訳・構成も比較", en: "Compare with Breakdown" },
    description: { ja: "全体と構成要素の両方、あるいは比率を見せたい", en: "Show both total and composition, or ratios" },
  },
  comp_stack_vol: {
    title: { ja: "合計値も比較したい", en: "Compare Totals Too" },
    description: { ja: "「全体の大きさ」と「内訳」の両方が重要", en: "Both overall size and breakdown matter" },
  },
  comp_stack_ratio: {
    title: { ja: "構成比のみ比較したい", en: "Compare Ratios Only" },
    description: { ja: "合計は無視して、内訳の比率（%）同士を比較する", en: "Ignore totals; compare breakdown percentages" },
  },
  compare_profile: {
    title: { ja: "メジャー3つ以上のバランスを比較", en: "Compare 3+ Measures Balance" },
    description: { ja: "対象ごとの多次元的なプロフィールを重ねて見たい", en: "Overlay multi-dimensional profiles" },
  },

  // === 3. 割合 ===
  ratio: {
    title: { ja: "割合・構成比（全体=100%）", en: "Proportion (Total = 100%)" },
    description: { ja: "ある一時点での内訳の比率", en: "Breakdown ratio at a single point in time" },
  },
  ratio_single: {
    title: { ja: "ディメンション数が少ない（〜6程度）", en: "Few Categories (up to ~6)" },
    description: { ja: "1つのグループの内訳を見る", en: "View breakdown of a single group" },
  },
  ratio_style_simple: {
    title: { ja: "シンプルに面積で", en: "Simple Area-based" },
    description: { ja: "円全体を使って直感的にシェアを伝える", en: "Convey shares intuitively using full circle" },
  },
  ratio_style_center: {
    title: { ja: "中央に情報を入れる", en: "Info in the Center" },
    description: { ja: "合計値やタイトルを中央に配置して情報を補足", en: "Place totals or labels in the center" },
  },
  ratio_multi: {
    title: { ja: "複数対象の構成比を比較", en: "Compare Multiple Ratios" },
    description: { ja: "複数のグループや時系列で構成比を比べる", en: "Compare composition across groups or time" },
  },
  ratio_hier: {
    title: { ja: "ディメンション数が多い / 階層あり", en: "Many Categories / Hierarchical" },
    description: { ja: "細かい内訳や階層構造をまとめて表示", en: "Display detailed breakdown or hierarchy" },
  },
  ratio_hier_tree: {
    title: { ja: "量の大きさも比較したい", en: "Compare Sizes Too" },
    description: { ja: "面積で量を比較でき、スペース効率が良い", en: "Compare by area; space-efficient" },
  },
  ratio_hier_sunburst: {
    title: { ja: "階層構造を強調したい", en: "Emphasize Hierarchy" },
    description: { ja: "量の比較より親子関係の可視化を重視", en: "Prioritize parent-child visualization over size" },
  },

  // === 4. 分布 ===
  dist: {
    title: { ja: "分布・ばらつき", en: "Distribution & Spread" },
    description: { ja: "メジャーの分布形状・外れ値・群間差", en: "Shape, outliers, and group differences" },
  },
  dist_single: {
    title: { ja: "ディメンション1つの分布", en: "Single Variable Distribution" },
    description: { ja: "歪み/多峰性/裾の長さを確認したい", en: "Check skewness, multimodality, tail length" },
  },
  dist_multi: {
    title: { ja: "ディメンション2つ以上で比較", en: "Compare 2+ Groups" },
    description: { ja: "グループ間の分布の違いを見せたい", en: "Show distribution differences across groups" },
  },
  dist_multi_summary: {
    title: { ja: "要約・外れ値が重要", en: "Summary & Outliers Matter" },
    description: { ja: "中央値/IQR/外れ値を明確に、説明もしやすい", en: "Clear median/IQR/outliers; easy to explain" },
  },
  dist_multi_shape: {
    title: { ja: "分布形状も比較したい", en: "Compare Distribution Shapes" },
    description: { ja: "密度・多峰性など形の差を見たい（十分なサンプルが必要）", en: "See density/multimodality differences (needs enough samples)" },
  },

  // === 5. 関係性 ===
  relation: {
    title: { ja: "関係性・相関", en: "Relationship & Correlation" },
    description: { ja: "メジャー間の関係を見たい", en: "Explore relationships between measures" },
  },
  rel_2vars: {
    title: { ja: "メジャー2つの関係", en: "2-Variable Relationship" },
    description: { ja: "相関・外れ値・クラスタ", en: "Correlation, outliers, and clusters" },
  },
  rel_2vars_few: {
    title: { ja: "データポイント数が少ない", en: "Few Data Points" },
    description: { ja: "個々の点を見せたい・外れ値を確認したい", en: "Show individual points; check outliers" },
  },
  rel_2vars_many: {
    title: { ja: "データポイント数が多い / メジャー数が多い", en: "Many Data Points / Many Variables" },
    description: { ja: "多変数間の相関を俯瞰したい", en: "Overview correlations among many variables" },
  },
  rel_3vars: {
    title: { ja: "メジャー3つ以上", en: "3+ Variables" },
    description: { ja: "第3のメジャーをサイズ等で表現", en: "Encode a 3rd variable via size, etc." },
  },
  rel_explain: {
    title: { ja: "傾向を説明したい", en: "Explain Trends" },
    description: { ja: "回帰線で傾向を補助（相関≠因果に注意）", en: "Add regression line (correlation ≠ causation)" },
  },

  // === 6. 構造/流れ ===
  structure: {
    title: { ja: "構造/流れ", en: "Structure & Flow" },
    description: { ja: "階層・流入流出・関係網", en: "Hierarchy, flows, and networks" },
  },
  structure_flow: {
    title: { ja: "流量・フローを見せたい", en: "Show Flow & Volume" },
    description: { ja: "どこからどこへ、どれだけ流れているか", en: "Where does how much flow from/to?" },
  },
  structure_flow_stage: {
    title: { ja: "段階的な流れ", en: "Stage-based Flow" },
    description: { ja: "ステージ間の流入・流出・分岐を表現", en: "Show inflows, outflows, and splits between stages" },
  },
  structure_flow_waterfall: {
    title: { ja: "増減の内訳を見せたい", en: "Show Change Breakdown" },
    description: { ja: "開始値から終了値への変化要因を積み上げで表現", en: "Stack factors from start to end value" },
  },
  structure_flow_multi: {
    title: { ja: "多変数の関係・パターン", en: "Multi-variable Patterns" },
    description: { ja: "複数の変数間の関係やクラスタを可視化", en: "Visualize relationships and clusters across variables" },
  },
  structure_network: {
    title: { ja: "つながり・関係網を見せたい", en: "Show Connections & Networks" },
    description: { ja: "ノード間の接続関係を表現", en: "Express connections between nodes" },
  },

  // === 7. 地図 ===
  geo: {
    title: { ja: "地図上の可視化", en: "Map Visualization" },
    description: { ja: "地理的な分布・位置情報を表現", en: "Express geographic distribution and locations" },
  },
  geo_area: {
    title: { ja: "地域ごとの値を比較", en: "Compare Values by Region" },
    description: { ja: "都道府県・国など領域単位で色分け", en: "Color by region (prefecture, country, etc.)" },
  },
  geo_point: {
    title: { ja: "個別の地点を表示", en: "Show Individual Points" },
    description: { ja: "店舗・イベントなど点データを地図上にプロット", en: "Plot point data (stores, events) on a map" },
  },

  // === 終端ノード ===
  line: {
    title: { ja: "✅ 折れ線グラフ", en: "✅ Line Chart" },
    description: { ja: "時系列の推移・トレンド", en: "Time-series trends" },
  },
  area: {
    title: { ja: "✅ 面グラフ", en: "✅ Area Chart" },
    description: { ja: "累積/量感を強調", en: "Emphasize cumulative volume" },
  },
  stack_area: {
    title: { ja: "✅ 積み上げ面グラフ", en: "✅ Stacked Area Chart" },
    description: { ja: "「総量」の推移＋「内訳」の推移を同時に表現", en: "Show total + breakdown trends simultaneously" },
  },
  stack_bar_time: {
    title: { ja: "✅ 積み上げ棒グラフ（時系列）", en: "✅ Stacked Bar Chart (Time)" },
    description: { ja: "時点ごとの合計と内訳を比較しやすい", en: "Easy to compare totals and breakdowns per time point" },
  },
  stack_100_area: {
    title: { ja: "✅ 100%積み上げ面グラフ", en: "✅ 100% Stacked Area Chart" },
    description: { ja: "「構成比（シェア）」の推移を流れとして強調", en: "Emphasize composition ratio trends as flow" },
  },
  stack_100_bar_time: {
    title: { ja: "✅ 100%積み上げ棒グラフ", en: "✅ 100% Stacked Bar Chart" },
    description: { ja: "各時点（年/月）ごとの構成比を区切って比較", en: "Compare composition ratio per time point" },
  },
  slope: {
    title: { ja: "✅ スロープチャート", en: "✅ Slope Chart" },
    description: { ja: "2時点間の変化・順位変動を直感的に表現", en: "Intuitively show change/rank shifts between 2 points" },
  },
  bar_time: {
    title: { ja: "✅ 棒グラフ（時系列）", en: "✅ Bar Chart (Time)" },
    description: { ja: "離散的な時点の累積値を比較", en: "Compare cumulative values at discrete time points" },
  },
  bar: {
    title: { ja: "✅ 縦棒グラフ", en: "✅ Vertical Bar Chart" },
    description: { ja: "カテゴリの大小比較（基本）", en: "Basic category comparison" },
  },
  bar_h: {
    title: { ja: "✅ 横棒グラフ", en: "✅ Horizontal Bar Chart" },
    description: { ja: "ラベルが長い/項目が多い", en: "Long labels / many items" },
  },
  group_bar: {
    title: { ja: "✅ グループ化棒グラフ", en: "✅ Grouped Bar Chart" },
    description: { ja: "複数系列を並べて比較", en: "Compare multiple series side by side" },
  },
  stack_bar: {
    title: { ja: "✅ 積み上げ棒グラフ", en: "✅ Stacked Bar Chart" },
    description: { ja: "合計値の大小比較＋内訳の確認", en: "Compare totals + check breakdowns" },
  },
  stack_100_bar: {
    title: { ja: "✅ 100%積み上げ棒グラフ", en: "✅ 100% Stacked Bar Chart" },
    description: { ja: "高さは一定。各グループの「構成比」だけを比較", en: "Fixed height; compare composition ratios only" },
  },
  radar: {
    title: { ja: "✅ レーダーチャート", en: "✅ Radar Chart" },
    description: { ja: "複数指標のバランス・プロフィールを比較", en: "Compare multi-metric balance and profiles" },
  },
  pie: {
    title: { ja: "✅ 円グラフ", en: "✅ Pie Chart" },
    description: { ja: "全体=100%の割合。シンプルに面積で伝える", en: "Total = 100%. Convey shares by area" },
  },
  donut: {
    title: { ja: "✅ ドーナツグラフ", en: "✅ Donut Chart" },
    description: { ja: "中央の空白を活用（合計値やラベルを表示）", en: "Use center space for totals or labels" },
  },
  stack_100_bar_from_ratio: {
    title: { ja: "✅ 100%積み上げ棒グラフ", en: "✅ 100% Stacked Bar Chart" },
    description: { ja: "複数の対象の構成比を並べて比較", en: "Compare composition ratios across multiple subjects" },
  },
  treemap: {
    title: { ja: "✅ ツリーマップ", en: "✅ Treemap" },
    description: { ja: "面積で量の大きさも比較できる・スペース効率が良い", en: "Compare sizes by area; space-efficient" },
  },
  sunburst: {
    title: { ja: "✅ サンバーストグラフ", en: "✅ Sunburst Chart" },
    description: { ja: "階層構造を強調・量の比較より親子関係の可視化向き", en: "Emphasize hierarchy; parent-child visualization" },
  },
  hist: {
    title: { ja: "✅ ヒストグラム", en: "✅ Histogram" },
    description: { ja: "単一分布の形（歪み/多峰性/裾）を見る", en: "View single distribution shape (skew/modes/tails)" },
  },
  box: {
    title: { ja: "✅ 箱ひげ図", en: "✅ Box Plot" },
    description: { ja: "中央値/IQR/外れ値で群間比較（説明しやすい）", en: "Compare groups by median/IQR/outliers (easy to explain)" },
  },
  violin: {
    title: { ja: "✅ バイオリン図", en: "✅ Violin Plot" },
    description: { ja: "群間の分布形状（密度/多峰性）も比較（十分なサンプル）", en: "Compare density/multimodality across groups (needs samples)" },
  },
  scatter: {
    title: { ja: "✅ 散布図", en: "✅ Scatter Plot" },
    description: { ja: "2変数の関係/相関", en: "2-variable relationship / correlation" },
  },
  heatmap_corr: {
    title: { ja: "✅ 相関ヒートマップ", en: "✅ Correlation Heatmap" },
    description: { ja: "多変数間の相関を色で俯瞰（プロット数が多い場合に有効）", en: "Overview multi-variable correlations by color" },
  },
  bubble: {
    title: { ja: "✅ バブルチャート", en: "✅ Bubble Chart" },
    description: { ja: "3変数（サイズで第3変数）", en: "3 variables (3rd encoded by size)" },
  },
  scatter_reg: {
    title: { ja: "✅ 回帰線付き散布図", en: "✅ Scatter Plot with Regression" },
    description: { ja: "傾向を説明したい", en: "Explain trends with regression line" },
  },
  sankey: {
    title: { ja: "✅ サンキー図", en: "✅ Sankey Diagram" },
    description: { ja: "流入・流出の量", en: "Inflow and outflow volumes" },
  },
  waterfall: {
    title: { ja: "✅ ウォーターフォールチャート", en: "✅ Waterfall Chart" },
    description: { ja: "増減の内訳を積み上げで表現（開始→終了の変化要因）", en: "Stack change factors from start to end" },
  },
  parallel_coords: {
    title: { ja: "✅ 並行座標プロット", en: "✅ Parallel Coordinates" },
    description: { ja: "多変数間の関係・パターン・クラスタを可視化", en: "Visualize multi-variable patterns and clusters" },
  },
  network: {
    title: { ja: "✅ ネットワーク図", en: "✅ Network Diagram" },
    description: { ja: "関係網（つながり）", en: "Connection network" },
  },
  choropleth: {
    title: { ja: "✅ コロプレスマップ", en: "✅ Choropleth Map" },
    description: { ja: "地域ごとの値を色の濃淡で表現", en: "Express regional values by color intensity" },
  },
  scatter_map: {
    title: { ja: "✅ 地図上の散布図", en: "✅ Scatter Map" },
    description: { ja: "個別地点をマーカーでプロット", en: "Plot individual locations with markers" },
  },
};
