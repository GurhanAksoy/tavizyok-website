import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Hakkimizda - Taviz Yok",
  description: "Turkiye'nin ulusal dijital bildirim ve hizmet yonetim platformu"
}

export default function HakkimizdaPage() {
  const features = [
    "Hizli ve dogru bildirim yonlendirmesi",
    "Otomatik konum tespiti",
    "Fotograf ve video destegi",
    "Birim bazli yetkilendirme",
    "Seffaf takip sistemi",
    "Modern ve yalin arayuz"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Ana Sayfaya Don</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lacivert-900 mb-6">
            HAKKIMIZDA
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Taviz Yok, Turkiye'de vatandaslarin kamu kurumlarina iletmek istedikleri sorunlarin hizli, dogru ve seffaf bir sekilde ilgili birimlere ulasmasini saglamak amaciyla gelistirilmis ulusal bir dijital bildirim ve hizmet yonetim platformudur.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ulkenin dort bir yaninda ayni anda yurutulen kamu hizmetlerinde, bildirimlerin dogru sekilde siniflandirilamamasi, gec yonlendirilmesi veya takibinin zorlasması zaman zaman aksamalara neden olabilmektedir. Taviz Yok, bu sureci duzenlemek, hizlandirmak ve daha verimli hale getirmek icin tasarlanmis modern ve yalin bir cozumdur.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Vatandaslar karsilastiklari bir durumu fotograf veya video ile kolayca bildirir, konum bilgisi otomatik olarak eklenir ve bildirim dogrudan ilgili birime iletilir. Zabita, Fen Isleri, Temizlik, Park ve Bahceler gibi birimler yalnizca kendi sorumluluk alanlarina giren bildirimleri gorur ve cozum surecini zaman kaybetmeden baslatabilir.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Boylece hem kurumlarin is yuku hafifler hem de vatandaslar sorunlarinin daha hizli sonuclandigini gorur. Taviz Yok, bir bildirim uygulamasindan ote, kamu hizmetlerinin daha duzenli, daha izlenebilir ve daha seffaf bir anlayisla yurutulmesini amaclayan bir donusum modelidir.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-lacivert-900 mb-6">Platform Ozellikleri</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Platform, basit ama etkili yapisiyla vatandas ile kurum arasindaki iletisimde guclu bir kopru kurar ve hizmet kalitesinin yukselmesine katki sunar.
            </p>

            <div className="bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 text-white rounded-2xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-bold">
                Turkiye'de hizli, cozum odakli ve seffaf hizmetten TAVIZ YOK
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
