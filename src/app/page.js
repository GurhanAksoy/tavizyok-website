'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300 text-gray-900 font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
        <Image src="/logo.png" alt="TAVİZ YOK Logo" width={250} height={250} className="mb-6" />

        <div className="max-w-2xl mx-auto space-y-2 leading-relaxed">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Hukuksuzluğa, haksızlığa, insan haklarına ve
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            kamu vicdanına aykırı her durumu
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            videoyla belgeleyin, bize gönderin.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Biz de ilgili kuruma iletelim.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Kamuoyuyla paylaşalım.
          </p>
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

      {/* ✅ Merak Ettikleriniz Bölümü */}
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
              Videonuz ekibimiz tarafından incelenir. Uygun görülmesi halinde ilgili kuruma iletilir. Sosyal medya hesaplarımızda yayınlanabilmesi için platformumuza abone olmanız gereklidir. Aksi durumda yalnızca ilgili makama yönlendirilir.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Kişisel bilgilerim güvende mi?</h3>
            <p className="text-sm text-gray-700">
              Evet. Platformumuz kişisel bilgilerinizi talep etmez ve hiçbir şekilde paylaşmaz. KVKK kapsamında gizliliğiniz tamamen korunur.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Kabul edilmeyen içerikler nelerdir?</h3>
            <p className="text-sm text-gray-700">
              - Yargı süreci devam eden konular<br />
              - İftira ve hakaret içeren videolar<br />
              - 30 saniyeyi aşan içerikler<br />
              - Yer/zaman bilgisi olmayan veya görüntü kalitesi bozuk kayıtlar
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Hangi kurumlara iletiliyor?</h3>
            <p className="text-sm text-gray-700">
              İçeriğin konusuna göre yetkili kuruma iletilir: Trafik → Trafik Başkanlığı, Asayiş → Emniyet, Sağlık → Sağlık Bakanlığı vb.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Ad-soyad belirtmek zorunda mıyım?</h3>
            <p className="text-sm text-gray-700">
              Hayır. Kimlik bilgisi paylaşmak zorunda değilsiniz. Bu tamamen sizin tercihinizdir.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left md:col-span-2 md:w-1/2 md:mx-auto">
            <h3 className="font-semibold mb-2 text-lg text-black text-center">Bildirim sonrası bilgi alabiliyor muyum?</h3>
            <p className="text-sm text-gray-700">
              Evet. Paylaşıma uygun görülen içeriklerle ilgili süreç hakkında size bilgilendirme yapılır.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 text-sm text-center py-6">
        <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
        <div className="mt-2 space-x-4">
          <Link href="/kvkk" className="hover:underline text-red-400">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:underline text-red-400">Yasal Uyarı</Link>
          <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">YouTube</a>
          <a href="https://www.instagram.com/tavizyokplatformu" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">Instagram</a>
        </div>
        <p className="mt-2 text-xs">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
