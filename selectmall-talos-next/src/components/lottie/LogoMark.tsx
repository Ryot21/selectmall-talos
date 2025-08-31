"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LogoMark() {
  return (
    <div>
      <DotLottieReact
        src="/json/mr-logo-mark.json"
        // loop
        autoplay
        className="lottie--logo"
        id="lottie-scroll-trigger"
        speed={0.3}
      />
    </div>
  );
}
