# 安裝

ClipboardxAI 可用於 macOS。

## 下載方式

### Mac App Store（推薦）

- **下載**：在 Mac App Store 中搜尋 **ClipboardxAI**，或從[首頁](/zh-TW/)開啟連結。
- Mac App Store 版本提供自動更新，以及與 macOS 的無縫整合。

> 若尚未提供 Mac App Store 連結，請使用下方 GitHub Releases 版本。

### GitHub Releases（替代方案）

你可以直接從 [GitHub Releases](https://github.com/clipboardxAI) 下載最新的建置版本。請注意，此版本不會收到自動更新。

## 安裝步驟

### Mac App Store

1. 開啟上方的下載連結，或在 Mac App Store 中搜尋「ClipboardxAI」。
2. 點擊 **Get（取得）** 下載應用程式。
3. 應用程式會自動安裝——可從 **Applications（應用程式）** 或 **Launchpad** 啟動它。

### GitHub Releases

1. 從 Releases 頁面下載最新的 `.dmg` 檔。
2. 雙擊下載的 `.dmg` 以開啟它。
3. 將 `ClipboardxAI.app` 圖示拖曳到你的 **Applications（應用程式）** 資料夾。
4. 退出掛載的映像檔，並從 **Applications（應用程式）** 開啟應用程式。

若 macOS 阻止開啟應用程式（Gatekeeper），請開啟 **System Settings → Privacy & Security（系統設定 → 隱私權與安全性）**，點擊 **Open Anyway（仍要開啟）**；或在應用程式上點擊右鍵並選擇 **Open（開啟）**。

## 首次啟動

首次啟動時，ClipboardxAI 會引導你完成簡短的設定：

- **啟用選單列項目**，讓應用程式常駐於你的選單列。
- **授予權限**，以便它在背景監控剪貼簿（請參見[權限](/zh-TW/guide/permissions)）。
- *（選用）* 若你想要 AI 動作，可在 **Settings → AI（設定 → AI）** 中連接雲端 AI 供應商。

在出現提示時授予權限。你可以隨時在 **System Settings → Privacy & Security（系統設定 → 隱私權與安全性）** 中變更它們。

## 更新

- **Mac App Store 版本**：由 App Store 自動更新。
- **GitHub Releases 版本**：下載較新的版本，並替換 `Applications` 中的應用程式。

## 解除安裝

若要移除 ClipboardxAI：

1. 退出應用程式。
2. 將 `ClipboardxAI.app` 從 `Applications` 拖曳到垃圾桶。
3. （選用）移除本地資料：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## 系統需求

- **macOS**：Sonoma（14）或以上版本
- **CPU**：Apple Silicon（M 系列）或 Intel（64 位元）
- **記憶體**：最低 4 GB，建議 8 GB
- **儲存空間**：約 ~50 MB

## 疑難排解

若你在安裝過程中遇到問題：

- **macOS 封鎖應用程式**：開啟 **System Settings → Privacy & Security（系統設定 → 隱私權與安全性）**，點擊 **Open Anyway（仍要開啟）**。
- **公證（Notarization）警告**：請從 Mac App Store 下載已簽署／公證的建置版本。

如需更多協助，請參閱[疑難排解指南](/zh-TW/guide/troubleshooting)。
