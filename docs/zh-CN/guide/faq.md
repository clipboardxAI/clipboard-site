# 常见问题（FAQ）

**问：什么是 ClipboardxAI？**

答：ClipboardxAI 是一款面向 macOS 的智能剪贴板管理器。它会将你复制的一切内容保存为可搜索的历史记录，并让你对其执行操作——总结、翻译、整理文本，或发送给云端 AI 模型。

**问：支持哪些 macOS 版本？**

答：macOS 14 Sonoma 或更高版本，针对 Apple Silicon（M 系列）优化，同时支持 Intel。

**问：如何安装？**

答：从 [Mac App Store](/zh-CN/)（推荐）下载，或从 [GitHub Releases](https://github.com/clipboardxAI) 获取最新版本。详见[安装指南](/zh-CN/guide/installation)。

**问：ClipboardxAI 免费吗？**

答：该应用可免费下载。内置本地工具无需账号。云端 AI 操作使用*你自己的*提供商 API key，因此你只需直接向 AI 提供商付费——应用内没有任何付费层级。

**问：支持哪些 AI 提供商？**

答：任何 OpenAI 兼容的提供商：DeepSeek、MiniMax、Zhipu GLM、Kimi (Moonshot)、Mistral，以及本地 Ollama——外加 OpenAI、Anthropic 与 Gemini。你的 key 保存在 Keychain 中。

**问：它可以离线使用吗？**

答：可以。剪贴板历史与内置本地工具（提取链接、字数统计、压缩空行等）完全在你的 Mac 上运行，无需联网。

**问：我的剪贴板数据私密吗？**

答：你的历史记录始终留在你的设备上。云端 AI 是可选的，并且只使用你 Keychain 中的 key，将内容发送给所配置的提供商。我们从不接收或存储你的剪贴内容，也没有任何遥测。详见[隐私政策](/zh-CN/guide/privacy)。

**问：如何添加更多操作？**

答：浏览 [Marketplace](/zh-CN/marketplace/)，点击任意操作的 **安装（Install）**。它会通过深链接打开应用，并出现在你的 **已安装（Installed）** 列表中。

**问：如何更新应用？**

答：Mac App Store 版本会自动更新。对于 GitHub 版本，请下载最新版本并替换 `Applications` 中的旧应用。

**问：如何报告错误或请求功能？**

答：在 [GitHub 仓库](https://github.com/clipboardxAI) 上提交 issue。请附上你的 macOS 版本、应用版本与复现步骤。

**问：我的数据保存在哪里？**

答：保存在沙盒容器中：

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

API key 存放在系统 Keychain 中，不在此文件夹内。
