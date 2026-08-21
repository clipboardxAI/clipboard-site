# 贡献指南

我们欢迎你为改进 ClipboxAI 做出贡献！无论是修复 bug、添加功能、翻译，还是完善文档，我们都感谢你的帮助。

## 贡献方式

### 错误报告（Bug Reports）

- 先查看现有的 [issues](https://github.com/clipboxAI/issues)。
- 附上 macOS 版本、ClipboxAI 版本与复现步骤。
- 如有助于排查，可附上示例文本（请勿包含敏感的剪贴板内容）。

### 功能请求（Feature Requests）

- 描述该功能及其使用场景。
- 说明它为何能造福 ClipboxAI 用户。
- 确认它是否符合本地优先、尊重隐私的理念。

### 翻译（Translations）

- ClipboxAI 通过 i18n JSON 文件支持多种语言。
- 为缺失或不完整的语言贡献翻译。
- 现有翻译请参阅 `ClipboxAI/Resources/i18n/`。

### 代码贡献（Code Contributions）

- 该应用使用 **Swift 6 + SwiftUI** 编写。
- Fork 仓库并提交 Pull Request。
- 遵循代码库中使用的 Clean Architecture 模式。

## 开始使用

### 前置条件

- Node.js 18 或更高版本（用于站点）
- pnpm 包管理器（用于站点）
- Xcode 16+（用于应用开发）
- macOS 14 Sonoma 及以上

### 开发环境搭建（文档站点）

1. 在 GitHub 上 **Fork 仓库**。
2. **克隆你的 Fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **安装依赖**：
   ```bash
   pnpm install
   ```
4. **启动开发服务器**：
   ```bash
   pnpm docs:dev
   ```
5. 在浏览器中 **打开** `http://localhost:5173`。

### 进行更改

1. 为你的更改创建一个新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 在 `docs/` 中修改你的文档文件。
3. 通过构建站点来测试你的更改：
   ```bash
   pnpm docs:build
   ```
4. 提交你的更改：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交更改

1. 将你的分支 **推送到 Fork**：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上 **创建 Pull Request**。
3. **等待评审** 并处理反馈。

## 指南

### 写作风格

- 使用清晰、简洁的语言。
- 尽可能使用主动语态。
- 保持包容与友好。
- 使用一致的格式。
- 必要时附上截图。

### 文件结构

- 文档页面放在 `docs/` 中。
- 指南放在 `docs/guide/` 中。
- 使用小写文件名并以连字符分隔：`my-new-guide.md`。

### 链接

- 内部文档使用相对链接。
- 有帮助时链接到外部资源。
- 确保所有链接可用。

### 图片与素材

- 将图片放在 `docs/public/` 或其子目录中。
- 使用描述性文件名。
- 为网络优化图片（推荐小于 500KB）。

## 行为准则（Code of Conduct）

本项目遵循一份行为准则。通过参与，你同意：

- 尊重他人、包容差异。
- 专注于建设性的反馈。
- 为自己的错误承担责任。

## 有疑问？

如果你对贡献有疑问，请查看现有的 [issues](https://github.com/clipboxAI/issues) 或新建一个。感谢你帮助改进 ClipboxAI！ 🎉
