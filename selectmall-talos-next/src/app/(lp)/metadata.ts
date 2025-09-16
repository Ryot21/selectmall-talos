import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://selectmall-keg.jp/"),
  title: {
    template: "セレクトモール | TALOS（タロス）ワンウェイケグ - %s",
    default: "セレクトモール | TALOS（タロス）ワンウェイケグ",
  },
  description:
    "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "セレクトモール ",
    title: "セレクトモール | TALOS（タロス）ワンウェイケグ ",
    description:
      "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
    images: ["/sns/ogp_1200_630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "セレクトモール | TALOS（タロス）ワンウェイケグ",
    description:
      "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
    images: ["/sns/ogp_1200_630.png"],
  },
  alternates: {
    canonical: "https://selectmall-keg.jp/",
  },
};
