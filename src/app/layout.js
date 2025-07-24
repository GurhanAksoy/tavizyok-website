// src/app/layout.js

import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'TAVİZ YOK',
  description:
    'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim ve kamuoyunu bilgilendirelim.',
  keywords: [
    'Taviz Yok',
    'ihbar',
    'video ihbar',
    'kamu vicdanı',
    'insan hakları',
    'hukuka aykırı olaylar',
    'şikayet',
    'şikayet platformu',
    'Türkiye',
    'trafik ihlali',
    'kamu yararı',
  ],
  metadataBase: new URL('https://tavizyok.com'),
  openGraph: {
    title: 'TAVİZ YOK',
    description:
      'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim ve kamuoyunu bilgilendirelim.',
    url: 'https://tavizyok.com',
    siteName: 'TAVİZ YOK',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://tavizyok.com/" />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3QNNYRCHJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q3QNNYRCHJ');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}
