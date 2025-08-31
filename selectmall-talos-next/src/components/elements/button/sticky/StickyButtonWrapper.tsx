"use client";

import Image from "next/image";
import StickyButton from "@/components/elements/button/sticky";

export default function StickyButtonWrapper() {
  return (
    <StickyButton targetId="stickyDisplayTrigger" href="#cta" customClass="">
      <Image
        src="/images/Lp/ver02/contact-btn.png"
        className=""
        alt="お役立ち資料をダウンロード"
        width={351}
        height={107}
      />
    </StickyButton>
  );
}
