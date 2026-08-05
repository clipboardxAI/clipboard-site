import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Clipboard x AI',
  titleTemplate: 'Clipboard x AI — :title',
  description: 'Clipboard x AI — Smart clipboard actions for macOS, powered by AI. Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#ef6400' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'clipboard, ai, macos, clipboard manager, smart actions, summarize, translate, automate, clipboardxai' }],
    ['meta', { name: 'author', content: 'Clipboard x AI Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Clipboard x AI' }],
    ['meta', { property: 'og:url', content: 'https://clipboard.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'Clipboard x AI — Smart Clipboard Actions Powered by AI' }],
    ['meta', { property: 'og:description', content: 'Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools on macOS. Native, fast, and private.' }],
    ['meta', { property: 'og:image', content: 'https://clipboard.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Clipboard x AI Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://clipboard.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'Clipboard x AI — Smart Clipboard Actions Powered by AI' }],
    ['meta', { name: 'twitter:description', content: 'Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools on macOS. Native, fast, and private.' }],
    ['meta', { name: 'twitter:image', content: 'https://clipboard.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Clipboard x AI Preview' }],
  ],
  themeConfig: {
    siteTitle: 'Clipboard x AI',
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
      { text: 'GitHub', link: 'https://github.com/clipboardxAI' },
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
      { icon: 'github', link: 'https://github.com/clipboardxAI' }
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
            { text: 'Contact', link: 'mailto:clipboardxai@w3cub.com' }
          ]
        },
        {
        text: 'Company',
        items: [
          { text: 'About', link: '/guide/introduction' },
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Terms of Service', link: '/guide/terms' },
          { text: 'GitHub', link: 'https://github.com/clipboardxAI' }
        ]
      }
      ]
    }
  }
})