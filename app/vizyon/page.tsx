import Link from "next/link"
import { ArrowLeft, Target, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Vizyon & Misyon - Taviz Yok",
  description: "Türkiye genelinde modern hizmet anlayışı"
}

export default function VizyonPage() {
  const missions = [
    "Vatandaşların karşılaştığı sorunları en hızlı şekilde ilgili birime ulaştırmak",
    "Kurumların saha süreçlerini daha düzenli ve takip edilebilir hale getirmek",
    "Hizmet işleyişinde hız, şeffaflık ve güven duygusunu güçlendirmek",
    "Teknolojiyi kamu hizmetlerinin merkezine konumlandırarak iş süreçlerini modern bir yapıya kavuşturmak",
    "Türkiye genelinde ortak bir hizmet standardı oluşturmak"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Ana Sayfaya Dön</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lacivert-900 mb-6">
              VİZYON & MİSYON
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-lacivert-900 mb-6">VİZYONUMUZ</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Türkiye'nin her ilinde ve her ilçesinde vatandaşların sesinin duyulduğu, sorunların kaybolmadığı ve hizmet süreçlerinin izlenebilir olduğu modern bir yönetim anlayışı oluşturmaktır.
              </p>
              <div className="pt-6 border-t-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed font-medium">
                  Taviz Yok, kamu kurumlarının ihtiyaç duyduğu tek ve ortak dijital bildirim standardını oluşturmayı ve ulusal ölçekte yaygınlaşmayı hedefler.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-kirmizi-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-lacivert-900 mb-6">MİSYONUMUZ</h2>
              <div className="space-y-5">
                {missions.map((mission, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-kirmizi-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-kirmizi-600 font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lacivert-900 to-lacivert-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <p className="text-2xl md:text-3xl text-white leading-relaxed">
              Taviz Yok, sade ve etkili yapısıyla hem vatandaşların hem de kurumların işini kolaylaştıran, 
              <span className="font-bold text-kirmizi-500"> sürdürülebilir bir hizmet altyapısı</span> sunmayı amaçlar.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
