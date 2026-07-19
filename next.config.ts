import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'pbs.twimg.com',
      },
      {
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
