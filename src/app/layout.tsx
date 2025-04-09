import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yigitistanbul.com'),
  title: {
    default: "Esenyurt Escort - Yiğit Esenyurt",
    template: "%s | Yiğit Esenyurt"
  },
  description: "Esenyurt escort hizmetleri, vip escort, elit escort, özel escort hizmetleri. Avrupa yakasının en kaliteli escort hizmeti.",
  keywords: ["Esenyurt escort", "vip escort", "elit escort", "özel escort", "Esenyurt vip", "profesyonel escort", "escort hizmetleri", "escort bayan", "escort Esenyurt", "Beylikdüzü", "Avcılar", "Bahçeşehir", "Avrupa yakası escort", "kaliteli escort", "premium escort"],
  authors: [{ name: "Yiğit Esenyurt" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  },
  openGraph: {
    title: "Esenyurt Escort - Yiğit Esenyurt",
    description: "Esenyurt escort hizmetleri, vip escort, elit escort, özel escort hizmetleri. Avrupa yakasının en kaliteli escort hizmeti.",
    url: "https://yigitistanbul.com",
    siteName: "Yiğit Esenyurt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://yigitistanbul.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Esenyurt Escort - Yiğit Esenyurt"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esenyurt Escort - Yiğit Esenyurt',
    description: 'Esenyurt escort hizmetleri, vip escort, elit escort hizmetleri. Avrupa yakasının en kaliteli escort deneyimi.',
    images: ['https://yigitistanbul.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://yigitistanbul.com',
    languages: {
      'tr-TR': 'https://yigitistanbul.com',
    },
  },
  verification: {
    google: 'NR02b3aGL5SZ5x3vxW659hgQ7GPeWvhJQwh_y9qrnHc', // Google Search Console doğrulama kodu
  },
  icons: {
    icon: '/kiss.png',
    shortcut: '/kiss.png',
    apple: '/kiss.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/kiss.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yigitistanbul.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yiğit Esenyurt Escort",
              "url": "https://yigitistanbul.com",
              "logo": "https://yigitistanbul.com/logo.png",
              "description": "Esenyurt escort hizmetleri, vip escort, elit escort hizmetleri. Avrupa yakasının en kaliteli escort deneyimi. Platin VIP escort, Büs, Selin, Jülide, Olga, Pelin, Sabina, Cemre, Hanzade, İlayda.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Esenyurt",
                "addressRegion": "İstanbul",
                "addressCountry": "Türkiye"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@yigitistanbul.com",
                "telephone": "+90123456789"
              },
              "sameAs": [
                "https://yigitistanbul.com/vip-escort-hizmetleri",
                "https://yigitistanbul.com/platin-escort",
                "https://yigitistanbul.com/platin-bus",
                "https://yigitistanbul.com/platin-selin",
                "https://yigitistanbul.com/platin-julide",
                "https://yigitistanbul.com/platin-olga",
                "https://yigitistanbul.com/platin-pelin",
                "https://yigitistanbul.com/platin-sabina",
                "https://yigitistanbul.com/platin-cemre",
                "https://yigitistanbul.com/platin-hanzade",
                "https://yigitistanbul.com/platin-ilayda"
              ]
            })
          }}
        />
        <Script
          id="disable-dev-tools"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Disable Next.js developer indicators
              if (typeof window !== 'undefined') {
                window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
                window.__NEXT_DATA__.devIndicators = { 
                  buildActivity: false,
                  buildActivityPosition: '' 
                };
                
                // Remove any developer tools elements
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const elements = [
                      document.getElementById('__next-build-watcher'),
                      ...Array.from(document.querySelectorAll('[data-nextjs-dialog], [data-nextjs-dialog-overlay], .__next-build-watcher'))
                    ];
                    
                    elements.forEach(function(el) {
                      if (el && el.parentNode) {
                        el.parentNode.removeChild(el);
                      }
                    });
                  }, 0);
                });
              }
            `
          }}
        />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
