# 開発ルール

## 技術方針

- Astro、TypeScript、SCSS、Vanilla JavaScriptを使用する
- React、Vue、SvelteなどのUIフレームワークは追加しない
- Tailwind CSSは使用しない
- HTML構造は `.astro` ファイルへ手書きする
- JavaScriptが無効でも本文と応募導線を確認できる構造にする

## ディレクトリ

```text
src/
├── assets/
├── components/
│   ├── common/
│   │   ├── Header.astro
│   │   └── Header.module.scss
│   └── sections/
│       ├── HeroSection.astro
│       └── HeroSection.module.scss
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── scripts/
└── styles/
    ├── foundation/
    ├── global/
    ├── utilities/
    └── globals.scss
public/
```

## コンポーネント

- `index.astro`はセクションを表示順に並べる役割に留める
- Header、Footerなどは`src/components/common/`に置く
- LPの各セクションは`src/components/sections/`に置く
- コンポーネント名はPascalCaseにする
- 対応するSCSSは同じ階層へ`ComponentName.module.scss`として置く
- 見出しや画像1つだけで細分化せず、見た目と責務のまとまりで分ける
- 同じUIが複数回登場する場合だけ子コンポーネント化を検討する

```astro
---
import styles from './Header.module.scss';
---

<header class={styles.header}></header>
```

## 実装の進め方

- コンポーネント単位で、Figma確認、`.astro`作成、表示確認の順に進める
- 1つのコンポーネントを確認してから次のコンポーネントへ進む
- `.astro`ではHTML構造とクラス設計を先に固める
- 対応する`.module.scss`には、レイアウト成立に必要な初期スタイルを用意する
- 余白、文字サイズ、画像位置などの細かな調整は、Figmaとブラウザ表示を比較しながら手動で行う
- 複数コンポーネントのSCSSを一括で大幅に書き換えない

## SCSS

- リセット、変数、mixin、タイポグラフィは`src/styles/`へ集約する
- コンポーネント固有のスタイルは対応する`module.scss`へ記載する
- 共通化は、同じ意図の指定が複数箇所で必要になってから行う
- foundationはCSSを直接出力せず、変数・関数・mixinを提供する
- クラス名はキャメルケースを基本とし、Astroから`styles.className`で参照する
- 状態クラスは`isOpen`、`isActive`のように役割を明確にする
- ネストを深くしすぎず、親セレクタへの依存を増やさない
- 不要な余白、`line-height`、`letter-spacing`を追加しない

## レイアウト・レスポンシブ

- モバイル版デザインを基準に組み立てる
- PC下部はモバイル版の構成を基準に、PCファーストビューの表現へ合わせる
- ブレイクポイントは端末名ではなく、見た目が破綻する位置で決める
- 固定幅だけに依存せず、`min()`、`max()`、`clamp()`を必要に応じて使う
- Flexboxは一次元配置、Gridは二次元配置を基本に使い分ける
- `position: absolute`は装飾や重なり表現など用途を限定する
- 375px前後、750pxデザイン基準、主要PC幅で確認する

## フォント

- 和文本文・見出しは、Figmaで使用されている`Zen Kaku Gothic Antique`を基準とする
- 英字の装飾見出しは、Figmaで使用されている`Bodoni Moda`を基準とする
- フォントファイルの提供元と読み込み方法は実装時に確認する
- フォント定義は`src/styles/foundation/_typography.scss`へ集約する
- `font-family`を各コンポーネントへ分散させない
- 変数名とmixin名は実フォント名を基準にする

## リンク

- 内部リンクとページ内リンクは通常の`<a>`を使う
- 外部リンクを別タブで開く場合は`rel="noopener noreferrer"`を付ける
- 固定要素とアンカー先が重なる場合は`scroll-margin-top`で調整する

## 画像

- 最適化する写真は`src/assets/`へ置き、Astroの画像機能を使用する
- 変換不要のSVG、favicon、OGP画像は`public/`へ置く
- 内容を伝える画像には具体的な`alt`を付ける
- 純粋な装飾画像は空の`alt`またはCSS背景として扱う
- 幅と高さを明示し、レイアウトシフトを避ける
- 支給された合成デザイン画像をWeb表示素材として切り出さない

## JavaScript

- UIフレームワークを導入せず、必要な箇所だけVanilla JavaScriptで実装する
- DOM取得時は操作対象の存在を確認する
- 操作対象ごとに初期化処理を分ける
- SEO上必要な本文をJavaScriptで後から生成しない
- 動きを追加する場合は`prefers-reduced-motion`を考慮する

## コメントヘッダー

新規作成するソースファイルには、用途・参照元・作成日・更新日が分かるコメントヘッダーを記載します。

### 対象

- `src/**/*.astro`
- `src/**/*.scss`
- 手動で作成する`src/**/*.ts`（`env.d.ts`などの生成ファイルは除く）

### 共通ルール

- 新規ファイルの作成時に記載する
- `URL`はプロジェクトルートからの絶対パス風で記載する
- `Referenced in`は主な呼び出し元または利用ページを記載する
- `Created`は作成日を保持する
- ファイルを修正したら`Last updated`を更新する
- 日付は`YYYY-MM-DD`で統一する
- タイトルは「ふもと旅館採用 + コンポーネント名・ページ名・用途」で簡潔に記載する
- 既存ファイルにコメントヘッダーがない場合は、そのファイルを次に修正する時に追加する

### Astroテンプレート

Astroのフロントマター内で、importより前に記載します。

```astro
---
/* =======================================
 * ふもと旅館採用 Header
 * URL: /src/components/common/Header.astro
 * Referenced in: /src/pages/index.astro
 * Created: YYYY-MM-DD
 * Last updated: YYYY-MM-DD
 * ======================================= */
import styles from './Header.module.scss';
---
```

### SCSSテンプレート

`module.scss`は配置階層に応じた相対パスでfoundationを`@use`し、その直後にコメントヘッダーを記載します。

```scss
@use "../../styles/foundation" as *;
/* =======================================
 * ふもと旅館採用 Header スタイル
 * URL: /src/components/common/Header.module.scss
 * Referenced in: /src/components/common/Header.astro
 * Created: YYYY-MM-DD
 * Last updated: YYYY-MM-DD
 * ======================================= */
```

グローバルSCSSなど複数の`@use`が必要なファイルでは、先頭の`@use`ブロック直後にコメントヘッダーを記載します。

### TypeScriptテンプレート

```ts
/* =======================================
 * ふもと旅館採用 UIスクリプト
 * URL: /src/scripts/ui.ts
 * Referenced in: /src/layouts/BaseLayout.astro
 * Created: YYYY-MM-DD
 * Last updated: YYYY-MM-DD
 * ======================================= */
```

### コード内コメント

- ヘッダー以外では、コードを読めば分かる内容をコメントで繰り返さない
- デザイン由来の特殊な数値や、実装理由が分かりにくい箇所だけ説明する

## 検証

- HTMLの見出し階層とランドマークを確認する
- 横スクロール、文字切れ、画像比率、固定要素の重なりを確認する
- モバイルとPCの両方でページ内リンクを確認する
- 変更範囲に応じてLintまたはビルドを実行する
