// Next.js 15のMetadataRoute型をインポート（robots.txt生成用）
import { MetadataRoute } from "next";

/**
 * robots.txt生成関数
 * 検索エンジンクローラーにサイトのクロールルールを指示
 * Google Search Console対応版
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // すべての検索エンジンクローラーを対象
        userAgent: "*",
        // ルートディレクトリ以下すべてをクロール許可
        allow: "/",
        // プライベートページと管理ページはクロール禁止
        disallow: [
          "/private/",
          "/admin/",
          "/thanks",
          "/api/",
          "/_next/",
          "/*.json$",
          "/*?*", // クエリパラメータ付きURLを除外
        ],
      },
      {
        // Googlebot専用の設定
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/thanks", "/api/", "/_next/"],
        // クロール間隔の指定（1秒間隔）
        crawlDelay: 1,
      },
    ],
    // サイトマップの場所を指定（SEO最適化）
    sitemap: "https://selectmall-keg.jp/sitemap.xml",
    // ホストの指定（wwwなしを正規URLとして指定）
    host: "https://selectmall-keg.jp",
  };
}
