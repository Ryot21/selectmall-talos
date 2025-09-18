import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://selectmall-keg.jp/"),
  title: {
    template: "TALOS（タロス）ワンウェイケグ - %s",
    default:  "TALOS（タロス）ワンウェイケグ - セレクトモール株式会社",
  },
  description:
    "タロス製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
  openGraph: {
    type:     "website",
    locale:   "ja_JP",
    siteName: "TALOS（タロス）ワンウェイケグ - セレクトモール株式会社",
    title:    "TALOS（タロス）ワンウェイケグ - セレクトモール株式会社",
    description:
              "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
    images: [
      {
        url: "/images/sns/ogp_1200_630.png",
        width: 1200,
        height: 630,
        alt: "TALOS（タロス）ワンウェイケグ - セレクトモール株式会社",
      },
    ],
  },
  twitter: {
    card:  "summary_large_image",
    title: "TALOS（タロス）ワンウェイケグ - セレクトモール株式会社",
    description:
          "タロス製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
    images: ["/images/sns/ogp_1200_630.png"],
  },
  alternates: {
    canonical: "https://selectmall-keg.jp/",
  },
};
