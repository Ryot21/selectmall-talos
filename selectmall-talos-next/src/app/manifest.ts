import { MetadataRoute } from "next";

/**
 * Web App Manifest生成関数
 * PWA対応により、モバイルでのユーザビリティとSEO効果を向上
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TALOS ワンウェイケグ - セレクトモール",
    short_name: "TALOS ケグ",
    description:
      "TALOS（タロス）ワンウェイケグでビールケグのコスト削減を実現。使い捨てタイプで運用コスト60%削減。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a365d",
    orientation: "portrait",
    icons: [
      {
        src: "/images/sns/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "productivity", "utilities"],
    lang: "ja",
    scope: "/",
    id: "talos-keg-app",
  };
}
