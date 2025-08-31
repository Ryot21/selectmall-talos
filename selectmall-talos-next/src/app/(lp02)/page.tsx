// import Link from "next/link";
import Image from "next/image";
import React from "react";

// コンポーネント
import LpMainVisual from "@/features/lp02/mainVisual";
import ScrollContainer from "@/features/lp02/scrollContainer";
import StickyButtonWrapper from "@/components/elements/button/sticky/StickyButtonWrapper";
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


        <div className="c-contents -bg-lp02-sc03 pdt5 pdt10s pdb5 pdb10s">
          <div className="c-contents--inner">
            <p className="s-ML -s14 -b -blue -ls-2 -lh-3 -lh-1_5_s -center">
              なぜ今、
              <br className="sp" />
              福利厚生に&quot;
              <span className="s-ML -s18 -b -blue -marker">金融教育</span>
              &quot;が必要なのか？
              <br />
              <br className="sp" />
              物価高や税負担で、
              <br className="sp" />
              社員の可処分所得は減少傾向。
              <br />
              <br className="sp" />
              生活不安が転職を招き、
              <br className="sp" />
              <span className="s-ML -s18 -b -blue -marker">採用・定着</span>
              が企業の課題になっています。
              <br />
              <br className="sp" />↓<br className="sp" />
              給与を変えずに手元を増やす福利厚生が
              <br className="sp" />
              注目されています。
            </p>
          </div>
        </div>
        {/* SC02 導入効果 */}
        <div id="sc02" className="c-contents pdb7 pdb15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 pdt1 pdt2s mgb7 mgb10s">
              マネリペの導入効果
            </h2>
            <ul className="c-flex -col1_3 -h-top -jc-sb mgb2 mgb5s">
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc03-item01.png"
                  alt="早期就職率-5%ダウンを実現"
                  width={320}
                  height={320}
                />
              </li>
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc03-item02.png"
                  alt="社員利用率40%以上アップ"
                  width={320}
                  height={320}
                />
              </li>
              <li className="flexItem pdr5s pdl5s ">
                <Image
                  src="/images/Lp/ver02/sc03-item03.png"
                  alt="可処分所得平均26万円アップ"
                  width={320}
                  height={320}
                />
              </li>
            </ul>
            <p className="s-SS -s10 -blue -right -ls-2 -lh-1_5 -ws-n">
              ※1.マネリペ顧客調査2025年度
              <br />
              ※2.マネリペ500名のユーザーを対象とした調査に基づく
            </p>
          </div>
        </div>
        {/* SC03 簡単な説明 */}
        <div
          id="sc03"
          className="c-contents  pdt7 pdt15s pdb7 pdb15s"
        >
          <div className="c-contents--inner">
            <div className="c-card -lp_02 -sc02">
              <div className="c-card--inner">
                {/* <p className="s-ML -s14 -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center mgb1 mgb4s">
                  <span className="s-ML -b -blue">マネリペ</span>
                  は離職率を下げて
                  <br className="sp" />
                  エンゲージメントを高め、
                  <br />
                  <br className="sp" />
                  <span className="s-L -s18 -b -blue -marker pdr1 pdr0s">
                    金融リテラシー向上をサポートする
                  </span>
                  <br className="sp" />
                  福利厚生です。
                </p>
                <p className="s-ML -s14 -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center">
                  &quot;中小・ベンチャー・
                  <br className="sp" />
                  中堅企業でも実績多数&quot;
                </p> */}
                <p className="s-ML -s14 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center mgb2 mgb4s">
                  導入企業で、
                  <br className="sp" />
                  こんな成果が出ています。
                </p>
                <p className="-center mgb3 mgb4s">
                  ✔️
                  <span className="s-L -s18 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -marker pdl1 pdl1s">
                    離職率を平均15%改善
                  </span>
                  <br />
                  ✔️
                  <span className="s-L -s18 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -marker pdl1 pdl1s">
                    社内エンゲージメント向上
                  </span>
                  <br />
                  ✔️
                  <span className="s-L -s18 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -marker pdl1 pdl1s">
                    金融リテラシーの底上げ
                  </span>
                </p>
                <p className="s-ML -s14 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center mgb1 mgb4s">
                  &quot;中小・ベンチャー・
                  <br className="sp" />
                  中堅企業でも実績多数&quot;
                </p>
                <p className="s-ML -s14 -b -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center mgb1 mgb4s">
                  可処分所得を増やすことで、
                  <br className="sp" />
                  社員も企業も成長する環境づくりを
                  <br className="sp" />
                  サポートします。
                </p>
                <p className="s-SS -right -blue -ls-2 pdr5 pdr5s">
                  ※業種によります
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SC04 マネリペで出来ること */}
        <div
          id="sc04"
          className={"c-contents pdt7 pdt15s pdb5 pdb5s"}
        >
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              マネリペで出来ること
              <br />
              固定費を上げずに&quot;可処分所得&quot;を
              <br className="sp" />
              増やす新しい福利厚生
            </h2>
            <div className="mgb10 mgb10s">
              {/* 1. 金融勉強会 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
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
                      社内で「金融勉強会」を開催
                      <br />
                      公式LINEにて情報発信サービスも提供
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      従業員様からのニーズに基づき、関心の高いテーマで金融勉強会を実施いたします。また、公式LINEを通じて、マーケットの動向や日々の生活に役立つ時事情報などを定期的に配信。必要な情報をタイムリーにお届けし、従業員様の金融リテラシー向上をサポートいたします。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 2. 個別相談 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
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
                      個別相談も可能！
                      <br />
                      専属金融相談窓口の設置
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      弊社専属のファイナンシャルプランナーが最低1人御社専属の担当となり、LINEやお電話で気軽に相談ができます。従業員様の2親等までのご親族様まで、無料で相談が可能です。
                      （ご相談は基本24時間365日対応しています。）
                    </p>
                  </li>
                </ul>
              </div>
              {/* 3. 金融勉強会 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s">
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
                      家計管理も可能！
                      <br />
                      資産管理システムの提供
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      従業員様向けに、通常月額3,000円～5,000円の本格的なライフプランシミュレーションシステムを無料でご提供。収支の可視化で無駄を削減し、キャッシュフローを改善。将来のライフイベント費用や老後資金の不足額を明確にし、資産形成を強力にサポートします。
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
