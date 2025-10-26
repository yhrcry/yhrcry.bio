import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false,
  },

  compiler: {
    removeConsole: false,
  },

  transpilePackages: [],
};

export default nextConfig;
