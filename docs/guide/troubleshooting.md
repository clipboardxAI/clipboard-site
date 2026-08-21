# Troubleshooting

This page collects common problems with ClipboxAI on macOS and how to resolve them.

## The app won't start or crashes on launch

1. Make sure your macOS version meets the minimum (macOS 14 Sonoma+).
2. Quit and relaunch the app.
3. Reboot your Mac.
4. ~~If downloaded from GitHub Releases, try the latest or notarized build.~~
5. If problems persist, collect logs (below) and open an issue.

## Clipboard history isn't capturing copies

Symptoms: new copies don't appear in the history panel.

Checklist:

1. Make sure the app is running and its menu bar icon is visible.
2. Confirm **Clipboard monitoring** is enabled in **Settings → Privacy / General**.
3. The app needs the relevant macOS permission to read the pasteboard in the background — see [Permissions](/guide/permissions).
4. Some apps (password managers, secure-input fields) intentionally block clipboard access; this is expected.

## Cloud AI actions don't return a result

Symptoms: an AI action fails, hangs, or shows a config error.

Checklist:

1. Open **Settings → AI** and confirm a provider is selected and a key is entered.
2. Verify the key is valid for that provider and has quota/credits.
3. Check your network connection — cloud AI needs internet access.
4. Confirm the selected model name is correct for the provider.
5. If the config banner still appears in the AI Tool window, the key isn't saved to the Keychain; re-enter it.

## Marketplace install doesn't add the action

Symptoms: clicking **Install** does nothing, or the app doesn't open.

Checklist:

1. The deep link `clipboxai://install?action=<id>` must be handled by the installed app — make sure ClipboxAI is installed and running.
2. If your browser blocks the deep link, copy it and open it manually, or install from inside the app's **Marketplace** tab.
3. Check that the action ID is still published in the marketplace.

## Resetting the app

To reset settings and clear local data:

1. Quit ClipboxAI.
2. Remove the container (this deletes history and settings):

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. Reopen the app and reconfigure. API keys in the Keychain must be removed separately in **Keychain Access** if desired.

## How to collect debug logs

```bash
# Copy logs to Desktop for sharing
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

Then open an issue on [GitHub](https://github.com/clipboxAI) and attach the logs.

## Report an issue

When opening an issue, include:

- macOS version (Apple menu → About This Mac)
- ClipboxAI version (app menu → About)
- Steps to reproduce
- Logs (see above)

This helps maintainers identify and fix the problem faster.
