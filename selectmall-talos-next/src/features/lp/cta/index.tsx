import Image from "next/image";
import Button from "@/components/elements/button";
import CardContactForm from "@/components/elements/form/Card";


export default function Lp02Cta() {
  return (
    <div id="cta" className="c-contents -Lp02Cta pdt7 pdt15s pdb7 pdb20s">
      <div className="c-contents--inner">
        <ul className="c-flex -col1_2 -pc1_2 -h-top -jc-sb">
          <li className="flexItem mgb10s" style={{ zIndex: 3 }}>
            <h2 className="c-contents--LpCtaTitle -b-btm -white -left -c03 mgb5 mgb8s">
              もっと詳しく知りたい方へ
            </h2>
            <p className="s-M -white -left -ls-2 -lh-2 mgb10 mgb5s">
            「ステンレスケグと迷っている」「他社のワンウェイケグと比較したい」という方も遠慮なくご相談をお待ちしております。お客様に本当に最適な選択肢をメリット・デメリットも含めて正直にお伝えします。
            </p>
            <div className="c-img -pic -right">
              <Image
                src="/images/keg/tkeg&brewjet.png"
                alt="Talosケグのラインナップ豊富"
                width={480}
                height={320}
              />
            </div>
            {/* <Button
              href="/#contact"
              customAreaClass="-left"
              customClass="-btn -maru -orange -icon -arrow"
            >
              お問い合わせはコチラ
            </Button> */}
          </li>
          <li className="flexItem" style={{ zIndex: 3 }}>
            {/* ================= cv ================= */}
            <div className="c-contentsBox -cta">
              <CardContactForm customClass="-card" />
          </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
