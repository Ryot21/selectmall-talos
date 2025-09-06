"use client";

import Image from "next/image";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LogoMark() {
  return (
    <div className="c-img -logo -sh -center">
      <Image
          src="/images/logo/talos_b.svg"
          alt="Talos社"
          width={153.63}
          height={53.38}
      />
    </div>
  );
}
