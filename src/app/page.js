'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 pt-20 pb-10">
        <Image
          src="/logo.png"
          alt="TAVİZ YOK Logo"
          width={180}
          height={180}
          className="mb-6"
        />
        <h1 className="text-2xl md:text-3xl font-semibold max-w-2xl leading-relaxed">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgeleyin, bize gönderin. Biz de ilgili kuruma iletelim ve kamuoyuyla paylaşalım.
        </h1>
        <a
          href="#bildirim"
          className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
        >
          Bildirim Gönder
        </a>
      </section>

      {/* Bildirim Section */}
      <section id="bildirim" className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Nasıl Bildirim Gönderilir?</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
          <li>Videoda yer ve zaman bilgisi belirtin.</li>
          <li>WhatsApp hattımıza gönderin: <span className="font-semibold">0 530 406 66 86</span></li>
        </ul>
        <div className="mt-6 text-center">
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow transition"
          >
            WhatsApp Bildirim Gönder
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 mt-16 py-6 text-center text-sm text-gray-600">
        <div className="mb-2">
          WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com
        </div>
        <div className="space-x-4">
          <Link href="/kvkk" className="text-red-600 hover:underline">KVKK</Link>
          <Link href="/yasal-uyari" className="text-red-600 hover:underline">Yasal Uyarı</Link>
          <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube</a>
        </div>
        <div className="mt-2">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</div>
      </footer>
    </div>
  );
}
