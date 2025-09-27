import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js ミドルウェア
 * Google Search Consoleのリダイレクトエラー対応
 *
 * 主な機能：
 * 1. wwwなしからwwwありへのリダイレクト
 * 2. 末尾スラッシュの統一
 * 3. 大文字小文字の統一
 * 4. 重複スラッシュの除去
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const userAgent = request.headers.get("user-agent") || "";

  // リダイレクトチェーンを避けるため、一度に一つのリダイレクトのみ実行

  // 1. wwwなしからwwwありへのリダイレクト（SEO最適化）
  if (hostname === "www.selectmall-keg.jp") {
    const url = request.nextUrl.clone();
    url.hostname = "selectmall-keg.jp";
    return NextResponse.redirect(url, 301);
  }

  // 2. 特定のパターンに対するリダイレクト（/lp/ パスをルートにリダイレクト）
  if (pathname.startsWith("/lp/") && pathname !== "/lp/") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace("/lp", "");
    return NextResponse.redirect(url, 301);
  }

  // 3. 重複スラッシュの除去
  if (pathname.includes("//")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+/g, "/");
    return NextResponse.redirect(url, 301);
  }

  // 4. 大文字小文字の統一（URLの正規化）
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // 5. 末尾スラッシュの統一（Googlebot用、最後に実行）
  const isGooglebot = /Googlebot/i.test(userAgent);
  if (isGooglebot && pathname.endsWith("/") && pathname !== "/") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

/**
 * ミドルウェアの適用範囲
 * 以下のパスにミドルウェアを適用：
 * - すべてのパス（'/(.*)'）
 * 除外パス：
 * - _next/static（静的ファイル）
 * - _next/image（画像最適化）
 * - favicon.ico（ファビコン）
 * - robots.txt（ロボットファイル）
 * - sitemap.xml（サイトマップ）
 */
export const config = {
  matcher: [
    /*
     * 以下のパターンにマッチするすべてのリクエストパスを除外：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
