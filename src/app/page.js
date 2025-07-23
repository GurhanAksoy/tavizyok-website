'use client';

import { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">TAVİZ YOK</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition">Anasayfa</a>
          <a href="#kvkk" className="text-gray-700 hover:text-red-600 font-medium transition">KVKK</a>
          <a href="#yasal" className="text-gray-700 hover:text-red-600 font-medium transition">Yasal Uyarı</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-red-600 font-medium">Anasayfa</a>
          <a href="#kvkk" className="block text-gray-700 hover:text-red-600 font-medium">KVKK</a>
          <a href="#yasal" className="block text-gray-700 hover:text-red-600 font-medium">Yasal Uyarı</a>
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="flex flex-col items-center text-center mb-12 border-b pb-8">
            <Image src="/logo.png" alt="Taviz Yok Logo" width={200} height={200} className="shadow-md rounded-full" />
            <p className="mt-6 text-xl text-gray-700 max-w-2xl leading-relaxed">
              Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgele, bize gönder. Biz de ilgili kuruma iletelim ve kamuyla paylaşalım.
            </p>
          </header>

          <section className="mb-12" id="bildirim">
            <h2 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
              <li>Videoda yer ve zaman bilgisi belirtin.</li>
              <li>
                WhatsApp hattımıza gönderin:{' '}
                <span className="text-white bg-green-500 px-2 py-1 rounded font-semibold">
                  0 530 406 66 86
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/905304066686"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M380.9 97.1C339-6.2 217.1-31.8 123.2 10.1C58.7 40.5 19.8 108.5 21.3 181.5c1.1 54.8 20.1 105.5 53.2 144.5L49.1 470.6c-3.5 13.5 9.2 25.2 22.5 20.5l123.6-45.2c35.2 12.6 73.8 15.4 111.3 6.5c99.2-24.2 163.8-121.7 145.2-221.3c-5.8-30.2-19.7-57.8-38.8-78.4z" />
                </svg>
                <span className="text-white font-semibold">WhatsApp Bildirim Gönder</span>
              </a>
            </div>
          </section>

          <section className="mb-12" id="kvkk">
            <h2 className="text-2xl font-semibold mb-4">Kişisel Verilerin Korunması</h2>
            <p className="text-gray-700 leading-relaxed">
              TAVİZ YOK, kullanıcıdan ad, soyad, T.C. kimlik numarası veya iletişim bilgisi gibi kişisel verileri talep etmez. Ancak gönderilen videolarda yer alan kişi ve içerikler, kamusal bildirim ve kamu yararı amacıyla işlenebilir. Gönderilen içerik, sosyal medya ve resmi kurumlarla paylaşılabilir. Video gönderen kullanıcı, bu paylaşım hakkını TAVİZ YOK platformuna vermiş sayılır.
            </p>
          </section>

          <section className="mb-12" id="yasal">
            <h2 className="text-2xl font-semibold mb-4">Yasal Uyarı ve Sorumluluk Reddi</h2>
            <p className="text-gray-700 leading-relaxed">
              TAVİZ YOK, yalnızca bir aracı platformdur. Gönderilen içeriklerin doğruluğu ve hukuki sorumluluğu gönderene aittir. TAVİZ YOK, iftira, özel hayatın ihlali, sahte veya manipülatif içeriklerden sorumlu tutulamaz. Platform, kamu yararına içerikleri ilgili kurumlara iletir ve sosyal medyada yayımlar. İçerik gönderen kişi, bu koşulları peşinen kabul eder.
            </p>
          </section>

          <footer className="bg-gray-100 border-t pt-6 text-sm text-gray-600 text-center mt-16">
            <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
            <div className="space-x-4 mt-2">
              <a href="#kvkk" className="hover:underline">KVKK</a>
              <a href="#yasal" className="hover:underline">Yasal Uyarı</a>
            </div>
            <p className="mt-2">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
          </footer>
        </div>
      </main>
    </>
  );
}