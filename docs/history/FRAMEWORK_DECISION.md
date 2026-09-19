# フレームワーク選定履歴

## 決定

2026-09-18、有限会社ふもと旅館の採用LPはAstroで構築する方針としました。

## 理由

- 1ページ完結の静的LPである
- コンテンツの大部分を静的HTMLとして出力できる
- 必要なJavaScriptがメニューなど一部に限られる
- SCSSを使用できる
- `dist/`をFTPアップロードする既存の公開フローに合わせやすい

## 採用構成

- Astro
- TypeScript
- SCSS
- Vanilla JavaScript
- 静的ビルド
- FTP公開

React / Next.js向け資料は現行仕様として使用しません。共通playbookは元の保管場所を正とし、案件内には現在必要なルールだけを`docs/DEVELOPMENT.md`へ反映します。
