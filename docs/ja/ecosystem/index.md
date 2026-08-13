---
title: エコシステム連携
description: サードパーティ製 macOS アプリが、送信ディープリンクを通じて Clipboard x AI のアクションマーケットプレイスと連携する方法。
layout: doc
---

# エコシステム連携

Clipboard x AI はクリップボードのハブです。しかし、ファイル圧縮、画像最適化、PDF 処理といった本格的な処理は、専門の姉妹アプリに任せるほうが適しています。**アクションマーケットプレイス** にはすでに *サードパーティ製ソフトウェア* カテゴリーが用意されており、そこではアクションがユーザーがすでにインストール済みのアプリに直接処理を委譲します（[NueZip](https://github.com/w3cub/nuezip)、[Nicasa](https://github.com/w3cub/nicasa)、…）。

このページでは、その連携がどう機能するか、そして **あなたの** アプリを参加させる方法を説明します。

## 仕組み（送信側の委譲）

エコシステムアクションとは、プロンプトの代わりに `execution` 記述子を持つマーケットプレイスのエントリにすぎません。

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

ユーザーが **Install** をクリックすると、Clipboard x AI はそのアクションをローカルに登録します。クリップボード項目に対してそれを実行すると、アプリはテンプレートを埋め込み、`NSWorkspace.open(_:)` を通じて対象アプリを開きます。

- `{{files}}` — 現在のクリップボード項目の絶対ファイルパス（複数ファイルの場合は改行区切り）。
- `{{text}}` — プレーンテキストの内容。
- `{{returnURL}}` — 任意の `clipboardxai://callback?…` リターン URL（x-callback-url スタイルの往復用。姉妹アプリが実装した場合に使用）。

対象アプリが **インストールされていない** 場合、ユーザーがインストールするまでそのアクションはパネルから非表示になります — 壊れたボタンは表示されません。

## 姉妹アプリ向けの URL スキーム契約

対象となるためには、あなたの macOS アプリで以下を行うだけで済みます。

1. `Info.plist`（`CFBundleURLTypes`）に URL スキームを登録する。
2. 受信した URL を処理する — クエリから `files` / `text` を読み取り、それらに対して処理を行う。
3. （任意）完了時に `returnURL` を呼び出し、Clipboard x AI が「<アプリ> で完了」というトーストを表示できるようにする。

これだけです。プライベート API も共有コードも不要 — ただのディープリンクです。NueZip と Nicasa の Finder 拡張機能は、参考になる実装例です。コピーして利用できます。

## エコシステムに参加する

カタログは公開リポジトリで管理しているため、誰でもアクションを追加できます。

- 📦 **アクションを提出する**（またはアプリの追加をリクエストする）—
  [clipboardxAI/marketplace · Issues](https://github.com/clipboardxAI/marketplace/issues)
- 🔀 または [`clipboardxai-marketplace`](https://github.com/clipboardxAI/marketplace) に対して、
  あなたのアクションの JSON を追加するプルリクエストを作成する。

### ガイドライン

- 明確な `author` と `appIcon`（正方形の PNG、約 256×256、透過可）を使用する。
- `urlTemplate` は最小限に保ち、カスタムのクエリパラメータがあればドキュメント化する。
- 公開前に、あなたのアプリを実際にインストールした状態で往復（round-trip）をテストする。
- ユーザーのプライバシーを尊重する — ユーザーが明示的に委譲したファイルだけを処理する。

## なぜ参加するのか？

- **統合コストゼロ** — ディープリンク 1 つ、SDK 不要。
- **配布** — あなたのアプリのアクションが、すべてのユーザーの Clipboard x AI Marketplace に表示される。
- **コンテキスト** — アクションは、ユーザーがすでに作業しているクリップボード、Finder、その他どこからでも起動する。

[→ 統合の issue を作成する](https://github.com/clipboardxAI/marketplace/issues)
