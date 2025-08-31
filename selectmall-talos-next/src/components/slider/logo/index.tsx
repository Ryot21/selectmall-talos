"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Client } from "@/types/microcms";

// クライアントから受け取ったデータを表示するSwiperコンポーネント
export default function ClientLogoSwiper({ clients }: { clients: Client[] }) {
  // レスポンシブ対応のためのブレイクポイント設定
  const slideSettings = {
    0: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Autoplay]} // 自動スライド機能を有効化
      breakpoints={slideSettings} // レスポンシブ設定を適用
      // spaceBetween={30} // スライド間の余白
      slidesPerView={"auto"} // SSRとCSRの差異によるハイドレーションエラー対策
      centeredSlides={true} // スライドを中央寄せに
      loop={true} // 無限ループを有効化
      speed={6000} // スライドのアニメーション速度（ミリ秒）
      allowTouchMove={false} // タッチ・スワイプ操作を無効化
      autoplay={{
        delay: 0, // スライド切り替えの待ち時間をなしに
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続
      }}
    >
      {/* クライアントデータを元にスライドを生成 */}
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <Image
            src={client.logo?.url ?? ""} // ロゴ画像のURL（未設定の場合は空文字）
            alt={client.name} // クライアント名を代替テキストとして設定
            width={210}
            height={60}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
