import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'İstanbul VIP Escort Hizmetleri | Elit ve Özel Escort',
  description: 'İstanbul vip escort, elit escort ve özel escort hizmetleri. Avrupa ve Anadolu yakasında en kaliteli İstanbul escort deneyimi için hemen arayın.',
  keywords: ['İstanbul vip escort', 'elit escort İstanbul', 'özel escort', 'İstanbul escort hizmetleri', 'vip escort'],
  alternates: {
    canonical: 'https://yiğitistanbul.com/vip-escort-hizmetleri',
  },
};

export default function VipEcortHizmetleri() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Script
        id="vip-escort-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "İstanbul VIP Escort Hizmetleri",
            "serviceType": "Escort Hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Yiğit İstanbul Escort",
              "url": "https://yiğitistanbul.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "İstanbul"
            },
            "description": "İstanbul&apos;da vip escort, elit escort ve özel escort hizmetleri. En kaliteli İstanbul escort deneyimi.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <header className="w-full bg-black px-4 py-6 md:p-8 text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold">İstanbul VIP Escort Hizmetleri</h1>
        <p className="text-gray-300 text-sm mt-2">Özel VIP Hizmetler</p>
      </header>
      
      <section aria-labelledby="vip-section" className="w-full bg-[#E5E4E2] px-3 py-4 md:px-6 md:py-5 text-center">
        <h2 id="vip-section" className="text-gray-800 text-lg md:text-xl font-semibold">VIP Escort Hizmetleri</h2>
      </section>
      
      <main className="flex-1 p-4 md:p-6">
        <section aria-labelledby="vip-content" className="mb-8">
          <h2 id="vip-content" className="text-xl md:text-2xl font-bold text-center mb-6">İstanbul&apos;un En Elit VIP Escort Hizmetleri</h2>
          
          {/* Soldan sağa akan metin içerik alanları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Premium VIP Escort Hizmetleri</h3>
              <p className="text-gray-700">İstanbul&apos;un en elit escort hizmetleri için doğru adrestesiniz. Profesyonel ve kaliteli hizmet anlayışımızla size en iyi deneyimi sunuyoruz. Vip escort hizmetlerimiz ile İstanbul&apos;un her bölgesinde kaliteli hizmet vermekteyiz.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">İstanbul Elit Escort Deneyimi</h3>
              <p className="text-gray-700">İstanbul escort, vip escort ve elit escort kategorilerinde hizmet veren platformumuz, İstanbul&apos;un her bölgesinde hizmet sunmaktadır. İstanbul Avrupa yakası ve Anadolu yakasında özel escort hizmeti için bizi tercih edebilirsiniz.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Özel VIP Escort</h3>
              <p className="text-gray-700">Özel escort hizmetlerimiz ile kendinizi özel hissedeceğiniz bir deneyim yaşayabilirsiniz. İstanbul&apos;da elit escort hizmeti sunan platformumuz, güvenilir ve kaliteli hizmet anlayışını benimsemektedir.</p>
            </div>
          </div>
          
          {/* İkinci satır metin içerik alanları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">İstanbul&apos;da Escort</h3>
              <p className="text-gray-700">İstanbul&apos;un merkezi konumlarında bulunan escort hizmetlerimiz, size en kaliteli deneyimi yaşatmak için tasarlanmıştır. Profesyonel ekibimiz ve özenle seçilmiş üyelerimiz ile hizmet vermekteyiz. İstanbul escort hizmeti için doğru adrestesiniz.</p>
              <p className="text-gray-700 mt-3">VIP escort hizmetlerimiz ile İstanbul&apos;un her noktasında güvenilir ve kaliteli hizmet alabilirsiniz. İstanbul&apos;un en elit escort platformu olarak hizmet vermekten gurur duyuyoruz.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Profesyonel Escort Hizmeti</h3>
              <p className="text-gray-700">İstanbul&apos;da profesyonel escort hizmeti arıyorsanız, platformumuz sizin için en doğru tercih olacaktır. Yüksek kalite standartlarımız ve müşteri memnuniyeti odaklı hizmet anlayışımız ile sektörde öncü konumdayız.</p>
              <p className="text-gray-700 mt-3">VIP escort kategorisinde yer alan üyelerimiz, sizlere unutulmaz anlar yaşatmak için sabırsızlanıyor. İstanbul escort deneyimi için hemen şimdi iletişime geçebilirsiniz.</p>
            </div>
          </div>
          
          {/* Üçüncü satır tam genişlik metin alanı */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3 text-center text-black">İstanbul Escort Platformu</h3>
            <p className="text-gray-700">İstanbul escort platformumuz, en kaliteli ve güvenilir hizmeti sunmak için titizlikle çalışmaktadır. Elit escort hizmetimiz, İstanbul&apos;un her bölgesinde en yüksek standartlarda sunulmaktadır. Avrupa Yakası ve Anadolu Yakası&apos;nda vip escort hizmeti almak için platformumuzu tercih edebilirsiniz.</p>
            <p className="text-gray-700 mt-3">İstanbul&apos;da escort hizmeti veren platformumuz, müşteri memnuniyetini en üst düzeyde tutmak için çalışmaktadır. Özel escort kategorisinde yer alan üyelerimiz, sizlere en iyi deneyimi yaşatmak için bekliyor. VIP escort hizmetlerimiz ile İstanbul&apos;un her noktasında kaliteli ve güvenilir hizmet alabilirsiniz.</p>
            <p className="text-gray-700 mt-3">İstanbul escort platformu olarak, sizlere en iyi hizmeti sunmak için sürekli kendimizi geliştirmekteyiz. Elit escort hizmetlerimiz ile İstanbul&apos;un en kaliteli escort deneyimini yaşayabilirsiniz. VIP üyelerimiz ile unutulmaz anlar yaşamak için hemen şimdi iletişime geçebilirsiniz.</p>
          </div>
        </section>
        
        <div className="flex justify-center space-x-4 mt-8 mb-6">
          <Link href="/" className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
            1
          </Link>
          <Link href="/vip-escort-hizmetleri" className="px-6 py-3 bg-[#FFD700] text-amber-900 font-bold rounded-full hover:bg-amber-400 transition">
            2
          </Link>
        </div>
      </main>
    </div>
  );
} 