"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// ページタイプを管理するコンポーネント
export default function PageTypeWrapper({
  children,
  initialPageType,
}: {
  children: React.ReactNode;
  initialPageType: string;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let pageType = initialPageType;
    const archivePaths = ["/information", "/interview", "/maneripe", "/news"];

    if (archivePaths.some((path) => pathname.startsWith(path))) {
      // パスを分割して解析
      const pathSegments = pathname.split("/").filter(Boolean);
      const section = pathSegments[0];

      // カテゴリーページまたはページネーションを含むパスかチェック
      if (
        pathSegments[1] === "category" ||
        pathname.includes("/page/") ||
        pathname.startsWith("/information/search")
      ) {
        // カテゴリーページ、ページネーション、または検索ページの場合
        pageType = "archive";
      } else if (pathSegments.length === 2) {
        // 記事詳細ページの場合（例：/information/123）
        pageType = `single -${section}`;
      } else {
        // それ以外のケース
        pageType = "archive";
      }
    } else if (pathname.startsWith("/contact")) {
      pageType = "contact";
    } else if (pathname === "/") {
      pageType = "top";
    } else if (pathname.startsWith("/lp")) {
      pageType = "lp";
    }

    // React 19の改善されたハイドレーション対策として
    requestAnimationFrame(() => {
      document.body.className = `p-${pageType}`;
      // document.body.className = `p-${pageType} is-scroll`;
    });
  }, [pathname, initialPageType]);

  // 初期レンダリング時はサーバーサイドの状態を維持
  if (!mounted) {
    return <div data-page-type={initialPageType}>{children}</div>;
  }

  return <div>{children}</div>;
}
