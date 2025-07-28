'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative">
      <Navbar />

      {/* 🔴 Bayraklar */}
      <div className="absolute top-4 left-4 w-16 h-10 md:w-24 md:h-14 animate-wave z-10">
        <Image src="/bayrak-turkiye.png" alt="Türk Bayrağı Sol" fill className="object-contain" />
      </div>
      <div className="absolute top-4 right-4 w-16 h-10 md:w-24 md:h-14 animate-wave z-10">
        <Image src="/bayrak-turkiye.png" alt="Türk Bayrağı Sağ" fill className="object-contain" />
      </div>

      {/* Ana içerik */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <Image src="/logo.png" alt="TAVİZ YOK Logo" width={250} height={250} className="mb-6" />
        <div className="text-center max-w-xl mx-auto space-y-2 leading-loose">
          <p className="text-xl md:text-2xl font-medium text-gray-800">Hukuka, insan haklarına ve kamu vicdanına aykırı;</p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">haksız veya hukuksuz her durumu</p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">videoyla belgeleyin, bize gönderin.</p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">İlgili kuruma iletelim, kamuoyunu</p>
          <p className="text-xl md:text-2xl font-medium text-gray-800">bilgilendirelim.</p>
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

      {/* ✅ Merak Ettikleriniz */}
      <div className="px-6 md:px-12 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-8">Merak Ettikleriniz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Hangi videolar gönderilebilir?',
              content: 'Hukuka, insan haklarına ve kamu vicdanına aykırı olayları içeren; iftira, hakaret ve özel hayat ihlali barındırmayan tüm videolar gönderilebilir.',
            },
            {
              title: 'Gönderdiğim video ne işlem görür?',
              content:
                'Videonuz ekibimiz tarafından incelenir. Uygun görülmesi halinde ilgili kuruma iletilir. Sosyal medya yayınları için platformumuza abone olmanız gereklidir.',
            },
            {
              title: 'Kişisel bilgilerim güvende mi?',
              content:
                'Evet. Platformumuz kişisel bilgilerinizi talep etmez ve hiçbir şekilde paylaşmaz. KVKK kapsamında gizliliğiniz tamamen korunur.',
            },
            {
              title: 'Kabul edilmeyen içerikler nelerdir?',
              content:
                '- Yargı süreci devam eden konular\n- İftira ve hakaret içeren videolar\n- 30 saniyeyi aşan içerikler\n- Belirsiz, düşük kaliteli kayıtlar',
            },
            {
              title: 'Hangi kurumlara iletiliyor?',
              content:
                'İçeriğin konusuna göre yetkili kuruma iletilir: Trafik → Trafik Başkanlığı, Asayiş → Emniyet, Sağlık → Sağlık Bakanlığı vb.',
            },
            {
              title: 'Ad-soyad belirtmek zorunda mıyım?',
              content:
                'Hayır. Kimlik bilgisi paylaşmak zorunda değilsiniz. Bu tamamen sizin tercihinizdir.',
            },
            {
              title: 'Bildirim sonrası bilgi alabiliyor muyum?',
              content:
                'Evet. Paylaşıma uygun görülen içeriklerle ilgili süreç hakkında size bilgilendirme yapılır.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-left whitespace-pre-line">
              <h3 className="font-semibold mb-2 text-lg text-black text-center">{faq.title}</h3>
              <p className="text-sm text-gray-700">{faq.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
