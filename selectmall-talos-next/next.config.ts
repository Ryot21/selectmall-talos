import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // React Strict Mode を有効にするオプション（例）
  // リダイレクト設定は削除（ミドルウェアで制御）
};

export default nextConfig;
