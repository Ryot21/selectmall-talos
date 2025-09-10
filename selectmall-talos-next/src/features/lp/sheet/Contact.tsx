// 共通レイアウト
import LpOtherMainVisual from "@/features/lp/mainVisual/Others";

type Props = {
    children: React.ReactNode;
    animationType?: "rotate" | "slide" | "svg"; // SVGタイプを追加
    mvClass?: string;
    contentClass?: string;
}

export default function LpContactSheet({ children, mvClass, contentClass, animationType }: Props) {


    
    return (
        <main>
            {/* メインビジュアル */}
            <LpOtherMainVisual
                title="資料ダウンロード"
                mvClass={mvClass}
                animationType={animationType}
            />

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>
        </main>
    );
}