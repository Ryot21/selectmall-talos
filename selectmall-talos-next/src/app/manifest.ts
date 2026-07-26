import { MetadataRoute } from "next";

/**
 * Web App Manifest生成関数
 * PWA対応により、モバイルでのユーザビリティとSEO効果を向上
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Talos ケグ（タロスケグ）- セレクトモール",
    short_name: "Talos ケグ",
    description:
      "Talos ケグ（タロスケグ）の公式情報。TALOS製ワンウェイケグのお見積・導入相談。",
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
        purpose: "maskable",
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
