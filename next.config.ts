import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization
  },
  /* Add other configuration options here */
  devIndicators: false,
};

export default nextConfig;
