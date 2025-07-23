import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Hero */}
      <header className="w-full flex items-center justify-between p-4 border-b shadow-md sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="TAVİZ YOK" width={50} height={50} priority />
          <h1 className="text-2xl font-bold tracking-tight">TAVİZ YOK</h1>
        </div>
      </header>

      {/* Giriş */}
      <section className="w-full max-w-3xl p-6 text-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.</h2>
        <p className="text-lg text-gray-700">
          Türkiye Cumhuriyeti vatandaşlarının yanındayız. Devletin ilgili kurumlarına destek sunuyoruz.
        </p>
      </section>

      {/* Platform Nedir */}
      <section className="w-full max-w-3xl p-6 bg-gray-100 rounded-xl my-6 shadow">
        <h3 className="text-2xl font-semibold mb-3">Platform Nedir?</h3>
        <p className="text-gray-800">
          TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları,
          kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
        </p>
      </section>

      {/* Bildirim Gönderme */}
      <section className="w-full max-w-3xl p-6 bg-white rounded-xl my-6 border">
        <h3 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
          <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
          <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
          <li>WhatsApp hattımıza gönderin: <span className="font-semibold">0 530 406 66 86</span></li>
        </ul>
        <a
          href="https://wa.me/905304066686"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg text-lg shadow hover:bg-green-700 transition"
        >
          WhatsApp Bildirim Gönder
        </a>
      </section>

      {/* Kurallar */}
      <section className="w-full max-w-3xl p-6 bg-gray-50 rounded-xl my-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">Kurallar ve Şartlar</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
          <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
          <li>Gönderim yaparak <a href="https://www.tavizyok.com" className="underline text-blue-600">www.tavizyok.com</a>&apos;daki şartları kabul etmiş sayılırsınız.</li>
          <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-sm text-gray-500 py-6 border-t mt-10">
        <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
        <p>© {new Date().getFullYear()} TAVİZ YOK. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}