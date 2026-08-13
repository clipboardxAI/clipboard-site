# コントリビューション

ClipboardxAI の改善にご協力いただきありがとうございます！ バグ修正、機能追加、翻訳、ドキュメントの改善など、どのような形でのご貢献も歓迎します。

## 貢献の方法

### バグ報告（Bug Reports）

- まず既存の [issues](https://github.com/clipboardxAI/issues) を確認してください。
- macOS のバージョン、ClipboardxAI のバージョン、再現手順を含めてください。
- 必要に応じてサンプルテキストを添付してください（機密のクリップボード内容はご遠慮ください）。

### 機能リクエスト（Feature Requests）

- 機能とユースケースを説明してください。
- ClipboardxAI のユーザーにどのように役立つかを説明してください。
- ローカルファーストでプライバシーを尊重する方針に合致するか確認してください。

### 翻訳（Translations）

- ClipboardxAI は i18n JSON ファイルを通じて複数言語に対応しています。
- 不足している、または不完全な言語の翻訳にご協力ください。
- 既存の翻訳については `ClipboardXAI/Resources/i18n/` を参照してください。

### コードの貢献（Code Contributions）

- アプリは **Swift 6 + SwiftUI** で書かれています。
- リポジトリをフォークし、プルリクエストを送信してください。
- コードベースで使われている Clean Architecture のパターンに従ってください。

## はじめに

### 前提条件（Prerequisites）

- Node.js 18 以降（サイト用）
- pnpm パッケージマネージャー（サイト用）
- Xcode 16+（アプリ開発用）
- macOS 14 Sonoma 以降

### 開発環境のセットアップ（ドキュメントサイト）

1. GitHub でリポジトリを **フォーク** します。
2. **自分のフォークをクローン** します：
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **依存関係をインストール** します：
   ```bash
   pnpm install
   ```
4. **開発サーバーを起動** します：
   ```bash
   pnpm docs:dev
   ```
5. ブラウザーで `http://localhost:5173` を **開きます**。

### 変更を加える

1. 変更用の新しいブランチを作成します：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. `docs/` 内のドキュメントファイルを変更します。
3. サイトをビルドして変更をテストします：
   ```bash
   pnpm docs:build
   ```
4. 変更をコミットします：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 変更の提出（Submitting Changes）

1. ブランチを自分のフォークへ **プッシュ** します：
   ```bash
   git push origin feature/your-feature-name
   ```
2. GitHub で **プルリクエストを作成** します。
3. **レビューを待ち**、フィードバックに対応します。

## ガイドライン

### 文体（Writing Style）

- 明確で簡潔な言葉を使ってください。
- 可能な限り能動態で書いてください。
- 包括的で歓迎する姿勢を保ってください。
- 一貫したフォーマットを使ってください。
- 役立つ場合はスクリーンショットを含めてください。

### ファイル構造（File Structure）

- ドキュメントページは `docs/` に置きます。
- ガイドは `docs/guide/` に置きます。
- ファイル名は小文字とハイフンを使います：`my-new-guide.md`。

### リンク（Links）

- 内部ドキュメントには相対リンクを使ってください。
- 役立つ場合は外部リソースへリンクしてください。
- すべてのリンクが機能することを確認してください。

### 画像とアセット（Images and Assets）

- 画像は `docs/public/` またはサブディレクトリに置いてください。
- 説明的なファイル名を使ってください。
- 画像はウェブ向けに最適化してください（500KB 未満推奨）。

## 行動規範（Code of Conduct）

本プロジェクトは行動規範に従っています。参加することで、以下に同意したものとみなされます。
- 互いに敬意を払い、包括的に接してください。
- 建設的なフィードバックに焦点を当ててください。
- 過ちに対して責任を負ってください。

## 質問はありますか？

コントリビューションについて質問がある場合は、既存の [issues](https://github.com/clipboardxAI/issues) を確認するか、新しい issue を作成してください。ClipboardxAI の改善にご協力いただきありがとうございます！ 🎉
