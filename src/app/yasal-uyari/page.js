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
          <a href="/" className="text-gray-700 hover:text-red-600 font-medium transition">Anasayfa</a>
          <a href="/kvkk" className="text-gray-700 hover:text-red-600 font-medium transition">KVKK</a>
          <a href="/yasal-uyari" className="text-gray-700 hover:text-red-600 font-medium transition">Yasal Uyarı</a>
        </div>
      </div>
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

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
              <li>Videoda yer ve zaman bilgisi belirtin.</li>
              <li>
                WhatsApp hattımıza gönderin:
                <span className="text-white bg-green-500 px-2 py-1 rounded font-semibold ml-2">
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
                <span className="text-white font-semibold">WhatsApp Bildirim Gönder</span>
              </a>
            </div>
          </section>

          <footer className="bg-gray-100 border-t pt-6 text-sm text-gray-600 text-center mt-16">
            <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
            <div className="space-x-4 mt-2">
              <a href="/kvkk" className="hover:underline">KVKK</a>
              <a href="/yasal-uyari" className="hover:underline">Yasal Uyarı</a>
              <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" className="hover:underline">YouTube</a>
            </div>
            <p className="mt-2">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
          </footer>
        </div>
      </main>
    </>
  );
}