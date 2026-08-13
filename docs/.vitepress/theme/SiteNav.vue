<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <VPLink href="/" class="brand-link">
          <img src="/logo.png" alt="ClipboardxAI" class="brand-logo" />
          <span class="brand-text">ClipboardxAI</span>
        </VPLink>
      </div>
      <div class="nav-right">
        <div class="nav-links">
          <VPNavBarMenu />
        </div>
        <!-- VitePress built-in i18n language switcher (globe + dropdown) -->
        <VPNavBarTranslations class="nav-lang" />
        <VPSwitchAppearance class="nav-appearance" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { VPLink } from 'vitepress/theme'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarTranslations from 'vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: var(--ah-navbar-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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

/* Desktop: show nav menu + language switcher + theme toggle */
.nav-links { display: none; align-items: center; gap: 24px; }
@media (min-width: 768px) { .nav-links { display: flex; } }
.nav-right { display: flex; align-items: center; gap: 20px; }
.nav-appearance { display: flex; align-items: center; }

/* VPNavBarTranslations is hidden below 768px.
   On mobile only logo + theme toggle are visible. */
.nav-lang :deep(.VPNavBarTranslations) {
  display: none !important;
}
@media (min-width: 768px) {
  .nav-lang :deep(.VPNavBarTranslations) {
    display: flex !important;
    align-items: center;
  }
}
.nav-lang :deep(.VPNavBarTranslations .text) {
  color: var(--vp-c-text-2);
}
.nav-lang :deep(.VPNavBarTranslations:hover .text) {
  color: var(--vp-c-text-1);
}

/* ── Mobile optimizations ─────────────────────────────────── */
/* Hide brand text on very small screens — only show the logo image */
@media (max-width: 480px) {
  .nav-container {
    padding: 0 12px;
    height: 56px;
  }
  .brand-text {
    display: none;
  }
  .brand-logo {
    height: 28px;
  }
  .nav-right {
    gap: 0;
  }
}
</style>
