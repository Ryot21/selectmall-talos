"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollContainer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollHint = scrollContainer.querySelector(".scroll-hint");
    if (!scrollHint) return;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft > 0) {
        scrollHint.classList.add("hidden");
      } else {
        scrollHint.classList.remove("hidden");
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sp-scroll-container" ref={scrollContainerRef}>
      <div className="scroll-hint">
        <Image
          src="/images/Lp/ver02/scroll-hint.png"
          alt="スクロールできます"
          className="sp"
          width={130}
          height={130}
        />
      </div>
      <Image
        src="/images/SVG/Lp/ver02/hikaku-table.svg"
        alt="比較表"
        width={2012}
        height={892}
      />
    </div>
  );
}
