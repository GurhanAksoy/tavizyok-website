'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section with background image */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/mutlu-toplum.png')" }}
      >
        {/* Daha hafif karartma */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <Image
            src="/logo.png"
            alt="TAVİZ YOK Logo"
            width={160}
            height={160}
            className="mb-6"
          />
          <h1 className="text-white text-3xl md:text-4xl font-bold max-w-2xl drop-shadow">
            Haksızlığa, hukuksuzluğa, vicdansızlığa sessiz kalma.
          </h1>
          <p className="text-gray-100 mt-4 max-w-md drop-shadow">
            Bu toplum için, çocuklarımız için, insanlık için... Sessiz kalmak, onaylamaktır.
          </p>
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-md hover:bg-[#1ebe5d] transition duration-300"
          >
            WhatsApp Bildirim Gönder
          </a>
        </div>
      </section>

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