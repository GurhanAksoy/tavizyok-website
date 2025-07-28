import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TAVİZ YOK',
  description:
    'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Open Graph, favicon, vs. burada */}
      </head>
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Navbar />
        <main className="pt-24 px-4 max-w-6xl mx-auto">{children}</main>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
