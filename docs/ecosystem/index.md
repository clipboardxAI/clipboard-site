---
title: Ecosystem Partnership
description: How third-party macOS apps plug into ClipboxAI's Action Marketplace via outbound deep links.
layout: doc
---

# Ecosystem Partnership

ClipboxAI is a clipboard hub. But heavy lifting — file compression, image
optimization, PDF work — is better done by specialized sibling apps. The
**Action Marketplace** already ships a *third-party software* category where
actions delegate straight to apps your users already have installed
([NueZip](https://github.com/w3cub/nuezip), [Nicasa](https://github.com/w3cub/nicasa), …).

This page explains how the integration works and how **your** app can join.

## How it works (outbound delegation)

An ecosystem action is just a marketplace entry with an `execution` descriptor
instead of a prompt:

```json
{
  "id": "nuezip-compress-zip",
  "name": "Compress to ZIP",
  "category": "ecosystem",
  "author": "NueZip",
  "appIcon": "icons/nuezip.png",
  "execution": {
    "kind": "externalApp",
    "scheme": "nuezip",
    "urlTemplate": "nuezip://quickCompress?files={{files}}&extra=zip"
  }
}
```

When the user clicks **Install**, ClipboxAI registers the action locally.
When they trigger it on a clipboard item, the app fills the template and opens
the target app via `NSWorkspace.open(_:)`:

- `{{files}}` — absolute file path(s) of the current clipboard item
  (newline-separated for multiple files).
- `{{text}}` — the plain-text content.
- `{{returnURL}}` — an optional `clipboxai://callback?…` return URL for
  x-callback-url style round-trips (used once the sibling app implements it).

If the target app is **not installed**, the action is hidden from the panel
until the user installs it — no broken buttons.

## URL scheme contract for sibling apps

To be a target, your macOS app only needs to:

1. Register a URL scheme in `Info.plist` (`CFBundleURLTypes`).
2. Handle the inbound URL — read `files` / `text` from the query and act on them.
3. (Optional) Call the `returnURL` when done, so ClipboxAI can show a
   "finished in &lt;App&gt;" toast.

That's it. No private APIs, no shared code — just a deeplink. The NueZip and
Nicasa Finder extensions are reference implementations you can copy from.

## Join the ecosystem

We keep the catalog in a public repo so anyone can contribute an action:

- 📦 **Submit an action** (or request your app be added) via
  [clipboxAI/marketplace · Issues](https://github.com/clipboxAI/marketplace/issues)
- 🔀 Or open a pull request against
  [`clipboxai-marketplace`](https://github.com/clipboxAI/marketplace)
  adding your action JSON.

### Guidelines

- Use a clear `author` and `appIcon` (a square PNG, ~256×256, transparent ok).
- Keep `urlTemplate` minimal and document any custom query params.
- Test the round-trip with your app actually installed before publishing.
- Respect the user's privacy — only act on the files they explicitly delegate.

## Why partner?

- **Zero integration cost** — one deeplink, no SDK.
- **Distribution** — your app's actions appear in the ClipboxAI Marketplace
  to every user.
- **Context** — actions fire from the clipboard, Finder, or anywhere the user
  already works.

[→ Open an integration issue](https://github.com/clipboxAI/marketplace/issues)
