import Image from "next/image";
import Link from "next/link";

export default function LpFooter() {
  return (
    <footer id="footer" className={"c-footer -bg-color02 pdt2 pdt5s"}>
      <div className={"c-footer-wrapper"}>
        {/* サイト内リンク */}
        <nav className={"c-fnav mgb3 mgb2s"}>
          <ul className={"c-fnav--lists__lp"}>
            {/* #商品紹介 */}
            <li className={"LpnavItem"}>
              <Link
                href="#sc01"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                商品紹介
              </Link>
            </li>
            {/* #選ばれる理由 */}
            <li className={"LpnavItem"}>
              <Link
                href="#sc02"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                選ばれる理由
              </Link>
            </li>
            {/* #会社概要 */}
            <li className={"LpnavItem"}>
              <Link
                href="#sc03"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                会社概要
              </Link>
            </li>
            <li className={"LpnavItem"}>
              <Link
                href="#sc04"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                よくある質問
              </Link>
            </li>
          </ul>
        </nav>
        {/* ロゴ */}
        <div className={"logo -lp mgb3 mgb5s"}>
          <Link href="#top" className={"c-link -img"}>
            <Image
              src="/images/logo/selectmall-logo-w.svg"
              alt="セレクトモール"
              width={210}
              height={60}
              priority
            />
          </Link>
        </div>
      </div>
      <div className={"c-footer-copyright"}>
        <p className={"s-S -center -white -ls-2"}>
          <small>© 2025 セレクトモール株式会社 All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
}
