import Image from "next/image";
import CardContactForm from "@/components/elements/form/Card";

export default function LpCtaBottom() {
  return (
    <div id="cta" className="c-contents -bg-img-cta pdt7 pdt15s pdb7 pdb15s">
      <div className="c-contents--inner">
        <ul className="c-flex -col1_2 -pc1_2 -h-cen -jc-sb">
          <li className="flexItem mgb10s">
            <h2 className="c-contents--LpMainTitle -b-btm -c01 -left mgb3 mgb5s">
              資料ダウンロード
            </h2>
            <p className="s-M -left -ls-2 -lh-2 mgb4 mgb10s">
              マネリペの特徴や価格、事例に加えて、社員定着を成功に導いた豊富なノウハウをもとに、貴社に合わせたプランを実際の画面をご覧いただきながら、わかりやすくご説明・ご提案いたします。
            </p>
            <div className="imgBox">
              <Image
                src="/images/item/pf-2024.png"
                alt="資料ダウンロード"
                width={500}
                height={500}
              />
            </div>
          </li>
          <li className="flexItem">
            <CardContactForm customClass="-card" />
          </li>
        </ul>
      </div>
    </div>
  );
}
