import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // React Strict Mode を有効にするオプション（例）

  // リダイレクト設定（Google Search Console対応）
  async redirects() {
    return [
      // wwwなしからwwwありへのリダイレクト（SEO最適化）
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "www.selectmall-keg.jp",
          },
        ],
        destination: "https://selectmall-keg.jp/:path*",
        permanent: true,
      },
    ];
  },

  // 他の設定オプションをここに追加
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
