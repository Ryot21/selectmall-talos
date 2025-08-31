import Link from "next/link";
import type { Category } from "@/types/microcms";

// import "@/styles/globals.scss";
type Props = {
  category: Category;
  article: string;
  customClass?: string;
  isActive?: boolean; // activeかどうかを判定するプロパティを追加
};

// 【リンク表示】
const CategoryLink = ({ category, article, customClass, isActive }: Props) => {
  return (
    <Link
      href={`/${article}/category/${category.id}`}
      className={`${customClass} ${isActive ? "active" : ""}`}
    >
      # {category.name}
    </Link>
  );
};

export default CategoryLink;
