// 追従ボタン

import Link from "next/link";
import React, { useEffect, useState } from "react";

// propsに監視対象IDを追加
interface StickyButtonProps {
  href: string; // ボタンのリンク先
  children: React.ReactNode; // ボタン内に表示する要素
  customClass?: string; // 追加のクラス名（アニメーション等）
  targetId?: string; // 監視対象のID（例: stickyDisplay）
}

export default function StickyButton({
  href,
  children,
  customClass = "",
  targetId,
}: StickyButtonProps) {
  // ボタン表示制御用のstate
  const [show, setShow] = useState(false);

  useEffect(() => {
    // targetIdが指定されていない場合は何もしない
    if (!targetId) return;
    // 監視対象の要素を取得
    const target = document.getElementById(targetId);
    if (!target) return;
    // IntersectionObserverで監視
    const observer = new window.IntersectionObserver(
      ([entry]) => {

        // 監視対象が画面に見えていないときにボタンを表示
        setShow(!entry.isIntersecting);

        // 監視対象が画面に見えるときにボタンを表示
        // setShow(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(target);
    // クリーンアップ
    return () => observer.disconnect();
  }, [targetId]);

  // stickyBtn, show, アニメーションクラスを合成
  const btnClass = targetId ?
    `${customClass} stickyBtn${show ? " show" : ""}`:
    `${customClass} stickyBtn`;
  return (
    // show=trueのときだけ表示
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  );
}
