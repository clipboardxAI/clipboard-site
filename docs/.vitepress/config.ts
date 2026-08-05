import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/clipboard-site/',
  title: 'Clipboard x AI',
  titleTemplate: 'NueZip — :title',
  description: 'NueZip — Professional archive manager for macOS. Compress, extract, and manage ZIP, RAR, 7Z, TAR and more.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'nuezip, archive, compression, macos, zip, rar, 7z, extract, compress, file-manager' }],
    ['meta', { name: 'author', content: 'NueZip Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'NueZip' }],
    ['meta', { property: 'og:url', content: 'https://nuezip.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'NueZip — Professional Archive Manager for macOS' }],
    ['meta', { property: 'og:description', content: 'Compress, extract, and manage all major archive formats on macOS. Native, fast, and secure.' }],
    ['meta', { property: 'og:image', content: 'https://nuezip.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'NueZip Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://nuezip.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'NueZip — Professional Archive Manager for macOS' }],
    ['meta', { name: 'twitter:description', content: 'Compress, extract, and manage all major archive formats on macOS. Native, fast, and secure.' }],
    ['meta', { name: 'twitter:image', content: 'https://nuezip.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'NueZip Preview' }],
  ],
  themeConfig: {
    siteTitle: 'NueZip',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Marketplace', link: '/marketplace' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Formats', link: '/guide/formats' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'GitHub', link: 'https://github.com/w3cub/clipboardxai' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Supported Formats', link: '/guide/formats' },
              { text: 'Permissions', link: '/guide/permissions' },
              { text: 'Troubleshooting', link: '/guide/troubleshooting' },
              { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Privacy Choices', link: '/guide/privacy-choices' },
          { text: 'Terms of Service', link: '/guide/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/w3cub/clipboardxai' }
    ],
    footer: {
      message: 'Built for macOS — smart clipboard actions, powered by AI.',
      copyright: 'Copyright © 2026 Clipboard x AI Project. All rights reserved.',
      items: [
        {
          text: 'Product',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Features', link: '/#features' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Formats', link: '/guide/formats' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Documentation', link: '/guide/introduction' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'Contact', link: 'mailto:nuezip@w3cub.com' }
          ]
        },
        {
        text: 'Company',
        items: [
          { text: 'About', link: '/guide/introduction' },
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Terms of Service', link: '/guide/terms' },
          { text: 'GitHub', link: 'https://github.com/w3cub/clipboardxai' }
        ]
      }
      ]
    }
  }
})