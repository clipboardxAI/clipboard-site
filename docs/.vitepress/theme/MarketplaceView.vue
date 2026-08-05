<template>
  <div class="marketplace">
    <!-- Navigation (matches AdvancedHome) -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <VPLink href="/" class="brand-link">
            <img src="/logo.png" alt="Clipboard x AI" class="brand-logo" />
            <span class="brand-text">Clipboard&nbsp;x&nbsp;AI</span>
          </VPLink>
        </div>
        <div class="nav-right">
          <div class="nav-links">
            <VPNavBarMenu />
          </div>
          <VPSwitchAppearance class="nav-appearance" />
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <div class="hero-eyebrow">Action Marketplace</div>
          <h1 class="hero-title">Clipboard&nbsp;x&nbsp;AI · Action Marketplace</h1>
          <p class="hero-description">
            Community-curated AI actions for your clipboard. Browse, then click
            <strong>Install</strong> to open the app and add the action in one tap.
          </p>
          <div class="hero-langbar">
            <label for="mk-lang">Language:</label>
            <select id="mk-lang" v-model="lang" class="mk-select">
              <option v-for="l in langs" :key="l" :value="l">{{ l }}</option>
            </select>
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
        <div class="cats">
          <button class="cat" :class="{ active: active === null }" @click="active = null">All</button>
          <button
            v-for="c in categories"
            :key="c.id"
            class="cat"
            :class="{ active: active === c.id }"
            @click="active = c.id"
          >{{ locCat(c) }}</button>
        </div>

        <!-- Grid -->
        <div v-if="loading" class="mk-state">Loading catalog…</div>
        <div v-else-if="error" class="mk-state mk-error">{{ error }}</div>
        <div v-else class="grid">
          <article v-for="a in filtered" :key="a.id" class="card">
            <div class="top">
              <div class="ic" :style="{ background: tint(a.id) }">{{ glyph(a) }}</div>
              <div class="head">
                <h3>{{ loc(a, 'name') }}</h3>
                <div class="by">by {{ a.author }}</div>
              </div>
            </div>
            <p class="desc">{{ loc(a, 'description') }}</p>
            <div class="tags">
              <span v-for="t in (loc(a,'tags') || [])" :key="t" class="tag">#{{ t }}</span>
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
            <div class="footer-logo">Clipboard&nbsp;x&nbsp;AI</div>
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
          <p class="footer-copyright">© 2026 Clipboard x AI Project. Built for macOS.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { withBase } from 'vitepress'
import { VPLink } from 'vitepress/theme'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'

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
  locales?: Locales
}
interface Category { id: string; name: string; icon: string; locales?: Locales }

const categories = ref<Category[]>([])
const actions = ref<Action[]>([])
const active = ref<string | null>(null)
const lang = ref('en')
const loading = ref(true)
const error = ref<string | null>(null)

const langs = ref<string[]>(['en'])

const filtered = computed(() =>
  actions.value.filter(a => active.value === null || a.category === active.value)
)

// ── Localization ──────────────────────────────────────────────
function loc(a: Action, field: 'name' | 'description' | 'tags' | 'prompt'): any {
  if (lang.value !== 'en' && a.locales && a.locales[lang.value] && a.locales[lang.value][field] != null) {
    return a.locales[lang.value][field]
  }
  return a[field]
}
function locCat(c: Category): string {
  if (lang.value !== 'en' && c.locales && c.locales[lang.value] && c.locales[lang.value].name) {
    return c.locales[lang.value].name
  }
  return c.name
}
function categoryName(id: string): string {
  const c = categories.value.find(x => x.id === id)
  return c ? locCat(c) : ''
}
watch(lang, () => { /* reactive re-render via computed/loc */ })

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
    const set = new Set<string>(['en'])
    categories.value.forEach(c => c.locales && Object.keys(c.locales).forEach(l => set.add(l)))
    actions.value.forEach(a => a.locales && Object.keys(a.locales).forEach(l => set.add(l)))
    langs.value = [...set]
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

/* Navigation */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: var(--ah-navbar-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--ah-navbar-border);
  z-index: 1000;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.nav-brand .brand-link { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.brand-logo { height: 32px; width: auto; }
.brand-text { font-size: 20px; font-weight: 700; color: var(--vp-c-text-1); }
.nav-links { display: none; align-items: center; gap: 24px; }
@media (min-width: 768px) { .nav-links { display: flex; } }
.nav-right { display: flex; align-items: center; gap: 20px; }
.nav-appearance { display: flex; align-items: center; }

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
  font-size: 20px; font-weight: 700; color: #1a1a1a;
}
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
