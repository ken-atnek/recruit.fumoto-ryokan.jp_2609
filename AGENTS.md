# AGENTS.md

## 基本方針

有限会社ふもと旅館の採用LPを、支給デザインと確定原稿に基づいて制作します。

- 依頼範囲外の大幅な変更をしない
- 変更は小さく分ける
- 不明な仕様を推測で確定しない
- 実装難易度を理由にデザインを簡略化しない
- 募集要項などの事実情報を推測で補完しない

## 作業開始時の確認順

1. `AGENTS.md`
2. `docs/PROJECT_SPEC.md`
3. `docs/PROJECT_SPEC.md`記載のFigmaと、補助資料の`docs/screenshot/PC.jpg`・`docs/screenshot/mobile.jpg`
4. 実装時は `docs/DEVELOPMENT.md`
5. UIを触る時は `docs/UI_SPEC.md`
6. ビルド・SEO・公開時は `docs/RELEASE.md`

## 実装方針

- 技術・コーディング方針は`docs/DEVELOPMENT.md`を正とする
- UI動作は`docs/UI_SPEC.md`を正とする
- 公開環境・応募導線・CMS方針は`docs/RELEASE.md`を正とする
- 既存ファイルの構成と命名を確認してから追加する
- ソースファイルの新規作成・修正時は、`docs/DEVELOPMENT.md`のコメントヘッダー規則に従う

## 注意点

- 仕様が競合する場合は、該当分野の正本を確認する
- 正本に記載のない事項は推測せず、ユーザーへ確認する
