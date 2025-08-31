import { Suspense } from "react";
import NewsWrapper from "@/components/slider/news/NewsWrapper";

// ニュースバーを表示するエリアのコンポーネント
export default function NewsContents() {
    return (
        <div className={`c-contentsBox -latestNews`}>
            {/* <div className="a-fade -tm2 -sp05"> */}
                <div className="c-newsBar">
                    <div className="c-newsBar--inner">
                    <Suspense fallback={<div>Loading...</div>}>
                        <NewsWrapper />
                    </Suspense>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
