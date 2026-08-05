# Installation

Clipboard x AI is available for macOS.

## Download Options

### Mac App Store (Recommended)

- **Download**: Search for **Clipboard x AI** on the Mac App Store, or open the link from the [home page](/).
- The Mac App Store version provides automatic updates and seamless macOS integration.

> If a Mac App Store link is not yet available, use the GitHub Releases build below.

### GitHub Releases (Alternative)

You can download the latest build directly from [GitHub Releases](https://github.com/clipboardxAI). Note that this version does not receive automatic updates.

## Installation Steps

### Mac App Store

1. Open the download link above or search for "Clipboard x AI" in the Mac App Store.
2. Click **Get** to download the app.
3. The app installs automatically — launch it from **Applications** or **Launchpad**.

### GitHub Releases

1. Download the latest `.dmg` from the Releases page.
2. Double-click the downloaded `.dmg` to open it.
3. Drag the `Clipboard x AI.app` icon into your **Applications** folder.
4. Eject the mounted image and open the app from **Applications**.

If macOS prevents opening the app (Gatekeeper), open **System Settings → Privacy & Security** and click **Open Anyway**, or right-click the app and choose **Open**.

## First Launch

On first launch, Clipboard x AI guides you through a short setup:

- **Enable the menu bar item** so the app lives in your menu bar.
- **Grant permissions** it needs to monitor the clipboard in the background (see [Permissions](/guide/permissions)).
- *(Optional)* **Connect a cloud AI provider** in **Settings → AI** if you want AI actions.

Grant permissions when prompted. You can change them any time in **System Settings → Privacy & Security**.

## Updates

- **Mac App Store version**: updated automatically by the App Store.
- **GitHub Releases version**: download the newer release and replace the app in `Applications`.

## Uninstall

To remove Clipboard x AI:

1. Quit the app.
2. Drag `Clipboard x AI.app` from `Applications` to the Trash.
3. (Optional) Remove local data:

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## System Requirements

- **macOS**: Sonoma (14) or later
- **CPU**: Apple Silicon (M-series) or Intel (64-bit)
- **Memory**: 4 GB minimum, 8 GB recommended
- **Storage**: ~50 MB

## Troubleshooting

If you run into problems during installation:

- **macOS blocks the app**: Open **System Settings → Privacy & Security** and click **Open Anyway**.
- **Notarization warning**: download a signed/notarized build from the Mac App Store.

For more help, see the [Troubleshooting guide](/guide/troubleshooting).
