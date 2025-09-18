// Next.js 15のMetadataRoute型をインポート（robots.txt生成用）
import { MetadataRoute } from "next";

/**
 * robots.txt生成関数
 * 検索エンジンクローラーにサイトのクロールルールを指示
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // すべての検索エンジンクローラーを対象
      userAgent: "*",
      // ルートディレクトリ以下すべてをクロール許可
      allow: "/",
      // プライベートページと管理ページはクロール禁止
      disallow: ["/private/", "/admin/"],
    },
    // サイトマップの場所を指定（SEO最適化）
    sitemap: "https://selectmall-keg.jp/sitemap.xml",
  };
}
