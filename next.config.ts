import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization
  },
  /* Add other configuration options here */
};

module.exports = nextConfig;


export default nextConfig;
