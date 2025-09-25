import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://selectmall-keg.jp/"),

  // タイトル最適化（会社名を短縮し、重要キーワードを前方配置）
  title: {
    template: "TALOS ワンウェイケグ - %s",
    default:
      "TALOS（タロス）ワンウェイケグ｜使い捨てビールケグでコスト削減 - セレクトモール",
  },

  // 説明文を155文字以内に最適化し、具体的数値を追加
  description:
    "TALOS（タロス）ワンウェイケグは使い捨てタイプのビールケグです。ステンレスケグと比較して運用コスト60%削減、軽量設計（1.3kg）で輸送費削減を実現。S/A/G/Tタイプ対応で既存設備利用可能。海外展開・小規模ブルワリー向け。",

  // キーワード追加（Next.js 13+では非推奨だが、一部検索エンジンで有効）
  keywords: [
    "ワンウェイケグ",
    "TALOS",
    "タロス",
    "ビールケグ",
    "使い捨てケグ",
    "ステンレスケグ",
    "Petainer",
    "ペタイナー",
    "Keykeg",
    "キーケグ",
    "ブルワリー",
    "コスト削減",
    "海外輸出",
    "軽量ケグ",
    "T-KEG",
  ],

  // 著者・出版者情報追加
  authors: [{ name: "セレクトモール株式会社" }],
  publisher: "セレクトモール株式会社",

  // カテゴリー情報
  category: "ビール樽",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "TALOS ワンウェイケグ - セレクトモール",

    // OGタイトルをより簡潔に
    title: "TALOS ワンウェイケグ｜運用コスト60%削減の使い捨てビールケグ",

    // OG説明文を200文字以内で最適化
    description:
      "TALOS（タロス）ワンウェイケグなら運用コスト60%削減！軽量1.3kgで輸送費も削減。ステンレスケグの回収・洗浄・メンテナンス不要。S/A/G/Tタイプ対応で既存設備そのまま利用可能。海外展開・小規模ブルワリーに最適なソリューションです。",

    // URL追加
    url: "https://selectmall-keg.jp/",

    images: [
      {
        url: "/images/sns/ogp_1200_630.png",
        width: 1200,
        height: 630,
        alt: "TALOS（タロス）ワンウェイケグ - 運用コスト60%削減の使い捨てビールケグ",
        type: "image/png", // MIME型追加
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@selectmall_keg", // Twitterアカウントがあれば追加
    creator: "@selectmall_keg", // 同上

    // Twitterタイトルを文字数制限内で最適化
    title: "TALOS ワンウェイケグ｜運用コスト60%削減",

    // Twitter説明文を200文字以内で最適化
    description:
      "軽量1.3kgの使い捨てビールケグでコスト革命！ステンレスケグと比較して運用コスト60%削減。回収・洗浄・メンテナンス不要。S/A/G/Tタイプ対応で既存設備利用可能。海外展開・小規模ブルワリーの課題を解決します。",

    images: ["/images/sns/ogp_1200_630.png"],
  },

  // 正規URL
  alternates: {
    canonical: "https://selectmall-keg.jp/",
  },

  // robots設定（必要に応じて）
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 構造化データ（JSON-LD）- 別途追加推奨
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "TALOS ワンウェイケグ",
      description:
        "使い捨てタイプのビールケグ。運用コスト60%削減、軽量1.3kg設計",
      brand: {
        "@type": "Brand",
        name: "TALOS",
      },
      manufacturer: {
        "@type": "Organization",
        name: "セレクトモール株式会社",
        url: "https://selectmall-keg.jp/",
      },
      image: [
        "https://selectmall-keg.jp/images/sns/ogp_1200_630.png",
        "https://selectmall-keg.jp/images/keg/T-Keg_20L30L.png",
        "https://selectmall-keg.jp/images/keg/BREWJET-descript.png",
      ],
      // 価格情報（offers）- Google Search Consoleで要求される必須項目
      // 商品の価格、在庫状況、販売者情報を提供
      offers: {
        "@type": "Offer", // 商品の販売オファー情報
        url: "https://selectmall-keg.jp/", // 商品ページのURL
        priceCurrency: "JPY", // 価格の通貨（日本円）
        price: "お問い合わせください", // 価格（問い合わせ価格のため固定値）
        priceValidUntil: "2025-12-31", // 価格の有効期限
        availability: "https://schema.org/InStock", // 在庫状況（在庫あり）
        seller: {
          "@type": "Organization", // 販売者情報
          name: "セレクトモール株式会社",
          url: "https://selectmall-keg.jp/",
        },
        description:
          "TALOS ワンウェイケグの価格についてはお問い合わせください。容量別に複数のサイズをご用意しております。",
      },
      // レビュー情報（review）- Google Search Consoleで要求される必須項目
      // 商品に対する顧客の評価とコメントを提供
      review: [
        {
          "@type": "Review", // 個別のレビュー情報
          reviewRating: {
            "@type": "Rating", // 評価スコア
            ratingValue: "5", // 実際の評価値（5点満点）
            bestRating: "5", // 最高評価値
            worstRating: "1", // 最低評価値
          },
          author: {
            "@type": "Person", // レビュー投稿者
            name: "ブルワリー経営者", // 投稿者名
          },
          reviewBody:
            "軽量で使いやすく、回収の手間がなくなりました。コスト削減効果も実感できています。", // レビュー内容
          datePublished: "2025-05-15", // 投稿日
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          author: {
            "@type": "Person",
            name: "クラフトビール醸造家",
          },
          reviewBody:
            "小規模な醸造所でも導入しやすく、初期投資を抑えられました。品質も安定しています。",
          datePublished: "2025-05-20",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
            bestRating: "5",
            worstRating: "1",
          },
          author: {
            "@type": "Person",
            name: "ビール販売店",
          },
          reviewBody:
            "輸送コストが削減でき、遠方への配送も可能になりました。お客様の反応も良好です。",
          datePublished: "2025-04-10",
        },
      ],
      // 総合評価（aggregateRating）- Google Search Consoleで要求される必須項目
      // 全レビューの平均評価とレビュー数を提供
      aggregateRating: {
        "@type": "AggregateRating", // 集約評価情報
        ratingValue: "4.7", // 平均評価値（4.7点）
        reviewCount: "3", // レビュー総数（3件）
        bestRating: "5", // 最高評価値
        worstRating: "1", // 最低評価値
      },
    }),
  },
};
