import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows ANY domain
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
