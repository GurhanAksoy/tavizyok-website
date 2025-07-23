'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Logo */}
        <header className="flex flex-col items-center text-center mb-12">
          <Image src="/logo.png" alt="Taviz Yok Logo" width={200} height={200} />
          <p className="mt-2 text-lg text-gray-600 max-w-xl">
            Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
          </p>
        </header>

        {/* Platform Nedir */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">TAVİZ YOK Platformu Nedir?</h2>
          <p className="text-gray-700 leading-relaxed">
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları kısa videolarla iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </section>

        {/* Bildirim Nasıl Gönderilir */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bildirim Nasıl Gönderilir?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi mutlaka belirtilmelidir! (sesli ya da yazılı olabilir).</li>
            <li>
  WhatsApp hattımıza gönderin:{' '}
  <span className="text-white bg-green-500 px-2 py-1 rounded font-semibold">
    0 530 406 66 86
  </span>
</li>

          </ul>

          {/* Modern WhatsApp Butonu */}
          <div className="mt-6">
            <a
  href="https://wa.me/905304066686"
  target="_blank"
  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339-6.2 217.1-31.8 123.2 10.1 58.7 40.5 19.8 108.5 21.3 181.5c1.1 54.8 20.1 105.5 53.2 144.5L49.1 470.6c-3.5 13.5 9.2 25.2 22.5 20.5l123.6-45.2c35.2 12.6 73.8 15.4 111.3 6.5 99.2-24.2 163.8-121.7 145.2-221.3-5.8-30.2-19.7-57.8-38.8-78.4zM224 439.7c-30.9.1-61.2-7.5-88.4-22L98.2 429l18.1-65.5c-20.5-27.5-32.5-61.4-33.1-96.3-.9-83.3 66.6-151.4 149.9-152.3s151.4 66.6 152.3 149.9c.9 83.3-66.6 151.4-149.9 152.3z" />
  </svg>
  <span className="text-white font-semibold">WhatsApp Bildirim Gönder</span>
</a>

          </div>
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
