'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import logo from '@/public/logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-16 pb-10 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="TAVİZ YOK Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgele, bize gönder. Biz de ilgili kuruma iletelim ve kamuoyuyla paylaşalım.
        </h1>

        <div className="my-8 border-t border-gray-300" />

        <section className="text-left">
          <h2 className="text-lg font-semibold mb-2">Nasıl Bildirim Gönderilir?</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
            <li>Videoda yer ve zaman bilgisi belirtin.</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>

          <div className="flex justify-center">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
            >
              WhatsApp Bildirim Gönder
            </a>
          </div>
        </section>

        <div className="my-10 border-t border-gray-300" />

        <footer className="text-sm text-gray-600 text-center">
          <p className="mb-1">
            WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com
          </p>
          <div className="flex justify-center gap-4 mb-2">
            <Link href="/kvkk" className="text-red-600 hover:underline">KVKK</Link>
            <Link href="/yasal-uyari" className="text-red-600 hover:underline">Yasal Uyarı</Link>
            <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" className="text-red-600 hover:underline">YouTube</a>
          </div>
          <p className="text-gray-500">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </main>
    </div>
  );
}