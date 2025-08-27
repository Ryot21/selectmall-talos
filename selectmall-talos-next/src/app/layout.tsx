import RootLayout from "@/app/RootLayout";

/**
 * Next.jsのルートレイアウト
 * - アプリケーション全体の最上位レイアウト
 * - すべてのページでこのレイアウトが最初に適用される
 * - RootLayoutを使用して共通のHTML構造を提供
 *
 * URLパスに応じて以下のレイアウトが追加で適用される：
 * - /     → (media)/layout.tsx
 * - /lp/* → lp/layout.tsx
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
