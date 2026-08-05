<template>
  <div class="advanced-home">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <VPLink href="/" class="brand-link">
            <img src="/logo.png" alt="NueZip Logo" class="brand-logo" />
            <span class="brand-text">NueZip</span>
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

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">{{ data.hero.name }}</h1>
            <p class="hero-subtitle">{{ data.hero.text }}</p>
            <p class="hero-description">{{ data.hero.tagline }}</p>
            <div class="hero-actions">
              <HomeActions />
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-elements">
              <div class="floating-card card-1">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <div class="card-text">Multi-Format</div>
              </div>
              <div class="floating-card card-2">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="card-text">Fast Extraction</div>
              </div>
              <div class="floating-card card-3">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div class="card-text">Password Secure</div>
              </div>
            </div>
            <div class="hero-image">
              <img :src="withBase(data.hero.image.src)" :alt="data.hero.image.alt" />
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg-pattern"></div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">Key Features</h2>
          <p class="section-subtitle">Everything you need to manage archives efficiently on macOS</p>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in data.features" :key="feature.title"
               class="feature-card"
               :style="{ animationDelay: `${(index as number) * 0.1}s` }">
            <div class="feature-icon" :style="{ backgroundColor: featureColors[(index as number) % featureColors.length] }">
              <img :src="withBase(feature.icon.light)" :alt="feature.icon.alt"
                   :width="feature.icon.width" :height="feature.icon.height" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.details }}</p>
            <a v-if="feature.link" :href="feature.link" class="feature-link">{{ feature.linkText }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Formats Preview Section -->
    <section class="formats-section">
      <div class="formats-container">
        <div class="section-header">
          <h2 class="section-title">Supported Archive Formats</h2>
          <p class="section-subtitle">Compress and extract all major archive formats</p>
        </div>
        <div class="formats-grid">
          <div class="format-card" v-for="fmt in formats" :key="fmt.name">
            <div class="format-icon" :style="{ backgroundColor: fmt.color }">
              <span class="format-ext">{{ fmt.ext }}</span>
            </div>
            <div class="format-info">
              <h3 class="format-name">{{ fmt.name }}</h3>
              <p class="format-desc">{{ fmt.desc }}</p>
            </div>
          </div>
        </div>
        <div class="formats-cta">
          <a href="/guide/formats" class="btn btn-primary">View Full Format Details</a>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-section">
      <div class="how-container">
        <div class="section-header">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Simple and intuitive, just like macOS should be</p>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ step.num }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="faq-container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Quick answers for macOS users</p>
        </div>
        <div class="faq-grid">
          <div v-for="faq in faqs" :key="faq.question" class="faq-item">
            <details class="faq-details">
              <summary class="faq-question">{{ faq.question }}</summary>
              <div class="faq-answer">{{ faq.answer }}</div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Simplify Archive Management?</h2>
          <p class="cta-description">Download NueZip and experience fast, native archive management on macOS.</p>
          <div class="cta-actions">
            <a href="/guide/installation" class="btn btn-primary">Get Started</a>
            <a href="/guide/usage" class="btn btn-secondary">How to Use</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">NueZip</div>
            <p class="footer-tagline">Simple, fast, and reliable archive management.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4 class="footer-heading">Product</h4>
              <a href="/guide/installation" class="footer-link">Download</a>
              <a href="/guide/usage" class="footer-link">Features</a>
              <a href="/guide/formats" class="footer-link">Formats</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Support</h4>
              <a href="/guide/introduction" class="footer-link">Guide</a>
              <a href="/guide/faq" class="footer-link">FAQ</a>
              <a href="/guide/troubleshooting" class="footer-link">Troubleshooting</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Community</h4>
              <a href="https://github.com/nuezip/nuezip" class="footer-link">GitHub</a>
              <a href="https://github.com/nuezip/nuezip/releases" class="footer-link">Releases</a>
              <a href="https://www.producthunt.com/products/nuezip-the-modern-mac-archive-utility?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nuezip-the-modern-mac-archive-utility" class="footer-link" target="_blank" rel="noopener noreferrer">Product Hunt</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© 2026 NueZip Project. Built for macOS.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import HomeActions from './HomeActions.vue'
import { VPLink } from 'vitepress/theme'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue'

interface Props {
  data: any
}

defineProps<Props>()

const featureColors = [
  '#2563eb', // blue
  '#7c3aed', // violet
  '#059669', // emerald
  '#d97706', // amber
  '#dc2626', // red
  '#0891b2'  // cyan
]

const formats = [
  { name: 'ZIP', ext: '.zip', desc: 'Universal ZIP format with AES-256 encryption', color: '#7c3aed' },
  { name: 'RAR', ext: '.rar', desc: 'Read-only with multi-volume support', color: '#2563eb' },
  { name: '7-Zip', ext: '.7z', desc: 'High-compression 7Z format with LZMA2', color: '#059669' },
  { name: 'TAR', ext: '.tar', desc: 'TAR bundling with optional GZIP/BZIP2 compression', color: '#d97706' },
  { name: 'GZIP', ext: '.gz', desc: 'Standalone GZIP compression support', color: '#dc2626' },
  { name: 'BZIP2', ext: '.bz2', desc: 'Standalone BZIP2 compression support', color: '#0891b2' },
]

const steps = [
  { num: '01', title: 'Install NueZip', desc: 'Download from the Mac App Store or GitHub. Launch and grant necessary permissions.' },
  { num: '02', title: 'Open Any Archive', desc: 'Double-click any archive file, or use the Finder context menu to extract directly.' },
  { num: '03', title: 'Compress & Manage', desc: 'Create new archives, batch process files, encrypt with passwords, and more.' },
]

const faqs = [
  {
    question: "Is NueZip free?",
    answer: "NueZip is a paid app available on the Mac App Store. A trial version may be available for testing."
  },
  {
    question: "What formats does NueZip support?",
    answer: "NueZip supports RAR, ZIP, 7-Zip, TAR, GZIP, and BZIP2 formats for both compression and extraction."
  },
  {
    question: "Which macOS versions are supported?",
    answer: "NueZip supports macOS 14 Sonoma and later, optimized for Apple Silicon (M-series)."
  },
  {
    question: "Does NueZip work offline?",
    answer: "Yes. All archive operations work fully offline. No internet connection is required for compression or extraction."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. NueZip runs entirely locally on your Mac with no data uploads. Password-protected archives use industry-standard encryption."
  }
]
</script>

<style scoped>
.advanced-home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--ah-navbar-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--ah-navbar-border);
  z-index: 1000;
  transition: all 0.3s ease;
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

.nav-brand .brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.brand-logo {
  height: 32px;
  width: auto;
}

.brand-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.nav-links {
  display: none;
  align-items: center;
  gap: 30px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-appearance {
  display: flex;
  align-items: center;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--ah-card-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--ah-card-shadow);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Hero Section */
.hero-section {
  padding: 120px 0 100px;
  background: var(--ah-hero-bg);
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 20px;
  line-height: 1.1;
  color: var(--vp-c-text-1);
  background: linear-gradient(135deg, var(--ah-hero-title-from) 0%, var(--ah-hero-title-to) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 20px;
  color: var(--vp-c-text-1);
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  margin: 0 0 40px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  max-width: 500px;
}

.hero-actions {
  margin-top: 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: #000000;
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.7);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: #ffffff;
  transform: translateY(-1px);
}

/* HomeActions 组件样式 */
.home-badge-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
  justify-content: left;
}

.store-badge-link {
  display: inline-flex;
  border-radius: 10px;
  transition: opacity 0.18s ease, transform 0.18s ease;
  outline-offset: 3px;
}

.store-badge-link:hover {
  opacity: 0.82;
  transform: translateY(-1px);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: var(--ah-card-bg);
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: var(--ah-card-shadow);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.card-icon {
  font-size: 18px;
  color: #ef6400;
  display: flex;
  align-items: center;
}

.hero-image {
  position: relative;
  z-index: 1;
}

.hero-image img {
  width: 100%;
  max-width: 700px;
  height: auto;
}

.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Features Section */
.features-section {
  padding: 120px 0;
  background: var(--vp-c-bg);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.feature-card {
  background: var(--ah-card-bg);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: var(--ah-card-shadow);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--ah-card-shadow-hover);
  border-color: var(--vp-c-brand-1);
}

.feature-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-icon img {
  filter: brightness(0) invert(1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.feature-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 24px;
  font-size: 1rem;
}

.feature-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.feature-link:hover {
  color: var(--vp-c-brand-1);
}

/* Formats Preview Section */
.formats-section {
  padding: 120px 0;
  background: var(--vp-c-bg-soft);
}

.formats-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.format-card {
  background: var(--ah-card-bg);
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: var(--ah-card-shadow);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.format-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--ah-card-shadow);
  border-color: var(--vp-c-brand-1);
}

.format-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.format-ext {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

.format-info {
  flex: 1;
}

.format-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px;
}

.format-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

.formats-cta {
  text-align: center;
}

/* How It Works Section */
.how-section {
  padding: 120px 0;
  background: var(--vp-c-bg);
}

.how-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.step-card {
  text-align: center;
  padding: 40px 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--ah-card-shadow);
}

.step-number {
  font-size: 3rem;
  font-weight: 800;
  color: #ef6400;
  margin-bottom: 16px;
  line-height: 1;
}

.step-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.step-desc {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

/* FAQ Section */
.faq-section {
  padding: 120px 0;
  background: var(--vp-c-bg);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.faq-grid {
  display: grid;
  gap: 16px;
}

.faq-item {
  background: var(--ah-card-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.2s ease;
}

.faq-item:hover {
  box-shadow: var(--ah-card-shadow);
}

.faq-details {
  width: 100%;
}

.faq-question {
  padding: 24px 30px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  border: none;
  outline: none;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-question:hover {
  background: var(--ah-faq-hover-bg);
}

.faq-question::after {
  content: '+';
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.2s;
}

.faq-details[open] .faq-question::after {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 30px 24px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 20px;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.25rem;
  margin: 0 0 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: #ffffff;
  padding: 80px 0 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 80px;
  margin-bottom: 40px;
}

.footer-brand .footer-logo {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.footer-tagline {
  color: #cccccc;
  margin: 0;
  font-size: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 20px;
  color: #ffffff;
}

.footer-link {
  display: block;
  color: #cccccc;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding-top: 40px;
  text-align: center;
}

.footer-copyright {
  margin: 0;
  color: #999999;
  font-size: 0.9rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(2deg); }
  66% { transform: translateY(5px) rotate(-2deg); }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-section {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .features-section,
  .testimonials-section,
  .faq-section,
  .cta-section {
    padding: 80px 0;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>