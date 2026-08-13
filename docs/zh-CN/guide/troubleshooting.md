# 故障排除

本页汇总了 ClipboardxAI 在 macOS 上的常见问题及解决方法。

## 应用无法启动或启动时崩溃

1. 确保你的 macOS 版本满足最低要求（macOS 14 Sonoma 及以上）。
2. 退出并重新启动应用。
3. 重启你的 Mac。
4. 如果是从 GitHub Releases 下载的，请尝试最新版本或已公证的版本。
5. 如果问题依旧，请收集日志（见下方）并提交 issue。

## 剪贴板历史未捕获复制内容

症状：新复制的内容未出现在历史面板中。

检查清单：

1. 确保应用正在运行，且菜单栏图标可见。
2. 在 **设置 → 隐私 / 通用（Settings → Privacy / General）** 中确认已启用 **剪贴板监控（Clipboard monitoring）**。
3. 应用需要相应的 macOS 权限才能在后台读取粘贴板——见[权限说明](/zh-CN/guide/permissions)。
4. 部分应用（密码管理器、安全输入字段）会主动阻止剪贴板访问；这属于预期行为。

## 云端 AI 操作没有返回结果

症状：某项 AI 操作失败、卡住或显示配置错误。

检查清单：

1. 打开 **设置 → AI（Settings → AI）**，确认已选择提供商并填写了 key。
2. 确认该 key 对该提供商有效，且具有配额 / 额度。
3. 检查你的网络连接——云端 AI 需要访问互联网。
4. 确认所选模型名称对提供商而言正确无误。
5. 如果 AI 工具窗口中仍出现配置横幅，说明 key 未保存到 Keychain；请重新输入。

## 操作市场安装未添加操作

症状：点击 **安装（Install）** 后毫无反应，或应用未打开。

检查清单：

1. 深链接 `clipboardxai://install?action=<id>` 必须由已安装的应用处理——请确保 ClipboardxAI 已安装并正在运行。
2. 如果你的浏览器拦截了该深链接，请复制它并手动打开，或从应用内的 **Marketplace** 标签页安装。
3. 检查该操作 ID 是否仍在市场中发布。

## 重置应用

要重置设置并清除本地数据：

1. 退出 ClipboardxAI。
2. 移除容器（这会删除历史记录与设置）：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. 重新打开应用并重新配置。如需移除 Keychain 中的 API key，必须单独在 **Keychain Access** 中删除。

## 如何收集调试日志

```bash
# 复制日志到桌面以便分享
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

然后在 [GitHub](https://github.com/clipboardxAI) 上提交 issue 并附上这些日志。

## 报告问题

提交 issue 时，请包含：

- macOS 版本（苹果菜单 → 关于本机）
- ClipboardxAI 版本（应用菜单 → 关于）
- 复现步骤
- 日志（见上文）

这有助于维护者更快定位并修复问题。
