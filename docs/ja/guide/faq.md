# よくある質問（FAQ）

**Q: ClipboardxAI とは何ですか？**

A: ClipboardxAI は macOS 向けのスマートなクリップボードマネージャーです。コピーしたものすべての検索可能な履歴を保持し、その上でアクションを実行できます — 要約、翻訳、テキストの整理、あるいはクラウドの AI モデルへの送信です。

**Q: どの macOS バージョンに対応していますか？**

A: macOS 14 Sonoma 以降で、Apple Silicon（M シリーズ）向けに最適化され、Intel にも対応しています。

**Q: どうやってインストールしますか？**

A: [Mac App Store](/ja/)（推奨）からダウンロードするか、[GitHub Releases](https://github.com/clipboardxAI) から最新のビルドを取得してください。[インストールガイド](/ja/guide/installation)を参照してください。

**Q: ClipboardxAI は無料ですか？**

A: アプリは無料でダウンロードできます。内蔵のローカルツールにはアカウントは不要です。クラウド AI アクションは *ご自身の* プロバイダーの API key を使用するため、お支払いは AI プロバイダーへ直接となり、アプリ内に有料プランはありません。

**Q: どの AI プロバイダーに対応していますか？**

A: 任意の OpenAI 互換プロバイダー: DeepSeek、MiniMax、Zhipu GLM、Kimi (Moonshot)、Mistral、およびローカルの Ollama — さらに OpenAI、Anthropic、Gemini にも対応しています。キーは Keychain に保存されます。

**Q: オフラインで動作しますか？**

A: はい。クリップボード履歴と内蔵のローカルツール（リンク抽出、集計、空白行削除など）は、インターネット接続なしで Mac 上のみで完全に動作します。

**Q: クリップボードデータはプライベートですか？**

A: 履歴はお使いのデバイスに留まります。クラウド AI はオプトインであり、コンテンツは自分で設定したプロバイダーにのみ、Keychain のキーを使って送信されます。私たちがクリップを受信したり保存したりすることは一切なく、テレメトリも存在しません。[プライバシーポリシー](/ja/guide/privacy)を参照してください。

**Q: アクションを増やすにはどうすればよいですか？**

A: [Marketplace](/ja/marketplace/) を閲覧し、任意のアクションの **Install** をクリックしてください。ディープリンクを通じてアプリが開き、**Installed（インストール済み）** 一覧に表示されます。

**Q: アプリをアップデートするには？**

A: Mac App Store 版は自動的に更新されます。GitHub ビルドの場合は、最新のリリースをダウンロードし、`Applications` 内のアプリを置き換えてください。

**Q: バグを報告したり機能をリクエストしたりするには？**

A: [GitHub リポジトリ](https://github.com/clipboardxAI)で issue を作成してください。macOS のバージョン、アプリのバージョン、再現手順を含めてください。

**Q: データはどこに保存されますか？**

A: サンドボックスのコンテナ内に保存されます：

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

API key はシステムの Keychain にあり、そのフォルダーには含まれません。
