# 隐私选择

ClipboardxAI 是一款本地优先的应用。由于你的数据始终留在你的设备上，我们不会收集、出售或共享任何个人信息。

## 我们本地保存的数据

ClipboardxAI 将所有数据保存在你的 Mac 本地：

- 剪贴板历史与应用偏好
- 自定义操作与配置
- API key（保存在 Keychain 中，仅在你配置了云端提供商时）
- 调试日志（如已启用）

这些数据均不会由应用本身上传到任何服务器。

## 云端 AI 选择性开启（Cloud AI Opt-In）

云端 AI 功能**默认关闭**。它们仅在你触发某项云端操作时，使用你自己的 API key，将内容发送给你选择的提供商。你可以在 **设置 → AI（Settings → AI）** 中查看或删除已配置的提供商。

## 你的权利

由于 ClipboardxAI 不在我们的服务器上收集或存储个人数据，因此我们没有任何可供访问、删除或转移的个人数据。你的所有数据都可以在应用内直接管理，或通过移除应用的容器文件夹来管理：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

## 不出售声明（Do Not Sell）

ClipboardxAI 不出售任何个人信息。我们不使用任何第三方的分析、广告或追踪服务。

## 联系方式

如果你对隐私选择有疑问，请在以下地址提交 issue：
`https://github.com/clipboardxAI/clipboard-site/issues`
