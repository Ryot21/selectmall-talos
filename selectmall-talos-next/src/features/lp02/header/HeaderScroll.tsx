"use client";

import { useEffect } from "react";

export default function HeaderScroll() {
    useEffect(() => {
        const header = document.getElementById("js-header");
        if (!header) return;

        let lastScrollY = window.scrollY;
        let isScrollingDown = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);

            // スクロール方向の判定（より滑らかな判定のために最小閾値を設定）
            if (scrollDifference < 5) return;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {

                // 下スクロール時
                if (!isScrollingDown) {
                    header.classList.add("is-hidden");
                    header.classList.remove("is-visible");
                    isScrollingDown = true;
                }
            } else {
                // 上スクロール時
                if (isScrollingDown) {
                    header.classList.remove("is-hidden");
                    header.classList.add("is-visible");
                    isScrollingDown = false;
                }
            }
            lastScrollY = currentScrollY;
        };

        // 初期状態の設定
        requestAnimationFrame(() => {
            header.classList.add("is-visible");
        });

        // スクロールイベントの登録
        window.addEventListener("scroll", handleScroll, { passive: true });

        // クリーンアップ
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
}
