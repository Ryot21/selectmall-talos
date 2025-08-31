import { Suspense } from "react";
import LogoWrapper from "@/components/slider/logo/LogoWrapper";

// ロゴスライダーを表示するエリアのコンポーネント
export default function LogoContents() {
  return (
    // ロゴセクションのメインコンテナ
    <div id="logoSection" className={"c-contents pdt5 pdt8s pdb4 pdb5s"}>
        {/* セクションタイトル */}
        <h2 className={"c-logo--title c-page-atTitle"}>
            <span className="at -blue">大手企業</span><span>から</span><span className="at -purple">スタートアップ</span><span>まで</span><br className="sp"/>大好評！！
        </h2>
        <p className="s-kome -ls-1 -center pdb3 pdb3s">※下記ロゴは、全て適切に許諾取得しています。</p>

        <div className={"c-contents--inner"}>
            {/* 右方向に流れるスライダー */}
            <div className="c-contents -logoArea mgb1 mgb5s">
                <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LogoWrapper />
                    </Suspense>
                </div>
                {/* <div className={"swiper swiper-Logo -left"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LogoWrapper />
                    </Suspense>
                </div> */}
            </div>
        </div>
    </div>
  );
}
