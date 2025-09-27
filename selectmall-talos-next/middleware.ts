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
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const userAgent = request.headers.get("user-agent") || "";

  // リダイレクトチェーンを完全に避けるため、最小限の設定のみ

  // 1. wwwなしからwwwありへのリダイレクト（SEO最適化）
  if (hostname === "www.selectmall-keg.jp") {
    const url = request.nextUrl.clone();
    url.hostname = "selectmall-keg.jp";
    return NextResponse.redirect(url, 301);
  }

  // 2. 重複スラッシュの除去（基本的なURL正規化のみ）
  if (pathname.includes("//")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+/g, "/");
    return NextResponse.redirect(url, 301);
  }

  // その他のリダイレクトは削除して、シンプルに保つ
  return NextResponse.next();
}

/**
 * ミドルウェアの適用範囲
 * リダイレクトエラーを避けるため、最小限のパスにのみ適用
 */
export const config = {
  matcher: [
    /*
     * 以下のパスにのみミドルウェアを適用：
     * - ルートパス（/）
     * - ページパス（/page）
     * 除外パス：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - その他の静的ファイル
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)?",
  ],
};
