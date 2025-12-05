import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Hakkımızda - Taviz Yok",
  description: "Türkiye'nin ulusal dijital bildirim platformu"
}

export default function HakkimizdaPage() {
  const features = [
    "Hızlı ve doğru bildirim yönlendirmesi",
    "Otomatik konum tespiti",
    "Fotoğraf ve video desteği",
    "Birim bazlı yetkilendirme",
    "Şeffaf takip sistemi",
    "Modern ve yalın arayüz"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Ana Sayfaya Dön</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lacivert-900 mb-6">
              HAKKIMIZDA
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <span className="font-bold text-lacivert-900">Taviz Yok</span>, Türkiye'de vatandaşların kamu kurumlarına iletmek istedikleri sorunların hızlı, doğru ve şeffaf bir şekilde ilgili birimlere ulaşmasını sağlamak amacıyla geliştirilmiş ulusal bir dijital bildirim ve hizmet yönetim platformudur.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Ülkenin dört bir yanında aynı anda yürütülen kamu hizmetlerinde, bildirimlerin doğru şekilde sınıflandırılamaması, geç yönlendirilmesi veya takibinin zorlaşması zaman zaman aksamalara neden olabilmektedir. Taviz Yok, bu süreci düzenlemek, hızlandırmak ve daha verimli hale getirmek için tasarlanmış modern ve yalın bir çözümdür.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 my-12 rounded-r-2xl shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                Vatandaşlar karşılaştıkları bir durumu fotoğraf veya video ile kolayca bildirir, konum bilgisi otomatik olarak eklenir ve bildirim doğrudan ilgili birime iletilir. <span className="font-semibold text-lacivert-900">Zabıta, Fen İşleri, Temizlik, Park ve Bahçeler</span> gibi birimler yalnızca kendi sorumluluk alanlarına giren bildirimleri görür ve çözüm sürecini zaman kaybetmeden başlatabilir.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Böylece hem kurumların iş yükü hafifler hem de vatandaşlar sorunlarının daha hızlı sonuçlandığını görür. Taviz Yok, bir bildirim uygulamasından öte, kamu hizmetlerinin daha düzenli, daha izlenebilir ve daha şeffaf bir anlayışla yürütülmesini amaçlayan bir dönüşüm modelidir.
            </p>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200 my-12">
              <h2 className="text-3xl md:text-4xl font-bold text-lacivert-900 mb-8 text-center">Platform Özellikleri</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Platform, basit ama etkili yapısıyla vatandaş ile kurum arasındaki iletişimde güçlü bir köprü kurar ve hizmet kalitesinin yükselmesine katkı sunar.
            </p>

            <div className="bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 text-white rounded-3xl p-12 text-center shadow-2xl my-12">
              <p className="text-2xl md:text-4xl font-bold leading-relaxed">
                Türkiye'de hızlı, çözüm odaklı ve şeffaf hizmetten TAVİZ YOK
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
