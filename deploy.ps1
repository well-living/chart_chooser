# Cloud Run デプロイスクリプト
# 使い方: .\deploy.ps1

param(
    [string]$ProjectId = (gcloud config get-value project 2>$null),
    [string]$Region = "asia-northeast1",
    [string]$ServiceName = "chart-chooser"
)

if (-not $ProjectId) {
    Write-Host "エラー: GCP プロジェクトIDが見つかりません。" -ForegroundColor Red
    Write-Host "実行してください: gcloud config set project YOUR_PROJECT_ID" -ForegroundColor Yellow
    exit 1
}

$ImageName = "$Region-docker.pkg.dev/$ProjectId/cloud-run-source-deploy/$ServiceName"

Write-Host "=== Cloud Run Deploy ===" -ForegroundColor Cyan
Write-Host "Project : $ProjectId" -ForegroundColor White
Write-Host "Region  : $Region" -ForegroundColor White
Write-Host "Service : $ServiceName" -ForegroundColor White
Write-Host "Image   : $ImageName" -ForegroundColor White
Write-Host ""

# Cloud Build でイメージをビルド
Write-Host "Cloud Build でイメージをビルド中..." -ForegroundColor Yellow
gcloud builds submit `
    --project $ProjectId `
    --region $Region `
    --config cloudbuild.yaml `
    --ignore-file .dockerignore
if ($LASTEXITCODE -ne 0) {
    Write-Host "=== ビルド失敗 ===" -ForegroundColor Red
    exit 1
}

# Cloud Run にデプロイ
Write-Host "Cloud Run にデプロイ中..." -ForegroundColor Yellow
gcloud run deploy $ServiceName `
    --project $ProjectId `
    --image $ImageName `
    --region $Region `
    --allow-unauthenticated

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== デプロイ完了 ===" -ForegroundColor Green
    $url = gcloud run services describe $ServiceName --project $ProjectId --region $Region --format "value(status.url)" 2>$null
    if ($url) {
        Write-Host "URL: $url" -ForegroundColor Cyan
    }
} else {
    Write-Host ""
    Write-Host "=== デプロイ失敗 ===" -ForegroundColor Red
    exit 1
}
