# syntax=docker/dockerfile:1

# =============================================================================
# ベースステージ
# =============================================================================
FROM node:20-alpine AS base

# =============================================================================
# 依存関係インストールステージ
# =============================================================================
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# =============================================================================
# ビルドステージ
# =============================================================================
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# =============================================================================
# 本番ステージ
# =============================================================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 非rootユーザーを作成
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 静的アセットをコピー
COPY --from=builder /app/public ./public

# プリレンダーキャッシュ用ディレクトリの権限設定
RUN mkdir .next
RUN chown nextjs:nodejs .next

# standaloneビルド成果物をコピー
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Cloud Run は PORT 環境変数を使用
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
EXPOSE 8080

CMD ["node", "server.js"]
