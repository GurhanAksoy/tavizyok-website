import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white text-black">
      {/* Hero Section */}
      <section className="w-full text-center py-12">
        <Image
          src="/logo.png"
          alt="TAVİZ YOK logosu"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-4xl font-bold mt-6">TAVİZ YOK</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin pratik ve güvenli yolu.
        </p>
      </section>

      {/* Platform Nedir */}
      <section className="w-full max-w-3xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Platform Nedir?</h2>
        <p className="text-lg">
          TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları, kısa videolarla bize iletebildiği
          tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
        </p>
      </section>

      {/* Nasıl Bildirim Gönderilir */}
      <section className="w-full max-w-3xl px-4 py-8 bg-gray-50 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
          <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
          <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
        </ol>
      </section>

      {/* Kurallar */}
      <section className="w-full max-w-3xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Kurallar ve Şartlar</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
          <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
          <li>Gönderim yaparak <a href="https://www.tavizyok.com" className="underline">www.tavizyok.com</a>&apos;daki şartları kabul etmiş sayılırsınız.</li>
          <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-sm text-gray-500">
        <p>📞 WhatsApp: 0 530 406 66 86 | 📧 tavizyokplatformu@gmail.com</p>
        <p>© {new Date().getFullYear()} TAVİZ YOK. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  )
}