import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://selectmall-keg.jp/"),

  title: {
    template: "Talos ケグ（タロスケグ） - %s",
    default:
      "Talos ケグ（タロスケグ）｜TALOSワンウェイケグ公式｜セレクトモール",
  },

  description:
    "Talos ケグ（タロスケグ）はTALOS（タロス）製ワンウェイケグの公式情報サイト。単層ケグ・T-KEG・BREWJETのお見積依頼受付中。回収・洗浄不要で運用コスト削減。S/A/G/Tタイプ対応。",

  keywords: [
    "Talos ケグ",
    "タロスケグ",
    "タロス ケグ",
    "TALOS ケグ",
    "タロス ワンウェイケグ",
    "TALOS",
    "タロス",
    "ワンウェイケグ",
    "ビールケグ",
    "使い捨てケグ",
    "単層ケグ",
    "T-KEG",
    "BREWJET",
    "ステンレスケグ",
    "ブルワリー",
    "コスト削減",
  ],

  authors: [{ name: "セレクトモール株式会社" }],
  publisher: "セレクトモール株式会社",
  category: "ビール樽",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Talos ケグ（タロスケグ）公式｜セレクトモール",
    title: "Talos ケグ（タロスケグ）｜TALOSワンウェイケグ公式",
    description:
      "Talos ケグ（タロスケグ）のお見積・導入相談はセレクトモールへ。TALOS製ワンウェイケグで運用コスト削減。単層ケグ・T-KEG・BREWJETに対応。",
    url: "https://selectmall-keg.jp/",
    images: [
      {
        url: "/images/sns/ogp_1200_630.png",
        width: 1200,
        height: 630,
        alt: "Talos ケグ（タロスケグ）- TALOSワンウェイケグ公式",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@selectmall_keg",
    creator: "@selectmall_keg",
    title: "Talos ケグ（タロスケグ）｜TALOSワンウェイケグ",
    description:
      "Talos ケグ（タロスケグ）のお見積・導入相談。TALOS製ワンウェイケグで運用コスト削減。単層ケグ・T-KEG・BREWJET。",
    images: ["/images/sns/ogp_1200_630.png"],
  },

  alternates: {
    canonical: "https://selectmall-keg.jp",
  },

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/images/sns/apple-touch-icon.png",
  },

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
};
