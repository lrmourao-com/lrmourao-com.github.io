import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  // Use relative asset paths in static export so CSS/JS work under any base URL
  assetPrefix: isProd ? '.' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages deployment with custom domain
  basePath: '',
};

export default nextConfig;
