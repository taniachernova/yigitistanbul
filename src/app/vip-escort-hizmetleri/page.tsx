import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import PageNavigation from '../components/PageNavigation';

export const metadata: Metadata = {
  title: 'Esenyurt VIP Escort Hizmetleri | Elit ve Özel Escort',
  description: 'Esenyurt vip escort, elit escort ve özel escort hizmetleri. Avrupa ve çevre ilçelerde en kaliteli Esenyurt escort deneyimi için hemen arayın.',
  keywords: ['Esenyurt vip escort', 'elit escort Esenyurt', 'özel escort', 'Esenyurt escort hizmetleri', 'vip escort', 'Avrupa yakası escort', 'Beylikdüzü escort', 'Avcılar escort', 'Bahçeşehir escort'],
  alternates: {
    canonical: 'https://yiğitistanbul.com/vip-escort-hizmetleri',
  },
  openGraph: {
    title: 'Esenyurt VIP Escort Hizmetleri | Elit ve Özel Escort',
    description: 'Esenyurt vip escort, elit escort ve özel escort hizmetleri. Avrupa ve çevre ilçelerde en kaliteli Esenyurt escort deneyimi için hemen arayın.',
    url: 'https://yiğitistanbul.com/vip-escort-hizmetleri',
    siteName: 'Yiğit Esenyurt',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://yiğitistanbul.com/images/vip-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Esenyurt VIP Escort Hizmetleri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esenyurt VIP Escort Hizmetleri | Elit ve Özel Escort',
    description: 'Esenyurt vip escort, elit escort ve özel escort hizmetleri. Avrupa ve çevre ilçelerde en kaliteli Esenyurt escort deneyimi için hemen arayın.',
    images: ['https://yiğitistanbul.com/images/vip-twitter-image.jpg'],
  },
};

export default function VipEscortHizmetleri() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Script
        id="vip-escort-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Esenyurt VIP Escort Hizmetleri",
            "serviceType": "Escort Hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Yiğit Esenyurt Escort",
              "url": "https://yiğitistanbul.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Esenyurt"
            },
            "description": "Esenyurt&apos;ta vip escort, elit escort ve özel escort hizmetleri. En kaliteli Esenyurt escort deneyimi.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <header className="w-full bg-black px-4 py-6 md:p-8 text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold">Esenyurt VIP Escort Hizmetleri</h1>
        <p className="text-gray-300 text-sm mt-2">Özel VIP Hizmetler</p>
      </header>
      
      <section aria-labelledby="vip-section" className="w-full bg-[#E5E4E2] px-3 py-4 md:px-6 md:py-5 text-center">
        <h2 id="vip-section" className="text-gray-800 text-lg md:text-xl font-semibold">VIP Escort Hizmetleri</h2>
      </section>
      
      <main className="flex-1 p-4 md:p-6">
        <section aria-labelledby="vip-content" className="mb-8">
          <h2 id="vip-content" className="text-xl md:text-2xl font-bold text-center mb-6">Esenyurt&apos;un En Elit VIP Escort Hizmetleri</h2>
          
          {/* Soldan sağa akan metin içerik alanları */}
          <div className="flex flex-col gap-4 mb-8">
            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Premium VIP Escort Hizmetleri</h3>
              <p className="text-gray-700">Esenyurt&apos;un en elit escort hizmetleri için doğru adrestesiniz. Profesyonel ve kaliteli hizmet anlayışımızla size en iyi deneyimi sunuyoruz. Vip escort hizmetlerimiz ile Esenyurt&apos;un her bölgesinde kaliteli hizmet vermekteyiz.</p>
            </article>
            
            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Esenyurt Elit Escort Deneyimi</h3>
              <p className="text-gray-700">Esenyurt escort, vip escort ve elit escort kategorilerinde hizmet veren platformumuz, Esenyurt&apos;un her bölgesinde hizmet sunmaktadır. Esenyurt Avrupa yakası ve çevre ilçelerde özel escort hizmeti için bizi tercih edebilirsiniz.</p>
            </article>
            
            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Özel VIP Escort</h3>
              <p className="text-gray-700">Özel escort hizmetlerimiz ile kendinizi özel hissedeceğiniz bir deneyim yaşayabilirsiniz. Esenyurt&apos;ta elit escort hizmeti sunan platformumuz, güvenilir ve kaliteli hizmet anlayışını benimsemektedir.</p>
            </article>

            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Esenyurt&apos;ta Escort</h3>
              <p className="text-gray-700">Esenyurt&apos;un merkezi konumlarında bulunan escort hizmetlerimiz, size en kaliteli deneyimi yaşatmak için tasarlanmıştır. Profesyonel ekibimiz ve özenle seçilmiş üyelerimiz ile hizmet vermekteyiz. Esenyurt escort hizmeti için doğru adrestesiniz.</p>
              <p className="text-gray-700 mt-3">VIP escort hizmetlerimiz ile Esenyurt&apos;un her noktasında güvenilir ve kaliteli hizmet alabilirsiniz. Esenyurt&apos;un en elit escort platformu olarak hizmet vermekten gurur duyuyoruz.</p>
            </article>
            
            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Profesyonel Escort Hizmeti</h3>
              <p className="text-gray-700">Esenyurt&apos;ta profesyonel escort hizmeti arıyorsanız, platformumuz sizin için en doğru tercih olacaktır. Yüksek kalite standartlarımız ve müşteri memnuniyeti odaklı hizmet anlayışımız ile sektörde öncü konumdayız.</p>
              <p className="text-gray-700 mt-3">VIP escort kategorisinde yer alan üyelerimiz, sizlere unutulmaz anlar yaşatmak için sabırsızlanıyor. Esenyurt escort deneyimi için hemen şimdi iletişime geçebilirsiniz.</p>
            </article>
            
            <article className="bg-white rounded-lg shadow-md p-5 w-full transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Esenyurt Escort Platformu</h3>
              <p className="text-gray-700">Esenyurt escort platformumuz, en kaliteli ve güvenilir hizmeti sunmak için titizlikle çalışmaktadır. Elit escort hizmetimiz, Esenyurt&apos;un her bölgesinde en yüksek standartlarda sunulmaktadır. <strong>Esenyurt merkez</strong>, <strong>Beylikdüzü</strong>, <strong>Avcılar</strong> ve <strong>Bahçeşehir</strong> bölgelerinde vip escort hizmeti almak için platformumuzu tercih edebilirsiniz.</p>
              <p className="text-gray-700 mt-3">Esenyurt&apos;ta escort hizmeti veren platformumuz, müşteri memnuniyetini en üst düzeyde tutmak için çalışmaktadır. Özel escort kategorisinde yer alan üyelerimiz, sizlere en iyi deneyimi yaşatmak için bekliyor. VIP escort hizmetlerimiz ile Esenyurt&apos;un her noktasında kaliteli ve güvenilir hizmet alabilirsiniz.</p>
              <p className="text-gray-700 mt-3">Esenyurt escort platformu olarak, sizlere en iyi hizmeti sunmak için sürekli kendimizi geliştirmekteyiz. Elit escort hizmetlerimiz ile Esenyurt&apos;un en kaliteli escort deneyimini yaşayabilirsiniz. VIP üyelerimiz ile unutulmaz anlar yaşamak için hemen şimdi iletişime geçebilirsiniz.</p>
            </article>
          </div>
        </section>
        
        <PageNavigation 
          currentPage={2}
          totalPages={2}
          paths={['/', '/vip-escort-hizmetleri']}
        />
      </main>
    </div>
  );
} 