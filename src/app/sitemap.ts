import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Site base URL
  const baseUrl = 'https://yigitistanbul.com';
  
  const routes = [
    '',
    '/vip-escort-hizmetleri',
    '/avcilar-escort',
    '/avrupa-yakasi-escort',
    '/bahcesehir-escort',
    '/beylikduzu-escort',
    '/elit-escort',
    '/escort-bayan',
    '/esenyurt-escort',
    '/esenyurt-escort-bayan',
    '/ozel-escort',
    '/profesyonel-escort',
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : route === '/vip-escort-hizmetleri' ? 0.9 : 0.8,
  }));

  return routes;
} 