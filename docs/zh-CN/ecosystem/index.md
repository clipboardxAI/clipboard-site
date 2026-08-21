---
title: 生态合作伙伴
description: 第三方 macOS 应用如何通过出站深链接接入 ClipboxAI 的 Action Marketplace。
layout: doc
---

# 生态合作伙伴

ClipboxAI 是一个剪贴板中枢。但繁重的任务——文件压缩、图片优化、PDF 处理——更适合交给专门的同类应用去完成。**Action Marketplace** 已经内置了一个*第三方软件*分类，其中的操作会直接委派给你用户已安装的同类应用（[NueZip](https://github.com/w3cub/nuezip)、[Nicasa](https://github.com/w3cub/nicasa)，……）。

本页说明该集成如何运作，以及**你的**应用如何加入。

## 运作方式（出站委派，outbound delegation）

一个生态操作就是一个市场条目，它带有一个 `execution` 描述符，而非提示词：

```json
{
  "id": "nuezip-compress-zip",
  "name": "Compress to ZIP",
  "category": "ecosystem",
  "author": "NueZip",
  "appIcon": "icons/nuezip.png",
  "execution": {
    "kind": "externalApp",
    "scheme": "nuezip",
    "urlTemplate": "nuezip://quickCompress?files={{files}}&extra=zip"
  }
}
```

当用户点击 **Install** 时，ClipboxAI 会在本地注册该操作。当他们针对某个剪贴条目触发它时，应用会填充模板，并通过 `NSWorkspace.open(_:)` 打开目标应用：

- `{{files}}` —— 当前剪贴条目的绝对文件路径（多个文件以换行分隔）。
- `{{text}}` —— 纯文本内容。
- `{{returnURL}}` —— 一个可选的 `clipboxai://callback?…` 返回 URL，用于 x-callback-url 风格的往返调用（在同类应用实现后使用）。

如果目标应用**尚未安装**，该操作会从面板中隐藏，直到用户安装它——不会出现失效按钮。

## 同类应用的 URL Scheme 契约

要成为目标，你的 macOS 应用只需：

1. 在 `Info.plist` 中注册一个 URL scheme（`CFBundleURLTypes`）。
2. 处理入站 URL——从查询参数中读取 `files` / `text` 并据此操作。
3. （可选）完成后调用 `returnURL`，以便 ClipboxAI 显示「在 &lt;App&gt; 中已完成」的提示。

就这么简单。无需私有 API，无需共享代码——只需一个深链接。NueZip 与 Nicasa 的 Finder 扩展是可供你参考的实现。

## 加入生态

我们将目录保存在公开仓库中，任何人都可以贡献一个操作：

- 📦 **提交一个操作**（或申请添加你的应用），通过
  [clipboxAI/marketplace · Issues](https://github.com/clipboxAI/marketplace/issues)
- 🔀 或针对
  [`clipboxai-marketplace`](https://github.com/clipboxAI/marketplace)
  发起 Pull Request，添加你的操作 JSON。

### 指南

- 使用清晰的 `author` 与 `appIcon`（正方形 PNG，约 256×256，可透明）。
- 保持 `urlTemplate` 精简，并为任何自定义查询参数提供文档。
- 在发布前，使用实际已安装的应用测试往返调用。
- 尊重用户隐私——只对你明确委派的文件进行操作。

## 为什么要合作？

- **零集成成本**——一个深链接，无需 SDK。
- **分发**——你的应用操作会出现在每位用户的 ClipboxAI Marketplace 中。
- **上下文**——操作从剪贴板、Finder，或用户已有的任意工作位置触发。

[→ 提交集成 issue](https://github.com/clipboxAI/marketplace/issues)
