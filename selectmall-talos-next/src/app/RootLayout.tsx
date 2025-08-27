import "@/styles/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";

/**
 * 全ページ共通のHTML構造を提供するコンポーネント
 * - app/layout.tsxから呼び出される
 * - <html>と<body>タグを含む基本的なHTML構造を定義
 * - hydrationの警告抑制
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="images/sns/apple-touch-icon-impreme.jpg"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
      {/* メディア用 > Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-MW3QDMR6" />
    </html>
  );
}
