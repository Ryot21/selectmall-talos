import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://selectmall-talos.jp/"),
  title: {
    template: "%s | TALOS - タロスケグ",
    default: "セレクトモール | TALOS - タロスケグ",
  },
  description:
    "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイケグでブルワリー様の負担軽減をサポートします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "セレクトモール",
    title: "セレクトモール | TALOS - タロスケグ",
    description:
      "Talos製のワンウェイケグ。ステンレスケグに代わるワンウェイKEGでブルワリー様の負担軽減をサポートします。",
    images: ["/images/sns/ogp_1200_630.jpg"],
  },
  alternates: {
    canonical: "https://selectmall-talos.jp/",
  },
};
