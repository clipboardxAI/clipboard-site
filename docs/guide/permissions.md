# macOS Permissions

Clipboard x AI may request a few macOS permissions to provide the best experience. This page explains what each permission is for and how to manage it.

## Clipboard / Automation

To capture your clipboard in the background and paste results back, Clipboard x AI uses macOS Automation access.

**What it's used for**: reading the current pasteboard when you copy, and writing results back when you run an action.

**Manage**: **System Settings → Privacy & Security → Automation** → enable **Clipboard x AI**.

Grant access when prompted during first launch. You can manage or revoke it at any time.

## Accessibility (optional)

Some builds use Accessibility to provide global keyboard shortcuts and to activate the history panel from anywhere.

**What it's used for**: opening the history panel and running actions via hotkeys, even when the app isn't focused.

**Manage**: **System Settings → Privacy & Security → Accessibility** → enable **Clipboard x AI**.

## Notifications (optional)

Clipboard x AI may show notifications when a long-running action completes or needs attention.

**What it's used for**: alerting you when an action finishes or when configuration is required.

**Manage**: **System Settings → Notifications** → **Clipboard x AI**.

## Full Disk Access (optional)

Not required for normal use. Only needed if you want the app to read clips from system-protected locations.

**Manage**: **System Settings → Privacy & Security → Full Disk Access**.

This permission is optional and only needed in advanced scenarios.

## Resetting a permission with Terminal

If a permission dialog was dismissed or the state is inconsistent, you can reset macOS permission prompts using `tccutil`:

```bash
# Reset automation/accessibility prompts for Clipboard x AI
tccutil reset All com.w3cub.clipboard
```

After running `tccutil`, restart the app and trigger the feature again to be reprompted.

## Troubleshooting

- If clipboard history doesn't capture copies, check the **Automation** permission is granted.
- If global shortcuts don't work, check the **Accessibility** permission.
- After changing permissions, always quit and reopen Clipboard x AI for changes to take effect.

For more help, visit the [Troubleshooting guide](/guide/troubleshooting).
