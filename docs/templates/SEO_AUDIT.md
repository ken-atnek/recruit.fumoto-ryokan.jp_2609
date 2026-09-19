# SEO総合チェック依頼テンプレート

## 依頼内容

このAstroプロジェクトについて、SEO観点で総合チェックしてください。

## 前提

- Astroによる1ページLP
- 静的ビルド後、`dist/`の中身をFTPで公開
- デモURL: `https://demo-recruit-fumoto-ryokan.tuna-pic.co.jp/`
- 本番URL: `https://recruit.fumoto-ryokan.jp/`
- デモは`noindex, nofollow`
- 本番だけをインデックス対象にする
- 一般論ではなく、実装済みコードとビルド結果を確認する

## 確認項目

### メタ情報

- `title`
- `description`
- canonical
- OGP
- favicon
- デモと本番のrobots設定

### HTML構造

- `h1`と見出し階層
- `header`、`nav`、`main`、`section`、`footer`
- アンカーリンクのリンク先とラベル

### コンテンツ・画像

- 募集職種、待遇、応募方法などの重要情報
- JavaScriptが無効な場合の主要情報
- 画像の`alt`、形式、サイズ
- レイアウトシフト

### 技術SEO

- `robots.txt`
- サイトマップ
- 構造化データ
- 404とリンク切れ
- Core Web Vitals上の懸念
- 不要なJavaScriptとCSS

## 出力形式

1. 総評
2. 優先度：高
3. 優先度：中
4. 優先度：低
5. デモ／本番の環境別確認
6. 修正順
