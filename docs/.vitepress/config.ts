import { defineConfig } from 'vitepress'

// ── Per-locale UI strings (nav / sidebar / footer) ────────────────
// Guide/Legal body .md files remain English placeholders for now;
// only the chrome labels are localized here.
const STR = {
  en: {
    home: 'Home', marketplace: 'Marketplace', ecosystem: 'Ecosystem', guide: 'Guide', faq: 'FAQ',
    github: 'GitHub',
    guideGroup: 'Guide',
    intro: 'Introduction', install: 'Installation', usage: 'Usage',
    permissions: 'Permissions', troubleshooting: 'Troubleshooting',
    legalGroup: 'Legal',
    privacy: 'Privacy Policy', privacyChoices: 'Privacy Choices', terms: 'Terms of Service',
    footerMessage: 'Built for macOS — smart clipboard actions, powered by AI.',
    footerCopyright: 'Copyright © 2026 ClipboxAI Project. All rights reserved.',
    product: 'Product', about: 'About', features: 'Features',
    support: 'Support', documentation: 'Documentation', contact: 'Contact',
    company: 'Company',
  },
  'zh-CN': {
    home: '首页', marketplace: '动作市场', ecosystem: '生态合作', guide: '指南', faq: '常见问题',
    github: 'GitHub',
    guideGroup: '指南',
    intro: '简介', install: '安装', usage: '使用',
    permissions: '权限', troubleshooting: '故障排除',
    legalGroup: '法律',
    privacy: '隐私政策', privacyChoices: '隐私选项', terms: '服务条款',
    footerMessage: '为 macOS 打造 — 智能剪贴板操作，由 AI 驱动。',
    footerCopyright: '© 2026 ClipboxAI 项目。保留所有权利。',
    product: '产品', about: '关于', features: '功能',
    support: '支持', documentation: '文档', contact: '联系我们',
    company: '公司',
  },
  'zh-TW': {
    home: '首頁', marketplace: '動作市場', ecosystem: '生態合作', guide: '指南', faq: '常見問題',
    github: 'GitHub',
    guideGroup: '指南',
    intro: '簡介', install: '安裝', usage: '使用',
    permissions: '權限', troubleshooting: '故障排除',
    legalGroup: '法律',
    privacy: '隱私政策', privacyChoices: '隱私選項', terms: '服務條款',
    footerMessage: '為 macOS 打造 — 智慧剪貼板操作，由 AI 驅動。',
    footerCopyright: '© 2026 ClipboxAI 專案。保留所有權利。',
    product: '產品', about: '關於', features: '功能',
    support: '支援', documentation: '文件', contact: '聯絡我們',
    company: '公司',
  },
  ja: {
    home: 'ホーム', marketplace: 'アクション市場', ecosystem: 'エコシステム', guide: 'ガイド', faq: 'よくある質問',
    github: 'GitHub',
    guideGroup: 'ガイド',
    intro: 'はじめに', install: 'インストール', usage: '使い方',
    permissions: '権限', troubleshooting: 'トラブルシューティング',
    legalGroup: '法務',
    privacy: 'プライバシーポリシー', privacyChoices: 'プライバシーの選択', terms: '利用規約',
    footerMessage: 'macOS のために — AI で動くスマートなクリップボード操作。',
    footerCopyright: '© 2026 ClipboxAI プロジェクト. All rights reserved.',
    product: '製品', about: '概要', features: '機能',
    support: 'サポート', documentation: 'ドキュメント', contact: 'お問い合わせ',
    company: '企業',
  },
  de: {
    home: 'Start', marketplace: 'Aktionsmarkt', ecosystem: 'Ökosystem', guide: 'Anleitung', faq: 'FAQ',
    github: 'GitHub',
    guideGroup: 'Anleitung',
    intro: 'Einführung', install: 'Installation', usage: 'Nutzung',
    permissions: 'Berechtigungen', troubleshooting: 'Fehlerbehebung',
    legalGroup: 'Rechtliches',
    privacy: 'Datenschutz', privacyChoices: 'Datenschutz-Einstellungen', terms: 'Nutzungsbedingungen',
    footerMessage: 'Für macOS entwickelt — smarte Zwischenablagen-Aktionen, unterstützt von KI.',
    footerCopyright: '© 2026 ClipboxAI-Projekt. Alle Rechte vorbehalten.',
    product: 'Produkt', about: 'Über', features: 'Funktionen',
    support: 'Support', documentation: 'Dokumentation', contact: 'Kontakt',
    company: 'Unternehmen',
  },
  es: {
    home: 'Inicio', marketplace: 'Mercado de acciones', ecosystem: 'Ecosistema', guide: 'Guía', faq: 'Preguntas frecuentes',
    github: 'GitHub',
    guideGroup: 'Guía',
    intro: 'Introducción', install: 'Instalación', usage: 'Uso',
    permissions: 'Permisos', troubleshooting: 'Solución de problemas',
    legalGroup: 'Legal',
    privacy: 'Política de privacidad', privacyChoices: 'Opciones de privacidad', terms: 'Términos del servicio',
    footerMessage: 'Creado para macOS — acciones inteligentes para el portapapeles, impulsadas por IA.',
    footerCopyright: '© 2026 Proyecto ClipboxAI. Todos los derechos reservados.',
    product: 'Producto', about: 'Acerca de', features: 'Funciones',
    support: 'Soporte', documentation: 'Documentación', contact: 'Contacto',
    company: 'Empresa',
  },
  fr: {
    home: 'Accueil', marketplace: 'Marketplace d’actions', ecosystem: 'Écosystème', guide: 'Guide', faq: 'FAQ',
    github: 'GitHub',
    guideGroup: 'Guide',
    intro: 'Introduction', install: 'Installation', usage: 'Utilisation',
    permissions: 'Autorisations', troubleshooting: 'Dépannage',
    legalGroup: 'Légal',
    privacy: 'Politique de confidentialité', privacyChoices: 'Choix de confidentialité', terms: 'Conditions d’utilisation',
    footerMessage: 'Conçu pour macOS — des actions intelligentes pour le presse-papiers, propulsées par l’IA.',
    footerCopyright: '© 2026 Projet ClipboxAI. Tous droits réservés.',
    product: 'Produit', about: 'À propos', features: 'Fonctionnalités',
    support: 'Assistance', documentation: 'Documentation', contact: 'Contact',
    company: 'Société',
  },
}

// ── Build a themeConfig for a given locale ────────────────────────
// All *internal* links are prefixed with the locale segment so the
// default VitePress nav / sidebar / footer resolve to the localized
// page in every language. External (http/https/mailto) links are left
// untouched.
function tc(S: typeof STR.en, lang: string) {
  const base = !lang || lang === 'en' ? '' : `/${lang}`
  const L = (p: string) =>
    /^https?:\/\//.test(p) || p.startsWith('mailto:') || p.startsWith(base)
      ? p
      : `${base}${p}`
  return {
    nav: [
      { text: S.home, link: L('/') },
      { text: S.marketplace, link: `${base}/marketplace/` },
      { text: S.ecosystem, link: L('/ecosystem/') },
      { text: S.guide, link: L('/guide/introduction') },
      { text: S.faq, link: L('/guide/faq') },
      { text: S.github, link: 'https://github.com/clipboxAI' },
    ],
    sidebar: [
      {
        text: S.ecosystem,
        items: [
          { text: S.ecosystem, link: L('/ecosystem/') },
        ],
      },
      {
        text: S.guideGroup,
        items: [
          { text: S.intro, link: L('/guide/introduction') },
          { text: S.install, link: L('/guide/installation') },
          { text: S.usage, link: L('/guide/usage') },
          { text: S.permissions, link: L('/guide/permissions') },
          { text: S.troubleshooting, link: L('/guide/troubleshooting') },
          { text: S.faq, link: L('/guide/faq') },
        ],
      },
      {
        text: S.legalGroup,
        items: [
          { text: S.privacy, link: L('/guide/privacy') },
          { text: S.privacyChoices, link: L('/guide/privacy-choices') },
          { text: S.terms, link: L('/guide/terms') },
        ],
      },
    ],
    footer: {
      message: S.footerMessage,
      copyright: S.footerCopyright,
      items: [
        {
          text: S.product,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.features, link: L('/#features') },
            { text: S.marketplace, link: `${base}/marketplace/` },
            { text: S.ecosystem, link: L('/ecosystem/') },
            { text: S.install, link: L('/guide/installation') },
          ],
        },
        {
          text: S.support,
          items: [
            { text: S.documentation, link: L('/guide/introduction') },
            { text: S.faq, link: L('/guide/faq') },
            { text: S.troubleshooting, link: L('/guide/troubleshooting') },
            { text: S.contact, link: 'mailto:clipboxai@w3cub.com' },
          ],
        },
        {
          text: S.company,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.privacy, link: L('/guide/privacy') },
            { text: S.terms, link: L('/guide/terms') },
            { text: S.github, link: 'https://github.com/clipboxAI' },
          ],
        },
      ],
    },
  }
}

// ── Per-locale markdown renderer strings (containers + code copy) ─
const MD = {
  'zh-CN': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危险', infoLabel: '信息', detailsLabel: '详情',
    },
    codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' },
  },
  'zh-TW': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危險', infoLabel: '資訊', detailsLabel: '詳情',
    },
    codeCopyButton: { tooltipText: '複製程式碼', copiedText: '已複製' },
  },
  ja: {
    container: {
      tipLabel: 'ヒント', warningLabel: '警告', dangerLabel: '危険', infoLabel: '情報', detailsLabel: '詳細',
    },
    codeCopyButton: { tooltipText: 'コードをコピー', copiedText: 'コピーしました' },
  },
  de: {
    container: {
      tipLabel: 'Tipp', warningLabel: 'Warnung', dangerLabel: 'Gefahr', infoLabel: 'Info', detailsLabel: 'Details',
    },
    codeCopyButton: { tooltipText: 'Code kopieren', copiedText: 'Kopiert' },
  },
  es: {
    container: {
      tipLabel: 'Consejo', warningLabel: 'Advertencia', dangerLabel: 'Peligro', infoLabel: 'Info', detailsLabel: 'Detalles',
    },
    codeCopyButton: { tooltipText: 'Copiar código', copiedText: 'Copiado' },
  },
  fr: {
    container: {
      tipLabel: 'Astuce', warningLabel: 'Avertissement', dangerLabel: 'Danger', infoLabel: 'Info', detailsLabel: 'Détails',
    },
    codeCopyButton: { tooltipText: 'Copier le code', copiedText: 'Copié' },
  },
}

export default defineConfig({
  base: '/',
  title: 'ClipboxAI',
  titleTemplate: 'ClipboxAI — :title',
  description: 'ClipboxAI — Smart clipboard actions for macOS, powered by AI. Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],

    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#ef6400' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO
    ['meta', { name: 'keywords', content: 'clipboard, ai, macos, clipboard manager, smart actions, summarize, translate, automate, clipboxai' }],
    ['meta', { name: 'author', content: 'ClipboxAI Project' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'ClipboxAI' }],
    ['meta', { property: 'og:url', content: 'https://clipboard.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'ClipboxAI — Smart Clipboard Actions Powered by AI' }],
    ['meta', { property: 'og:description', content: 'Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools on macOS. Native, fast, and private.' }],
    ['meta', { property: 'og:image', content: 'https://clipboard.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'ClipboxAI Preview' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://clipboard.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'ClipboxAI — Smart Clipboard Actions Powered by AI' }],
    ['meta', { name: 'twitter:description', content: 'Transform, summarize, translate and automate your clipboard with built-in and cloud AI tools on macOS. Native, fast, and private.' }],
    ['meta', { name: 'twitter:image', content: 'https://clipboard.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'ClipboxAI Preview' }],
  ],
  themeConfig: {
    siteTitle: 'ClipboxAI',
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clipboxAI' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: tc(STR.en, 'en'),
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: tc(STR['zh-CN'], 'zh-CN'),
      markdown: MD['zh-CN'],
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: tc(STR['zh-TW'], 'zh-TW'),
      markdown: MD['zh-TW'],
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: tc(STR.ja, 'ja'),
      markdown: MD.ja,
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: tc(STR.de, 'de'),
      markdown: MD.de,
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: tc(STR.es, 'es'),
      markdown: MD.es,
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: tc(STR.fr, 'fr'),
      markdown: MD.fr,
    },
  },
})
