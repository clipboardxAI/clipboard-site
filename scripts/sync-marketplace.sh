#!/bin/bash
# Sync the ClipboardxAI Action Marketplace build products into the site.
#
# Usage:
#   ./scripts/sync-marketplace.sh [PATH_TO_MARKETPLACE_REPO]
#
# Steps:
#   1. Run `npm run build` in the marketplace repo (regenerates marketplace.json).
#   2. Copy marketplace.json + categories.json + the standalone viewer (raw.html)
#      into docs/public/marketplace/.
#
# The VitePress /marketplace page (MarketplaceView.vue) fetches
# /marketplace/marketplace.json at runtime.

set -e

SRC="${1:-/Users/terry/nuecms-workspace/clipboardxai-marketplace}"
DEST="docs/public/marketplace"

if [ ! -d "$SRC" ]; then
  echo "❌ Marketplace repo not found at: $SRC"
  exit 1
fi

echo "📦 Building marketplace catalog from $SRC ..."
( cd "$SRC" && npm run build )

mkdir -p "$DEST"
cp "$SRC/marketplace.json" "$DEST/marketplace.json"
cp "$SRC/categories.json"  "$DEST/categories.json"
cp "$SRC/index.html"      "$DEST/raw.html"
# 伙伴 App 品牌图标（生态动作在网站端按 appIcon="icons/<scheme>.png" 渲染）。
if [ -d "$SRC/icons" ]; then
  mkdir -p "$DEST/icons"
  cp "$SRC/icons/"*.png "$DEST/icons/" 2>/dev/null || true
fi

echo "✅ Synced to $DEST"
echo "   - marketplace.json"
echo "   - categories.json"
echo "   - raw.html (standalone viewer fallback)"
echo "   - icons/ (partner brand PNGs)"
