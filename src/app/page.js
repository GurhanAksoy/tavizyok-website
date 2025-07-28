'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300 text-gray-900 font-sans">
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
    </main>
  );
}
