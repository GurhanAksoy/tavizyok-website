import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';  // 👈 YENİ
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // ... aynı kalacak ...
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
      <body className={`${inter.className} antialiased font-sans bg-[#f7f7f7] text-black`}>
        <Navbar />
        {children}
        <Footer />  {/* 👈 ESKİ FOOTER KODUNU SİL, BUNU EKLE */}
      </body>
    </html>
  );
}