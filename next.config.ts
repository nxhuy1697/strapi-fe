// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL || 'http://localhost:1337',
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Thêm localhost vào danh sách cho phép
  },
};

export default nextConfig;
