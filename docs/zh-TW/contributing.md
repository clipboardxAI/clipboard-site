# 貢獻

我們歡迎各種貢獻來改進 ClipboxAI！無論你是修復錯誤、新增功能、進行翻譯，或是改進文件，我們都感謝你的協助。

## 貢獻方式

### 錯誤回報（Bug Reports）

- 請先查看現有的 [issues](https://github.com/clipboxAI/issues)。
- 請包含 macOS 版本、ClipboxAI 版本，以及重現步驟。
- 若有幫助，請附上範例文字（請勿包含敏感的剪貼簿內容）。

### 功能建議（Feature Requests）

- 描述該功能與使用情境。
- 說明它將如何造福 ClipboxAI 使用者。
- 檢視它是否符合本機優先、尊重隱私的理念。

### 翻譯（Translations）

- ClipboxAI 透過 i18n JSON 檔案支援多種語言。
- 請為缺失或不完整的語言貢獻翻譯。
- 請參見 `ClipboxAI/Resources/i18n/` 以查看現有的翻譯。

### 程式碼貢獻（Code Contributions）

- 應用程式以 **Swift 6 + SwiftUI** 撰寫。
- 請 fork 儲存庫並提交 pull request。
- 請遵循程式碼庫中使用的 Clean Architecture 模式。

## 開始使用

### 先決條件

- Node.js 18 或以上版本（用於網站）
- pnpm 套件管理器（用於網站）
- Xcode 16+（用於應用程式開發）
- macOS 14 Sonoma 以上

### 開發環境設定（文件網站）

1. **在 GitHub 上 fork 儲存庫**。
2. **複製你的 fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **安裝依賴套件**：
   ```bash
   pnpm install
   ```
4. **啟動開發伺服器**：
   ```bash
   pnpm docs:dev
   ```
5. **在瀏覽器中開啟** `http://localhost:5173`。

### 進行修改

1. 為你的修改建立一個新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 對 `docs/` 中的文件進行修改。
3. 透過建置網站來測試你的修改：
   ```bash
   pnpm docs:build
   ```
4. 提交你的修改：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交修改

1. **將你的分支推送**到你的 fork：
   ```bash
   git push origin feature/your-feature-name
   ```
2. **在 GitHub 上建立一個 Pull Request**。
3. **等待審查**並處理任何回饋。

## 準則

### 寫作風格

- 使用清楚、簡潔的語言。
- 儘可能使用主動語態。
- 保持包容與友善。
- 使用一致的格式。
- 有幫助時請附上截圖。

### 檔案結構

- 文件頁面放在 `docs/` 中。
- 指南放在 `docs/guide/` 中。
- 使用小寫檔名並以連字號分隔：`my-new-guide.md`。

### 連結

- 內部文件請使用相對連結。
- 有幫助時連結到外部資源。
- 確保所有連結都能正常運作。

### 圖片與資源

- 將圖片放在 `docs/public/` 或其子目錄中。
- 使用具描述性的檔名。
- 針對網頁最佳化圖片（建議低於 500KB）。

## 行為準則（Code of Conduct）

本專案遵循一份行為準則。透過參與，你同意：

- 保持尊重與包容。
- 專注於建設性的回饋。
- 為自己的錯誤承擔責任。

## 有問題嗎？

若你對貢獻有任何疑問，請查看現有的 [issues](https://github.com/clipboxAI/issues) 或建立一個新的。感謝你協助改進 ClipboxAI！🎉
