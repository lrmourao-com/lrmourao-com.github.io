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
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
