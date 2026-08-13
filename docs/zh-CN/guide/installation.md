# 安装

ClipboardxAI 提供 macOS 版本。

## 下载方式

### Mac App Store（推荐）

- **下载**：在 Mac App Store 中搜索 **ClipboardxAI**，或从[首页](/zh-CN/)打开链接。
- Mac App Store 版本提供自动更新，并与 macOS 无缝集成。

> ~~如果 Mac App Store 链接暂不可用，请使用下方 GitHub Releases 版本。~~

### ~~GitHub Releases（备选）~~（暂未提供）

~~你可以直接从 [GitHub Releases](https://github.com/clipboardxAI) 下载最新版本。请注意，该版本不会收到自动更新。~~

## 安装步骤

### Mac App Store

1. 打开上方的下载链接，或在 Mac App Store 中搜索 "ClipboardxAI"。
2. 点击 **获取（Get）** 下载该应用。
3. 应用会自动安装——从 **应用程序（Applications）** 或 **启动台（Launchpad）** 中启动它。

### ~~GitHub Releases~~

1. ~~从 Releases 页面下载最新的 `.dmg` 文件。~~
2. ~~双击下载的 `.dmg` 将其打开。~~
3. ~~将 `ClipboardxAI.app` 图标拖入你的 **应用程序（Applications）** 文件夹。~~
4. ~~推出挂载的镜像，并从 **应用程序（Applications）** 中打开该应用。~~

如果 macOS 阻止打开该应用（Gatekeeper），请打开 **系统设置 → 隐私与安全性（System Settings → Privacy & Security）**，点击 **仍要打开（Open Anyway）**，或右键点击应用并选择 **打开（Open）**。

## 首次启动

首次启动时，ClipboardxAI 会引导你完成简短的设置：

- **启用菜单栏图标**，让应用常驻菜单栏。
- **授予所需权限**，用于在后台监控剪贴板（见[权限说明](/zh-CN/guide/permissions)）。
- *（可选）* 如需 AI 操作，可在 **设置 → AI（Settings → AI）** 中连接一个云端 AI 提供商。

在弹出提示时授予权限。你可以随时在 **系统设置 → 隐私与安全性（System Settings → Privacy & Security）** 中进行更改。

## 更新

- **Mac App Store 版本**：由 App Store 自动更新。
- ~~**GitHub Releases 版本**：下载更新的版本，并替换 `Applications` 中的旧应用。~~

## 卸载

要移除 ClipboardxAI：

1. 退出应用。
2. 将 `ClipboardxAI.app` 从 `Applications` 拖入废纸篓。
3. （可选）移除本地数据：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## 系统要求

- **macOS**：Sonoma（14）或更高版本
- **CPU**：Apple Silicon（M 系列）或 Intel（64 位）
- **内存**：最低 4 GB，推荐 8 GB
- **存储空间**：约 50 MB

## 故障排除

如果在安装过程中遇到问题：

- **macOS 阻止应用运行**：打开 **系统设置 → 隐私与安全性（System Settings → Privacy & Security）**，点击 **仍要打开（Open Anyway）**。
- **公证（Notarization）警告**：从 Mac App Store 下载已签名 / 已公证的版本。

如需更多帮助，请参阅[故障排除指南](/zh-CN/guide/troubleshooting)。
