"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ページ遷移時にスクロール位置をトップに戻すコンポーネント
 * - ページ遷移時にスクロール位置を0に設定
 * - スムーズスクロールを実現
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // ページ遷移時に実行
    const scrollToTop = () => {
      // documentElement（html要素）のスクロール位置を0に設定
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // body要素のスクロール位置も0に設定（念のため）
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // 直接実行
    scrollToTop();

    // 少し遅延させて再度実行（確実にスクロールを実行するため）
    setTimeout(scrollToTop, 0);
  }, [pathname]);

  return null;
}
