# Customization

Make ClipboxAI work the way you do. This guide covers the settings you can adjust.

## General

Open **ClipboxAI → Settings** (or press `Cmd+,`).

- **Language**: English, 简体中文, 繁體中文, 日本語.
- **Launch at Login**: start the app automatically when you log in.
- **Appearance**: Light, Dark, or System (follows macOS).

## AI Configuration

Set up cloud AI in **Settings → AI**:

| Setting | Options | Description |
|---------|---------|-------------|
| **Provider** | DeepSeek, MiniMax, GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic, Gemini | The OpenAI-compatible service to call |
| **API Key** | your key | Stored in the **Keychain**, never written to disk in plain text |
| **Model** | per provider | The model used for AI actions |
| **Cloud AI enabled** | On / Off | Master switch for sending clips to the cloud |

Cloud AI is **off by default**. When enabled, your clip is sent only to the provider you configured.

## Actions

Customize how tools behave:

- **Auto-run on output**: when on, the selected tool runs automatically the moment you copy.
- **Excluded apps**: apps listed here are skipped by clipboard monitoring and auto-run (e.g. password managers).
- **Tool order**: in the AI Tool window, drag installed tools to reorder them; your order is remembered.

## Privacy

Open **Settings → Privacy**:

- **Cloud AI opt-in**: the master switch for sending data to a provider.
- **Excluded apps**: stop specific apps from being captured.
- **History controls**: manage how long clips are kept on your device.

All history stays local. We do not upload clips or run analytics.

## Marketplace

Manage installed actions:

- **Browse**: open **Marketplace** from the AI Tool window or the site.
- **Install**: click **Install** on an action to add it via deep link.
- **Remove**: uninstall an action from your **Installed** list.

## Menu Bar

- **Show in menu bar**: enable/disable the tray icon.
- **Quit on close**: choose whether the app stays running in the background.

## Tips

- Keep cloud AI off until you need it — local tools cover most day-to-day cleanup.
- Add password managers and secure-input apps to **Excluded apps** so secrets are never captured.
- Pair auto-run with a local tool for hands-free text cleanup on every copy.
