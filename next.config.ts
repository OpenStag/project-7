// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this line to explicitly allow your private IP address
  allowedDevOrigins: [
    'http://192.168.56.1:3000',
  ],

  // Your other config options go here, if any
  // For example:
  // experimental: {
  // },
};

export default nextConfig;