import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); 

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, 
  },
};

export default nextConfig;
