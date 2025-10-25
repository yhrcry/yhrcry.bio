/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, 
  },
  compiler: {
    removeConsole: false,
  },
 
  transpilePackages: [],
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
