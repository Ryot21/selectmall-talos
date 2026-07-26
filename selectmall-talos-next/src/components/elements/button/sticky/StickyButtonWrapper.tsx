"use client";

import Image from "next/image";
import StickyButton from "@/components/elements/button/sticky";

export default function StickyButtonWrapper() {
  return (
    <StickyButton targetId="stickyDisplayTrigger" href="#estimate" customClass="">
      <Image
        src="/images/SVG/Lp/contact-btn_tansou.svg"
        className=""
        alt="お見積依頼はこちら"
        width={351}
        height={107}
      />
    </StickyButton>
  );
}
