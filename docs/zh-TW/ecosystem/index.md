---
title: 生態系合作
description: 第三方 macOS 應用程式如何透過外送深層連結，接入 ClipboxAI 的動作市集。
layout: doc
---

# 生態系合作

ClipboxAI 是一個剪貼簿樞紐。但繁重的工作——檔案壓縮、圖片最佳化、PDF 處理——交由專門的同類應用程式來做會更好。**Action Marketplace（動作市集）** 已內建一個*第三方軟體*分類，其中的動作會直接委派給使用者已安裝的應用程式（[NueZip](https://github.com/w3cub/nuezip)、[Nicasa](https://github.com/w3cub/nicasa) 等）。

本頁說明整合的運作方式，以及**你的**應用程式如何加入。

## 運作方式（外送委派）

一個生態系動作其實就是一個帶有 `execution` 描述子（而非提示）的市集項目：

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

當使用者點擊 **Install（安裝）** 時，ClipboxAI 會在本地註冊該動作。當他們在某個剪貼簿項目上觸發它時，應用程式會填入模板，並透過 `NSWorkspace.open(_:)` 開啟目標應用程式：

- `{{files}}` — 目前剪貼簿項目的絕對檔案路徑（多個檔案時以換行分隔）。
- `{{text}}` — 純文字內容。
- `{{returnURL}}` — 選用的 `clipboxai://callback?…` 回傳 URL，用於 x-callback-url 形式的來回往返（待同類應用程式實作後使用）。

若目標應用程式**尚未安裝**，該動作會從面板中隱藏，直到使用者安裝為止——不會出現損壞的按鈕。

## 同類應用程式的 URL Scheme 合約

要成為目標，你的 macOS 應用程式只需：

1. 在 `Info.plist` 中註冊一個 URL scheme（`CFBundleURLTypes`）。
2. 處理傳入的 URL——從查詢中讀取 `files`／`text` 並對其執行動作。
3. （選用）完成時呼叫 `returnURL`，讓 ClipboxAI 能顯示「已在 &lt;App&gt; 中完成」的提示。

就這樣。不需要私有 API、不需要共用程式碼——只要一個深層連結。NueZip 與 Nicasa 的 Finder 擴充功能是你可參考複製的實作範例。

## 加入生態系

我們將目錄保存在公開儲存庫中，任何人都可以貢獻一個動作：

- 📦 **提交動作**（或請求將你的應用程式加入），請至
  [clipboxAI/marketplace · Issues](https://github.com/clipboxAI/marketplace/issues)
- 🔀 或對
  [`clipboxai-marketplace`](https://github.com/clipboxAI/marketplace)
  開啟一個 pull request，加入你的動作 JSON。

### 準則

- 使用清楚的 `author` 與 `appIcon`（正方形 PNG，約 256×256，可有透明背景）。
- 保持 `urlTemplate` 簡潔，並說明任何自訂查詢參數。
- 發佈前，請使用實際已安裝的應用程式測試來回往返。
- 尊重使用者的隱私——只對他們明確委託的檔案採取行動。

## 為什麼要合作？

- **零整合成本** — 一個深層連結，不需要 SDK。
- **分發** — 你的應用程式動作會出現在 ClipboxAI 市集中，面對每一位使用者。
- **情境** — 動作從剪貼簿、Finder，或使用者原本就在工作的任何地方觸發。

[→ 開啟整合 issue](https://github.com/clipboxAI/marketplace/issues)
