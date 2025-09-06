import Link from "next/link";
import Image from "next/image";
import React from "react";

// コンポーネント
import LpMainVisual from "@/features/lp02/mainVisual";
import ScrollContainer from "@/features/lp02/scrollContainer";
import StickyButtonWrapper from "@/components/elements/button/sticky/StickyButtonWrapper";
import LogoMark from "@/components/lottie/LogoMark";

import Lp02Cta from "@/features/lp02/cta";
// import LpCtaBottom from "@/features/lp02/cta/LpBottom";

// 投稿関係
// import LogoContents from "@/components/slider/logo/LogoContents";

// Q&A関係
import Accordion from "@/components/accordion";
import type { AccordionItem } from "@/types/accordion";

const faqItems: AccordionItem[] = [
  {
    id: "01",
    question: "お問い合わせや相談時に金額が発生しますか？",
    answer:
      "お問い合わせや相談までは無料ですので、お気軽にお問い合わせください！",
  },
  {
    id: "02",
    question: "調査に使われた個人情報はどのように取り扱われますか？",
    answer: "プライバシーポリシーに遵守して管理していますのでご安心ください。",
  },
  {
    id: "03",
    question: "しつこい営業の電話はありますか？",
    answer:
      "執拗な勧誘は一切行いません。お客様のご要望にあわせてご案内しております。",
  },
  {
    id: "04",
    question: "初心者なのでちょっとした事でも優しく教えて欲しいです。",
    answer:
      "もちろん大丈夫です！弊社専属のファイナンシャルプランナーがどんな些細な事でもお答えします。",
  },
  {
    id: "05",
    question: "お問い合わせや相談前に用意しておく物はありますか？",
    answer:
      "保険証券と保険契約書などの保険の内容がわかる書類があればスムーズご相談可能です。※上記の書類をなくされた場合でも相談可能です。",
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
        <div id="sc01" className="c-contents pdt7 pdt15s">
          <div className="c-contents--inner">
            {/* Talosロゴ */}
            {/* <div className="mgb5 mgb10s">
              <LogoMark />
            </div> */}
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -about pdt1 pdt2s mgb5 mgb10s">
              T-KEG<span>とは</span>
            </h2>
            <p className="c-contents--LpText -center -lp_c02">
              Talos社は1997年に創業し、2003年に樽ビール分配の専門分野に本格参入。<br/>
              ビール分配システムの設計、研究開発、製造、販売、サービスを一体化した高新技術企業です。<br/>
              現在、液体食品包装設計と分配システム研究開発能力を兼ね備えた総合サービス提供企業として、<br/>
              ビールサーバー、分配器、ビールタップシリーズを90以上の国に輸出しています。
            </p>
          </div>
        </div>
        {/* SC02 商品紹介 */}
        <div id="sc02" className="c-contents pdt7 pdt15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -product pdt1 pdt2s mgb5 mgb10s">
              商品紹介
            </h2>
            {/* 単層ケグの紹介 */}
            <div className="c-card -lp -p01 mgb5 mgb10s">
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
                          <span className="-lp_c01 -b -shadow">単層ワンウェイケグ</span>
                          <span className="s-S -lp_c02 -b">（S/A/G/Tタイプ規格対応）</span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          ステンレスケグの革新的代替ソリューション
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span><br />
                          <span className="-lp_c02">従来のステンレスケグに比べて軽量で取り扱いやすく、返却不要のワンウェイシステムにより、配送コストの削減と効率化を実現します。日本の飲食業界に革新をもたらす次世代ビールケグシステムです。</span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span><br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）<br />
                            容量 ： 10L、15L、20L<br />
                            高さ ： 370mm、480mm、600mm<br />
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
            <div className="c-card -lp -p01 mgb5 mgb10s">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh w75s">
                          <Image
                            src="/images/keg/T-Keg_20L30L.png"
                            alt="T-KEG（2層ケグ）"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">T-KEG</span>
                          <span className="s-S -lp_c02 -b">（2層ケグ - S/A/G/Tタイプ規格対応）</span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          次世代使い捨てビールケグ -
                          革新的な多層フレキシブルバッグシステム
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span><br />
                          <span className="-lp_c02">外装とインナーバッグの隙間に空気を注入する事でビールに酸素が触れることなく押し出し可能。
                          空ケグの返却が不要で、ケグ入り飲料の販売半径を拡大可能。ET素材でリサイクル可能。</span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span><br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）<br />
                            容量 ： 20L、30L<br />
                            高さ ： 600mm<br />
                            重量 ： 1.3kg±0.1<br />
                            最大使用圧力 ： 3bar（0.3Mpa）<br />
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
            <div className="c-card -lp -p01 mgb5 mgb10s">
              <div className="c-card--inner">
                <div className="c-contents -itemBox">
                  <div className="imgBox">
                    <ul className="c-flex -col1_2 -pc2_1 -r -jc-sb -h-cen">
                      <li className="flexItem mgb5s">
                        <div className="c-img -sh">
                          <Image
                            src="/images/keg/BrewJet-descript.png"
                            alt="BREWJETの説明"
                            width={1644}
                            height={1154}
                          />
                        </div>
                      </li>
                      <li className="flexItem">
                        <h3 className="c-contents--ItemTitle mgb2 mgb2s">
                          <span className="-lp_c01 -b -shadow">BREWJET</span>
                          <span className="s-S -lp_c02 -b">（革新的ビールディスペンシングシステム）</span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          ケグとディスペンサーが一体化した次世代ビールサーバー
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span><br />
                          <span className="-lp_c02">BrewJetは特別な消費シーンに最適化されており、パーティー、アウトドアイベント、バーベキュー、キャンプなど、従来のビールサーバーでは対応困難な場所でも、プロ品質のドラフトビール体験を実現します。ポータブル設計により、どこでも新鮮で美味しいビールをお楽しみいただけます。</span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span><br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）<br />
                            容量 ： 5L<br />
                            高さ ： ???mm<br />
                            重量 ： 0.5kg±0.1<br />
                            最大使用圧力 ： 3bar（0.3Mpa）<br />
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
            <div className="c-card -lp -p01">
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
                          <span className="s-S -lp_c02 -b">（ポータブルディスペンシングシステム）</span>
                        </h3>
                        <p className="s-S -lp_c01 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                          コンパクト設計で持ち運び自由
                        </p>
                        <p className="s-S -ls-2 -lh-1_5 mgb4 mgb5s">
                          <span className="-lp_c01 -b">【主な特徴】</span><br />
                          <span className="-lp_c02">従来のビアサーバーの概念を覆す軽量・コンパクト設計により、家庭でのエンターテイメントから商業用途まで幅広く対応。アウトドアイベント、バーベキュー、キャンプ、パーティー、レストラン、カフェ、バーなど、あらゆる場面でプロフェッショナルなビール体験を実現します。</span>
                        </p>
                        <p className="s-S -ls-2 -lh-1_5">
                          <span className="-lp_c01 -b">【製品スペック】</span><br />
                          <span className="-lp_c02">
                            材質 ： PET（本体）、PP（ハンドル）<br />
                            容量 ： 3L<br />
                            高さ ： ???mm<br />
                            重量 ： 0.25kg±0.05<br />
                            最大使用圧力 ： 4bar（0.4Mpa）<br />
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
        <div id="sc03" className="c-contents pdt7 pdt15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -features pdt1 pdt2s mgb5 mgb10s">
              商品特徴
            </h2>
            <div className="c-contents">
              <ul className="c-flex -col1_3">
                {/* とても軽量 */}
                <li className="flexItem mgb5 mgb5s">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">とても軽量！！</h3>
                    <p className="c-card--text">ケグ重量はなんと1.3kgで樽交換もとても楽ちん！！輸送コストの削減も可能。</p>
                  </div>
                </li>
                {/* 特別な設備は不要 */}
                <li className="flexItem mgb5 mgb5s">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">特別な設備は不要！！</h3>
                    <p className="c-card--text">既存のディスペンスヘッドをそのまま使用できます。（S/A/T/Gタイプに対応可能）</p>
                  </div>
                </li>
                {/* そのまま */}
                <li className="flexItem mgb5 mgb5s">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">そのまま使える！！</h3>
                    <p className="c-card--text">届いたらすぐ充填できるので、作業時間を大幅に短縮可能！！</p>
                  </div>
                </li>
                {/* 海外輸出の最適解！！ */}
                <li className="flexItem mgb5s">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">海外輸出の最適解！！</h3>
                    <p className="c-card--text">
                      従来のステンレスケグと比較して輸送距離に制限がなく、回収やメンテナンスが不要！！</p>
                  </div>
                </li>
                {/* 廃棄が簡単 */}
                <li className="flexItem mgb5s">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">廃棄が簡単！！</h3>
                    <p className="c-card--text">主要なパーツは簡単に分解できます。使用後は踏みつぶして圧縮します。(<Link className="b-text -c01" href="">処分方法はコチラ</Link>) ※処理方法は自治体により異なります</p>
                  </div>
                </li>
                {/* 持ち運びが便利 */}
                <li className="flexItem">
                  <div className="c-card -lp -p02">
                    <div className="c-img -thumbnail mgb5 mgb5s">
                      <Image
                        src="/images/pic/480-320.png"
                        alt=""
                        width={480}
                        height={320}
                      />
                    </div>
                    <h3 className="c-card--title mgb5 mgb5s">持ち運びが便利！！</h3>
                    <p className="c-card--text">頑丈なハンドルが付いているので持ち運びしやすい。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SC04 セレクトモールで出来ること */}
        <div id="sc04" className={"c-contents pdt7 pdt15s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpContentsTitle -center -lp_c01 -b-btm -what pdt1 pdt2s mgb5 mgb10s">
              セレクトモール<span>で</span>出来<span>ること</span>
            </h2>
            <div className="mgb10 mgb10s">
              {/* 1. お客様に合わせたケグのご提案 */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item01.png"
                        alt="金融勉強会の様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t01 mgb1 mgb3s">
                      お客様に合わせたワンウェイケグをご提案！
                    </h3>
                    <p className="s-M -lp_c02 -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      お客様のブランドイメージや販売戦略に最適なビールケグをご提案。数量、容量、ラベルデザインを細かくカスタマイズし、コスト削減と品質向上を同時に実現します。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 2. Eコマース */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item02.png"
                        alt="個別相談の絵"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t02 mgb1 mgb3s">
                      現在開発中の越境ECモールに出品できる！！<br />
                      丹精こめたビールの広告としてもお使い下さい
                    </h3>
                    <p className="s-M -lp_c02 -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      開発中の越境ECプラットフォームで、あなたのクラフトビールを世界中に発信！！革新的なパッケージングが商品の魅力を最大限に引き出し、海外市場での認知度向上と売上拡大をサポートします。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 3. イベント企画 */}
              <div className=" c-contents -bg-white pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item03.png"
                        alt="システム"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t03 mgb1 mgb3s">
                      続々イベント企画中！<br />
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
        {/* SC05 事例 */}
        <div
          id="sc05"
          className={"c-contents -bg-color01 pdt7 pdt15s pdb5 pdb5s"}
        >
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              実際にマネリペをご利用いただき
              <br />
              &quot;可処分所得&quot;が増加した事例
            </h2>
            <p className="s-ML -s12 -blue -center -ls-2 -lh-2 mgb7 mgb10s">
              過去5年分の自己申告（年末調整や確定申告）をプロの目線で確認し、
              <br className="tb-pc" />
              本来は使えていた税制優遇や控除を最大限に活用。
              <br className="tb-pc" />
              年間1,500人以上の相談を受けて、
              <br className="sp" />
              60%以上の方が
              <span className="s-L -s12 -b -blue -marker">年平均30万円</span>
              以上損しています！
            </p>
            <div className="c-contents -bg-color01 pdt2 pdt5s pdr2 pdr5s pdl2 pdl5s">
              <div className="c-contents--inner -lp-item mgb5 mgb5s">
                <Image
                  src="/images/Lp/ver02/sc05-item01.png"
                  alt="BeforeAfter"
                  className="tb-pc"
                  width={551}
                  height={284}
                />
                <Image
                  src="/images/Lp/ver02/sc05-item01s.png"
                  alt="BeforeAfter"
                  className="sp"
                  width={248}
                  height={631}
                />
              </div>
              <div className="mgb1 mgb1s">
                <Image
                  src="/images/Lp/ver02/sc05-item02.png"
                  alt="過去5年間で26万円税金の適正化"
                  className="tb-pc"
                  width={1564}
                  height={664}
                />
                <Image
                  src="/images/Lp/ver02/sc05-item02s.png"
                  alt="過去5年間で26万円税金の適正化"
                  className="sp"
                  width={291}
                  height={520}
                />
              </div>
              <p className="s-Ss -s10 -blue -center -ls-2 -lh-1_5">
                ※マネリペのサービスは「ASTELLA Partners
                会計事務所」に監修していただいております。
              </p>
            </div>
          </div>
        </div>
        {/* SC06 比較 */}
        <div
          id="sc06"
          className={"c-contents -bg-color01 pdt7 pdt15s pdb5 pdb5s"}
        >
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              従来型の福利厚生サービスとの比較
            </h2>
            <p className="s-ML -b -blue -left -ls-2 mgb2 mgb5s">
              1.マネリペの「旧来型運用」vs「現在の運用」の比較
            </p>
            <div className="c-contents mgb10 mgb10s">
              <Image
                src="/images/Lp/ver02/sc06-item01.png"
                alt="従来型の福利厚生サービスとの比較"
                className="tb-pc"
                width={2012}
                height={832}
              />
              <Image
                src="/images/Lp/ver02/sc06-item01s.png"
                alt="従来型の福利厚生サービスとの比較"
                className="sp"
                width={334}
                height={622}
              />
            </div>
            <p className="s-ML -b -blue -left -ls-2 mgb5s">
              2.他の金融リテラシー向上サービスとの比較
            </p>
            <div className="c-contents mgb10 mgb10s">
              <ScrollContainer />
            </div>
          </div>
        </div>

        {/* cta02 */}
        <Lp02Cta />
        {/* SC07 課題 */}
        <div id="sc07" className={"c-contents pdt7 pdt15s pdb10 pdb5s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              経営者・総務・人事の皆さん
              <br />
              このような課題はありませんか？
            </h2>
            <ul className="c-flex -col1_3 -h-top -jc-sb mgb10 mgb5s">
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc07-item01.png"
                  alt="1.「従来型福利厚生の限界」"
                  width={374}
                  height={306}
                />
              </li>
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc07-item02.png"
                  alt="2.「金融不安が離職の原因に」"
                  width={374}
                  height={306}
                />
              </li>
              <li className="flexItem pdr5s pdl5s ">
                <Image
                  src="/images/Lp/ver02/sc07-item03.png"
                  alt="3.「費用対効果への懸念」"
                  width={374}
                  height={306}
                />
              </li>
            </ul>
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              そのお悩みを解決できます！
            </h2>
            <p className="s-ML -b -blue -center -ls-2 -lh-2 mgb10 mgb5s">
              従業員の「金融リテラシー向上」をご支援し、給料を上げずに、
              <br />
              税金を適正化することで1人当たりの可処分所得を年間約
              <span className="-b -marker -kome pdr1 pdr1s">200,000円</span>
              最適化することが可能です！
              <span className="s-SS -s10 -blue">*個人差あります</span>
            </p>
            <ul className={"c-flex -col3 -flow -h-cen -jc-sb mgb5 mgb5s"}>
              <li className={"flexItem"}>
                <div className="c-card -lp_02 -sc07 -item01">
                  <div className="c-card--inner">
                    <p className="s-M -s10 -b -blue -center -ls-2 -ls-1_s -lh-2 -ws-n">
                      社員に対して
                      <br className="sp" />
                      金融教育セミナーを実施
                    </p>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc07-02-item01.png"
                        alt="金融セミナーを受けている様子"
                        width={200}
                        height={160}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className={"flexItem"}>
                <div className="c-card -lp_02 -sc07 -item02">
                  <div className="c-card--inner">
                    <p className="s-M -s10 -b -blue -center -ls-2 -ls-1_s -lh-2 -ws-n">
                      従業員満足度が
                      <br className="sp" />
                      すごく高まる
                    </p>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc07-02-item02.png"
                        alt="従業員が満足している様子"
                        width={200}
                        height={160}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className={"flexItem"}>
                <div className="c-card -lp_02 -sc07 -item03">
                  <div className="c-card--inner">
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc07-02-item03.png"
                        alt="離職率の低下・採用競争力の向上"
                        width={200}
                        height={160}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* SC08 選ばれる理由 */}
        <div
          id="sc08"
          className={"c-contents -bg-lp02-sc02 pdt7 pdt15s pdb10 pdb10s"}
        >
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              マネリペの選ばれる理由
            </h2>
            <ul className={"c-flex -col1_3 -h-top -jc-st mgb2 mgb5s"}>
              {/* 1. 金融リテラシーを向上させる福利厚生プログラムです。 */}
              <li className={"flexItem pdr5s pdl5s mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc08-item01.png"
                  alt="従業員の可処分所得の増加モチベーションを高める！"
                  width={640}
                  height={454}
                />
              </li>
              {/* 2. 個別相談がつくことで精度の高い提案で削減事例多数 */}
              <li className={"flexItem pdr5s pdl5s mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc08-item02.png"
                  alt="個別相談で50%以上が税金削減・還付の対象に"
                  width={640}
                  height={454}
                />
              </li>
              {/* 3. 従業員の定着率UP、採用率UPにつながります！ */}
              <li className={"flexItem pdr5s pdl5s"}>
                <Image
                  src="/images/Lp/ver02/sc08-item03.png"
                  alt="会社員500名に金融リテラシー調査を実施、結果を基にサービスを提供"
                  width={640}
                  height={454}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* 導入実績 */}

        {/* SC09 解決できるあらゆる問題 */}
        <div
          id="sc09"
          className={"c-contents -triangle pdt7 pdt20s pdb7 pdb10s pdb20s"}
        >
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb10 mgb10s"}>
              マネリペで解決できる
              <br />
              お金に関するあらゆる問題
            </h2>
            <ul className={"c-flex -col2_4 -h-top -jc-st mgb2"}>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      税金の適正化
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      iDeCo
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      生命保険の見直し
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      ふるさと納税
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      資産運用
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      投資信託
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      NISA
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2"}>
                <div className="c-card -lp_02 -sc09">
                  <div className="c-card--inner">
                    <p className="s-ML -s14 -b -blue -center -ls-2 -lh-1_5">
                      年金問題
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 考えられる問題 */}
        <div className={"c-contents -bg-color01 pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"s-ML -b-btm -c03 -center -ls-2 -lh-2 mgb5 mgb10s"}>
              「マネリペ」を導入することで
              <br />
              社員の満足度や、企業の魅力が向上し、
              <br className="sp" />
              <span className="s-L -c03 -b -marker">離職率低下</span>
              につながります。
            </h2>
            <div className="c-contents">
              <div className="imgBox w20 w75s">
                <Image
                  src="/images/Lp/ver02/sc09-item01.png"
                  alt="喜ぶ女性"
                  width={140}
                  height={157}
                />
              </div>
            </div>
            <ul className={"c-flex -col1_3 -h-top -jc-st mgb2 mgb5s"}>
              <li className={"flexItem pdr5s pdl5s mgb5s"}>
                <Image
                  src="/images/Lp/ver02/sc09-02-item01.png"
                  alt="1.従業員と家族の金融リテラシーの向上"
                  width={640}
                  height={480}
                />
              </li>
              <li className={"flexItem pdr5s pdl5s mgb5s"}>
                <Image
                  src="/images/Lp/ver02/sc09-02-item02.png"
                  alt="2.採用時のアピールポイントとして採用"
                  width={640}
                  height={480}
                />
              </li>
              <li className={"flexItem pdr5s pdl5s"}>
                <Image
                  src="/images/Lp/ver02/sc09-02-item03.png"
                  alt="3.社員の満足度の向上、離職率低下に貢献"
                  width={640}
                  height={480}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* cta02 */}
        <Lp02Cta />

        {/* SC10 申し込みから導入までの流れ */}
        <div
          id="sc10"
          className={"c-contents -bg-img-sc08 -support pdt7 pdt20s pdb7 pdb15s"}
        >
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb10 mgb10s"}>
              申し込みから導入までの流れ
            </h2>
            <ul className={"c-flex -h-top -jc-st mgb2 mgb5s -lp-flow"}>
              {/* 1. WEBサイトからお問い合わせ */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item01.png"
                  alt="1.WEBサイトから問い合わせ"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item01s.png"
                  alt="1.WEBサイトから問い合わせ"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
              {/* 2. お見積り */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item02.png"
                  alt="2.お見積り"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item02s.png"
                  alt="2.お見積り"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
              {/* 3. お申し込み + 導入後の打ち合わせ */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item03.png"
                  alt="3.従業員様への導入説明会"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item03s.png"
                  alt="3.従業員様への導入説明会"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
              {/* 4. 相談予約アプリ */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item04.png"
                  alt="4.相談予約アプリの導入"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item04s.png"
                  alt="4.相談予約アプリの導入"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
              {/* 5. コーチングや相談の開始 */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item05.png"
                  alt="5.コーチングや相談の開始"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item05s.png"
                  alt="5.コーチングや相談の開始"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
              {/* 6. フィードバック */}
              <li className={"flexItem pdr5s pdl5s mgb5 mgb10s"}>
                <Image
                  src="/images/Lp/ver02/sc10-item06.png"
                  alt="6.フィードバック"
                  className="tb-pc"
                  width={2012}
                  height={336}
                />
                <Image
                  src="/images/Lp/ver02/sc10-item06s.png"
                  alt="6.フィードバック"
                  className="sp"
                  width={335}
                  height={387}
                />
              </li>
            </ul>
          </div>
        </div>
        {/* Q&A */}
        <div id="Q&A" className={"c-contents pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb10 mgb10s"}>
              よくある質問
            </h2>
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
      <StickyButtonWrapper />
    </main>
  );
}
