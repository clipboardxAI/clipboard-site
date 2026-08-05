<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="home-badge-row">
    <a
      href="https://apps.apple.com/app/id6785846417" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Download NueZip on the Mac App Store"
    >
      <img
        :src="withBase('/badges/Mac-App-Store.png')"
        alt="Download on the Mac App Store"
        class="store-badge"
        width="156"
        height="46"
      />
    </a>
    <a
      href="https://www.producthunt.com/products/nuezip-the-modern-mac-archive-utility?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nuezip-the-modern-mac-archive-utility"
      target="_blank"
      rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="NueZip on Product Hunt"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1198052&theme=light&t=1784197088081"
        alt="NueZip — The Modern Mac Archive Utility - Fast, secure, and built for macOS | Product Hunt"
        class="store-badge"
        width="250"
        height="54"
      />
    </a>
  </div>
</template>

<style scoped>
.btn-primary-link {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff7e33 0%, #ef6400 100%);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 100, 0, 0.3);
}

.btn-primary-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 100, 0, 0.4);
}
</style>
