import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import PageNavigation from './components/PageNavigation';

export const metadata: Metadata = {
  title: 'Esenyurt Escort - VIP Hizmet | Yiğit Esenyurt',
  description: 'Esenyurt escort hizmetleri, vip escort, elit escort, özel escort hizmetleri. En kaliteli Esenyurt escort deneyimi.',
  keywords: ['Esenyurt escort', 'vip escort', 'elit escort', 'özel escort', 'Esenyurt vip', 'profesyonel escort', 'escort bayan', 'Esenyurt escort bayan', 'Esenyurt elit escort', 'kaliteli escort', 'Esenyurt özel escort', 'Avcılar escort', 'Beylikdüzü escort', 'Bahçeşehir escort', 'gerçek escort', 'sarışın escort', 'esmer escort', 'premium escort', 'Esenyurt rus escort', 'yabancı escort'],
  alternates: {
    canonical: 'https://yiğitistanbul.com/',
  },
  openGraph: {
    title: 'Esenyurt Escort - VIP Hizmet | Yiğit Esenyurt',
    description: 'Esenyurt escort hizmetleri, vip escort, elit escort, özel escort hizmetleri. En kaliteli Esenyurt escort deneyimi.',
    url: 'https://yiğitistanbul.com/',
    siteName: 'Yiğit Esenyurt',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://yiğitistanbul.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Esenyurt Escort',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esenyurt Escort - VIP Hizmet | Yiğit Esenyurt',
    description: 'Esenyurt escort hizmetleri, vip escort, elit escort, özel escort hizmetleri. En kaliteli Esenyurt escort deneyimi.',
    images: ['https://yiğitistanbul.com/images/twitter-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full bg-black px-4 py-6 md:p-8 text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold">Esenyurt Escort - Yiğit Esenyurt</h1>
        <p className="text-gray-300 text-sm mt-2">Profesyonel VIP Hizmet</p>
      </header>
      
      <section aria-labelledby="platin-section" className="w-full bg-[#E5E4E2] px-3 py-4 md:px-6 md:py-5 text-center">
        <h2 id="platin-section" className="text-gray-800 text-lg md:text-xl font-semibold">Platin VIP</h2>
      </section>
      
      <main className="flex-1 p-4 md:p-6">
        <section aria-labelledby="platin-images" className="mb-6">
          <h2 id="platin-images" className="sr-only">Platin Escort Hizmetleri</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4 mb-6">
            {Array.from({ length: 16 }).map((_, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src={`/images/platin/reklam_alanı.png`}
                    alt={`Esenyurt platin escort ${index + 1} - Profesyonel VIP hizmet`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                    className="object-cover"
                    priority={index < 8} // İlk 8 resim için öncelikli yükleme
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt Escort {index + 1}</h3>
                </div>
              </article>
            ))}
          </div>
        
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4 mb-6">
            {Array.from({ length: 16 }).map((_, index) => (
              <article key={`row2-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src={`/images/platin/reklam_alanı.png`}
                    alt={`Esenyurt vip escort ${index + 17} - Premium hizmet`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt VIP {index + 17}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section aria-labelledby="altin-section" className="w-full bg-[#FFD700] px-3 py-4 md:px-6 md:py-5 text-center rounded-md mb-6">
          <h2 id="altin-section" className="text-amber-900 text-lg md:text-xl font-semibold">Elit Escort</h2>
        </section>
        
        <section aria-labelledby="altin-images" className="mb-6">
          <h2 id="altin-images" className="sr-only">Elit Escort Hizmetleri</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4 mb-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <article key={`gold-row1-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src={`/images/altin/reklam_alanı.png`}
                    alt={`Esenyurt elit escort ${index + 1} - Özel hizmet`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt Elit Escort {index + 1}</h3>
                </div>
              </article>
            ))}
          </div>
        
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <article key={`gold-row2-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src={`/images/altin/reklam_alanı.png`}
                    alt={`Esenyurt özel escort ${index + 9} - Kaliteli hizmet`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt Özel Escort {index + 9}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <PageNavigation 
          currentPage={1}
          totalPages={2}
          paths={['/', '/vip-escort-hizmetleri']}
        />
      </main>
    </div>
  );
}
