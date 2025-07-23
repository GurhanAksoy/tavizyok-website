
'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
        <Image src="/logo.png" alt="TAVİZ YOK Logo" width={200} height={200} className="mb-6" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgeleyin, bize gönderin. Biz de ilgili kuruma iletelim ve kamuoyuyla paylaşalım.
        </h1>
        <a
          href="https://wa.me/905304066686"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300"
        >
          WhatsApp Bildirim Gönder
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-left">
          <h2 className="font-bold text-lg mb-2">Nasıl Bildirim Gönderilir?</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
            <li>Videoda yer ve zaman bilgisi belirtin.</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-left">
          <h2 className="font-bold text-lg mb-2">Gönderiler Nereye Gider?</h2>
          <p className="text-sm text-gray-700">
            Trafikse Trafik Başkanlığı’na, asayişse Emniyet’e, sağlıkla ilgiliyse Sağlık Bakanlığı’na ya da yetkili kurumlara iletilir.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-left">
          <h2 className="font-bold text-lg mb-2">Gizlilik ve Sorumluluk</h2>
          <p className="text-sm text-gray-700">
            TAVİZ YOK kullanıcıdan kişisel bilgi istemez. Gönderilen içeriklerden kullanıcı sorumludur. Platform yalnızca aracıdır.
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 text-sm text-center py-6">
        <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
        <div className="mt-2 space-x-4">
          <Link href="/kvkk" className="hover:underline text-red-400">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:underline text-red-400">Yasal Uyarı</Link>
          <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">YouTube</a>
        </div>
        <p className="mt-2 text-xs">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
