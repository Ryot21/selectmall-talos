import Button from "@/components/elements/button";

export default function Page() {
  return (
    <div className="c-contents pdt5 pdt10s pdb5 pdb10s">
      <div className="c-contents--inner">
        <p className="s-ML -s -lp_c02 -center -lh-2 mgb10 mgb20s">
          このたびは
          <br />
          お問い合わせ誠にありがとうございます。
          <br />
          <br />
          3営業日を目安にセレクトモールの担当者より
          <br />
          ご連絡いたします。
        </p>
        {/* ボタン */}
        <div className={"c-contents--btnArea"}>
          <Button href="/" customAreaClass="-center" customClass="-btn -maru -site-color">トップへ戻る</Button>
        </div>
      </div>
    </div>
  );
}
