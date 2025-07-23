'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="flex items-center space-x-4 mb-12">
          <Image src="/logo.png" alt="Taviz Yok Logo" width={60} height={60} />
          <h1 className="text-4xl font-extrabold tracking-tight text-white">TAVİZ YOK</h1>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
          </h2>
          <p className="text-gray-300 text-lg">
            Türkiye Cumhuriyeti vatandaşlarının yanındayız. Devletin ilgili kurumlarına destek sunuyoruz.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-2">📌 Platform Nedir?</h3>
          <p className="text-gray-400">
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları, kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">📤 Nasıl Bildirim Gönderilir?</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
            <li>WhatsApp hattımıza gönderin: <strong className="text-white">0 530 406 66 86</strong></li>
          </ul>
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            📲 WhatsApp Bildirim Gönder
          </a>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">📎 Kurallar ve Şartlar</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
            <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
            <li>
              Gönderim yaparak{' '}
              <a href="https://tavizyok.com" className="underline text-red-500 hover:text-red-400">
                www.tavizyok.com
              </a>{' '}
              'daki şartları kabul etmiş sayılırsınız.
            </li>
            <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
          </ul>
        </section>

        <footer className="text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
          <p>© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </main>
  );
}
