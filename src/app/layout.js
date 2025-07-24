// src/app/layout.js

import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';

export const metadata = {
  title: 'TAVİZ YOK',
  description:
    'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları belgeleyin. TAVİZ YOK platformuna gönderin, biz de ilgili kurumlara iletip kamuoyunu bilgilendirelim.',
  keywords: [
    'Taviz Yok',
    'ihbar platformu',
    'kamu vicdanı',
    'hukuk',
    'insan hakları',
    'video ihbar',
    'Türkiye',
    'asayiş',
    'trafik',
    'şikayet hattı',
    'kamu bildirimi',
  ],
  metadataBase: new URL('https://tavizyok.com'),
  openGraph: {
    title: 'TAVİZ YOK',
    description:
      'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları belgeleyin. TAVİZ YOK platformuna gönderin, biz de ilgili kurumlara iletip kamuoyunu bilgilendirelim.',
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
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
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
        {children}
      </body>
    </html>
  );
}
