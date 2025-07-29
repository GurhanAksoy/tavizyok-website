'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-gray-900 font-sans">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
        <Image
          src="/logo.png"
          alt="TAVİZ YOK Logo"
          width={250}
          height={250}
          className="mb-6"
        />

        <div className="text-center max-w-xl mx-auto space-y-2 leading-loose">
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            Hukuka, insan haklarına ve kamu vicdanına aykırı;
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            haksız veya hukuksuz her durumu
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            videoyla belgeleyin, bize gönderin.
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            İlgili kuruma iletelim, kamuoyunu
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">
            bilgilendirelim.
          </p>
        </div>

        <a
          href="https://wa.me/905304066686"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:bg-[#1ebe5d] transition"
        >
          📲 <span className="ml-2">WhatsApp Bildirim Gönder</span>
        </a>
      </div>

      {/* Merak Ettikleriniz */}
      <div className="px-6 md:px-12 py-12">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-8">
          Merak Ettikleriniz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Hangi videolar gönderilebilir?</h3>
            <p className="text-sm text-gray-700">
              Hukuka, insan haklarına ve kamu vicdanına aykırı olayları içeren; iftira, hakaret ve özel hayat ihlali barındırmayan tüm videolar gönderilebilir.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Gönderdiğim video ne işlem görür?</h3>
            <p className="text-sm text-gray-700">
              Videonuz incelendikten sonra, içeriğin kamu yararı taşıması hâlinde ilgili kuruma iletilir. Sosyal medya için onaylı içerikler ayrıca paylaşılır.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Kişisel bilgilerim güvende mi?</h3>
            <p className="text-sm text-gray-700">
              Platform, kişisel verilerinizi talep etmez. Gönüllü olarak paylaşılan veriler yalnızca KVKK ve ilgili mevzuata uygun şekilde kullanılır.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Hangi kurumlara iletiliyor?</h3>
            <p className="text-sm text-gray-700">
              İçeriklerin niteliğine göre Trafik Denetleme, Emniyet Müdürlüğü, Sağlık Bakanlığı gibi ilgili resmi kurumlara iletilir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
