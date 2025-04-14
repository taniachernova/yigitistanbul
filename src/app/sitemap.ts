import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600; // her saat başı yenileme

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yigitistanbul.com';
  const currentDate = new Date().toISOString();
  
  // Ana sayfalar
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/vip-escort-hizmetleri`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9
    }
  ];

  // Bölge sayfaları
  const locationPages = [
    '/avcilar-escort',
    '/avrupa-yakasi-escort',
    '/bahcesehir-escort',
    '/beylikduzu-escort',
    '/esenyurt-escort'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8
  }));

  // Kategori sayfaları
  const categoryPages = [
    '/elit-escort',
    '/escort-bayan',
    '/ozel-escort',
    '/profesyonel-escort'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // Platin escort sayfaları
  const platinPages = [
    '/platin-escort',
    '/platin-bus',
    '/platin-selin',
    '/platin-julide',
    '/platin-olga',
    '/platin-pelin',
    '/platin-sabina',
    '/platin-cemre',
    '/platin-hanzade',
    '/platin-ilayda'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8
  }));

  return [...mainPages, ...locationPages, ...categoryPages, ...platinPages];
} 