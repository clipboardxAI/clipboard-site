# 自定义

让 ClipboardxAI 按照你的方式工作。本指南涵盖你可以调整的各项设置。

## 通用（General）

打开 **ClipboardxAI → 设置（Settings）**（或按 `Cmd+,`）。

- **语言（Language）**：English、简体中文、繁體中文、日本語。
- **登录时启动（Launch at Login）**：登录时自动启动应用。
- **外观（Appearance）**：浅色、深色，或跟随系统（System，跟随 macOS）。

## AI 配置

在 **设置 → AI（Settings → AI）** 中设置云端 AI：

| 设置 | 选项 | 说明 |
|---------|---------|-------------|
| **Provider** | DeepSeek, MiniMax, GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic, Gemini | 要调用的 OpenAI 兼容服务 |
| **API Key** | 你的 key | 保存在 **Keychain** 中，绝不以明文写入磁盘 |
| **Model** | 各提供商不同 | 用于 AI 操作的模型 |
| **Cloud AI enabled** | 开 / 关 | 将剪贴内容发送到云端的总开关 |

云端 AI **默认关闭**。启用后，你的剪贴内容只会发送给所配置的提供商。

## 操作（Actions）

自定义工具的行为方式：

- **输出时自动运行（Auto-run on output）**：开启后，所选工具会在你复制的瞬间自动运行。
- **排除的应用（Excluded apps）**：此处的应用会被剪贴板监控与自动运行跳过（例如密码管理器）。
- **工具顺序（Tool order）**：在 AI 工具窗口中，拖动已安装的工具以重新排序；你的顺序会被记住。

## 隐私（Privacy）

打开 **设置 → 隐私（Settings → Privacy）**：

- **云端 AI 选择性开启（Cloud AI opt-in）**：将数据发送给提供商的总开关。
- **排除的应用（Excluded apps）**：阻止特定应用被捕获。
- **历史记录控制（History controls）**：管理剪贴内容在你的设备上保留多长时间。

所有历史记录均保留在本地。我们不会上传剪贴内容，也不会运行分析。

## 操作市场（Marketplace）

管理已安装的操作：

- **浏览（Browse）**：从 AI 工具窗口或站点打开 **Marketplace**。
- **安装（Install）**：在某个操作上点击 **Install**，通过深链接添加它。
- **移除（Remove）**：从你的 **已安装（Installed）** 列表卸载某个操作。

## 菜单栏

- **在菜单栏中显示（Show in menu bar）**：启用 / 禁用托盘图标。
- **关闭时退出（Quit on close）**：选择应用是否在后台继续运行。

## 小贴士

- 在需要之前保持云端 AI 关闭——本地工具已覆盖大多数日常整理需求。
- 将密码管理器和启用安全输入的应用加入 **排除的应用（Excluded apps）**，确保机密内容绝不会被捕获。
- 将自动运行与本地工具搭配，实现每次复制时的免手动文本清理。
