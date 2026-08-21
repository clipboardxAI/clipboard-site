# FAQ

**Q: What is ClipboxAI?**

A: ClipboxAI is a smart clipboard manager for macOS. It keeps a searchable history of everything you copy and lets you run actions on it — summarize, translate, tidy text, or send it to a cloud AI model.

**Q: Which macOS versions are supported?**

A: macOS 14 Sonoma or later, optimized for Apple Silicon (M-series) with Intel support.

**Q: How do I install it?**

A: Download from the [Mac App Store](/) (recommended) or ~~grab the latest build from [GitHub Releases](https://github.com/clipboxAI)~~. See the [Installation Guide](/guide/installation).

**Q: Is ClipboxAI free?**

A: ClipboxAI is a paid app on the Mac App Store. After purchase, all built-in local tools are included — no account required. Cloud AI actions use *your own* provider API key, so you only pay the AI provider directly.

**Q: Which AI providers are supported?**

A: Any OpenAI-compatible provider: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral, and local Ollama — plus OpenAI, Anthropic, and Gemini. Your key is stored in the Keychain.

**Q: Does it work offline?**

A: Yes. Clipboard history and the built-in local tools (extract links, count stats, collapse blank lines, and more) run entirely on your Mac with no internet connection.

**Q: Is my clipboard data private?**

A: Your history stays on your device. Cloud AI is opt-in and sends content only to the provider you configure, using a key from your Keychain. We never receive or store your clips, and there is no telemetry. See the [Privacy Policy](/guide/privacy).

**Q: How do I add more actions?**

A: Browse the [Marketplace](/marketplace/) and click **Install** on any action. It opens the app via a deep link and appears in your **Installed** list.

**Q: How do I update the app?**

A: The Mac App Store version updates automatically. ~~For GitHub builds, download the latest release and replace the app in `Applications`.~~

**Q: How do I report bugs or request features?**

A: Open an issue on the [GitHub repository](https://github.com/clipboxAI). Include your macOS version, app version, and steps to reproduce.

**Q: Where is my data stored?**

A: In the sandboxed container:

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

API keys live in the system Keychain, not in that folder.
