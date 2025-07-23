'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Logo + Başlık */}
        <header className="flex flex-col items-center text-center mb-12">
          <Image src="/logo.png" alt="Taviz Yok Logo" width={100} height={100} />
          <h1 className="text-4xl font-bold mt-4 tracking-tight">TAVİZ YOK</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-xl">
            Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
          </p>
        </header>

        {/* Platform Nedir */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Platform Nedir?</h2>
          <p className="text-gray-700 leading-relaxed">
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </section>

        {/* Nasıl Bildirim Gönderilir */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition"
          >
            📲 WhatsApp Bildirim Gönder
          </a>
        </section>

        {/* Kurallar ve Şartlar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kurallar ve Şartlar</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
            <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
            <li>
              Gönderim yaparak{' '}
              <a
                href="https://tavizyok.com"
                className="underline text-red-600 hover:text-red-500"
              >
                www.tavizyok.com
              </a>{' '}
              'daki şartları kabul etmiş sayılırsınız.
            </li>
            <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 text-sm text-gray-600 text-center">
          <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
          <p>© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </main>
  );
}
