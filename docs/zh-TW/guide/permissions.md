# macOS 權限

ClipboardxAI 可能會請求幾項 macOS 權限，以提供最佳的體驗。本頁說明各項權限的用途以及如何管理它們。

## 剪貼簿／自動化（Clipboard / Automation）

為了在背景擷取你的剪貼簿並將結果貼回，ClipboardxAI 使用了 macOS 的自動化（Automation）存取權限。

**用途**：在你複製時讀取目前的剪貼板，並在你執行動作時將結果寫回。

**管理**：**System Settings → Privacy & Security → Automation（系統設定 → 隱私權與安全性 → 自動化）** → 啟用 **ClipboardxAI**。

在首次啟動出現提示時授予存取權。你可以隨時管理或撤銷它。

## 輔助使用（Accessibility）（選用）

某些建置版本會使用輔助使用權限，以提供全域鍵盤快捷鍵，並能從任何地方啟動歷史面板。

**用途**：開啟歷史面板並透過熱鍵執行動作，即使應用程式不在焦點時也能運作。

**管理**：**System Settings → Privacy & Security → Accessibility（系統設定 → 隱私權與安全性 → 輔助使用）** → 啟用 **ClipboardxAI**。

## 通知（Notifications）（選用）

當長時間執行的動作完成或需要留意時，ClipboardxAI 可能會顯示通知。

**用途**：在動作完成或需要進行設定時提醒你。

**管理**：**System Settings → Notifications（系統設定 → 通知）** → **ClipboardxAI**。

## 完全磁碟存取（Full Disk Access）（選用）

一般使用不需要此權限。只有當你希望應用程式讀取位於系統保護位置中的剪貼內容時才需要。

**管理**：**System Settings → Privacy & Security → Full Disk Access（系統設定 → 隱私權與安全性 → 完全磁碟存取）**。

此權限為選用，僅在進階情境下才需要。

## 使用終端機重設權限

如果權限對話框被關閉或狀態不一致，你可以使用 `tccutil` 重設 macOS 的權限提示：

```bash
# Reset automation/accessibility prompts for ClipboardxAI
tccutil reset All com.w3cub.clipboard
```

執行 `tccutil` 後，請重新啟動應用程式並再次觸發該功能，以重新出現提示。

## 疑難排解

- 若剪貼簿歷史沒有捕捉到複製內容，請檢查是否已授予 **Automation（自動化）** 權限。
- 若全域快捷鍵無法運作，請檢查 **Accessibility（輔助使用）** 權限。
- 變更權限後，請務必退出並重新開啟 ClipboardxAI，讓變更生效。

如需更多協助，請參閱[疑難排解指南](/zh-TW/guide/troubleshooting)。
