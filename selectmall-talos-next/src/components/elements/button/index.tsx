import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  customClass?: string;
  customAreaClass?: string;
};

// ボタンエリアのカスタムクラス
// .-center 中央揃え
// .-left 左揃え
// .-right 右揃え
// カスタムクラス一覧
// .-maru 丸ボタン
// .-center 中央揃え
// .-orange オレンジ
// .-red 赤
// .-gray グレー
// .-blue 青
// .-orange オレンジ
// .-icon + .-arrow →アイコンあり


export default function Button({ href, children, customClass, customAreaClass }: Props) {
  return (
    <div className={`c-contents--btnArea ${customAreaClass}`}>
      <Link href={href} className={`c-link s-M -s14 -b -ls-2 ${customClass}`}>
        {children}
      </Link>
    </div>
  );
}
