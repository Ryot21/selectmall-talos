"use client";

import Image from "next/image";
import styles from "./index.module.scss";
// import CardContactForm from "@/components/elements/form/Card02";


export default function LpMainVisual() {

    return (
        <div id="js-parallaxArea" className={styles.parallaxArea}>
            <div className={`c-mainVisual -LP -LP01`}>
                {/* ================= 背景 ================= */}
                <div className={"imgBox"}>
                    <Image
                        src="/images/bg/mv-bg.jpg"
                        alt="Barのカウンター背景"
                        className="tb-pc"
                        width={1240}
                        height={692}
                    />
                    <Image
                        src="/images/bg/mv-bg_s.jpg"
                        alt="Barのカウンター背景"
                        className="sp"
                        width={375}
                        height={964}
                    />
                </div>
                {/* ================= ケグ ================= */}
                <div className={"c-contentsBox -tkeg a-fade -tm05 -sp05"}>
                    <div className="mgb5 mgb5s">
                        <Image
                            src="/images/keg/T-Keg_20L30L.png"
                            alt="Talos社製の2層樽の内部にアルミ層があり、ビールが直接酸素と触れるのを防止してくれる。ビールが酸化しづらく、ビールの味と鮮度をキープします。"
                            width={1644}
                            height={1154}
                        />
                    </div>
                    <div className="w80 ItemTitle">
                        <Image
                            src="/images/keg/T-KEG.svg"
                            alt="T-KEG（ティーケグ）"
                            width={100}
                            height={1154}
                        />
                    </div>
                </div>
                <div className={"c-contentsBox -bjet a-fade -tm05 -sp05"}>
                    <div className="mgb5 mgb5s">
                        <Image
                            src="/images/keg/BrewJet-5L-naname.png"
                            alt="炭酸ガス供給システムが内蔵されており、いつでも生ビールを飲むことができます。"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="w80 ItemTitle">
                        <Image
                            src="/images/keg/BREWJET.svg"
                            alt="BREWJET（ブルージェット）"
                            width={100}
                            height={1154}
                        />
                    </div>
                </div>
                <div className={"c-contentsBox -topper a-fade -tm05 -sp05"}>
                    <div className="mgb5 mgb5s">
                        <Image
                            src="/images/keg/TOPPER-3L.png"
                            alt="自重でビールを出して飲むことができるケグです。"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="w80 ItemTitle">
                        <Image
                            src="/images/keg/TOPPER.svg"
                            alt="TOPPER（トッパー）"
                            width={100}
                            height={1154}
                        />
                    </div>

                </div>
                {/* ================= Talosロゴ ================= */}
                <div className={"c-contentsBox -talos a-fade -tm05 -sp05"}>
                    <div className="">
                        <Image
                            src="/images/logo/talos.svg"
                            alt="Talos社"
                            width={846}
                            height={293}
                        />
                    </div>
                </div>
                <div className="c-contentsBox -text">
                    <h2 className="s-M -white -center -ls-2">ビールを新たなステージへ</h2>
                </div>
                {/* ================= 縦組 ================= */}
                <div className={"c-contentsBox -subTitle -sub01 a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/SVG/sub01.svg"
                        alt="使い切りケグの新定番"
                        width={42}
                        height={489}
                    />
                </div>
                <div className={"c-contentsBox -subTitle -sub02 a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/SVG/_sub02.svg"
                        alt="使い切りケグの新定番"
                        width={42}
                        height={235}
                    />
                </div>
                <div className={"c-contentsBox -subTitle -sub03 a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/SVG/sub03.svg"
                        alt="次世代のビールケグ"
                        width={42}
                        height={439}
                    />
                </div>
                {/* ================= アイコン ================= */}
                <div className={"c-contentsBox -icon -icon01 a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/icon/pic01.png"
                        alt="カンパーーイ！"
                        width={180}
                        height={157.5}
                    />
                </div>
                <div className={"c-contentsBox -icon -icon02 a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/icon/pic03.png"
                        alt="カンパーーイ！"
                        width={180}
                        height={157.5}
                    />
                </div>
                {/* ================= コメント ================= */}
                <div className={"c-contentsBox -coment a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/icon/coment.png"
                        alt="単層ケグ・T-KEG（2層ケグ）共に様々なカプラに対応しています！"
                        width={346}
                        height={272}
                    />
                </div>

                {/* ================= cv ================= */}
                {/* <div className="c-contentsBox -cta">
                    <CardContactForm customClass="-card" />
                </div> */}
            </div>
        </div>
    );
}
