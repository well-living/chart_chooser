# Chart Chooser - グラフの選び方ガイド

データ可視化に最適なグラフを選ぶためのインタラクティブなフローチャートツールです。

## 概要

「何を伝えたいか」という目的から始めて、質問に答えていくことで最適なグラフタイプにたどり着けます。

### 対応するグラフカテゴリ

- **時系列**: 折れ線、面、積み上げ面、積み上げ棒、100%積み上げ面/棒、スロープチャート
- **比較**: 縦棒、横棒、グループ棒、積み上げ棒、100%積み上げ棒、レーダーチャート
- **割合・構成比**: 円、ドーナツ、ツリーマップ、サンバースト、100%積み上げ棒
- **分布**: ヒストグラム、箱ひげ図、バイオリン図
- **関係性**: 散布図、相関ヒートマップ、バブルチャート、回帰線付き散布図
- **構造・流れ**: サンキー図、ウォーターフォールチャート、並行座標プロット、ネットワーク図
- **地理**: コロプレスマップ、地図上の散布図

## 技術スタック

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [React Flow](https://reactflow.dev/) (@xyflow/react)
- [ELK.js](https://github.com/kieler/elkjs) - 自動レイアウト
- TypeScript

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## 使い方

1. 「開始」ノードから始めます
2. 各ノードの「+」ボタンをクリックして選択肢を展開
3. 目的に合った選択肢をクリックして進む
4. 最終的におすすめのグラフ（緑色のノード）に到達

### 便利な機能

- **グラフ名ドロップダウン**: ヘッダーのドロップダウンからグラフ名を直接選択すると、そのグラフに至るツリーのみが展開されます。複数の用途を持つグラフ（例: 積み上げ棒グラフ）を選ぶと、すべてのパスが同時に展開されます
- **全展開ボタン**: すべてのノードを一度に展開して全体像を把握
- **リセットボタン**: 最初からやり直し
- **同一チャートのハイライト**: グラフを選択すると、同じグラフが他の目的でも使われている場合はオレンジ色でハイライト表示されます（例: 100%積み上げ棒グラフは時系列・比較・割合の各目的で使用可能）

### 用語

- **ディメンション**: カテゴリ変数（商品名、地域、年など分類に使う軸）
- **メジャー**: 数値変数（売上、件数など集計対象の値）

## プロジェクト構成

```
src/
  app/
    page.tsx             # ページエントリーポイント
    layout.tsx           # ルートレイアウト
    globals.css          # グローバルスタイル
  components/
    graph-chooser/
      GraphChooser.tsx   # メインコンポーネント
      ChartIcons.tsx     # グラフのSVGアイコン
      nodes-data.ts      # フローチャートのデータ定義
```

## デプロイ (Google Cloud Run)

```powershell
# Windows (PowerShell)
.\deploy.ps1

# macOS / Linux (bash / zsh)
./deploy.sh
```

内部で以下の2ステップを実行します:

1. `gcloud builds submit` - Cloud Build 上で Docker イメージをビルド＆プッシュ
2. `gcloud run deploy --image` - ビルド済みイメージを Cloud Run にデプロイ

### デプロイ構成ファイル

| ファイル | 役割 |
|---|---|
| `deploy.ps1` | デプロイスクリプト（Windows / PowerShell） |
| `deploy.sh` | デプロイスクリプト（macOS・Linux / bash・zsh） |
| `Dockerfile` | マルチステージビルド（deps → build → runner） |
| `cloudbuild.yaml` | Cloud Build の設定（`gcr.io/cloud-builders/docker` + BuildKit 有効） |
| `.dockerignore` | Docker ビルドコンテキストからの除外設定 |
| `.gcloudignore` | `gcloud` アップロード時の除外設定 |


## ライセンス

MIT
