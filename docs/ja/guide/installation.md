# インストール

ClipboardxAI は macOS 向けに提供されています。

## ダウンロード方法

### Mac App Store（推奨）

- **ダウンロード**: Mac App Store で **ClipboardxAI** を検索するか、[ホームページ](/ja/)のリンクから開いてください。
- Mac App Store 版は自動更新とシームレスな macOS 統合を提供します。

> ~~Mac App Store のリンクがまだ利用できない場合は、以下の GitHub Releases ビルドをお使いください。~~

### ~~GitHub Releases（代替）~~（現在は提供されていません）

~~最新のビルドは [GitHub Releases](https://github.com/clipboardxAI) から直接ダウンロードできます。このバージョンは自動更新に対応していません。~~

## インストール手順

### Mac App Store

1. 上記のダウンロードリンクを開くか、Mac App Store で "ClipboardxAI" を検索します。
2. **Get** をクリックしてアプリをダウンロードします。
3. アプリは自動的にインストールされます。**Applications** または **Launchpad** から起動してください。

### ~~GitHub Releases~~

1. ~~Releases ページから最新の `.dmg` をダウンロードします。~~
2. ~~ダウンロードした `.dmg` をダブルクリックして開きます。~~
3. ~~`ClipboardxAI.app` アイコンを **Applications** フォルダーにドラッグします。~~
4. ~~マウントされたイメージを取り出し、**Applications** からアプリを開きます。~~

macOS がアプリの起動をブロックする場合（Gatekeeper）、**システム設定 → プライバシーとセキュリティ** を開き **このまま開く** をクリックするか、アプリを右クリックして **開く** を選択してください。

## 初回起動

初回起動時に、ClipboardxAI は短いセットアップを案内します。

- **メニューバー項目を有効にする** — アプリをメニューバーに常駐させます。
- **必要な権限を付与する** — バックグラウンドでクリップボードを監視するために必要です（[権限](/ja/guide/permissions)を参照）。
- *(オプション)* AI アクションが必要な場合は、**設定 → AI** でクラウド AI プロバイダーに接続します。

求められたタイミングで権限を付与してください。権限はいつでも **システム設定 → プライバシーとセキュリティ** で変更できます。

## アップデート

- **Mac App Store 版**: App Store によって自動的に更新されます。
- ~~**GitHub Releases 版**: 新しいリリースをダウンロードし、`Applications` 内のアプリを置き換えてください。~~

## アンインストール

ClipboardxAI を削除するには：

1. アプリを終了します。
2. `ClipboardxAI.app` を `Applications` からゴミ箱にドラッグします。
3. （オプション）ローカルデータを削除します：

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## システム要件

- **macOS**: Sonoma（14）以降
- **CPU**: Apple Silicon（M シリーズ）または Intel（64 ビット）
- **メモリ**: 最小 4 GB、推奨 8 GB
- **ストレージ**: 約 50 MB

## トラブルシューティング

インストール中に問題が発生した場合：

- **macOS がアプリをブロックする**: **システム設定 → プライバシーとセキュリティ** を開き **このまま開く** をクリックします。
- **公証（Notarization）の警告**: Mac App Store から署名・公証済みのビルドをダウンロードしてください。

さらに詳しいヘルプについては、[トラブルシューティングガイド](/ja/guide/troubleshooting)を参照してください。
