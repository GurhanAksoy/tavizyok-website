// src/app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'TAVİZ YOK',
  description: 'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="shadow bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <Navbar />
          </div>
        </header>

        {/* Ana içerik */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-100 text-sm py-6">
          <div className="container mx-auto px-4 grid gap-2 md:flex md:justify-between md:items-center">
            <div>
              WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com
            </div>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="/kvkk" className="hover:underline text-gray-300">KVKK</a>
              <a href="/yasal-uyari" className="hover:underline text-gray-300">Yasal Uyarı</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Instagram</a>
            </div>
          </div>
          <div className="text-center text-xs mt-4 text-gray-500">
            © 2025 TAVİZ YOK. Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  );
}
