<template>
  <div class="marketplace">
    <!-- Shared navigation (brand + menu + i18n switcher + appearance) -->
    <SiteNav />

    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <div class="hero-eyebrow">Action Marketplace</div>
          <h1 class="hero-title">ClipboardxAI · Action Marketplace</h1>
          <p class="hero-description">
            Community-curated AI actions for your clipboard. Browse, then click
            <strong>Install</strong> to open the app and add the action in one tap.
          </p>
          <div class="hero-langbar" v-if="!loading && !error">
            <span class="hero-count">{{ actions.length }} actions · {{ categories.length }} categories</span>
          </div>
        </div>
      </div>
      <div class="hero-bg-pattern"></div>
    </section>

    <!-- Body -->
    <section class="body-section">
      <div class="body-container">
        <!-- Category filter -->
        <div class="cats" v-if="!loading">
          <button class="cat" :class="{ active: active === null }" @click="active = null">All</button>
          <button
            v-for="c in categories"
            :key="c.id"
            class="cat"
            :class="{ active: active === c.id }"
            @click="active = c.id"
          >{{ locCat(c) }}</button>
        </div>
        <!-- Category filter skeleton -->
        <div class="cats" v-else>
          <span class="sk sk-cat" v-for="n in 7" :key="n"></span>
        </div>

        <!-- Grid -->
        <div v-if="loading" class="grid">
          <article v-for="n in 8" :key="n" class="card skeleton-card">
            <div class="top">
              <div class="sk sk-ic"></div>
              <div class="head sk-head">
                <div class="sk sk-line sk-line-title"></div>
                <div class="sk sk-line sk-line-by"></div>
              </div>
            </div>
            <div class="sk sk-line sk-line-desc"></div>
            <div class="sk sk-line sk-line-desc"></div>
            <div class="tags">
              <span class="sk sk-tag" v-for="t in 3" :key="t"></span>
            </div>
            <div class="sk sk-line sk-line-prompt"></div>
            <div class="row">
              <div class="sk sk-ver"></div>
              <div class="sk sk-install"></div>
            </div>
          </article>
        </div>
        <div v-else-if="error" class="mk-state mk-error">{{ error }}</div>
        <div v-else class="grid">
          <article v-for="a in filtered" :key="a.id" class="card">
            <div class="top">
              <div class="ic" :style="{ background: tint(a.id) }">
                <img v-if="a.appIcon" class="ic-img" :src="marketplaceBase + a.appIcon" :alt="a.author" />
                <template v-else>{{ glyph(a) }}</template>
              </div>
              <div class="head">
                <h3>{{ loc(a, 'name') }}</h3>
                <div class="by">by {{ a.author }}</div>
              </div>
            </div>
            <p class="desc">{{ loc(a, 'description') }}</p>
            <div class="tags">
              <span v-for="t in (Array.isArray(loc(a,'tags')) ? loc(a,'tags') : [])" :key="t" class="tag">#{{ t }}</span>
            </div>
            <details class="prompt">
              <summary>Prompt</summary>
              <pre>{{ loc(a, 'prompt') }}</pre>
            </details>
            <div class="row">
              <span class="ver">v{{ a.version }} · {{ categoryName(a.category) }}</span>
              <button class="install" @click="install(a)">Install</button>
            </div>
          </article>
          <p v-if="!filtered.length" class="mk-empty">No actions in this category yet.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">ClipboardxAI</div>
            <p class="footer-tagline">Community-curated AI actions for your clipboard.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4 class="footer-heading">Product</h4>
              <a href="/guide/introduction" class="footer-link">Guide</a>
              <a href="/guide/installation" class="footer-link">Installation</a>
              <a href="/guide/usage" class="footer-link">Usage</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Marketplace</h4>
              <a href="/marketplace" class="footer-link">Browse Actions</a>
              <a href="https://github.com/clipboardxAI/marketplace" class="footer-link" target="_blank" rel="noopener">Submit an Action</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Community</h4>
              <a href="https://github.com/w3cub/clipboardxai" class="footer-link" target="_blank" rel="noopener">GitHub</a>
              <a href="https://github.com/clipboardxAI/marketplace" class="footer-link" target="_blank" rel="noopener">Marketplace Repo</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© 2026 ClipboardxAI Project. Built for macOS.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { withBase, useData } from 'vitepress'
import SiteNav from './SiteNav.vue'

interface Locales { [lang: string]: Record<string, any> }
interface Action {
  id: string
  category: string
  name: string
  author: string
  version: string
  description: string
  tags: string[]
  prompt: string
  appIcon?: string
  locales?: Locales
}
interface Category { id: string; name: string; icon: string; locales?: Locales }

const categories = ref<Category[]>([])
const actions = ref<Action[]>([])
const active = ref<string | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// ── Language is driven by VitePress i18n (no in-component switcher) ──
const { lang } = useData()
const SUPPORTED = ['en', 'zh-CN', 'zh-TW', 'ja']
const currentLang = computed(() => (SUPPORTED.includes(lang.value) ? lang.value : 'en'))
// Icons in the catalog are stored relative to the marketplace data root.
const marketplaceBase = withBase('/marketplace/')

const filtered = computed(() =>
  actions.value.filter(a => active.value === null || a.category === active.value)
)

// ── Localization ──────────────────────────────────────────────
function loc(a: Action, field: 'name' | 'description' | 'tags' | 'prompt'): any {
  if (currentLang.value !== 'en' && a.locales && a.locales[currentLang.value] && a.locales[currentLang.value][field] != null) {
    return a.locales[currentLang.value][field]
  }
  return a[field]
}
function locCat(c: Category): string {
  if (currentLang.value !== 'en' && c.locales && c.locales[currentLang.value] && c.locales[currentLang.value].name) {
    return c.locales[currentLang.value].name
  }
  return c.name
}
function categoryName(id: string): string {
  const c = categories.value.find(x => x.id === id)
  return c ? locCat(c) : ''
}

// ── Deterministic tint (mirrors the macOS TintedIcon FNV-1a hash) ─
const SUNNY = [0.05, 0.10, 0.15, 0.33, 0.40, 0.48, 0.55, 0.62, 0.70, 0.83, 0.92]
function fnv1a(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
function tint(key: string): string {
  const idx = fnv1a(key) % SUNNY.length
  return `hsl(${Math.round(SUNNY[idx] * 360)} 80% 95%)`
}
// SF Symbol names (e.g. "text.append") don't render on the web — show a tinted
// initial instead, keeping visual parity with the app's tinted icon squares.
function glyph(a: Action): string {
  const name = loc(a, 'name') as string
  return (name || '?').trim().charAt(0).toUpperCase() || '?'
}

// ── Install deep link ─────────────────────────────────────────
function install(a: Action) {
  window.location.href = `clipboardxai://install?action=${encodeURIComponent(a.id)}`
}

// ── Load catalog ──────────────────────────────────────────────
onMounted(async () => {
  try {
    const res = await fetch(withBase('/marketplace/marketplace.json'))
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    categories.value = data.categories || []
    actions.value = data.actions || []
    loading.value = false
  } catch (e: any) {
    error.value = 'Failed to load the catalog. Make sure the site is deployed with the marketplace data.'
    loading.value = false
  }
})
</script>

<style scoped>
.marketplace {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  min-height: 100vh;
}

/* Navigation styles live in SiteNav.vue */

/* Hero */
.hero-section {
  padding: 140px 0 60px;
  background: var(--ah-hero-bg);
  position: relative;
  overflow: hidden;
}
.hero-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.hero-eyebrow {
  display: inline-block;
  font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 6px 14px; border-radius: 999px; margin-bottom: 18px;
}
.hero-title {
  font-size: 3rem; font-weight: 800; margin: 0 0 18px; line-height: 1.15;
  color: var(--vp-c-text-1);
  background: linear-gradient(135deg, var(--ah-hero-title-from) 0%, var(--ah-hero-title-to) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-description { font-size: 1.15rem; color: var(--vp-c-text-2); max-width: 640px; margin: 0 0 24px; }
.hero-langbar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 14px; color: var(--vp-c-text-2); }
.mk-select {
  background: var(--ah-card-bg); color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 6px 10px; font-size: 13px;
}
.hero-count { font-size: 13px; color: var(--vp-c-text-3); }
.hero-bg-pattern {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 80%, color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, color-mix(in srgb, #ef6400 12%, transparent) 0%, transparent 50%);
}

/* Body */
.body-section { padding: 40px 0 100px; background: var(--vp-c-bg); }
.body-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.cats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 0 0 36px; }
.cat {
  padding: 7px 16px; border: 1px solid var(--vp-c-divider); border-radius: 999px;
  cursor: pointer; font-size: 13px; color: var(--vp-c-text-2);
  background: var(--ah-card-bg); transition: .15s;
}
.cat:hover { color: var(--vp-c-text-1); border-color: var(--vp-c-brand-1); }
.cat.active { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
.card {
  background: var(--ah-card-bg); border: 1px solid var(--vp-c-divider); border-radius: 16px;
  padding: 20px; display: flex; flex-direction: column; gap: 12px;
  box-shadow: var(--ah-card-shadow); transition: .2s;
}
.card:hover { transform: translateY(-4px); box-shadow: var(--ah-card-shadow-hover); border-color: var(--vp-c-brand-1); }
.top { display: flex; align-items: center; gap: 12px; }
.ic {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; font-weight: 700; color: #1a1a1a; overflow: hidden;
}
.ic-img { width: 100%; height: 100%; object-fit: contain; padding: 7px; }
.head h3 { margin: 0; font-size: 16px; color: var(--vp-c-text-1); }
.by { font-size: 12px; color: var(--vp-c-text-3); }
.desc { font-size: 13px; color: var(--vp-c-text-2); margin: 0; min-height: 34px; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { font-size: 11px; color: var(--vp-c-text-2); background: var(--vp-c-bg-soft); padding: 3px 8px; border-radius: 999px; }
.prompt { font-size: 12px; color: var(--vp-c-text-2); }
.prompt summary { cursor: pointer; font-weight: 500; color: var(--vp-c-text-1); list-style: none; }
.prompt summary::-webkit-details-marker { display: none; }
.prompt pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 8px;
  padding: 8px; margin: 8px 0 0; max-height: 120px; overflow: auto; white-space: pre-wrap; color: var(--vp-c-text-2);
}
.row { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
.ver { font-size: 11px; color: var(--vp-c-text-3); }
.install {
  background: var(--vp-c-brand-1); color: #fff; border: 0; border-radius: 8px;
  padding: 8px 16px; font-size: 13px; font-weight: 600; cursor: pointer; transition: .15s;
}
.install:hover { filter: brightness(1.08); }

.mk-state { text-align: center; color: var(--vp-c-text-2); padding: 60px 0; font-size: 15px; }
.mk-error { color: #dc2626; }
.mk-empty { grid-column: 1 / -1; text-align: center; color: var(--vp-c-text-2); padding: 40px 0; }

/* ── Skeleton screen ───────────────────────────────────────── */
.skeleton-card { gap: 12px; }
.sk {
  position: relative;
  overflow: hidden;
  background: var(--ah-skeleton-base);
  border-radius: 8px;
}
.sk::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent 0%, var(--ah-skeleton-hi) 50%, transparent 100%);
  animation: sk-shimmer 1.4s ease-in-out infinite;
}
@keyframes sk-shimmer { 100% { transform: translateX(100%); } }
.sk-ic { width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; }
.sk-head { gap: 8px; display: flex; flex-direction: column; }
.sk-line { width: 100%; height: 12px; }
.sk-line-title { height: 15px; width: 70%; }
.sk-line-by { height: 11px; width: 45%; }
.sk-line-desc { height: 11px; margin: 0; }
.sk-line-prompt { height: 11px; width: 60%; }
.sk-tag { width: 52px; height: 20px; border-radius: 999px; }
.sk-ver { width: 90px; height: 12px; }
.sk-install { width: 78px; height: 34px; border-radius: 8px; }
.sk-cat { width: 78px; height: 32px; border-radius: 999px; }
/* Stagger the shimmer so cards don't pulse in perfect unison */
.skeleton-card:nth-child(2) .sk::after { animation-delay: .1s; }
.skeleton-card:nth-child(3) .sk::after { animation-delay: .2s; }
.skeleton-card:nth-child(4) .sk::after { animation-delay: .3s; }
.skeleton-card:nth-child(5) .sk::after { animation-delay: .15s; }
.skeleton-card:nth-child(6) .sk::after { animation-delay: .25s; }
.skeleton-card:nth-child(7) .sk::after { animation-delay: .35s; }
.skeleton-card:nth-child(8) .sk::after { animation-delay: .05s; }
@media (prefers-reduced-motion: reduce) {
  .sk::after { animation: none; }
}

/* Footer */
.footer { background: #1a1a1a; color: #ffffff; padding: 80px 0 40px; }
.footer-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.footer-content { display: grid; grid-template-columns: 1fr 3fr; gap: 80px; margin-bottom: 40px; }
.footer-brand .footer-logo { font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #ffffff; }
.footer-tagline { color: #cccccc; margin: 0; font-size: 1rem; }
.footer-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
.footer-heading { font-size: 1.1rem; font-weight: 600; margin: 0 0 20px; color: #ffffff; }
.footer-link { display: block; color: #cccccc; text-decoration: none; margin-bottom: 12px; transition: color .2s; }
.footer-link:hover { color: #ffffff; }
.footer-bottom { border-top: 1px solid #333333; padding-top: 40px; text-align: center; }
.footer-copyright { margin: 0; color: #999999; font-size: 0.9rem; }

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .footer-content { grid-template-columns: 1fr; gap: 40px; }
}
</style>
