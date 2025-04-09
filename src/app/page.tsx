import React from 'react';
import type { Metadata } from 'next';
import PageNavigation from './components/PageNavigation';
import ClickableImage from './components/ClickableImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Esenyurt Escort | Şirinevler Ataköy VIP Escort Hizmetleri',
  description: 'Esenyurt, Şirinevler ve Ataköy bölgelerinde profesyonel escort hizmetleri. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.',
  keywords: 'esenyurt escort, şirinevler escort, ataköy escort, vip escort, platin escort, özel hizmet, profesyonel escort, esenyurt vip escort, şirinevler vip escort, ataköy vip escort, esenyurt platin escort, şirinevler platin escort, ataköy platin escort',
  alternates: {
    canonical: 'https://yigitistanbul.com/',
  },
  openGraph: {
    title: 'Esenyurt Escort | Şirinevler Ataköy VIP Escort Hizmetleri',
    description: 'Esenyurt, Şirinevler ve Ataköy bölgelerinde profesyonel escort hizmetleri. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.',
    url: 'https://yiğitistanbul.com',
    siteName: 'Esenyurt Escort',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://yigitistanbul.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Esenyurt Escort - VIP Hizmet',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esenyurt Escort | Şirinevler Ataköy VIP Escort Hizmetleri',
    description: 'Esenyurt, Şirinevler ve Ataköy bölgelerinde profesyonel escort hizmetleri. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.',
    images: ['https://yigitistanbul.com/images/twitter-image.jpg'],
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
            {Array.from({ length: 16 }).map((_, index) => {
              // Platin klasöründeki resimleri sırasıyla kullan
              let imageSrc = `/images/platin/reklam_alanı.png`;
              if (index === 0) imageSrc = `/images/platin/büsra.jpg`;
              else if (index === 1) imageSrc = `/images/platin/selin.jpg`;
              else if (index === 2) imageSrc = `/images/platin/jülide.jpg`;
              else if (index === 3) imageSrc = `/images/platin/olga.jpg`;
              else if (index === 4) imageSrc = `/images/platin/pelin.jpg`;
              else if (index === 5) imageSrc = `/images/platin/sabina.jpg`;
              else if (index === 6) imageSrc = `/images/platin/cemre.jpg`;
              else if (index === 7) imageSrc = `/images/platin/hanzade.jpg`;
              else if (index === 8) imageSrc = `/images/platin/ilayda.jpg`;
              
              return (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <ClickableImage 
                    src={imageSrc}
                    alt={`Esenyurt escort ${index === 0 ? "Büsra" : 
                      index === 1 ? "Selin" : 
                      index === 2 ? "Jülide" : 
                      index === 3 ? "Olga" : 
                      index === 4 ? "Pelin" : 
                      index === 5 ? "Sabina" : 
                      index === 6 ? "Cemre" : 
                      index === 7 ? "Hanzade" : 
                      index === 8 ? "İlayda" : 
                      `${index + 1}`} - Profesyonel VIP hizmet`}
                    style={{ width: '100%', height: '0', paddingBottom: '139.53%' }}
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                    priority={index < 8} // İlk 8 resim için öncelikli yükleme
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                  <div className="p-2 sm:p-3">
                    <h3 className="text-xs sm:text-sm font-medium truncate">
                      {index === 0 ? "Esenyurt Büsra - VIP Escort" : 
                       index === 1 ? "Esenyurt Selin - VIP Escort" : 
                       index === 2 ? "Esenyurt Jülide - VIP Escort" : 
                       index === 3 ? "Esenyurt Olga - VIP Escort" : 
                       index === 4 ? "Esenyurt Pelin - VIP Escort" : 
                       index === 5 ? "Esenyurt Sabina - VIP Escort" : 
                       index === 6 ? "Esenyurt Cemre - VIP Escort" : 
                       index === 7 ? "Esenyurt Hanzade - VIP Escort" : 
                       index === 8 ? "Esenyurt İlayda - VIP Escort" : 
                       `Esenyurt Platin VIP ${index + 1} - Escort`}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4 mb-6">
            {Array.from({ length: 16 }).map((_, index) => (
              <article key={`row2-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ClickableImage 
                  src={`/images/platin/reklam_alanı.png`}
                  alt={`Esenyurt vip escort ${index + 17} - Premium hizmet - Esenyurt escort`}
                  style={{ width: '100%', height: '0', paddingBottom: '139.53%' }}
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                  loading="lazy"
                />
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt VIP Escort {index + 17}</h3>
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
                <ClickableImage 
                  src={`/images/altin/reklam_alanı.png`}
                  alt={`Esenyurt elit escort ${index + 1} - Özel hizmet - Esenyurt escort`}
                  className="aspect-square"
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                  loading="lazy"
                />
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt Elit Escort {index + 1}</h3>
                </div>
              </article>
            ))}
          </div>
        
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-2 md:gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <article key={`gold-row2-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <ClickableImage 
                  src={`/images/altin/reklam_alanı.png`}
                  alt={`Esenyurt özel escort ${index + 9} - Kaliteli hizmet - Esenyurt escort`}
                  className="aspect-square"
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, (max-width: 1024px) 12.5vw, 12.5vw"
                  loading="lazy"
                />
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium truncate">Esenyurt Özel Escort {index + 9}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Esenyurt Escort Hizmetleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Esenyurt Escort</h3>
                <p className="text-gray-600 mb-4">
                  Esenyurt bölgesinde profesyonel escort hizmetleri sunuyoruz. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.
                </p>
                <Link href="/vip-escort-hizmetleri" className="text-blue-600 hover:text-blue-800">
                  Detaylı Bilgi →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Şirinevler Escort</h3>
                <p className="text-gray-600 mb-4">
                  Şirinevler bölgesinde premium escort hizmetleri sunuyoruz. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.
                </p>
                <Link href="/vip-escort-hizmetleri" className="text-blue-600 hover:text-blue-800">
                  Detaylı Bilgi →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Ataköy Escort</h3>
                <p className="text-gray-600 mb-4">
                  Ataköy bölgesinde elit escort hizmetleri sunuyoruz. VIP escort, platin escort ve özel hizmetler için hemen iletişime geçin.
                </p>
                <Link href="/vip-escort-hizmetleri" className="text-blue-600 hover:text-blue-800">
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
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
