# 変更サマリー（コミット前確認用）

> このファイルはコミット前の変更確認用です。コミット後に削除して問題ありません。

更新日: 2026-07-27

---

## 全体像

Talos ワンウェイケグ LP の CV 導線改善と、「**Talos ケグ**」「**タロスケグ**」での SEO 強化を実施。

| 状態 | コミット | 内容 |
|------|----------|------|
| ✅ コミット済み | `88ae221` | お見積依頼セクション追加・追従ボタン変更 |
| ⏳ **未コミット（今回）** | — | SEO オンページ最適化 |

---

## ⏳ 未コミット変更（今回コミット予定）

### 目的

- 「Talos ケグ」「タロス ケグ」「タロスケグ」等の表記ゆれで検索上位を狙う
- 構造化データの不整合・リスク markup を解消
- FAQ 内容と JSON-LD を完全一致させる

### 変更ファイル一覧

| ファイル | 種別 | 概要 |
|----------|------|------|
| `src/constants/faqItems.ts` | **新規** | FAQ 11件を一元管理 |
| `src/app/(lp)/metadata.ts` | 変更 | title / description / OGP / keywords 最適化 |
| `src/components/StructuredData.tsx` | 変更 | FAQ 自動生成、WebSite / Product スキーマ追加 |
| `src/app/(lp)/page.tsx` | 変更 | JSON-LD 追加、sc01 見出し・本文、faq  import 化 |
| `src/features/lp/mainVisual/index.tsx` | 変更 | h1・画像 alt を Talos ケグ向けに更新 |
| `src/features/lp/estimate/index.tsx` | 変更 | 見積リード文にキーワード追加 |
| `src/app/manifest.ts` | 変更 | PWA 名称・説明を更新 |

**コミットに含めない:** `.DS_Store`

---

### 1. `src/constants/faqItems.ts`（新規）

FAQ を `page.tsx` から分離し、表示と構造化データの **単一ソース** に。

- **新規 FAQ:** 「Talos ケグ（タロスケグ）とは何ですか？」
- **修正:** FAQ 07 から TOPPER 削除 →「BREWJET は専用カプラーが必要」に
- **強化:** 一部回答に「Talos ケグ（タロスケグ）」表記を追加
- **合計:** 11件（id: `00`〜`10`）

---

### 2. `src/app/(lp)/metadata.ts`

#### 変更前（例）
- title: `TALOS（タロス）ワンウェイケグ｜使い捨てビールケグでコスト削減 - セレクトモール`

#### 変更後
- title: `Talos ケグ（タロスケグ）｜TALOSワンウェイケグ公式｜セレクトモール`
- description / OGP / Twitter に **Talos ケグ・タロスケグ** を前方配置
- keywords 先頭にターゲットキーワード群を追加

#### 削除したもの
- `metadata.other` 内の JSON-LD（Product スキーマ）
  - 架空レビュー（review / aggregateRating）
  - 期限切れ価格（`priceValidUntil: 2025-12-31`）
  - 不正確な固定価格（`price: 2000`）

→ 上記は `StructuredData.tsx` + `page.tsx` の `<script>` 出力に移行・整理

---

### 3. `src/components/StructuredData.tsx`

| スキーマ | 変更内容 |
|----------|----------|
| **FAQPage** | `faqItems` から全11件を自動生成（表示と完全一致） |
| **Organization** | `alternateName` に Talos ケグ / タロスケグ 等を追加 |
| **BreadcrumbList** | 2階層目を「Talos ケグ（タロスケグ）」に |
| **WebSite** | **新規** — サイト名・alternateName をキーワード最適化 |
| **Product** | **新規** — 架空レビューなし、alternateName 付き、画像 URL 更新 |

Product スキーマの画像:
- `tansou-descript.png`
- `TKEG.png`
- `BREWJET-descript.png`

---

### 4. `src/app/(lp)/page.tsx`

- `faqItems` を `@/constants/faqItems` から import（インライン定義を削除）
- JSON-LD `<script>` を追加:
  - `websiteStructuredData`
  - `productStructuredData`
- **sc01 セクション**
  - 見出し: `Talos ケグ（タロスケグ）とは`
  - リード文: Talos ケグの定義・正規代理店・取扱商品を追加
- **商品紹介**
  - 単層ケグ / T-KEG サブタイトルに「Talos ケグ」を追加

---

### 5. `src/features/lp/mainVisual/index.tsx`

| 要素 | 変更 |
|------|------|
| **h1**（sr-only） | `Talos ケグ（タロスケグ）｜TALOSワンウェイケグ - 使い切りケグの新定番` |
| Talos ロゴ alt | `Talos ケグ（タロスケグ）- TALOS` |
| MV 背景 alt | `Talos ケグ（タロスケグ）- ワンウェイビールケグ` |

---

### 6. `src/features/lp/estimate/index.tsx`

- リード文先頭に「Talos ケグ（タロスケグ）の」を追加

---

### 7. `src/app/manifest.ts`

- `name`: `Talos ケグ（タロスケグ）- セレクトモール`
- `short_name`: `Talos ケグ`
- `description`: Talos ケグ公式・お見積・導入相談の文言に更新

---

## ✅ コミット済み（参考: `88ae221`）

前回コミット分。今回の SEO 変更とは別コミット。

### 目的
- 見積依頼を Google フォームへ直結
- 問い合わせフォームは HubSpot のまま維持

### 主な変更

| ファイル | 内容 |
|----------|------|
| `src/constants/estimateForms.ts` | 単層ケグ / T-KEG / BREWJET の Google フォーム URL |
| `src/features/lp/estimate/index.tsx` | `#estimate` セクション新設（商品画像付き） |
| `src/app/(lp)/page.tsx` | 比較セクション後に `<LpEstimate />` 配置 |
| `StickyButtonWrapper.tsx` | 追従ボタン `#cta` → `#estimate` |
| `form/index.tsx` | 問い合わせフォームから「見積請求」削除 |
| `_title.scss` | 見出し修飾 `-estimate` 追加 |

### Google フォーム URL

| 商品 | URL |
|------|-----|
| 単層ケグ | https://forms.gle/hn1nNSwdXJCmfDbK6 |
| T-KEG | https://forms.gle/2DedFLwTzbwtFbzU8 |
| BREWJET | https://forms.gle/LWNdYRhZUrbvB4ga9 |

---

## 現在の LP 構成（ユーザー導線）

```
メインビジュアル
  ↓
Talos ケグ（タロスケグ）とは（sc01）
  ↓
商品紹介（sc02）… 単層ケグ / T-KEG / BREWJET
  ↓
特徴（sc03）
  ↓
比較（sc05）
  ↓
【お見積依頼 #estimate】→ Google フォーム（商品別）
  ↓
【お問い合わせ #cta】→ HubSpot フォーム（相談・資料DL）
  ↓
FAQ
  ↓
追従ボタン → #estimate
```

---

## 推奨コミットメッセージ（今回分）

```
修正 > SEO > Talos ケグ・タロスケグ向けオンページ最適化

「Talos ケグ」「タロスケグ」での検索上位を狙い、メタデータ・構造化データ・本文を横断的に最適化。

- title / description / OGP / Twitter / manifest をキーワード前方配置に変更
- FAQ を定数化し構造化データと11件完全一致（Talos ケグ FAQ 新設、TOPPER 削除）
- WebSite / Product JSON-LD を script タグ出力に移行（架空レビュー・期限切れ価格を削除）
- h1・sc01 見出し・商品サブタイトル・画像 alt・見積リード文を更新
```

### ステージングコマンド例

```bash
git add \
  selectmall-talos-next/src/app/\(lp\)/metadata.ts \
  selectmall-talos-next/src/app/\(lp\)/page.tsx \
  selectmall-talos-next/src/app/manifest.ts \
  selectmall-talos-next/src/components/StructuredData.tsx \
  selectmall-talos-next/src/constants/faqItems.ts \
  selectmall-talos-next/src/features/lp/estimate/index.tsx \
  selectmall-talos-next/src/features/lp/mainVisual/index.tsx
```

---

## デプロイ後の確認チェックリスト

- [ ] 本番 title / description が意図どおりか（ブラウザタブ・SNSシェア）
- [ ] `#estimate` の3ボタンが各 Google フォームに遷移するか
- [ ] `#cta` の HubSpot フォームが従来どおり動作するか
- [ ] [Google リッチリザルトテスト](https://search.google.com/test/rich-results) で FAQ / Product エラーなし
- [ ] Search Console で URL のインデックス登録をリクエスト

---

## 補足（SEO）

- オンページ対策は実施済み。**1位は保証されません**（被リンク・指名検索・競合サイト等の影響あり）
- 追従ボタン SVG（`contact-btn.svg`）の見た目は「資料DL」デザインのまま（alt のみ「お見積依頼」に変更済み）
