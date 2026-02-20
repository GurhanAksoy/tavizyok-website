import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>TAVİZ YOK</title>
        <link rel="icon" href="/tavizyok.ico" type="image/x-icon" />
        <link rel="canonical" href="https://tavizyok.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TAVİZ YOK Platformu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Fonts — page.js içinde yükleniyor, burada tekrar yüklemeye gerek yok */}

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
      {/* 
        - Inter font kaldırıldı: page.js kendi fontlarını (Playfair Display + DM Sans) yönetiyor
        - bg ve text rengi kaldırıldı: page.js dark tema kullanıyor, çakışmaması için temiz bırakıldı
        - Navbar ve Footer kaldırıldı: page.js kendi Navbar'ını içeriyor, Footer gerekirse page.js'e eklenir
      */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
