/**
 * i18n page content for AdvancedHome & MarketplaceView.
 *
 * All translatable UI strings that are NOT in markdown frontmatter live here,
 * keyed by locale. The Vue components import this map and pick the entry for
 * the current VitePress language.
 */

export type Lang = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'de' | 'es' | 'fr'

export const SUPPORTED_LANGS: Lang[] = [
  'en', 'zh-CN', 'zh-TW', 'ja', 'de', 'es', 'fr',
]

// ── AdvancedHome ────────────────────────────────────────────────

export interface HomeContent {
  /** Floating hero badge cards */
  floatingCards: string[]
  /** Section headers */
  sections: {
    featuresTitle: string
    featuresSubtitle: string
    categoriesTitle: string
    categoriesSubtitle: string
    howTitle: string
    howSubtitle: string
    faqTitle: string
    faqSubtitle: string
  }
  /** "Open the Marketplace" button in the categories section */
  openMarketplace: string
  /** CTA section */
  cta: {
    title: string
    description: string
    primary: string
    primaryLink: string
    secondary: string
    secondaryLink: string
  }
  /** Action category cards */
  categories: { name: string; badge: string; desc: string; color: string }[]
  /** "How it works" steps */
  steps: { num: string; title: string; desc: string }[]
  /** FAQ entries */
  faqs: { question: string; answer: string }[]
}

export const homeContent: Record<Lang, HomeContent> = {
  en: {
    floatingCards: ['Smart Summarize', 'Instant Translate', 'Local & Private'],
    sections: {
      featuresTitle: 'Key Features',
      featuresSubtitle: 'Everything you need to make your clipboard work harder on macOS',
      categoriesTitle: 'Action Categories',
      categoriesSubtitle: 'Browse ready-made AI actions in the marketplace',
      howTitle: 'How It Works',
      howSubtitle: 'Simple and intuitive, just like macOS should be',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Quick answers for macOS users',
    },
    openMarketplace: 'Open the Marketplace',
    cta: {
      title: 'Ready to Make Your Clipboard Smarter?',
      description: 'Download ClipboardxAI and turn every copy into an action — private on your Mac, powered by AI when you want it.',
      primary: 'Get Started',
      primaryLink: '/guide/installation',
      secondary: 'How to Use',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: 'Writing', badge: 'WR', desc: 'Polish, expand and rewrite copy', color: '#ef6400' },
      { name: 'Developer', badge: 'DV', desc: 'Explain code and generate snippets', color: '#2563eb' },
      { name: 'Productivity', badge: 'PD', desc: 'Summarize and structure notes', color: '#059669' },
      { name: 'Translate', badge: 'TR', desc: 'Translate between languages', color: '#7c3aed' },
      { name: 'Social', badge: 'SO', desc: 'Draft replies and posts', color: '#d97706' },
      { name: 'Analytics', badge: 'AN', desc: 'Extract insight from text', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: 'Install & Launch', desc: 'Download from the Mac App Store or GitHub, then launch from the menu bar. Grant the permissions it needs.' },
      { num: '02', title: 'Copy Anything', desc: 'Your clipboard history is captured automatically. Open the menu bar to browse and search past clips.' },
      { num: '03', title: 'Run an Action', desc: 'Pick a built-in tool or AI action — or flip on auto-run to transform every copy the instant you make it.' },
    ],
    faqs: [
      { question: 'Is ClipboardxAI free?', answer: 'The app is free to download. Built-in local tools work with no account. Cloud AI actions use your own provider API key, so you only pay the AI provider directly.' },
      { question: 'Which macOS versions are supported?', answer: 'ClipboardxAI requires macOS 14 Sonoma or later, optimized for Apple Silicon (M-series) with Intel support.' },
      { question: 'Does it work offline?', answer: 'Yes. Clipboard history and the built-in local tools — extract links, count stats, collapse blank lines, and more — run entirely on your Mac with no internet connection.' },
      { question: 'Is my clipboard data private?', answer: 'Your clipboard history stays on your device. Cloud AI is opt-in and sends content only to the provider you configure, using a key stored in your Keychain. We never receive or store your clips.' },
      { question: 'Which AI providers are supported?', answer: 'Any OpenAI-compatible provider: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral, and local Ollama — plus OpenAI, Anthropic and Gemini.' },
    ],
  },

  'zh-CN': {
    floatingCards: ['智能摘要', '即时翻译', '本地隐私'],
    sections: {
      featuresTitle: '核心功能',
      featuresSubtitle: '让 macOS 剪贴板更强大的一切工具',
      categoriesTitle: '动作分类',
      categoriesSubtitle: '浏览市场中的精选 AI 动作',
      howTitle: '工作原理',
      howSubtitle: '简洁直观，正如 macOS 该有的样子',
      faqTitle: '常见问题',
      faqSubtitle: 'macOS 用户的快速解答',
    },
    openMarketplace: '打开动作市场',
    cta: {
      title: '准备好让剪贴板更智能了吗？',
      description: '下载 ClipboardxAI，将每一次复制变成一次操作 — 在 Mac 上本地运行，按需启用 AI。',
      primary: '开始使用',
      primaryLink: '/guide/installation',
      secondary: '使用指南',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: '写作', badge: 'WR', desc: '润色、扩展和改写文案', color: '#ef6400' },
      { name: '开发者', badge: 'DV', desc: '解释代码并生成代码片段', color: '#2563eb' },
      { name: '效率', badge: 'PD', desc: '摘要和结构化笔记', color: '#059669' },
      { name: '翻译', badge: 'TR', desc: '在语言之间翻译', color: '#7c3aed' },
      { name: '社交', badge: 'SO', desc: '起草回复和帖子', color: '#d97706' },
      { name: '分析', badge: 'AN', desc: '从文本中提取洞察', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: '安装并启动', desc: '从 Mac App Store 或 GitHub 下载，然后从菜单栏启动。授予所需权限即可。' },
      { num: '02', title: '复制任意内容', desc: '剪贴板历史会自动记录。打开菜单栏即可浏览和搜索历史记录。' },
      { num: '03', title: '运行动作', desc: '选择内置工具或 AI 动作 — 或开启自动运行，在复制的瞬间自动转换。' },
    ],
    faqs: [
      { question: 'ClipboardxAI 是免费的吗？', answer: '应用免费下载。内置本地工具无需账号。云端 AI 动作使用您自己的 API 密钥，费用直接支付给 AI 服务商。' },
      { question: '支持哪些 macOS 版本？', answer: 'ClipboardxAI 需要 macOS 14 Sonoma 或更高版本，针对 Apple Silicon（M 系列）优化，同时支持 Intel。' },
      { question: '可以离线使用吗？', answer: '可以。剪贴板历史和内置本地工具 — 提取链接、统计字数、折叠空行等 — 完全在 Mac 上运行，无需网络连接。' },
      { question: '我的剪贴板数据安全吗？', answer: '剪贴板历史保留在您的设备上。云端 AI 为可选功能，仅将内容发送至您配置的服务商，使用存储在钥匙串中的密钥。我们从不接收或存储您的剪贴内容。' },
      { question: '支持哪些 AI 服务商？', answer: '任何 OpenAI 兼容的服务商：DeepSeek、MiniMax、智谱 GLM、Kimi（月之暗面）、Mistral 和本地 Ollama — 以及 OpenAI、Anthropic 和 Gemini。' },
    ],
  },

  'zh-TW': {
    floatingCards: ['智慧摘要', '即時翻譯', '本地隱私'],
    sections: {
      featuresTitle: '核心功能',
      featuresSubtitle: '讓 macOS 剪貼板更強大的一切工具',
      categoriesTitle: '動作分類',
      categoriesSubtitle: '瀏覽市集中的精選 AI 動作',
      howTitle: '工作原理',
      howSubtitle: '簡潔直覺，正如 macOS 該有的樣子',
      faqTitle: '常見問題',
      faqSubtitle: 'macOS 使用者的快速解答',
    },
    openMarketplace: '開啟動作市場',
    cta: {
      title: '準備好讓剪貼板更智慧了嗎？',
      description: '下載 ClipboardxAI，將每一次複製變成一次操作 — 在 Mac 上本地執行，按需啟用 AI。',
      primary: '開始使用',
      primaryLink: '/guide/installation',
      secondary: '使用指南',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: '寫作', badge: 'WR', desc: '潤飾、擴展和改寫文案', color: '#ef6400' },
      { name: '開發者', badge: 'DV', desc: '解釋程式碼並產生程式碼片段', color: '#2563eb' },
      { name: '效率', badge: 'PD', desc: '摘要和結構化筆記', color: '#059669' },
      { name: '翻譯', badge: 'TR', desc: '在語言之間翻譯', color: '#7c3aed' },
      { name: '社交', badge: 'SO', desc: '草擬回覆和貼文', color: '#d97706' },
      { name: '分析', badge: 'AN', desc: '從文字中提取洞察', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: '安裝並啟動', desc: '從 Mac App Store 或 GitHub 下載，然後從選單列啟動。授予所需權限即可。' },
      { num: '02', title: '複製任意內容', desc: '剪貼板歷史會自動記錄。開啟選單列即可瀏覽和搜尋歷史記錄。' },
      { num: '03', title: '執行動作', desc: '選擇內建工具或 AI 動作 — 或開啟自動執行，在複製的瞬間自動轉換。' },
    ],
    faqs: [
      { question: 'ClipboardxAI 是免費的嗎？', answer: '應用免費下載。內建本地工具無需帳號。雲端 AI 動作使用您自己的 API 金鑰，費用直接支付給 AI 服務商。' },
      { question: '支援哪些 macOS 版本？', answer: 'ClipboardxAI 需要 macOS 14 Sonoma 或更高版本，針對 Apple Silicon（M 系列）最佳化，同時支援 Intel。' },
      { question: '可以離線使用嗎？', answer: '可以。剪貼板歷史和內建本地工具 — 擷取連結、統計字數、摺疊空行等 — 完全在 Mac 上執行，無需網路連線。' },
      { question: '我的剪貼板資料安全嗎？', answer: '剪貼板歷史保留在您的裝置上。雲端 AI 為可選功能，僅將內容傳送至您設定的服務商，使用儲存在鑰匙圈中的金鑰。我們從不接收或儲存您的剪貼內容。' },
      { question: '支援哪些 AI 服務商？', answer: '任何 OpenAI 相容的服務商：DeepSeek、MiniMax、智譜 GLM、Kimi（月之暗面）、Mistral 和本地 Ollama — 以及 OpenAI、Anthropic 和 Gemini。' },
    ],
  },

  ja: {
    floatingCards: ['スマート要約', '即時翻訳', 'ローカル＆プライベート'],
    sections: {
      featuresTitle: '主な機能',
      featuresSubtitle: 'macOS のクリップボードをより活用するために必要なすべて',
      categoriesTitle: 'アクションカテゴリ',
      categoriesSubtitle: 'マーケットの AI アクションを browse',
      howTitle: '使い方',
      howSubtitle: 'macOS らしくシンプルで直感的',
      faqTitle: 'よくある質問',
      faqSubtitle: 'macOS ユーザーのためのクイック回答',
    },
    openMarketplace: 'マーケットを開く',
    cta: {
      title: 'クリップボードをスマートにしませんか？',
      description: 'ClipboardxAI をダウンロードして、コピーのたびにアクションを実行 — Mac 上でプライベートに、AI は必要な時に。',
      primary: 'はじめる',
      primaryLink: '/guide/installation',
      secondary: '使い方',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: 'ライティング', badge: 'WR', desc: 'コピーの推敲・拡張・書き換え', color: '#ef6400' },
      { name: 'デベロッパー', badge: 'DV', desc: 'コードの解説とスニペット生成', color: '#2563eb' },
      { name: '生産性', badge: 'PD', desc: 'ノートの要約と構造化', color: '#059669' },
      { name: '翻訳', badge: 'TR', desc: '言語間の翻訳', color: '#7c3aed' },
      { name: 'ソーシャル', badge: 'SO', desc: '返信や投稿の下書き', color: '#d97706' },
      { name: '分析', badge: 'AN', desc: 'テキストからインサイトを抽出', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: 'インストール＆起動', desc: 'Mac App Store または GitHub からダウンロードし、メニューバーから起動します。必要な権限を付与してください。' },
      { num: '02', title: 'コピーするだけ', desc: 'クリップボード履歴が自動的に記録されます。メニューバーを開いて過去のクリップを検索できます。' },
      { num: '03', title: 'アクションを実行', desc: '内蔵ツールまたは AI アクションを選ぶ — 自動実行をオンにすれば、コピーした瞬間に変換されます。' },
    ],
    faqs: [
      { question: 'ClipboardxAI は無料ですか？', answer: 'アプリは無料でダウンロードできます。内蔵のローカルツールはアカウント不要で利用できます。クラウド AI アクションはご自身の API キーを使用するため、費用は AI プロバイダーに直接支払われます。' },
      { question: '対応する macOS バージョンは？', answer: 'ClipboardxAI は macOS 14 Sonoma 以降が必要です。Apple Silicon（M シリーズ）に最適化され、Intel もサポートします。' },
      { question: 'オフラインで動作しますか？', answer: 'はい。クリップボード履歴と内蔵のローカルツール — リンク抽出、文字数カウント、空行削除など — はすべて Mac 上で実行され、インターネット接続は不要です。' },
      { question: 'クリップボードデータは安全ですか？', answer: 'クリップボード履歴はデバイス上に保存されます。クラウド AI はオプトインで、設定したプロバイダーにのみコンテンツを送信し、Keychain に保存されたキーを使用します。当社はクリップの内容を受信・保存しません。' },
      { question: '対応する AI プロバイダーは？', answer: 'OpenAI 互換のプロバイダー：DeepSeek、MiniMax、Zhipu GLM、Kimi（Moonshot）、Mistral、ローカル Ollama — および OpenAI、Anthropic、Gemini。' },
    ],
  },

  de: {
    floatingCards: ['Intelligent Zusammenfassen', 'Sofort Übersetzen', 'Lokal & Privat'],
    sections: {
      featuresTitle: 'Hauptfunktionen',
      featuresSubtitle: 'Alles, was du brauchst, um deine Zwischenablage auf macOS zu optimieren',
      categoriesTitle: 'Aktionskategorien',
      categoriesSubtitle: 'Durchsuche vorgefertigte KI-Aktionen im Markt',
      howTitle: 'So funktioniert\'s',
      howSubtitle: 'Einfach und intuitiv, wie es sich für macOS gehört',
      faqTitle: 'Häufig gestellte Fragen',
      faqSubtitle: 'Schnelle Antworten für macOS-Nutzer',
    },
    openMarketplace: 'Markt öffnen',
    cta: {
      title: 'Bereit, deine Zwischenablage schlau zu machen?',
      description: 'Lade ClipboardxAI herunter und verwandle jedes Kopieren in eine Aktion — privat auf deinem Mac, mit AI wenn du willst.',
      primary: 'Loslegen',
      primaryLink: '/guide/installation',
      secondary: 'Anwendung',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: 'Schreiben', badge: 'WR', desc: 'Texte überarbeiten, erweitern und umschreiben', color: '#ef6400' },
      { name: 'Entwickler', badge: 'DV', desc: 'Code erklären und Snippets generieren', color: '#2563eb' },
      { name: 'Produktivität', badge: 'PD', desc: 'Notizen zusammenfassen und strukturieren', color: '#059669' },
      { name: 'Übersetzen', badge: 'TR', desc: 'Zwischen Sprachen übersetzen', color: '#7c3aed' },
      { name: 'Sozial', badge: 'SO', desc: 'Antworten und Beiträge verfassen', color: '#d97706' },
      { name: 'Analyse', badge: 'AN', desc: 'Erkenntnisse aus Text extrahieren', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: 'Installieren & Starten', desc: 'Lade die App aus dem Mac App Store oder von GitHub herunter und starte sie aus der Menüleiste. Erteile die benötigten Berechtigungen.' },
      { num: '02', title: 'Etwas kopieren', desc: 'Deine Zwischenablagen-Historie wird automatisch erfasst. Öffne die Menüleiste, um vergangene Clips zu durchsuchen.' },
      { num: '03', title: 'Aktion ausführen', desc: 'Wähle ein integriertes Werkzeug oder eine KI-Aktion — oder aktiviere Auto-Run, um jede Kopie sofort zu transformieren.' },
    ],
    faqs: [
      { question: 'Ist ClipboardxAI kostenlos?', answer: 'Die App ist kostenlos herunterladbar. Integrierte lokale Werkzeuge funktionieren ohne Konto. Cloud-KI-Aktionen verwenden deinen eigenen API-Schlüssel, du zahlst also direkt an den KI-Anbieter.' },
      { question: 'Welche macOS-Versionen werden unterstützt?', answer: 'ClipboardxAI benötigt macOS 14 Sonoma oder neuer, optimiert für Apple Silicon (M-Serie) mit Intel-Unterstützung.' },
      { question: 'Funktioniert es offline?', answer: 'Ja. Zwischenablagen-Historie und integrierte lokale Werkzeuge — Links extrahieren, Statistiken zählen, Leerzeilen entfernen und mehr — laufen vollständig auf deinem Mac ohne Internetverbindung.' },
      { question: 'Sind meine Zwischenablagedaten privat?', answer: 'Deine Historie bleibt auf deinem Gerät. Cloud-KI ist optional und sendet Inhalte nur an den von dir konfigurierten Anbieter, mit einem im Keychain gespeicherten Schlüssel. Wir empfangen oder speichern deine Clips nie.' },
      { question: 'Welche KI-Anbieter werden unterstützt?', answer: 'Jeder OpenAI-kompatible Anbieter: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral und lokales Ollama — sowie OpenAI, Anthropic und Gemini.' },
    ],
  },

  es: {
    floatingCards: ['Resumen Inteligente', 'Traducción Instantánea', 'Local y Privado'],
    sections: {
      featuresTitle: 'Características principales',
      featuresSubtitle: 'Todo lo que necesitas para que tu portapapeles funcione mejor en macOS',
      categoriesTitle: 'Categorías de acciones',
      categoriesSubtitle: 'Explora acciones de IA listas para usar en el mercado',
      howTitle: 'Cómo funciona',
      howSubtitle: 'Simple e intuitivo, como debería ser macOS',
      faqTitle: 'Preguntas frecuentes',
      faqSubtitle: 'Respuestas rápidas para usuarios de macOS',
    },
    openMarketplace: 'Abrir el mercado',
    cta: {
      title: '¿Listo para hacer tu portapapeles más inteligente?',
      description: 'Descarga ClipboardxAI y convierte cada copia en una acción — privada en tu Mac, con IA cuando la necesites.',
      primary: 'Empezar',
      primaryLink: '/guide/installation',
      secondary: 'Cómo usar',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: 'Escritura', badge: 'WR', desc: 'Pulir, ampliar y reescribir textos', color: '#ef6400' },
      { name: 'Desarrollador', badge: 'DV', desc: 'Explicar código y generar fragmentos', color: '#2563eb' },
      { name: 'Productividad', badge: 'PD', desc: 'Resumir y estructurar notas', color: '#059669' },
      { name: 'Traducir', badge: 'TR', desc: 'Traducir entre idiomas', color: '#7c3aed' },
      { name: 'Social', badge: 'SO', desc: 'Redactar respuestas y publicaciones', color: '#d97706' },
      { name: 'Análisis', badge: 'AN', desc: 'Extraer información del texto', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: 'Instalar y abrir', desc: 'Descarga desde el Mac App Store o GitHub y ábrelo desde la barra de menú. Concede los permisos necesarios.' },
      { num: '02', title: 'Copiar cualquier cosa', desc: 'Tu historial del portapapeles se captura automáticamente. Abre la barra de menú para buscar clips anteriores.' },
      { num: '03', title: 'Ejecutar una acción', desc: 'Elige una herramienta integrada o una acción de IA — o activa la ejecución automática para transformar cada copia al instante.' },
    ],
    faqs: [
      { question: '¿ClipboardxAI es gratis?', answer: 'La app es gratuita. Las herramientas locales integradas funcionan sin cuenta. Las acciones de IA en la nube usan tu propia clave de API, por lo que pagas directamente al proveedor de IA.' },
      { question: '¿Qué versiones de macOS son compatibles?', answer: 'ClipboardxAI requiere macOS 14 Sonoma o posterior, optimizado para Apple Silicon (serie M) con soporte para Intel.' },
      { question: '¿Funciona sin conexión?', answer: 'Sí. El historial del portapapeles y las herramientas locales integradas — extraer enlaces, contar palabras, colapsar líneas en blanco y más — se ejecutan completamente en tu Mac sin conexión a internet.' },
      { question: '¿Mis datos del portapapeles son privados?', answer: 'Tu historial permanece en tu dispositivo. La IA en la nube es opcional y envía contenido solo al proveedor que configures, usando una clave almacenada en tu Keychain. Nunca recibimos ni almacenamos tus clips.' },
      { question: '¿Qué proveedores de IA son compatibles?', answer: 'Cualquier proveedor compatible con OpenAI: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral y Ollama local — además de OpenAI, Anthropic y Gemini.' },
    ],
  },

  fr: {
    floatingCards: ['Résumé Intelligent', 'Traduction Instantanée', 'Local & Privé'],
    sections: {
      featuresTitle: 'Fonctionnalités clés',
      featuresSubtitle: 'Tout ce qu\'il faut pour exploiter au mieux votre presse-papiers sur macOS',
      categoriesTitle: 'Catégories d\'actions',
      categoriesSubtitle: 'Parcourez les actions IA prêtes à l\'emploi dans le marketplace',
      howTitle: 'Comment ça marche',
      howSubtitle: 'Simple et intuitif, comme macOS devrait l\'être',
      faqTitle: 'Questions fréquentes',
      faqSubtitle: 'Réponses rapides pour les utilisateurs macOS',
    },
    openMarketplace: 'Ouvrir le marketplace',
    cta: {
      title: 'Prêt à rendre votre presse-papiers plus intelligent ?',
      description: 'Téléchargez ClipboardxAI et transformez chaque copie en action — privée sur votre Mac, propulsée par IA à la demande.',
      primary: 'Commencer',
      primaryLink: '/guide/installation',
      secondary: 'Mode d\'emploi',
      secondaryLink: '/guide/usage',
    },
    categories: [
      { name: 'Écriture', badge: 'WR', desc: 'Polir, développer et réécrire du texte', color: '#ef6400' },
      { name: 'Développeur', badge: 'DV', desc: 'Expliquer le code et générer des extraits', color: '#2563eb' },
      { name: 'Productivité', badge: 'PD', desc: 'Résumer et structurer des notes', color: '#059669' },
      { name: 'Traduction', badge: 'TR', desc: 'Traduire entre les langues', color: '#7c3aed' },
      { name: 'Social', badge: 'SO', desc: 'Rédiger des réponses et des publications', color: '#d97706' },
      { name: 'Analyse', badge: 'AN', desc: 'Extraire des informations du texte', color: '#0891b2' },
    ],
    steps: [
      { num: '01', title: 'Installer et lancer', desc: 'Téléchargez depuis le Mac App Store ou GitHub, puis lancez depuis la barre de menus. Accordez les autorisations nécessaires.' },
      { num: '02', title: 'Copier n\'importe quoi', desc: 'Votre historique de presse-papiers est capturé automatiquement. Ouvrez la barre de menus pour parcourir vos clips.' },
      { num: '03', title: 'Lancer une action', desc: 'Choisissez un outil intégré ou une action IA — ou activez l\'exécution automatique pour transformer chaque copie à l\'instant.' },
    ],
    faqs: [
      { question: 'ClipboardxAI est-il gratuit ?', answer: 'L\'application est gratuite. Les outils locaux intégrés fonctionnent sans compte. Les actions IA dans le cloud utilisent votre propre clé API, vous payez donc directement le fournisseur d\'IA.' },
      { question: 'Quelles versions de macOS sont prises en charge ?', answer: 'ClipboardxAI nécessite macOS 14 Sonoma ou version ultérieure, optimisé pour Apple Silicon (série M) avec prise en charge d\'Intel.' },
      { question: 'Fonctionne-t-il hors ligne ?', answer: 'Oui. L\'historique du presse-papiers et les outils locaux intégrés — extraire des liens, compter des mots, supprimer les lignes vides, etc. — fonctionnent entièrement sur votre Mac sans connexion internet.' },
      { question: 'Mes données de presse-papiers sont-elles privées ?', answer: 'Votre historique reste sur votre appareil. L\'IA cloud est optionnelle et envoie le contenu uniquement au fournisseur que vous configurez, avec une clé stockée dans votre Keychain. Nous ne recevons ni ne stockons jamais vos clips.' },
      { question: 'Quels fournisseurs d\'IA sont pris en charge ?', answer: 'Tout fournisseur compatible OpenAI : DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral et Ollama local — ainsi qu\'OpenAI, Anthropic et Gemini.' },
    ],
  },
}

// ── MarketplaceView ─────────────────────────────────────────────

export interface MarketplaceContent {
  hero: { eyebrow: string; title: string; desc: string }
  all: string
  install: string
  prompt: string
  empty: string
  error: string
  countLabel: (actions: number, categories: number) => string
  getBy: (author: string) => string
}

export const marketplaceContent: Record<Lang, MarketplaceContent> = {
  en: {
    hero: {
      eyebrow: 'Action Marketplace',
      title: 'ClipboardxAI · Action Marketplace',
      desc: 'Community-curated AI actions for your clipboard. Browse, then click Install to open the app and add the action in one tap.',
    },
    all: 'All',
    install: 'Install',
    prompt: 'Prompt',
    empty: 'No actions in this category yet.',
    error: 'Failed to load the catalog. Make sure the site is deployed with the marketplace data.',
    countLabel: (a, c) => `${a} actions · ${c} categories`,
    getBy: (author) => `Get ${author}`,
  },
  'zh-CN': {
    hero: {
      eyebrow: '动作市场',
      title: 'ClipboardxAI · 动作市场',
      desc: '社区精选的剪贴板 AI 动作。浏览后点击「安装」，即可在 App 中一键添加。',
    },
    all: '全部',
    install: '安装',
    prompt: '提示词',
    empty: '该分类下暂无动作。',
    error: '加载目录失败。请确保网站已部署市场数据。',
    countLabel: (a, c) => `${a} 个动作 · ${c} 个分类`,
    getBy: (author) => `获取 ${author}`,
  },
  'zh-TW': {
    hero: {
      eyebrow: '動作市場',
      title: 'ClipboardxAI · 動作市場',
      desc: '社群精選的剪貼簿 AI 動作。瀏覽後點擊「安裝」，即可在 App 中一鍵加入。',
    },
    all: '全部',
    install: '安裝',
    prompt: '提示詞',
    empty: '此分類下尚無動作。',
    error: '載入目錄失敗。請確保網站已部署市場資料。',
    countLabel: (a, c) => `${a} 個動作 · ${c} 個分類`,
    getBy: (author) => `取得 ${author}`,
  },
  ja: {
    hero: {
      eyebrow: 'アクションマーケット',
      title: 'ClipboardxAI · アクションマーケット',
      desc: 'コミュニティが厳選したクリップボード用 AI アクション。閲覧後「インストール」をタップするとアプリが開き、ワンタップで追加できます。',
    },
    all: 'すべて',
    install: 'インストール',
    prompt: 'プロンプト',
    empty: 'このカテゴリにはまだアクションがありません。',
    error: 'カタログの読み込みに失敗しました。サイトにマーケットデータがデプロイされているか確認してください。',
    countLabel: (a, c) => `${a} アクション · ${c} カテゴリ`,
    getBy: (author) => `${author} を取得`,
  },
  de: {
    hero: {
      eyebrow: 'Aktionsmarkt',
      title: 'ClipboardxAI · Aktionsmarkt',
      desc: 'Community-kuratierte KI-Aktionen für deine Zwischenablage. Durchsuchen und auf Installieren tippen, um die Aktion in der App hinzuzufügen.',
    },
    all: 'Alle',
    install: 'Installieren',
    prompt: 'Prompt',
    empty: 'Noch keine Aktionen in dieser Kategorie.',
    error: 'Katalog konnte nicht geladen werden. Stelle sicher, dass die Site mit den Marktdaten bereitgestellt ist.',
    countLabel: (a, c) => `${a} Aktionen · ${c} Kategorien`,
    getBy: (author) => `${author} laden`,
  },
  es: {
    hero: {
      eyebrow: 'Mercado de acciones',
      title: 'ClipboardxAI · Mercado de acciones',
      desc: 'Acciones de IA seleccionadas por la comunidad para tu portapapeles. Explora y pulsa Instalar para añadir la acción en la app.',
    },
    all: 'Todos',
    install: 'Instalar',
    prompt: 'Prompt',
    empty: 'Aún no hay acciones en esta categoría.',
    error: 'No se pudo cargar el catálogo. Asegúrate de que el sitio esté desplegado con los datos del mercado.',
    countLabel: (a, c) => `${a} acciones · ${c} categorías`,
    getBy: (author) => `Obtener ${author}`,
  },
  fr: {
    hero: {
      eyebrow: 'Marché d\'actions',
      title: 'ClipboardxAI · Marché d\'actions',
      desc: 'Actions IA sélectionnées par la communauté pour votre presse-papiers. Parcourez et cliquez sur Installer pour ajouter l\'action dans l\'app.',
    },
    all: 'Tous',
    install: 'Installer',
    prompt: 'Prompt',
    empty: 'Aucune action dans cette catégorie pour le moment.',
    error: 'Échec du chargement du catalogue. Assurez-vous que le site est déployé avec les données du marketplace.',
    countLabel: (a, c) => `${a} actions · ${c} catégories`,
    getBy: (author) => `Obtenir ${author}`,
  },
}

// ── Helpers ─────────────────────────────────────────────────────

/** Prefix a path with the locale segment, or return as-is for English (root). */
export function localeLink(path: string, lang: string): string {
  if (!lang || lang === 'en') return path
  return `/${lang}${path}`
}
