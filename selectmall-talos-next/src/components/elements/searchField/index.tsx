"use client";
// 検索窓

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");

    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/information/search?${params.toString()}`);
    }
  };
  return (
    <div className="c-sideber--search">
      <form id="search" action="" onSubmit={handleSubmit}>
        <input
          id="sbox1"
          name="q"
          type="text"
          placeholder="キーワードを入力"
          defaultValue={searchParams.get("q") ?? undefined}
        />
        <button id="sbtn1" type="submit" value="検索">
          検索
        </button>
      </form>
    </div>
  );
}

export default function SearchField() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchFieldComponent />
    </Suspense>
  );
}
