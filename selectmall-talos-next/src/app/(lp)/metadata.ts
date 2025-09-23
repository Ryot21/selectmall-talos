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
    }),
  },
};
