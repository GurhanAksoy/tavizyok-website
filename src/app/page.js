'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 bg-white text-black">
      <header className="w-full flex items-center justify-between border-b border-gray-300 pb-4">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="TAVİZ YOK Logo" width={60} height={60} />
          <h1 className="text-3xl font-bold tracking-tight">TAVİZ YOK</h1>
        </div>
      </header>

      <section className="text-center max-w-3xl mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Türkiye Cumhuriyeti vatandaşlarının yanındayız. Devletin ilgili kurumlarına destek sunuyoruz.
        </p>
      </section>

      <section className="mt-12 w-full max-w-4xl space-y-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Platform Nedir?</h3>
          <p>
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları, kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Nasıl Bildirim Gönderilir?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>
          <div className="mt-4">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              WhatsApp Bildirim Gönder
            </a>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Kurallar ve Şartlar</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
            <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
            <li>Gönderim yaparak <a href="https://tavizyok.com" className="underline text-red-600">www.tavizyok.com</a>'daki şartları kabul etmiş sayılırsınız.</li>
            <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
          </ul>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <div className="mb-2">
          📞 WhatsApp: 0 530 406 66 86 | ✉️ tavizyokplatformu@gmail.com
        </div>
        <div>© 2025 TAVİZ YOK. Tüm hakları saklıdır.</div>
      </footer>
    </main>
  );
}
