'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
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
          <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition">Anasayfa</Link>
          <Link href="/kvkk" className="text-gray-700 hover:text-red-600 font-medium transition">KVKK</Link>
          <Link href="/yasal-uyari" className="text-gray-700 hover:text-red-600 font-medium transition">Yasal Uyarı</Link>
        </div>
      </div>
    </nav>
  );
}


export default function YasalUyari() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Yasal Uyarı ve Sorumluluk Reddi</h1>
        <p className="mb-4">
          TAVİZ YOK, yalnızca bir dijital iletişim ve bilgilendirme platformudur. Platform aracılığıyla iletilen içerikler,
          kullanıcıların kendi rızasıyla paylaştığı bilgilerdir. Gönderilen içeriklerin doğruluğu, güncelliği ve yasal uygunluğu tamamen kullanıcı sorumluluğundadır.
        </p>
        <p className="mb-4">
          TAVİZ YOK, iftira, hakaret, özel hayatın gizliliğini ihlal eden, manipülatif veya kurgu içeriklerden sorumlu tutulamaz.
          İçerikler ön incelemeye tabi tutulabilir, ancak platform tüm içerikleri denetlemekle yükümlü değildir.
        </p>
        <p className="mb-4">
          TAVİZ YOK yalnızca kamu yararını ilgilendiren içerikleri; ilgili kamu kurumlarına ve sosyal medya platformlarında kamuoyuna açık şekilde iletir.
        </p>
        <p className="mb-4">
          Kullanıcı, içerik gönderimiyle birlikte bu koşulları önceden okuduğunu, anladığını ve kabul ettiğini taahhüt eder.
        </p>
        <p>
          Gönderilen video ve içeriklerin tüm yayın, iletim, çoğaltma ve dağıtım hakkı TAVİZ YOK platformuna aittir. Kullanıcı bu içerikleri daha sonra farklı bir
          platformda paylaşmak, silmek veya geri çekmek hakkına tek başına sahip değildir. İçerikler, TAVİZ YOK logosu veya işaretleriyle yayımlanır.
        </p>
      </main>
    </>
  );
}