"use client";

import Link from "next/link";
import type { Category } from "@/types/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";

type Props = {
  article: string;
  currentCategoryId?: string;
  categories: MicroCMSListResponse<Category>;
};

// 【カテゴリーリスト表示】
export default function CategoryLists({
  article,
  currentCategoryId,
  categories,
}: Props) {
  if (!categories || categories.contents.length === 0) {
    return <p>カテゴリーがありません。</p>;
  }

  return (
    <div className={"c-category"}>
      <ul className="c-category__box">
        <li className={"titleArea"}>
          <span>カテゴリー</span>
        </li>
        <li className={"itemArea"}>
          <ul className={"c-category__lists"}>
            {categories.contents.map((category) => (
              <li key={category.id} className={"c-category__item"}>
                <Link
                  href={`/${article}/category/${category.id}`}
                  className={category.id === currentCategoryId ? "active" : ""}
                >
                  #{category.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
