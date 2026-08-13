# macOS 权限

ClipboardxAI 可能会请求几项 macOS 权限，以带来最佳体验。本页说明每项权限的用途以及如何管理。

## 剪贴板 / 自动化（Clipboard / Automation）

为了在后台捕获剪贴板并将结果粘贴回去，ClipboardxAI 使用 macOS 的自动化（Automation）访问。

**用途**：在你复制时读取当前粘贴板，并在你运行操作时将结果写回。

**管理方式**：**系统设置 → 隐私与安全性 → 自动化（System Settings → Privacy & Security → Automation）** → 启用 **ClipboardxAI**。

在首次启动时按提示授予访问权限。你可以随时管理或撤销该权限。

## 辅助功能（可选，Accessibility）

部分版本使用辅助功能（Accessibility）来提供全局键盘快捷键，并从任意位置唤出历史面板。

**用途**：打开历史面板并通过快捷键运行操作，即使应用当前未聚焦。

**管理方式**：**系统设置 → 隐私与安全性 → 辅助功能（System Settings → Privacy & Security → Accessibility）** → 启用 **ClipboardxAI**。

## 通知（可选，Notifications）

当某项长时间运行的操作完成或需要关注时，ClipboardxAI 可能会显示通知。

**用途**：在操作完成或需要配置时提醒你。

**管理方式**：**系统设置 → 通知（System Settings → Notifications）** → **ClipboardxAI**。

## 完全磁盘访问（可选，Full Disk Access）

正常使用无需此项。仅当你希望应用读取系统受保护位置的剪贴内容时才需要。

**管理方式**：**系统设置 → 隐私与安全性 → 完全磁盘访问（System Settings → Privacy & Security → Full Disk Access）**。

该权限为可选项，仅在高级场景才需要。

## 使用终端重置权限

如果权限对话框被关闭或状态不一致，你可以使用 `tccutil` 重置 macOS 的权限提示：

```bash
# 为 ClipboardxAI 重置自动化 / 辅助功能提示
tccutil reset All com.w3cub.clipboard
```

运行 `tccutil` 后，请重启应用并再次触发该功能以重新弹出提示。

## 故障排除

- 如果剪贴板历史未捕获复制内容，请检查是否已授予 **自动化（Automation）** 权限。
- 如果全局快捷键无效，请检查 **辅助功能（Accessibility）** 权限。
- 更改权限后，务必退出并重新打开 ClipboardxAI，更改才会生效。

如需更多帮助，请访问[故障排除指南](/zh-CN/guide/troubleshooting)。
