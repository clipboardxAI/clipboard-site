# 常見問題（FAQ）

**Q: 什麼是 ClipboxAI？**

A: ClipboxAI 是一款專為 macOS 打造的智慧剪貼簿管理工具。它會保存你所有複製內容的可搜尋歷史紀錄，並讓你對其執行動作——摘要、翻譯、整理文字，或是傳送給雲端 AI 模型。

**Q: 支援哪些 macOS 版本？**

A: macOS 14 Sonoma 或以上版本，針對 Apple Silicon（M 系列）最佳化，同時支援 Intel。

**Q: 如何安裝？**

A: 請從 [Mac App Store](/zh-TW/)（推薦）下載，或從 ~~[GitHub Releases](https://github.com/clipboxAI) 取得最新的建置版本~~。請參見[安裝指南](/zh-TW/guide/installation)。

**Q: ClipboxAI 是免費的嗎？**

A: ClipboxAI 是 Mac App Store 上的付費應用程式。購買後所有內建本地工具均已包含，不需要帳號。雲端 AI 動作使用*你自己的*供應商 API key，費用直接支付給 AI 供應商——應用程式內無需額外付費。

**Q: 支援哪些 AI 供應商？**

A: 任何 OpenAI 相容的供應商：DeepSeek、MiniMax、Zhipu GLM、Kimi (Moonshot)、Mistral，以及本地 Ollama——另外還有 OpenAI、Anthropic 與 Gemini。你的 key 會儲存在 Keychain 中。

**Q: 它可以離線運作嗎？**

A: 可以。剪貼簿歷史與內建本地工具（擷取連結、統計計數、摺疊空白行等）完全在你的 Mac 上執行，不需要網際網路連線。

**Q: 我的剪貼簿資料私密嗎？**

A: 你的歷史紀錄保留在你的裝置上。雲端 AI 為可選功能，且只會使用來自你 Keychain 的 key，將內容傳送給你所設定的供應商。我們絕不接收或儲存你的剪貼內容，也不會進行任何遙測。請參見[隱私權政策](/zh-TW/guide/privacy)。

**Q: 如何加入更多動作？**

A: 瀏覽 [Marketplace](/zh-TW/marketplace/)，並點擊任何動作上的 **Install（安裝）**。它會透過深層連結開啟應用程式，並出現在你的**已安裝**清單中。

**Q: 如何更新應用程式？**

A: Mac App Store 版本會自動更新。~~若是 GitHub 版本，請下載最新的 release 並替換 `Applications` 中的應用程式。~~

**Q: 如何回報錯誤或提出功能建議？**

A: 請在 [GitHub 儲存庫](https://github.com/clipboxAI) 開啟一個 issue。請包含你的 macOS 版本、應用程式版本，以及重現步驟。

**Q: 我的資料儲存在哪裡？**

A: 位於沙箱容器中：

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

API key 位於系統 Keychain 中，不在該資料夾內。
