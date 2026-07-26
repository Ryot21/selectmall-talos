import Image from "next/image";
import { ESTIMATE_FORMS, ESTIMATE_PRODUCTS } from "@/constants/estimateForms";

export default function LpEstimate() {
  return (
    <div
      id="estimate"
      className="c-contents -bg_dot pdt7 pdt15s pdb7 pdb15s"
    >
      <div className="c-contents--inner">
        <h2 className="c-contents--LpContentsTitle s-LL -s30 -b -center -lp_c01 -b-btm -estimate pdt1 pdt2s mgb5 mgb10s a-fadeDown -sc-entry">
          お見積依頼
        </h2>
        <p className="s-M -s13 -lp_c01 -center -left_s -ls-2 -lh-2 mgb5 mgb10s">
          サイズ・数量・納品先がお決まりの方は、商品をお選びの上でお見積フォームよりご依頼ください。
        </p>
        <ul className="c-flex -col1_3 -pc3_1 -jc-cen -ai-stretch">
          {ESTIMATE_PRODUCTS.map((product) => (
            <li key={product.key} className="flexItem mgb5 mgb10s">
              <div className="c-contents--inner">
                {/* 商品画像 */}
                <div className="c-img -sh -center pdr5 pdr5s pdl5 pdl5s mgb10 mgb10s">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                  />
                </div>
                <p className="s-L -s24 -b -lp_c01 -center -ls-2 mgb2 mgb2s">
                  {product.label}
                </p>
                <p className="s-S -s13 -lp_c02 -center -ls-2 -lh-1_5 mgb10 mgb5s">
                  {product.description}
                </p>
                <div className="c-contents--btnArea -center">
                  <a
                    href={ESTIMATE_FORMS[product.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-link -btn -maru -orange -icon -arrow -center s-M -s14 -b -ls-2"
                  >
                    お見積依頼
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
