# rough-hale-ilima｜CW案件 13084267 ラフ

## 案件
- ID: 13084267
- CL: ilima（オンラインカウンセリングルーム発注主）
- 制作対象: トップページ1P（応募用ラフ）
- 報酬: 5〜10万円
- 納期: 2026/8/31

## 架空ブランド
- サービス名: Hale ilima（ハレ・イリマ）
- 意味: 「Hale」=ハワイ語で「家・寄り添う場所」／「ilima」=オアフ島の島花
- メインタグライン: 援助する人にこそ、整う時間を。
- ターゲット: 30〜50代女性・対人援助職（看護・介護・教育・福祉）

## 起動方法
1. `index.html` をダブルクリック（またはVSCodeのLive Serverで起動）
2. Google Fonts読み込みのためインターネット接続必須

## ファイル構成
```
rough-hale-ilima/
├── 00_CC指示書.md
├── index.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/                 ← AI生成画像配置先（後日差し替え予定）
```

## セクション構成（13セクション・トップ1P完結）
1. ヘッダー（固定／スクロール縮小）
2. Hero（メインビジュアル）
3. Problem（援助職の共感疲労に寄り添う）
4. About（私たちについて）
5. Counselor（カウンセラー紹介ティーザー）
6. Menu（カウンセリングメニュー4種）
7. Pricing（料金プラン3種）
8. Flow（ご利用の流れ4ステップ）
9. Reservation（ご予約・お問い合わせ）
10. Voice（寄り添った時間の声）
11. FAQ（6問アコーディオン）
12. Final CTA（夕日のイリマ）
13. フッター

## 画像について
- 後日、AI生成画像13枚を `assets/img/` に配置予定
- ファイル名は指示書のキーと完全一致させる：
  - `hero-ilima-bloom.webp`
  - `hero-bg-watercolor.webp`
  - `about-counselor-hands.webp`
  - `counselor-silhouette.webp`
  - `menu-01-individual.webp`
  - `menu-02-helpers.webp`
  - `menu-03-group.webp`
  - `menu-04-ongoing.webp`
  - `flow-bg-soft.webp`
  - `voice-bg-paper.webp`
  - `reservation-calm.webp`
  - `faq-bg-leaves.webp`
  - `cta-sunset.webp`
- 画像未配置でもCSSのフォールバックグラデーションで表示は崩れません

## コピーガード5層（実装済み）
- Layer 1: スクロール追従バナー（最下部に常時表示）
- Layer 2: 透かしウォーターマーク（DRAFT — AKASHIKI）
- Layer 3: テキスト選択禁止（input/textareaは除外）
- Layer 4: 右クリック・F12・Ctrl+U/S/C/P・Ctrl+Shift+I/J/C 無効化
- Layer 5: 印刷時に「このページは印刷できません」表示

## デプロイ
**未実施・禁止**。あおきさんの明示指示後に別途実行。
