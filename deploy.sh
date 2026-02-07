#!/usr/bin/env bash
# Cloud Run デプロイスクリプト
# 使い方: ./deploy.sh

set -euo pipefail

PROJECT_ID="${1:-$(gcloud config get-value project 2>/dev/null)}"
REGION="${2:-asia-northeast1}"
SERVICE_NAME="${3:-chart-chooser}"

if [ -z "$PROJECT_ID" ]; then
    echo "エラー: GCP プロジェクトIDが見つかりません。"
    echo "実行してください: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/cloud-run-source-deploy/$SERVICE_NAME"

echo "=== Cloud Run デプロイ ==="
echo "Project : $PROJECT_ID"
echo "Region  : $REGION"
echo "Service : $SERVICE_NAME"
echo "Image   : $IMAGE_NAME"
echo ""

# Cloud Build でイメージをビルド
echo "Cloud Build でイメージをビルド中..."
gcloud builds submit \
    --project "$PROJECT_ID" \
    --region "$REGION" \
    --config cloudbuild.yaml \
    --ignore-file .dockerignore

# Cloud Run にデプロイ
echo "Cloud Run にデプロイ中..."
gcloud run deploy "$SERVICE_NAME" \
    --project "$PROJECT_ID" \
    --image "$IMAGE_NAME" \
    --region "$REGION" \
    --allow-unauthenticated

echo ""
echo "=== デプロイ完了 ==="
URL=$(gcloud run services describe "$SERVICE_NAME" --project "$PROJECT_ID" --region "$REGION" --format "value(status.url)" 2>/dev/null || true)
if [ -n "$URL" ]; then
    echo "URL: $URL"
fi
