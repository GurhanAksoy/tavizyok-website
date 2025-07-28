'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 text-gray-900 font-sans">
      <Navbar />

      {/* 🇹🇷 Bayraklar */}
      <div className="flex justify-center items-center mt-6 space-x-10">
        <Image
          src="/bayrak-turkiye.png"
          alt="Türk Bayrağı Sol"
          width={80}
          height={80}
          className="flag-wave"
        />
        <Image
          src="/logo.png"
          alt="TAVİZ YOK Logo"
          width={200}
          height={200}
          className="flag-wave"
        />
        <Image
          src="/bayrak-turkiye.png"
          alt="Türk Bayrağı Sağ"
          width={80}
          height={80}
          className="flag-wave"
        />
      </div>

      {/* Ana mesaj */}
      <div className="text-center max-w-xl mx-auto space-y-2 leading-loose mt-10 px-4">
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

        <a
          href="https://wa.me/905304066686"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:bg-[#1ebe5d] transition"
        >
          📲 <span className="ml-2">WhatsApp Bildirim Gönder</span>
        </a>
      </div>

      {/* ✅ Merak Ettikleriniz */}
      <div className="px-6 md:px-12 py-16">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-10">
          Merak Ettikleriniz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Hangi videolar gönderilebilir?',
              text: 'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları içeren; iftira, hakaret ve özel hayat ihlali barındırmayan tüm videolar gönderilebilir.',
            },
            {
              title: 'Gönderdiğim video ne işlem görür?',
              text: 'Videonuz ekibimiz tarafından incelenir. Uygun görülürse ilgili kuruma iletilir. Sosyal medya paylaşımı için abone olmanız gerekir.',
            },
            {
              title: 'Kişisel bilgilerim güvende mi?',
              text: 'Evet. Platform kişisel verilerinizi talep etmez ve paylaşmaz. KVKK kapsamında gizliliğiniz tamamen korunur.',
            },
            {
              title: 'Kabul edilmeyen içerikler nelerdir?',
              text: 'Yargı sürecindeki olaylar, iftira ve hakaret, 30 saniyeyi aşan, yer/zaman belirtmeyen veya görüntü kalitesi düşük videolar.',
            },
            {
              title: 'Hangi kurumlara iletiliyor?',
              text: 'İçeriğe göre ilgili kuruma: Trafik → Trafik Şube, Asayiş → Emniyet, Sağlık → Sağlık Bakanlığı vs.',
            },
            {
              title: 'Ad-soyad belirtmek zorunda mıyım?',
              text: 'Hayır, tamamen isteğe bağlıdır.',
            },
            {
              title: 'Bildirim sonrası bilgi alabiliyor muyum?',
              text: 'Evet. Uygun görülen içeriklerle ilgili bilgilendirme yapılır.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-xl shadow-md p-6 text-left ${
                i === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}
            >
              <h3 className="font-semibold mb-2 text-lg text-black text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
