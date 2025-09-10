"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LpNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // リンククリック時の処理
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={"c-hb-nav -LP sp"}>
      <input
        className={"c-hb-nav__cheakbox"}
        id="c-hb-nav__checkbox"
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <label className={"c-hb-nav__button"} htmlFor="c-hb-nav__checkbox">
        <span className={"s-SS -b -center -lp_c01"}>MENU</span>
      </label>
      <label
        className={"c-hb-nav__cheakbox c-hb-nav__close"}
        htmlFor="c-hb-nav__checkbox"
      ></label>
      <div className={"c-hb-nav__content"}>
        {/* ロゴ */}
        <div className={"c-hb-nav__logo"}>
          <Link
            href="/#top"
            className={"c-link -img"}
            onClick={handleLinkClick}
          >
            <Image
              src="/images/logo/selectmall-logo_old.svg"
              alt="セレクトモール"
              width={210}
              height={60}
              priority
            />
          </Link>
        </div>
        {/* ナビゲーション */}
        <ul className={"c-hb-nav__lists"}>
          {/* Talosについて */}
          <li className={"hbNavItem -center"}>
            <Link href="/#sc01" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>Talosについて</span>
            </Link>
          </li>
          {/* 商品紹介 */}
          <li className={"hbNavItem -center"}>
            <Link href="/#sc02" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>商品紹介</span>
            </Link>
          </li>
          {/* 特徴 */}
          <li className={"hbNavItem -center"}>
            <Link href="/#sc03" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>ワンウェイケグの特徴</span>
            </Link>
          </li>
          {/* よくある質問 */}
          <li className={"hbNavItem -center"}>
            <Link href="/#Q&A" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>よくある質問</span>
            </Link>
          </li>
        </ul>
        {/* ctaボタン */}
        <ul className={"c-hb-nav__contact"}>
          <li className={"contactItem"}>
            <Link
              href="/#cta"
              className={"c-link -img"}
              onClick={handleLinkClick}
            >
              <Image
                src="/images/SVG/Lp/download.svg"
                alt="資料ダウンロード"
                width={334}
                height={40}
              />
            </Link>
          </li>
          <li className={"contactItem"}>
            <Link
              href="/#cta"
              className={"c-link -img"}
              onClick={handleLinkClick}
            >
              <Image
                src="/images/SVG/Lp/contact.svg"
                alt="お問い合わせ"
                width={334}
                height={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
