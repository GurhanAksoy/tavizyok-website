'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-bej text-gray-900 font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
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
          📲 <span className="text-white">WhatsApp Bildirim Gönder</span>
        </a>
      </div>

      {/* Merak Ettikleriniz Bölümü */}
      <div className="px-6 md:px-12 py-12">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-8">Merak Ettikleriniz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soru kutuları */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Hangi videolar gönderilebilir?</h3>
            <p className="text-sm text-gray-700">
              Hukuka, insan haklarına ve kamu vicdanına aykırı olayları içeren; iftira, hakaret ve özel hayat ihlali barındırmayan tüm videolar gönderilebilir.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Gönderdiğim video ne işlem görür?</h3>
            <p className="text-sm text-gray-700">
              Videonuz incelenir, uygun bulunursa ilgili kuruma iletilir. Sosyal medyada yayınlanabilmesi için abone olmanız gerekir.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Kişisel bilgilerim güvende mi?</h3>
            <p className="text-sm text-gray-700">
              Evet. Platformumuz kişisel bilgilerinizi talep etmez ve paylaşmaz. KVKK kapsamında gizliliğiniz korunur.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Kabul edilmeyen içerikler nelerdir?</h3>
            <p className="text-sm text-gray-700">
              - Yargı süreci devam eden konular<br />
              - İftira ve hakaret içeren videolar<br />
              - 30 saniyeyi aşan içerikler<br />
              - Netlik veya bağlam içermeyen kayıtlar
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Hangi kurumlara iletiliyor?</h3>
            <p className="text-sm text-gray-700">
              İçeriğe göre: Trafik Başkanlığı, Emniyet Müdürlüğü, Sağlık Bakanlığı gibi ilgili kamu kurumlarına.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Ad-soyad belirtmek zorunda mıyım?</h3>
            <p className="text-sm text-gray-700">
              Hayır. Kimlik bilgisi paylaşmak zorunda değilsiniz. Tercihe bağlıdır.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left md:col-span-2 md:w-1/2 md:mx-auto">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Bildirim sonrası bilgi alabilir miyim?</h3>
            <p className="text-sm text-gray-700">
              Evet. Süreçle ilgili bilgilendirme yapılır.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
