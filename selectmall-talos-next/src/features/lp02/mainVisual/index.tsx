"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import CardContactForm from "@/components/elements/form/Card02";


export default function LpMainVisual() {

    return (
        <div id="js-parallaxArea" className={styles.parallaxArea}>
            <div className={`c-mainVisual -LP -LP01`}>
                <div className={"imgBox"}>
                    <Image
                        src="/images/Lp/ver02/mv-bg.png"
                        alt="背景"
                        className="tb-pc"
                        width={1240}
                        height={692}
                    />
                    <Image
                        src="/images/Lp/ver02/mv-bg_s.png"
                        alt="背景"
                        className="sp"
                        width={375}
                        height={964}
                    />
                </div>
                {/* ================= 注釈 ================= */}
                <div className={"c-contentsBox -comments01 a-fade -tm05 -sp05"}>
                    <Image
                        src="/images/Lp/ver02/mv-text.png"
                        alt="支援実績500社以上 定着率アップを実現する 社員の可処分所得を増やす新しい福利厚生プログラム 金融教育を通じて、社員の手元に残るお金を増やす"
                        className="tb-pc"
                        width={1644}
                        height={1154}
                    />
                    <Image
                        src="/images/Lp/ver02/mv-text_s.png"
                        alt="支援実績500社以上 定着率アップを実現する 社員の可処分所得を増やす新しい福利厚生プログラム 金融教育を通じて、社員の手元に残るお金を増やす"
                        className="sp"
                        width={1000}
                        height={1000}
                    />
                </div>
                {/* ================= 矢印 ================= */}
                <div className={"c-contentsBox -arrow a-fadeRightUp -tm15 -sp1"}>
                    <Image
                        src="/images/Lp/ver02/mv-bg-arrow.png"
                        alt="右上がり"
                        width={1644}
                        height={1154}
                    />
                </div>
                {/* ================= cv ================= */}
                <div className="c-contentsBox -cta">
                    <CardContactForm customClass="-card" />
                </div>
            </div>
        </div>
    );
}
