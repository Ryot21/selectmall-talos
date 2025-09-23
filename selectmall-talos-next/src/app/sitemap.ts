// Next.js 15のMetadataRoute型をインポート（サイトマップ生成用）
import { MetadataRoute } from "next";

/**
 * サイトマップ生成関数
 * SEO最適化のため、検索エンジンにサイト構造を伝える
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // ベースURL（本番環境のドメイン）
  const baseUrl = "https://selectmall-keg.jp";

  return [
    {
      // メインページ（ランディングページ）
      url: baseUrl,
      // 最終更新日時（現在時刻を自動設定）
      lastModified: new Date(),
      // 更新頻度：週次（コンテンツが定期的に更新されるため）
      changeFrequency: "weekly",
      // 優先度：最高（メインページのため）
      priority: 1.0,
    },
  ];
}
