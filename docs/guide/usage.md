# Usage Guide

## Clipboard History

Clipboard x AI runs from your **menu bar**. Every time you copy something, it's added to your history.

- Click the menu bar icon to open the history panel.
- Hover an item and press the action shortcut, or click to copy it back to the pasteboard.
- Use the search field to find an item by text.

## The AI Tool Window

The **AI Tool** window is where actions run. It uses a split layout:

- **Left** — a list of tools, grouped into:
  - **Built-in AI** — summary, translate, and other AI actions.
  - **Built-in Local** — offline tools (extract links, count stats, collapse blank lines).
  - **Installed** — actions you added from the Marketplace. You can drag to **reorder** them.
- **Right** — two panes: the **original** clip on one side and the **result** on the other.

AI tools show a "cloud" badge; local tools show a "device" badge, so you always know whether an action uses the network.

## Running an Action

1. Select a tool from the left list (or accept a smart suggestion).
2. The current clip appears in the **original** pane.
3. The result is produced in the **result** pane.

### Auto-run

Turn on **Auto-run on output** in the window footer. When enabled, the selected tool runs automatically the moment you copy something — no manual click needed. Local tools never overwrite your pasteboard, so auto-run is safe.

## Built-in Local Tools

These run fully offline on your Mac:

- **Extract Links** — returns every URL found in the text.
- **Count Stats** — word / character / line / sentence counts.
- **Collapse Blank Lines** — removes empty lines from pasted text.

## Cloud AI Setup

To use AI actions, connect a provider in **Settings → AI**:

1. Choose a provider — **DeepSeek**, **MiniMax**, **Zhipu GLM**, **Kimi (Moonshot)**, **Mistral**, **Ollama** (local), or another OpenAI-compatible service.
2. Paste your **API key**. It is stored in the **Keychain**, never written to disk in plain text.
3. Pick a model.
4. Cloud AI is off by default. When enabled, your clip is sent only to the provider you configured.

If no key is set, the config banner reminds you inside the AI Tool window.

## Marketplace

1. Open **Marketplace** from the AI Tool window (or the site's [Marketplace](/marketplace/) page).
2. Click **Install** on an action. This opens the app via the deep link `clipboardxai://install?action=<id>` and adds the action to your **Installed** list.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+Shift+V` | Open clipboard history |
| `Cmd+,` | Open Settings |
| `Cmd+W` | Close window |
| `Cmd+Q` | Quit application |

> Exact shortcuts may vary by build; check **Settings → Shortcuts** in the app.

## Settings

Open **Clipboard x AI → Settings** (or `Cmd+,`):

- **General**: Language, launch at login, appearance theme.
- **AI**: Cloud provider, model, and API key (Keychain).
- **Actions**: Auto-run toggle, excluded apps, and tool order.
- **Privacy**: Cloud AI opt-in, excluded apps, and history controls.
- **Marketplace**: Browse and manage installed actions.
