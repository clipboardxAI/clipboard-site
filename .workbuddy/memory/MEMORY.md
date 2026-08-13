# ClipboardxAI Site — Project Memory

## Architecture

- **VitePress** site with 7 locales: en (root), zh-CN, zh-TW, ja, de, es, fr
- Custom layouts: `AdvancedHome.vue` (home), `MarketplaceView.vue` (marketplace), `SiteNav.vue` (shared nav), `SiteFooter.vue` (shared footer)
- `theme/index.ts` Layout function routes: home pages → AdvancedHome, marketplace → MarketplaceView, everything else → DefaultTheme.Layout

## i18n Structure (refactored 2026-08-13)

- **`config.ts`**: Per-locale nav/sidebar/footer labels (STR object), markdown container labels (MD object). Footer config is built via `tc()` function, consumed by SiteFooter via `useData().theme.footer`.
- **`theme/i18n.ts`**: Page content strings (section titles, categories, steps, FAQs, CTA, marketplace hero/buttons) for all 7 languages. Imported by AdvancedHome and MarketplaceView.
- **Markdown frontmatter**: Hero text, features (title/details/linkText) — translated per-locale in each `docs/<locale>/index.md`.
- **Marketplace data**: `docs/public/marketplace/marketplace.json` (base EN) + `marketplace.<lang>.json` (locale packs), fetched and merged at runtime by MarketplaceView.

## Key Files

- `docs/.vitepress/config.ts` — VitePress config with locale definitions
- `docs/.vitepress/theme/i18n.ts` — i18n page content (homeContent + marketplaceContent)
- `docs/.vitepress/theme/SiteFooter.vue` — shared footer reading from themeConfig
- `docs/.vitepress/theme/SiteNav.vue` — shared nav (mobile: logo + theme toggle only)
- `docs/.vitepress/theme/AdvancedHome.vue` — home layout
- `docs/.vitepress/theme/MarketplaceView.vue` — marketplace layout
- `docs/.vitepress/theme/custom.css` — CSS variables (light/dark theme tokens)

## Mobile Nav Behavior

- Below 768px: nav menu and language switcher hidden, only logo + theme toggle visible
- Below 480px: brand text hidden, only logo image shown, reduced padding/height
