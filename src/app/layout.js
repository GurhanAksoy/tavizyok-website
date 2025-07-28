'use client';

import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'TAVİZ YOK',
  description:
    'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim ve kamuoyunu bilgilendirelim.',
  metadataBase: new URL('https://tavizyok.com'),
  openGraph: {
    title: 'TAVİZ YOK',
    description:
      'Vatandaşların kamu yararına hukuka aykırı olayları videoyla bildirip paylaşabileceği dijital platform.',
    url: 'https://tavizyok.com',
    siteName: 'TAVİZ YOK',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://tavizyok.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'TAVİZ YOK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TavizYok',
    title: 'TAVİZ YOK',
    description:
      'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de kamuoyunu ve yetkilileri bilgilendirelim.',
    images: ['https://tavizyok.com/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/tavizyok.ico" type="image/x-icon" />
        <link rel="canonical" href="https://tavizyok.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TAVİZ YOK Platformu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
      <body className="bg-background text-text-soft font-sans antialiased">
        <Navbar />
        <main className="pt-24 px-4 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}