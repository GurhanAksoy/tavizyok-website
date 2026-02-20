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
        <title>TAVİZ YOK | Vatandaş Haberciliği & İhbar Platformu</title>
        <meta name="description" content="Haksızlığa sessiz kalmayın. İhbar videosu gönderin, vatandaş haberciliği yapın. Kimliğiniz tamamen gizli kalır." />

        {/* Open Graph — WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tavizyok.com/" />
        <meta property="og:site_name" content="TAVİZ YOK" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:title" content="TAVİZ YOK | Vatandaş Haberciliği & İhbar Platformu" />
        <meta property="og:description" content="Haksızlığa sessiz kalmayın. İhbar videosu gönderin, vatandaş haberciliği yapın. Kimliğiniz tamamen gizli kalır." />
        <meta property="og:image" content="https://tavizyok.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TAVİZ YOK - Vatandaş Haberciliği & İhbar Platformu" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tavizyok.com/" />
        <meta name="twitter:title" content="TAVİZ YOK | Vatandaş Haberciliği & İhbar Platformu" />
        <meta name="twitter:description" content="Haksızlığa sessiz kalmayın. İhbar videosu gönderin, vatandaş haberciliği yapın. Kimliğiniz tamamen gizli kalır." />
        <meta name="twitter:image" content="https://tavizyok.com/og-image.png" />

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
        <Footer />
      </body>
    </html>
  );
}
