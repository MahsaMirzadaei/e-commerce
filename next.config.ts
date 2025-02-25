import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fakestoreapi\.com\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        },
      },
    },
  ],
  register: true, // Auto-register service worker
  skipWaiting: true, // Skip waiting and activate new SW immediately
  // disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
});

export default nextConfig;
