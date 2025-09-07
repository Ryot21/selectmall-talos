// UIレンダリングとインタラクションを管理するクライアントコンポーネント
"use client";

import Image from "next/image";
import Link from "next/link";
import Iconbutton from "@/components/elements/button/IconButton";
// import HeaderScroll from "./HeaderScroll";

// クライアントコンポーネントとしてHeaderを実装
export default function LpHeader() {
  return (
    <>
      {/* <HeaderScroll /> */}
      <header id="js-header" className="c-header">
        <div className={"c-header-wrapper"}>
          <ul className={"c-header-lists -jc-sb -h-cen"}>
            {/* Header > ロゴ */}
            <li className={"headerItem flexItem -logoArea"}>
              <div className={"logo"}>
                <Link href="#top" className={"c-link -img"}>
                  <Image
                    src="/images/logo/selectmall-logo_old.svg"
                    alt="セレクトモール"
                    width={210}
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </li>
            {/* Header > ナビゲーション */}
            <li className={"headerItem flexItem -navArea tb-pc"}>
              <div className={"c-navAreaBox"}>
                <ul className={"c-navlists"}>
                  {/* サイト内リンク */}
                  <li className={"navItem -pageLink"}>
                    <nav className={"c-hnav"}>
                      <ul className={"c-hnav-lists"}>
                        {/* #sc01 - Talosについて */}
                        <li className={"hnavItem"}>
                          <Link
                            href="#sc01"
                            className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}
                          >
                            Talosについて
                          </Link>
                        </li>
                        {/* #sc02 - 商品紹介 */}
                        <li className={"hnavItem"}>
                          <Link
                            href="#sc02"
                            className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}
                          >
                            商品紹介
                          </Link>
                        </li>
                        {/* #sc03 - 商品特徴 */}
                        <li className={"hnavItem"}>
                          <Link
                            href="#sc03"
                            className={`c-hnav--link s-M -b -s13 -ls-1 -ws-n`}
                          >
                            商品特徴
                          </Link>
                        </li>
                        {/* #sc04 - よくある質問 */}
                        <li className={"hnavItem"}>
                          <Link
                            href="#sc04"
                            className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}
                          >
                            よくある質問
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <nav className={"c-hnav"}>
                      <ul className={"c-hnav-lists"}></ul>
                    </nav>
                  </li>
                  {/* 資料ダウンロード */}
                  <li className={"navItem"}>
                    <Iconbutton href="/lp02#cta" customClass="cvBtn -orange">
                      <span className="pc">資料ダウンロード</span>
                      <Image
                        src="/images/SVG/download.svg"
                        className="svgIcon mgb1"
                        alt="資料ダウンロード"
                        width={18}
                        height={18}
                      />
                    </Iconbutton>
                  </li>
                  {/* お問い合わせはこちら */}
                  <li className={"navItem"}>
                    <Iconbutton href="/lp02#cta" customClass="cvBtn -lpColor01">
                      <span className="pc">
                        お問い合わせはこちら
                      </span>
                      <Image
                        src="/images/SVG/mail-white.svg"
                        className="svgIcon mgb1"
                        alt="お問い合わせ"
                        width={18}
                        height={18}
                      />
                    </Iconbutton>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
