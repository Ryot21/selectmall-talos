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
                {/* ================= アイコン ================= */}
                {/* 左上 */}
                <div className={"c-contentsBox -icon -icon01 a-fade -tm15 -sp1"}>
                    <div className="a-katakata -sp5 -loop">
                        <Image
                            src="/images/icon/pic01.png"
                            alt="カンパーーイ！"
                            width={180}
                            height={157.5}
                        />
                    </div>
                </div>
                {/* カンパーイ_左 */}
                <div className={"c-contentsBox -icon -icon02 a-fadeRightUp -tm25 -sp1"}>
                    <div className="a-katakata -sp35 -loop">
                        <Image
                            src="/images/icon/pic03.png"
                            alt="カンパーーイ！"
                            width={180}
                            height={157.5}
                        />
                    </div>
                </div>
                {/* カンパーイ_右 */}
                <div className={"c-contentsBox -icon -icon03 a-fadeLeft -tm35 -sp1"}>
                    <div className="a-katakata -sp10 -loop">
                        <Image
                            src="/images/icon/pic05.png"
                            alt="カンパーーイ！"
                            width={180}
                            height={157.5}
                        />
                    </div>
                </div>
                {/* ビール */}
                <div className={"c-contentsBox -icon -icon04 a-fadeDown -tm15 -sp05"}>
                    <div className="a-katakata -sp35 -loop">
                        <Image
                            src="/images/icon/pic07.png"
                            alt="カンパーーイ！"
                            width={180}
                            height={157.5}
                        />
                    </div>
                </div>
                {/* ================= コメント ================= */}
                <div className={"c-contentsBox -coment a-fade -tm5 -sp1"}>
                    <div className="a-moveUp -sp3 -loop">
                        <Image
                            src="/images/icon/coment.png"
                            alt="単層ケグ・T-KEG（2層ケグ）共に様々なカプラに対応しています！"
                            width={346}
                            height={272}
                        />
                    </div>
                </div>

                <div className="c-mainVisual--box -center">
                    <div className="c-mainVisual -box">
                        <div className="bgBox"></div>

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
                        <div className="c-contentsBox -text a-fade -tm1 -sp1">
                            <h2 className="s-M -white -center -ls-2">ビールを新たなステージへ</h2>
                        </div>
                        {/* ================= 縦組 ================= */}
                        <div className="c-mainVisual -tateArea a-fade -tm15 -sp15">
                            <div className="imgBox"></div>
                            <div className={"c-contentsBox -tate -tate01"}>
                                <Image
                                    src="/images/SVG/sub01.svg"
                                    alt="使い切りケグの新定番"
                                    width={42}
                                    height={489}
                                />
                            </div>
                            <div className={"c-contentsBox -tate -tate02"}>
                                <Image
                                    src="/images/SVG/_sub02.svg"
                                    alt="使い切りケグの新定番"
                                    width={42}
                                    height={235}
                                />
                            </div>
                            <div className={"c-contentsBox -tate -tate03"}>
                                <Image
                                    src="/images/SVG/sub03.svg"
                                    alt="次世代のビールケグ"
                                    width={42}
                                    height={439}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* ================= cv ================= */}
                {/* <div className="c-contentsBox -cta">
                    <CardContactForm customClass="-card" />
                </div> */}
            </div>
        </div>
    );
}
