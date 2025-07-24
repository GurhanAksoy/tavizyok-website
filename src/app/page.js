'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('/background-city.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <Image src="/logo.png" alt="TAVİZ YOK Logo" width={250} height={250} className="mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl text-white">
            Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgeleyin. Biz de ilgili kuruma iletelim ve kamuoyuyla paylaşalım.
          </h1>
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 mt-6 bg-[#25D366] text-white font-semibold rounded-full shadow-md hover:bg-[#1ebe5d] transition duration-300 animate-bounce"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48a12.07 12.07 0 00-17.04 0A11.97 11.97 0 002 15.52l-1 4.37a1 1 0 001.2 1.2l4.37-1A11.97 11.97 0 0020.52 3.48zm-6.12 13.44c-2.47 0-4.8-.8-6.72-2.28l-.48-.36-2.64.72.72-2.64-.36-.48A9.55 9.55 0 0112 4.5c5.25 0 9.5 4.25 9.5 9.5 0 2.53-1.02 4.92-2.88 6.72a9.44 9.44 0 01-6.22 2.2h-.5zm2.5-5.92c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.66.15s-.76.96-.94 1.16c-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.48-1.8-1.65-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52s-.66-1.6-.9-2.2c-.23-.57-.47-.5-.66-.5h-.58c-.2 0-.52.07-.79.37a3.26 3.26 0 00-1.12 2.5c0 1.48 1.07 2.92 1.22 3.12.15.2 2.1 3.2 5.07 4.48 3 .96 3.65.77 4.3.72.65-.05 2.1-.85 2.4-1.67.3-.81.3-1.52.22-1.67-.07-.15-.27-.22-.57-.37z" />
            </svg>
            WhatsApp Bildirim Gönder
          </a>
        </div>
      </section>

      {/* Social Links */}
      <section className="w-full bg-white py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Bizi Takip Edin</h2>
        <p className="mb-6 text-gray-600">Gelişmeleri kaçırmamak için sosyal medya kanallarımıza katılın.</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://www.instagram.com/tavizyokplatformu" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition-colors">
            <FaYoutube />
          </a>
        </div>
      </section>

      {/* Video Promo Section */}
      <section className="bg-gray-100 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">TAVİZ YOK Nedir?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          TAVİZ YOK; hukuka, kamu vicdanına ve insan haklarına aykırılıklar karşısında sessiz kalmayanların platformudur. Tanıtım videomuzu izleyin ve siz de katkı sağlayın.
        </p>
        <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/your_video_id"
            title="TAVİZ YOK Tanıtım Videosu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Info Boxes */}
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
