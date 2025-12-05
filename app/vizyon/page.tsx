import Link from "next/link"
import { ArrowLeft, Target, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Vizyon & Misyon - Taviz Yok",
  description: "Turkiye genelinde modern hizmet anlayisi olusturma hedefimiz"
}

export default function VizyonPage() {
  const missions = [
    "Vatandaslarin karsilastigi sorunlari en hizli sekilde ilgili birime ulastirmak",
    "Kurumlarin saha sureclerini daha duzenli ve takip edilebilir hale getirmek",
    "Hizmet isleyisinde hiz, seffaflik ve guven duygusunu guclendirmek",
    "Teknolojiyi kamu hizmetlerinin merkezine konumlandirarak is sureclerini modern bir yapiya kavusturmak",
    "Turkiye genelinde ortak bir hizmet standardi olusturmak"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Ana Sayfaya Don</span>
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lacivert-900 mb-12 text-center">
            VIZYON & MISYON
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lacivert-900 mb-6">VIZYONUMUZ</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Turkiye'nin her ilinde ve her ilcesinde vatandaslarin sesinin duyuldugu, sorunlarin kaybolmadigi ve hizmet sureclerinin izlenebilir oldugu modern bir yonetim anlayisi olusturmaktir.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Taviz Yok, kamu kurumlarinin ihtiyac duydugu tek ve ortak dijital bildirim standardini olusturmayi ve ulusal olcekte yayginlasmayi hedefler.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-kirmizi-200">
              <div className="w-16 h-16 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lacivert-900 mb-6">MISYONUMUZ</h2>
              <div className="space-y-4">
                {missions.map((mission, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-kirmizi-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-kirmizi-600 font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lacivert-900 to-lacivert-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Taviz Yok, sade ve etkili yapisiyla hem vatandaslarin hem de kurumlarin isini kolaylastiran, 
              <span className="font-bold text-kirmizi-500"> surdurulebilir bir hizmet altyapisi</span> sunmayi amaclar.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
