import { metadata } from "./metadata";
import { headers } from "next/headers";
import PageTypeWrapper from "@/components/PageTypeWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import LpHeader from "@/features/lp/header";
import LpNavigation from "@/features/lp/navigation";
import LpFooter from "@/features/lp/footer";

/**
 * LPページ用のメタデータ
 * - /lp/*のページにのみ適用される
 */
export { metadata };

/**
 * LPページ専用のレイアウト
 * - /lp/*のパスのページに適用される
 *
 * 含まれるコンポーネント：
 * - PageTypeWrapper: ページタイプの管理
 * - ScrollToTop: スクロールトップボタン
 * - LpHeader: LP用ヘッダー
 * - LpNavigation: LP用ナビゲーション
 * - Footer: フッター（メディアサイトと共通）
 */
export default async function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const initialPageType = headersList.get("x-page-type") || "lp";

  return (
    <PageTypeWrapper initialPageType={initialPageType}>
      <ScrollToTop />
      <LpHeader />
      <LpNavigation />
      {children}
      <LpFooter />
    </PageTypeWrapper>
  );
}
