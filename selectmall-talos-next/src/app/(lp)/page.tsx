import Link from "next/link";
import Image from "next/image";
import React from "react";

// コンポーネント
import LpMainVisual from "@/features/lp/mainVisual";
import ScrollContainer from "@/features/lp/scrollContainer";
import StickyButtonWrapper from "@/components/elements/button/sticky/StickyButtonWrapper";
// import LogoMark from "@/components/lottie/LogoMark";

import Lp02Cta from "@/features/lp/cta";
// import LpCtaBottom from "@/features/lp02/cta/LpBottom";

// 投稿関係
// import LogoContents from "@/components/slider/logo/LogoContents";

// Q&A関係
import Accordion from "@/components/accordion";
import type { AccordionItem } from "@/types/accordion";

const faqItems: AccordionItem[] = [
  {
    id: "01",
    question: "従来のステンレスケグと比べてコストメリットはありますか？",
    answer:
      "ワンウェイケグは回収・清掃・メンテナンスが不要かつ初期投資が抑えられる上、運用コストも大幅に削減できるため、長期的に見て非常に経済的です。",
  },
  {
    id: "02",
    question: "品質保持期間はどのくらいですか？輸送距離に制限はありますか？",
    answer:
      "内蔵無菌アルミ膜袋により、従来のステンレスケグより長期保存が可能です。密閉性が高く、ビールの風味を損なわずに保存できます。また、軽量で破損リスクが低いため、国内・海外問わずどこへでも輸送可能です。離島や遠隔地への配送も問題ありません。",
  },
  {
    id: "03",
    question: "小規模なクラフトビール醸造所でも導入できますか？",
    answer:
      "もちろん可能です！むしろ小規模醸造所様にこそオススメです。従来のステンレスケグのような大きな初期投資や在庫管理が不要で、必要な分だけ発注できます。10L、15L、20Lから幅広く対応可能で、イベント販売や直売所での販売にも最適。資金負担を抑えながら販路拡大が実現できます。",
  },
  {
    id: "04",
    question: "使い方は複雑ですか？特別な設備は必要ですか？",
    answer:
      "特別なサーバー設備や工具は一切不要。すでにお持ちのディスペンスヘッドに合わせたカプラータイプのワンウェイケグをご用意します。",
  },

];

export default function Home() {
  return (
    <main>
      {/* 追従ボタンの表示・非表示トリガー */}
      <div id="stickyDisplayTrigger">
        <LpMainVisual />
      </div>
      <div className="c-contents ">
        {/* SC01 T-KEGとは */}
        <div id="sc01" className="c-contents pdt10 pdt15s">
          <div className="c-contents--inner">
            {/* Talosロゴ */}
            {/* <div className="mgb5 mgb10s">
              <LogoMark />
            </div> */}
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -about pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              T-KEG<span>とは</span>
            </h2>
            <p className="c-contents--LpText -center -lp_c02 a-fadeUp -sc-entry">
              Talos社は1997年に創業し、2003年に樽ビール分配の専門分野に本格参入。
              <br />
              ビール分配システムの設計、研究開発、製造、販売、サービスを一体化した高新技術企業です。
              <br />
              現在、液体食品包装設計と分配システム研究開発能力を兼ね備えた総合サービス提供企業として、
              <br />
              ビールサーバー、分配器、ビールタップシリーズを90以上の国に輸出しています。
            </p>
          </div>
        </div>
        {/* SC02 商品紹介 */}
        <div id="sc02" className="c-contents pdt10 pdt15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -product pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              商品紹介
            </h2>
            {/* 単層ケグの紹介 */}
            <div className="c-card -lp -p01 mgb5 mgb10s a-fadeLeft -sc-entry-slow">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -r -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh">
                          <Image
                            src="/images/keg/tansou-descript.png"
                            alt="単層ケグの説明"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">
                            単層ワンウェイケグ
                          </span>
                          <span className="s-S -lp_c02 -b">
                            （S/A/G/Tタイプ規格対応）
                          </span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          ステンレスケグの革新的代替ソリューション
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span>
                          <br />
                          <span className="-lp_c02">
                            従来のステンレスケグに比べて軽量で取り扱いやすく、返却不要のワンウェイシステムにより、配送コストの削減と効率化を実現します。日本の飲食業界に革新をもたらす次世代ビールケグシステムです。
                          </span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span>
                          <br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）
                            <br />
                            容量 ： 10L、15L、20L
                            <br />
                            高さ ： 370mm、480mm、600mm
                            <br />
                            最大使用圧力 ： 4bar（0.4Mpa）
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* T-KEGの紹介 */}
            <div className="c-card -lp -p01 mgb5 mgb10s a-fadeRight -sc-entry-slow">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh w75s">
                          <Image
                            src="/images/keg/T-Keg_20L30L.png"
                            alt="T-KEG（2層ケグ）の説明"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">T-KEG</span>
                          <span className="s-S -lp_c02 -b">
                            （2層ケグ - S/A/G/Tタイプ規格対応）
                          </span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          次世代使い捨てビールケグ -
                          革新的な多層フレキシブルバッグシステム
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span>
                          <br />
                          <span className="-lp_c02">
                            外装とインナーバッグの隙間に空気を注入する事でビールに酸素が触れることなく押し出し可能。
                            空ケグの返却が不要で、ケグ入り飲料の販売半径を拡大可能。PET素材でリサイクル可能。
                          </span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span>
                          <br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）
                            <br />
                            容量 ： 20L、30L
                            <br />
                            高さ ： 600mm
                            <br />
                            重量 ： 1.3kg±0.1
                            <br />
                            最大使用圧力 ： 3bar（0.3Mpa）
                            <br />
                            最大耐圧 ： 7bar（0.7Mpa）
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* BREWJETの紹介 */}
            <div className="c-card -lp -p01 mgb5 mgb10s a-fadeLeft -sc-entry-slow">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -r -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh">
                          <Image
                            src="/images/keg/BREWJET-descript.png"
                            alt="BREWJETの説明"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">BREWJET</span>
                          <span className="s-S -lp_c02 -b">
                            （革新的ビールディスペンシングシステム）
                          </span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          ケグとディスペンサーが一体化した次世代ビールサーバー
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span>
                          <br />
                          <span className="-lp_c02">
                            BrewJetは特別な消費シーンに最適化されており、パーティー、アウトドアイベント、バーベキュー、キャンプなど、従来のビールサーバーでは対応困難な場所でも、プロ品質のドラフトビール体験を実現します。ポータブル設計により、どこでも新鮮で美味しいビールをお楽しみいただけます。
                          </span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span>
                          <br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）
                            <br />
                            容量 ： 5L
                            <br />
                            高さ ： ???mm
                            <br />
                            重量 ： 0.5kg±0.1
                            <br />
                            最大使用圧力 ： 3bar（0.3Mpa）
                            <br />
                            最大耐圧 ： 7bar（0.7Mpa）
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* TOPPERの紹介 */}
            <div className="c-card -lp -p01 a-fadeRight -sc-entry-slow">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh">
                          <Image
                            src="/images/keg/TOPPER-descript.png"
                            alt="TOPPERの説明"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">TOPPER</span>
                          <span className="s-S -lp_c02 -b">
                            （ポータブルディスペンシングシステム）
                          </span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          コンパクト設計で持ち運び自由
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span>
                          <br />
                          <span className="-lp_c02">
                            従来のビアサーバーの概念を覆す軽量・コンパクト設計により、家庭でのエンターテイメントから商業用途まで幅広く対応。アウトドアイベント、バーベキュー、キャンプ、パーティー、レストラン、カフェ、バーなど、あらゆる場面でプロフェッショナルなビール体験を実現します。
                          </span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span>
                          <br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）
                            <br />
                            容量 ： 3L
                            <br />
                            高さ ： ???mm
                            <br />
                            重量 ： 0.25kg±0.05
                            <br />
                            最大使用圧力 ： 4bar（0.4Mpa）
                            <br />
                            最大耐圧 ： 4bar（0.4Mpa）
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SC03 商品の特徴 */}
        <div id="sc03" className="c-contents pdt10 pdt15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -features pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              商品特徴
            </h2>
            <div className="c-contents">
              <ul className="c-flex -col1_3">
                {/* とても軽量 */}
                <li className="flexItem mgb5 mgb15s">
                  <div className="c-card -lp -p02 a-fadeUp -sc-entry-fast">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f01.png"
                        alt="ワンウェイケグを持ち上げている様子"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">とても軽量！！</h3>
                    <p className="c-card--text">
                      ケグ重量はなんと1.3kgで樽交換もとても楽ちん！！輸送コストの削減も可能。
                    </p>
                  </div>
                </li>
                {/* 特別な設備は不要 */}
                <li className="flexItem mgb5 mgb15s">
                  <div className="c-card -lp -p02 a-fadeUp -sc-entry">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f02.png"
                        alt="ビールを充填している様子"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">
                      特別な設備は不要！！
                    </h3>
                    <p className="c-card--text">
                      既存のディスペンスヘッドをそのまま使用できます。（S/A/T/Gタイプに対応可能）
                    </p>
                  </div>
                </li>
                {/* そのまま */}
                <li className="flexItem mgb5 mgb15s">
                  <div className="c-card -lp -p02  a-fadeUp -sc-entry-slow">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f03.png"
                        alt="ワンウェイケグをアルコール洗浄する様子"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">
                      そのまま使える！！
                    </h3>
                    <p className="c-card--text">
                      充填口をアルコール洗浄するだけですぐ充填できるので、作業時間を大幅に短縮可能！！
                    </p>
                  </div>
                </li>
                {/* 海外輸出の最適解！！ */}
                <li className="flexItem mgb15s">
                  <div className="c-card -lp -p02 a-fadeUp -sc-entry-fast">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f04.png"
                        alt="海外に輸入している様子"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">
                      海外輸出の最適解！！
                    </h3>
                    <p className="c-card--text">
                      従来のステンレスケグと比較して輸送距離に制限がなく、回収やメンテナンスが不要！！
                    </p>
                  </div>
                </li>
                {/* 廃棄が簡単 */}
                <li className="flexItem mgb15s">
                  <div className="c-card -lp -p02 a-fadeUp -sc-entry">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f05.png"
                        alt="ワンウェイケグの廃棄方法"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">廃棄が簡単！！</h3>
                    <p className="c-card--text">
                      主要なパーツは簡単に分解できます。使用後は踏みつぶして圧縮します。
                      {/* (<Link className="b-text -c01" href="">処分方法はコチラ</Link>)  */}
                      ※処理方法は自治体により異なります
                    </p>
                  </div>
                </li>
                {/* 持ち運びが便利 */}
                <li className="flexItem">
                  <div className="c-card -lp -p02 a-fadeUp -sc-entry-slow">
                    <div className="c-img -thumbnail -zoom mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320_f06.png"
                        alt="ワンウェイケグの説明"
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">
                      持ち運びが便利！！
                    </h3>
                    <p className="c-card--text">
                      頑丈なハンドルが付いているので持ち運びしやすい。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* SC04 セレクトモールで出来ること */}
        <div id="sc04" className={"c-contents pdt10 pdt20s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -what pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              セレクトモール<span>で</span>出来<span>ること</span>
            </h2>
            <div className="mgb10 mgb10s">
              {/* 1. お客様に合わせたケグのご提案 */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s a-fadeLeft -sc-entry">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/pic/480-320_keg.png"
                        alt="お客様とのお打ち合わせの様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t01 mgb1 mgb3s">
                      ワンウェイケグ・充填機を含めた、<br/>
                      ワンストップ提案も可能！！
                    </h3>
                    <p className="s-M -lp_c02 -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      お客様のブランドイメージや販売戦略に最適なケグや充填機をご提案いたします。数量、容量、ラベルデザインを細かくカスタマイズし、コスト削減と品質向上を同時に実現します。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 2. Eコマース */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s a-fadeRight -sc-entry">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/pic/480-320_ec.png"
                        alt="集客に悩んでいる様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t02 mgb1 mgb3s">
                      現在開発中の越境ECモールに出品できる！
                      <br />
                      丹精こめたビールの広告としてもお使い下さい！！
                    </h3>
                    <p className="s-M -lp_c02 -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      越境ECプラットフォームで、あなたのクラフトビールを世界中に発信！！革新的なパッケージングが商品の魅力を最大限に引き出し、海外市場での認知度向上と売上拡大をサポートします。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 3. イベント企画 */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s a-fadeLeft -sc-entry">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/pic/480-320_mtg.png"
                        alt="イベント企画している様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t03 mgb1 mgb3s">
                      続々イベント企画中！
                      <br />
                      地方クラフトさんにフォーカスしたイベントを開催！
                    </h3>
                    <p className="s-M -lp_c02 -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      全国各地のクラフトビール醸造家様を少しでも知っていただけるように交流イベントを企画中！地域の特色を活かした商品展示会や試飲会を通じて、新たなビジネスチャンスの創出と業界ネットワークの拡大をお手伝いします。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SC05 他者との比較 */}
        <div
          id="sc05"
          className={"c-contents -bg -lp-color03 pdt10 pdt15s pdb10 pdb15s"}
        >
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -other pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              従来型<span>との</span>比較
            </h2>
            <p className="s-ML -b -lp_c01 -left -ls-2 mgb2 mgb5s">
              1.「ステンレスケグ」<span className="s-M -b">vs</span>
              「ワンウェイケグ」<span className="s-M -b">の</span>比較
            </p>
            {/* コスト面 */}
            <div className="c-card -lp -p03 mgb1 mgb5s a-flipDown -sc-entry-slow">
              <div className="c-card--inner">
                <ul className="c-flex -col1_2 -pc3_1 -h-cen">
                  <li className="flexItem mgb5s">
                    <div className="c-img -logo -center">
                      <Image
                        src="/images/SVG/icon-hikaku.svg"
                        alt="コスト面の比較アイコン"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className="flexItem">
                    <h3 className="s-ML -b -lp_c01 -left -ls-2 -lh-1_5 mgb1 mgb2s">
                      従来ケグと比べて大幅なコスト削減効果
                    </h3>
                    <p className="s-S -lp_c02 -left -ls-2 -lh-1_5">
                      →
                      回収・洗浄・メンテナンス費用が不要なので、運用コスト約60%削減＋初期投資大幅軽減
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* 導入面 */}
            <div className="c-card -lp -p03 mgb1 mgb5s a-flipDown -sc-entry-slow">
              <div className="c-card--inner">
                <ul className="c-flex -col1_2 -pc3_1 -h-cen">
                  <li className="flexItem mgb5s">
                    <div className="c-img -logo -center">
                      <Image
                        src="/images/SVG/icon-exchange.svg"
                        alt="導入面の比較アイコン"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className="flexItem">
                    <h3 className="s-ML -b -lp_c01 -left -ls-2 -lh-1_5 mgb1 mgb2s">
                      すぐに導入可能
                    </h3>
                    <p className="s-S -lp_c02 -left -ls-2 -lh-1_5">
                      →
                      ステンレスケグと同じカプラータイプのため、導入コストを気にせず気軽にお使いいただけます。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* 輸送面 */}
            <div className="c-card -lp -p03 mgb10 mgb10s a-flipDown -sc-entry-slow">
              <div className="c-card--inner">
                <ul className="c-flex -col1_2 -pc3_1 -h-cen">
                  <li className="flexItem mgb5s">
                    <div className="c-img -logo -center">
                      <Image
                        src="/images/SVG/icon-car.svg"
                        alt="輸送アイコン"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className="flexItem">
                    <h3 className="s-ML -b -lp_c01 -left -ls-2 -lh-1_5 mgb1 mgb2s">
                      国内外問わず対応可能な配送網
                    </h3>
                    <p className="s-S -lp_c02 -left -ls-2 -lh-1_5">
                      →
                      軽量設計（従来比40%軽量）かつ回収コストが不要なため、離島・遠隔地まで全国どこでも配送対応
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <p className="s-ML -b -lp_c01 -left -ls-2">
              2.他社<span className="s-M -b">との</span>比較
            </p>
            <div className="c-contents">
              <ScrollContainer />
            </div>
          </div>
        </div>

        {/* cta02 */}
        <Lp02Cta />

        {/* Q&A */}
        <div id="Q&A" className={"c-contents pdt10 pdt20s pdb5 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -QA pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
              よくある筆問
            </h2>
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
      <StickyButtonWrapper />
    </main>
  );
}
