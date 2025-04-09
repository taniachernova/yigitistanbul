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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yigitistanbul.com',
          },
        ],
        permanent: true,
        destination: 'https://yigitistanbul.com/:path*',
      },
      // Türkçe karakterli domainden ASCII versiyona yönlendirme
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'yiğitistanbul.com',
          },
        ],
        permanent: true,
        destination: 'https://yigitistanbul.com/:path*',
      },
      // robots.txt ve sitemap.xml için özel yönlendirmeler
      {
        source: '/robots.txt',
        destination: 'https://yigitistanbul.com/robots.txt',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: 'https://yigitistanbul.com/sitemap.xml',
        permanent: true,
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