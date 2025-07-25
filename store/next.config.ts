import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // any other options you need…
  reactStrictMode: true,
  // you can add `output: 'standalone'` here if you're doing a standalone build,
  // but you don’t need anything here for middleware to work.
}

export default nextConfig;
