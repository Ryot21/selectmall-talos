import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // React Strict Mode を有効にするオプション（例）
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
