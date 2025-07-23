
&#39;use client&#39;;

import Image from &#39;next/image&#39;;

export default function Home() {
  return (
    <main className=&quot;min-h-screen bg-white text-gray-900&quot;>
      <div className=&quot;max-w-3xl mx-auto p-6&quot;>
        <header className=&quot;flex items-center space-x-4 mb-8&quot;>
          <Image src=&quot;/logo.png&quot; alt=&quot;Taviz Yok Logo&quot; width={60} height={60} />
          <h1 className=&quot;text-3xl font-extrabold&quot;>TAVİZ YOK</h1>
        </header>

        <section className=&quot;mb-10&quot;>
          <h2 className=&quot;text-xl font-semibold mb-2&quot;>
            Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
          </h2>
          <p className=&quot;text-gray-700&quot;>
            Türkiye Cumhuriyeti vatandaşlarının yanındayız. Devletin ilgili kurumlarına destek sunuyoruz.
          </p>
        </section>

        <section className=&quot;mb-10&quot;>
          <h3 className=&quot;text-lg font-bold mb-2&quot;>Platform Nedir?</h3>
          <p className=&quot;text-gray-700&quot;>
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları, kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </section>

        <section className=&quot;mb-10&quot;>
          <h3 className=&quot;text-lg font-bold mb-2&quot;>Nasıl Bildirim Gönderilir?</h3>
          <ul className=&quot;list-disc list-inside text-gray-700 space-y-1&quot;>
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>
          <a href=&quot;https://wa.me/905304066686&quot; target=&quot;_blank&quot; className=&quot;inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition&quot;>
            WhatsApp Bildirim Gönder
          </a>
        </section>

        <section className=&quot;mb-10&quot;>
          <h3 className=&quot;text-lg font-bold mb-2&quot;>Kurallar ve Şartlar</h3>
          <ul className=&quot;list-disc list-inside text-gray-700 space-y-1&quot;>
            <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
            <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
            <li>Gönderim yaparak <a href=&quot;https://tavizyok.com&quot; className=&quot;underline text-red-600&quot;>www.tavizyok.com</a>&#39;daki şartları kabul etmiş sayılırsınız.</li>
            <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
          </ul>
        </section>

        <footer className=&quot;text-sm text-gray-600 border-t pt-4&quot;>
          <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
          <p>© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </main>
  );
}
