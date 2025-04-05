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
    url: "https://yiğitistanbul.com",
    siteName: "Yiğit Esenyurt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://yiğitistanbul.com/images/og-image.jpg",
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
    images: ['https://yiğitistanbul.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: "https://yiğitistanbul.com",
    languages: {
      'tr-TR': 'https://yiğitistanbul.com',
    },
  },
  verification: {
    google: 'Ima0pj4Yv9rkPp2zVTHnHXUq71CokbWYX5PaHttb00U', // Google Search Console doğrulama kodu
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
        <link rel="canonical" href="https://yiğitistanbul.com" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yiğit Esenyurt Escort",
              "url": "https://yiğitistanbul.com",
              "logo": "https://yiğitistanbul.com/logo.png",
              "description": "Esenyurt escort hizmetleri, vip escort, elit escort hizmetleri. Avrupa yakasının en kaliteli escort deneyimi.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Esenyurt",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@yiğitistanbul.com",
                "telephone": "+90123456789"
              }
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
