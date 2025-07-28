import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TAVİZ YOK',
  description:
    'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim ve kamuoyunu bilgilendirelim.',
  keywords: [
    'TAVİZ YOK',
    'video ihbar',
    'hukuksuzluk bildirimi',
    'kamu vicdanı',
    'insan hakları',
    'ihbar platformu',
    'Türkiye ihbar hattı',
    'trafik ihlali',
    'video gönder',
    'şikayet',
    'kamu yararı',
  ],
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
      <body className={`${inter.className} antialiased font-sans bg-white text-black`}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-gray-300 text-sm text-center py-6 mt-10">
          <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
          <div className="mt-2 space-x-4">
            <Link href="/kvkk" className="hover:underline text-red-400">KVKK</Link>
            <Link href="/yasal-uyari" className="hover:underline text-red-400">Yasal Uyarı</Link>
            <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">YouTube</a>
            <a href="https://www.instagram.com/tavizyokplatformu" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">Instagram</a>
          </div>
          <p className="mt-2 text-xs">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </body>
    </html>
  );
}
