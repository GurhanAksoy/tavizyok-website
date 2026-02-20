import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu</title>
        <link rel="icon" href="/tavizyok.ico" type="image/x-icon" />
        <link rel="canonical" href="https://tavizyok.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TAVİZ YOK Platformu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Türkiye'nin vatandaş haberciliği ve anonim ihbar platformu. Haksızlıkları, trafik ihlallerini, hayvan haklarına aykırı davranışları WhatsApp üzerinden anonim bildirin." />

        {/* Open Graph - WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tavizyok.com/" />
        <meta property="og:site_name" content="TAVİZ YOK" />
        <meta property="og:title" content="TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu" />
        <meta property="og:description" content="Haksızlıklara sessiz kalmayın. Anonim olarak video gönderin, ihbarda bulunun." />
        <meta property="og:image" content="https://tavizyok.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TAVİZ YOK | Vatandaş Haberciliği ve İhbar Platformu" />
        <meta name="twitter:description" content="Haksızlıklara sessiz kalmayın. Anonim olarak video gönderin, ihbarda bulunun." />
        <meta name="twitter:image" content="https://tavizyok.com/og-image.png" />

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
      <body className={`${inter.className} antialiased font-sans bg-[#f7f7f7] text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
