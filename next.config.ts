import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    qualities: [25, 50, 75], // Only these values will be allowed,
    maximumDiskCacheSize: 100 * 1024 * 1024 // 100MB
  }
};

export default nextConfig;
