/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
  experimental: {
    disableOptimizedLoading: true,
  },
  async redirects() {
    return [
      // HTTP'den HTTPS'ye yönlendirme
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        permanent: true,
        destination: 'https://yigitistanbul.com/:path*',
      },
      // www'dan www olmayan versiyona yönlendirme
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.yigitistanbul.com',
          },
        ],
        permanent: true,
        destination: 'https://yigitistanbul.com',
      },
      // Alt sayfalar için www yönlendirmesi
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yigitistanbul.com',
          },
        ],
        permanent: true,
        destination: 'https://yigitistanbul.com/:path*',
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
}

module.exports = nextConfig 