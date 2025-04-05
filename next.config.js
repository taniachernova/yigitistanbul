/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
  experimental: {
    disableOptimizedLoading: true,
  },
}

module.exports = nextConfig 