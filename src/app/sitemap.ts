import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Site base URL
  const baseUrl = 'https://yigitistanbul.com';
  
  // Geçerli tarih ve saati al
  const today = new Date();
  
  // Sayfaların son güncelleme tarihlerini belirt (gerçek proje içinde otomatik oluşturulabilir)
  const pageLastModifiedDates = {
    homepage: new Date(today),
    vipEscortHizmetleri: new Date(today),
    vipEscort: new Date(today),
    elitEscort: new Date(today),
    esenyurtEscort: new Date(today),
    ozelEscort: new Date(today),
    escortBayan: new Date(today),
    avrupaYakasiEscort: new Date(today),
    beylikduzuEscort: new Date(today),
    profesyonelEscort: new Date(today),
    esenyurtEscortBayan: new Date(today),
    bahcesehirEscort: new Date(today),
    avcilarEscort: new Date(today),
  };
  
  return [
    {
      url: baseUrl,
      lastModified: pageLastModifiedDates.homepage,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/vip-escort-hizmetleri`,
      lastModified: pageLastModifiedDates.vipEscortHizmetleri,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vip-escort`,
      lastModified: pageLastModifiedDates.vipEscort,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/elit-escort`,
      lastModified: pageLastModifiedDates.elitEscort,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/esenyurt-escort`,
      lastModified: pageLastModifiedDates.esenyurtEscort,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ozel-escort`,
      lastModified: pageLastModifiedDates.ozelEscort,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/escort-bayan`,
      lastModified: pageLastModifiedDates.escortBayan,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/avrupa-yakasi-escort`,
      lastModified: pageLastModifiedDates.avrupaYakasiEscort,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/beylikduzu-escort`,
      lastModified: pageLastModifiedDates.beylikduzuEscort,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/profesyonel-escort`,
      lastModified: pageLastModifiedDates.profesyonelEscort,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esenyurt-escort-bayan`,
      lastModified: pageLastModifiedDates.esenyurtEscortBayan,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bahcesehir-escort`,
      lastModified: pageLastModifiedDates.bahcesehirEscort,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/avcilar-escort`,
      lastModified: pageLastModifiedDates.avcilarEscort,
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  ];
} 