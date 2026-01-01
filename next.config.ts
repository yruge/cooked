import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'i.scdn.co',
      port: '',
      pathname: '/image/**'
      },
    ],
  }
};

export default nextConfig;
