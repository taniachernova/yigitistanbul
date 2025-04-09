import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Site base URL
  const baseUrl = 'https://yigitistanbul.com';
  
  const routes = [
    '',
    '/vip-escort-hizmetleri',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 