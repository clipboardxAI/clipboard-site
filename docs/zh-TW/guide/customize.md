# 自訂

讓 ClipboardxAI 依照你的方式運作。本指南涵蓋你可以調整的設定。

## 一般（General）

開啟 **ClipboardxAI → Settings（設定）**（或按下 `Cmd+,`）。

- **Language（語言）**：English、简体中文、繁體中文、日本語。
- **Launch at Login（登入時啟動）**：在你登入時自動啟動應用程式。
- **Appearance（外觀）**：Light（淺色）、Dark（深色）或 System（跟隨 macOS）。

## AI 設定（AI Configuration）

在 **Settings → AI（設定 → AI）** 中設定雲端 AI：

| 設定 | 選項 | 說明 |
|---------|---------|-------------|
| **Provider（供應商）** | DeepSeek、MiniMax、GLM、Kimi、Mistral、Ollama、OpenAI、Anthropic、Gemini | 要呼叫的 OpenAI 相容服務 |
| **API Key** | 你的 key | 儲存在 **Keychain** 中，絕不會以純文字寫入磁碟 |
| **Model（模型）** | 依供應商而定 | 用於 AI 動作的模型 |
| **Cloud AI enabled（啟用雲端 AI）** | 開／關 | 傳送剪貼內容至雲端的主開關 |

雲端 AI **預設為關閉**。啟用後，你的剪貼內容只會傳送給你所設定的供應商。

## 動作（Actions）

自訂工具的行為：

- **Auto-run on output（輸出時自動執行）**：開啟後，所選工具會在你複製的瞬間自動執行。
- **Excluded apps（排除的應用程式）**：此處列出的應用程式會被剪貼簿監控與自動執行跳過（例如密碼管理器）。
- **Tool order（工具順序）**：在 AI 工具視窗中，拖曳已安裝的工具來重新排序；你的順序會被記住。

## 隱私（Privacy）

開啟 **Settings → Privacy（設定 → 隱私）**：

- **Cloud AI opt-in（雲端 AI 加入選項）**：傳送資料給供應商的主開關。
- **Excluded apps（排除的應用程式）**：停止擷取特定的應用程式。
- **History controls（歷史紀錄控制）**：管理剪貼內容在你的裝置上保留多久。

所有歷史紀錄都保留在本地。我們不會上傳剪貼內容或執行分析。

## Marketplace

管理已安裝的動作：

- **Browse（瀏覽）**：從 AI 工具視窗或網站開啟 **Marketplace**。
- **Install（安裝）**：點擊某個動作上的 **Install（安裝）**，透過深層連結將它加入。
- **Remove（移除）**：從你的**已安裝**清單解除安裝某個動作。

## 選單列（Menu Bar）

- **Show in menu bar（顯示於選單列）**：啟用／停用系統列圖示。
- **Quit on close（關閉時退出）**：選擇應用程式是否在背景持續執行。

## 小訣竊

- 在需要之前保持雲端 AI 關閉——本地工具已涵蓋大多數日常清理需求。
- 將密碼管理器與安全輸入的應用程式加入 **Excluded apps（排除的應用程式）**，讓機密資訊永不被擷取。
- 將自動執行與本地工具搭配使用，讓每次複製都自動完成免動手文字清理。
