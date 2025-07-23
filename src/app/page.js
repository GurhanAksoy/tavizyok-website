'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <Image src="/logo.png" alt="TAVİZ YOK Logo" width={180} height={180} />
        <h1 className="text-2xl md:text-3xl font-semibold mt-8 max-w-2xl leading-relaxed">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgele, bize gönder. 
          Biz de ilgili kuruma iletelim ve kamuoyuyla paylaşalım.
        </h1>

        <div className="mt-12 bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-left">
          <h2 className="text-xl font-bold mb-4 text-center">Nasıl Bildirim Gönderilir?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
            <li>Videoda yer ve zaman bilgisi belirtin.</li>
            <li>WhatsApp hattımıza gönderin: <span className="font-bold">0 530 406 66 86</span></li>
          </ul>
          <div className="flex justify-center mt-6">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full shadow-md transition"
            >
              📩 WhatsApp Bildirim Gönder
            </a>
          </div>
        </div>

        <footer className="mt-16 text-sm text-gray-500">
          <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
          <div className="mt-2 flex gap-4 justify-center text-red-600 font-semibold">
            <Link href="/kvkk">KVKK</Link>
            <Link href="/yasal-uyari">Yasal Uyarı</Link>
            <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <p className="mt-2">&copy; 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  );
}