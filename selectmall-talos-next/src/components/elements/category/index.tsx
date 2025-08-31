import type { Category } from "@/types/microcms";

type Props = {
  category: Category;
};

// 【カテゴリ表示】
export default function Category({ category }: Props) {
  return <span># {category.name}</span>;
}
