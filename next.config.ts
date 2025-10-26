import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
    optimizeCss: false, // LightningCSS無効化
  },
  compiler: {
    removeConsole: false,
  },
  transpilePackages: [],
};

export default nextConfig;
