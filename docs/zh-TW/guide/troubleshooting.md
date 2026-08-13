# 疑難排解

本頁彙整 ClipboardxAI 在 macOS 上的常見問題及其解決方式。

## 應用程式無法啟動或在啟動時崩潰

1. 確認你的 macOS 版本符合最低要求（macOS 14 Sonoma 以上）。
2. 退出並重新啟動應用程式。
3. 重新啟動你的 Mac。
4. ~~若從 GitHub Releases 下載，請嘗試最新或已公證的建置版本。~~
5. 若問題持續，請蒐集日誌（如下方）並開啟一個 issue。

## 剪貼簿歷史沒有捕捉到複製內容

症狀：新的複製內容沒有出現在歷史面板中。

檢查清單：

1. 確認應用程式正在執行，且其選單列圖示可見。
2. 確認 **Clipboard monitoring（剪貼簿監控）** 已在 **Settings → Privacy / General（設定 → 隱私／一般）** 中啟用。
3. 應用程式需要相關的 macOS 權限才能在背景讀取剪貼板——請參見[權限](/zh-TW/guide/permissions)。
4. 某些應用程式（密碼管理器、安全輸入欄位）會刻意封鎖剪貼簿存取；此為預期行為。

## 雲端 AI 動作沒有回傳結果

症狀：某個 AI 動作失敗、卡住，或顯示設定錯誤。

檢查清單：

1. 開啟 **Settings → AI（設定 → AI）**，確認已選取供應商並輸入了 key。
2. 驗證該 key 對該供應商有效，且有額度／點數。
3. 檢查你的網路連線——雲端 AI 需要網際網路存取。
4. 確認所選的模型名稱對該供應商而言是正確的。
5. 若 AI 工具視窗中仍出現設定橫幅，表示 key 未儲存至 Keychain；請重新輸入。

## Marketplace 安裝沒有加入動作

症狀：點擊 **Install（安裝）** 沒有任何反應，或應用程式沒有開啟。

檢查清單：

1. 深層連結 `clipboardxai://install?action=<id>` 必須由已安裝的應用程式處理——請確認 ClipboardxAI 已安裝並正在執行。
2. 若你的瀏覽器封鎖該深層連結，請複製它並手動開啟，或從應用程式內的 **Marketplace** 分頁安裝。
3. 確認該動作 ID 仍已在 marketplace 中發佈。

## 重設應用程式

若要重設設定並清除本地資料：

1. 退出 ClipboardxAI。
2. 移除容器（這會刪除歷史紀錄與設定）：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. 重新開啟應用程式並重新設定。若需要，Keychain 中的 API key 必須在 **Keychain Access** 中另行移除。

## 如何蒐集除錯日誌

```bash
# Copy logs to Desktop for sharing
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

接著在 [GitHub](https://github.com/clipboardxAI) 開啟一個 issue 並附上日誌。

## 回報問題

開啟 issue 時，請包含：

- macOS 版本（Apple 選單 → About This Mac）
- ClipboardxAI 版本（應用程式選單 → About）
- 重現步驟
- 日誌（見上方）

這有助於維護者更快地找出並修復問題。
