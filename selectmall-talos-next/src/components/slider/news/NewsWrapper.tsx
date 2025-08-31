import { getNewsList } from "@/features/media/api/microcms/getNews";
import { NEWS_TOP_LIST_LIMIT } from "@/constants";
import NewsSwiper from "@/components/slider/news";

// メインの非同期コンポーネント
export default async function NewsWrapper() {
  try {
    const newsData = await getNewsList({
        limit: NEWS_TOP_LIST_LIMIT,
        orders: "-publishedAt",
    });

    if (newsData.contents.length === 0) {
      return <p>お知らせが見つかりません...</p>;
    }

    return <NewsSwiper news={newsData.contents} />;
  } catch (error) {
    console.error("お知らせの取得に失敗しました:", error);
    return <p>お知らせの取得に失敗しました。</p>;
  }
}
