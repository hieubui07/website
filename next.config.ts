import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: true, // Disable image optimization for development
  },
  
  // Experimental features for package optimization
  experimental: {
    optimizePackageImports: [
      'lodash', 
      'date-fns', 
      'antd',
      'react-icons',
      '@heroicons/react',
      'framer-motion',
      'chart.js',
    ],
    // Other experimental features can go here
  },
  
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Faster rebuilds with persistent caching
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
      };
    }
    
    // Path aliases for cleaner imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/utils': './src/utils',
    };
    
    return config;
  },
  
  // Compiler options (replaces swcMinify)
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously
    pagesBufferLength: 2,
  },
  
  // TypeScript configuration
  typescript: {
    // Ignore TypeScript errors during build (use with caution)
    // ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Ignore ESLint errors during build (use with caution)
    // ignoreDuringBuilds: false,
  },
};

export default nextConfig;
