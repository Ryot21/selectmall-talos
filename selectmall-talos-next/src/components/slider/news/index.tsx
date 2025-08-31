// TOP > メインビジュアル > お知らせバー
"use client";

import Link from "next/link";
import DateText from "@/components/elements/date/text";
// Swiper関連のインポート
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
// 型定義
import type { News } from "@/types/microcms";

type Props = {
  news: News[];
};

// ニュースデータを表示するSwiperコンポーネント
export default function NewsSwiper({ news }: Props) {
  if (!news || news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <Swiper
      className="news-swiper"
      modules={[Autoplay]}
      direction="horizontal"
      spaceBetween={20} // スライド間の余白
      slidesPerView={1} // SSRとCSRの差異によるハイドレーションエラー対策
      // centeredSlides={true} // スライドを中央寄せに
      loop={true}
      speed={15000}
      allowTouchMove={false} // タッチ・スワイプ操作を無効化
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {news.map((article) => (
        <SwiperSlide key={article.id}>
          <Link href={`/news/${article.id}`} className="c-newsBar--link">
            <DateText date={article.publishedAt || article.createdAt} />
            <span className="c-newsBar--title -ws-n">{article.title}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
