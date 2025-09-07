"use client";

import Image from "next/image";
import StickyButton from "@/components/elements/button/sticky";

export default function StickyButtonWrapper() {
  return (
    <StickyButton targetId="stickyDisplayTrigger" href="#cta" customClass="">
      <Image
        src="/images/SVG/Lp/contact-btn.svg"
        className=""
        alt="商品資料を無料ダウンロード"
        width={351}
        height={107}
      />
    </StickyButton>
  );
}
