export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-6">TAVİZ YOK</h1>
      <p className="text-center text-lg max-w-2xl mx-auto mb-10">
        TAVİZ YOK; Trafik, Sağlık, Çevre, Gıda ve Kamu düzeni başta olmak üzere,
        hukuka, insan haklarına veya kamu vicdanına aykırı her durumu kısa videolarla
        bildirebildiğiniz tarafsız bir iletişim platformudur.
      </p>

      <div className="max-w-2xl mx-auto mb-12 bg-white shadow-md p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-semibold">Bildirim Gönder</h2>
        <p>
          Yaşadığınız aksaklıkları ya da hukuksuzlukları 30 saniyelik videolarla iletebilirsiniz.
          Yer ve zaman bilgisi mutlaka belirtilmelidir.
        </p>
        <input type="file" accept="video/*" className="w-full border p-2 rounded" />
        <input placeholder="Yer Bilgisi (örn: Ankara, Kızılay)" className="w-full border p-2 rounded" />
        <input placeholder="Zaman Bilgisi (örn: 22 Temmuz 2025, 14:30)" className="w-full border p-2 rounded" />
        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Gönder
        </button>
      </div>

      <section className="max-w-3xl mx-auto text-sm text-gray-600 space-y-4">
        <p>
          Gönderilen içerikler titizlikle incelenir, ilgili kurumlara iletilir ve kamuoyuna açık
          şekilde paylaşılır. İçeriklerin doğruluğu ve sorumluluğu gönderene aittir.
        </p>
        <p>
          TAVİZ YOK, resmî denetim ve yaptırım yetkisine sahip bir merci değildir. Bildirimleri
          ilgili kurumlarla paylaşan, tarafsız bir iletişim platformudur.
        </p>
        <p>
          Gönderim yaparak <a href=\"/yasal-sartlar\" className=\"text-blue-600 underline\">yasal şartları</a> kabul etmiş sayılırsınız.
        </p>
      </section>
    </main>
  );
}
