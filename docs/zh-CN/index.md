---
layout: home

hero:
  name: "ClipboardxAI"
  text: "你的剪贴板，由 AI 升级"
  tagline: "macOS 智能剪贴板管理器。总结、翻译、转换和自动化你复制的任何内容 — 内置本地工具和可选的云端 AI。"
  image:
    src: /hero-illustration.png
    alt: ClipboardxAI
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/introduction
    - theme: alt
      text: 打开动作市场
      link: /zh-CN/marketplace

features:
  - icon:
      light: /icons/layers.svg
      dark: /icons/layers-dark.svg
      alt: Layers
      width: "24"
      height: "24"
    title: 剪贴板历史
    details: 你复制的一切都会被自动记录并支持搜索。从菜单栏快速跳转到历史记录中的任意条目。
    link: /guide/usage
    linkText: 了解更多
  - icon:
      light: /icons/zap.svg
      dark: /icons/zap-dark.svg
      alt: Zap
      width: "24"
      height: "24"
    title: 即时操作
    details: 一键对当前剪贴内容运行工具 — 或在复制时自动运行。
    link: /guide/usage
    linkText: 了解更多
  - icon:
      light: /icons/frame.svg
      dark: /icons/frame-dark.svg
      alt: Frame
      width: "24"
      height: "24"
    title: 内置本地工具
    details: 提取链接、统计字数、折叠空行等 — 全部在 Mac 上离线运行，无需网络。
    link: /guide/usage
    linkText: 探索工具
  - icon:
      light: /icons/sparkles.svg
      dark: /icons/sparkles-dark.svg
      alt: Sparkles
      width: "24"
      height: "24"
    title: AI 动作
    details: 使用云端 AI 进行摘要、翻译和改写。自带 DeepSeek、MiniMax、GLM、Kimi、Mistral 或 Ollama 的 API 密钥。
    link: /guide/installation
    linkText: 设置 AI
  - icon:
      light: /icons/eye.svg
      dark: /icons/eye-dark.svg
      alt: Eye
      width: "24"
      height: "24"
    title: 隐私优先
    details: 历史记录保留在你的设备上。云端 AI 为可选功能，使用存储在钥匙串中的 API 密钥 — 不会上传任何数据给我们。
    link: /guide/privacy
    linkText: 阅读隐私政策
  - icon:
      light: /icons/camera.svg
      dark: /icons/camera-dark.svg
      alt: Camera
      width: "24"
      height: "24"
    title: 动作市场
    details: 一键安装社区制作的 AI 动作。浏览写作、开发者、效率、翻译、社交和分析包。
    link: /zh-CN/marketplace
    linkText: 浏览市场

floatingCards:
  - 智能摘要
  - 即时翻译
  - 本地隐私
sections:
  featuresTitle: 核心功能
  featuresSubtitle: 让 macOS 剪贴板更强大的一切工具
  categoriesTitle: 动作分类
  categoriesSubtitle: 浏览市场中的精选 AI 动作
  howTitle: 工作原理
  howSubtitle: 简洁直观，正如 macOS 该有的样子
  faqTitle: 常见问题
  faqSubtitle: macOS 用户的快速解答
openMarketplace: 打开动作市场
cta:
  title: 准备好让剪贴板更智能了吗？
  description: 下载 ClipboardxAI，将每一次复制变成一次操作 — 在 Mac 上本地运行，按需启用 AI。
  primary: 开始使用
  primaryLink: /guide/installation
  secondary: 使用指南
  secondaryLink: /guide/usage
categories:
  - name: 写作
    badge: WR
    desc: 润色、扩展和改写文案
    color: "#ef6400"
  - name: 开发者
    badge: DV
    desc: 解释代码并生成代码片段
    color: "#2563eb"
  - name: 效率
    badge: PD
    desc: 摘要和结构化笔记
    color: "#059669"
  - name: 翻译
    badge: TR
    desc: 在语言之间翻译
    color: "#7c3aed"
  - name: 社交
    badge: SO
    desc: 起草回复和帖子
    color: "#d97706"
  - name: 分析
    badge: AN
    desc: 从文本中提取洞察
    color: "#0891b2"
steps:
  - num: "01"
    title: 安装并启动
    desc: 从 Mac App Store 下载，然后从菜单栏启动。授予所需权限即可。
  - num: "02"
    title: 复制任意内容
    desc: 剪贴板历史会自动记录。打开菜单栏即可浏览和搜索历史记录。
  - num: "03"
    title: 运行动作
    desc: 选择内置工具或 AI 动作 — 或开启自动运行，在复制的瞬间自动转换。
faqs:
  - question: ClipboardxAI 是免费的吗？
    answer: ClipboardxAI 是 Mac App Store 上的付费应用。购买后所有内置本地工具均已包含 —— 无需账号。云端 AI 动作使用您自己的 API 密钥，费用直接支付给 AI 服务商。
  - question: 支持哪些 macOS 版本？
    answer: ClipboardxAI 需要 macOS 14 Sonoma 或更高版本，针对 Apple Silicon（M 系列）优化，同时支持 Intel。
  - question: 可以离线使用吗？
    answer: 可以。剪贴板历史和内置本地工具 — 提取链接、统计字数、折叠空行等 — 完全在 Mac 上运行，无需网络连接。
  - question: 我的剪贴板数据安全吗？
    answer: 剪贴板历史保留在您的设备上。云端 AI 为可选功能，仅将内容发送至您配置的服务商，使用存储在钥匙串中的密钥。我们从不接收或存储您的剪贴内容。
  - question: 支持哪些 AI 服务商？
    answer: 任何 OpenAI 兼容的服务商：DeepSeek、MiniMax、智谱 GLM、Kimi（月之暗面）、Mistral 和本地 Ollama — 以及 OpenAI、Anthropic 和 Gemini。
---
