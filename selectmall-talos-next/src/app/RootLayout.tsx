import "@/styles/globals.scss";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
        {/* 基本ファビコン */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="images/sns/apple-touch-icon.png"
        />

        {/* PWA対応のメタタグ */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#1a365d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TALOS ケグ" />

        {/* セキュリティ関連のメタタグ */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* パフォーマンス関連 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager は <body> の直後に配置 */}
        <GoogleTagManager gtmId="GTM-5LJJMDDN" />
        {children}
      </body>
    </html>
  );
}
