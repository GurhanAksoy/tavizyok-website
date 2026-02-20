import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://tavizyok.com'),
  title: {
    default: 'TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu',
    template: '%s | TAVİZ YOK',
  },
  description: "Türkiye'nin güvenilir vatandaş haberciliği ve anonim ihbar platformu. Trafik ihlallerini, çevre sorunlarını, hayvan haklarına aykırı davranışları WhatsApp üzerinden anonim bildirin.",
  keywords: ['vatandaş haberciliği', 'ihbar platformu', 'anonim ihbar', 'haksızlık bildir', 'tavizyok', 'TAVİZ YOK', 'whatsapp ihbar hattı', 'trafik ihlali bildir', 'hayvan hakları ihbar'],
  authors: [{ name: 'TAVİZ YOK Platformu', url: 'https://tavizyok.com' }],
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://tavizyok.com' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://tavizyok.com',
    siteName: 'TAVİZ YOK',
    title: 'TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu',
    description: 'Haksızlıklara sessiz kalmayın. Anonim olarak video gönderin, ihbarda bulunun.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TAVİZ YOK — Vatandaş Haberciliği Platformu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu',
    description: 'Haksızlıklara sessiz kalmayın. Anonim video gönderin, ihbarda bulunun.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/tavizyok.ico', shortcut: '/tavizyok.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TAVİZ YOK',
          url: 'https://tavizyok.com',
          logo: 'https://tavizyok.com/logo.png',
          description: "Türkiye'nin güvenilir vatandaş haberciliği ve anonim ihbar platformu.",
          contactPoint: { '@type': 'ContactPoint', telephone: '+90-530-406-66-86', contactType: 'customer support', availableLanguage: 'Turkish' },
          sameAs: ['https://www.youtube.com/@Taviz_Yok', 'https://www.instagram.com/tavizyokplatformu'],
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'TAVİZ YOK',
          url: 'https://tavizyok.com',
        })}} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3QNNYRCHJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q3QNNYRCHJ', { page_path: window.location.pathname });
        `}} />
      </head>
      <body className={`${inter.className} antialiased font-sans bg-[#f7f7f7] text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
