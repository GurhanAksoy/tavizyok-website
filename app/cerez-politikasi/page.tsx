import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Cerez Politikasi - Taviz Yok",
  description: "Cerez kullanimi ve tercihleri"
}

export default function CerezPage() {
  const cookieTypes = [
    { icon: Settings, title: "Zorunlu Cerezler", description: "Platformun temel islevleri icin gerekli cerezler" },
    { icon: BarChart3, title: "Performans Cerezleri", description: "Site performansini olcmek icin kullanilan cerezler" },
    { icon: Cookie, title: "Analitik Cerezler", description: "Kullanici davranislarini anlamak icin cerezler" }
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
            CEREZ POLITIKASI
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Taviz Yok web sitesi, kullanici deneyimini iyilestirmek, guvenli oturum yonetimini saglamak ve sistem performansini artirmak amaciyla cerezlerden yararlanir.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {cookieTypes.map((type, idx) => {
              const IconComponent = type.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-lacivert-900 mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              Cerezler araciligiyla kisisel veri niteliginde bilgiler izinsiz olarak toplanmaz. Kullanicilar diledikleri zaman tarayici ayarlarindan cerez tercihlerini degistirebilir.
            </p>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Cerez Tercihleriniz</h2>
            <p className="leading-relaxed mb-6">
              Tarayicinizin ayarlar bolumunden cerez tercihlerinizi yonetebilir, zorunlu olmayan cerezleri devre disi birakabilirsiniz.
            </p>
            <p className="text-sm text-gray-300">
              Not: Zorunlu cerezlerin devre disi birakilmasi platformun duzgun calismasini engelleyebilir.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
