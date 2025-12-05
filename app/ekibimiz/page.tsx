import Link from "next/link"
import { ArrowLeft, Users, Shield, Target, Zap, Heart } from "lucide-react"

export const metadata = {
  title: "Ekibimiz - Taviz Yok",
  description: "Kamu hizmetlerinde modern cozumler gelistiren ekibimiz"
}

export default function EkibimizPage() {
  const principles = [
    { icon: Shield, title: "Dogruluk", description: "Her surecte dogru ve guvenilir bilgi" },
    { icon: Target, title: "Seffaflik", description: "Acik ve izlenebilir isleyis" },
    { icon: Heart, title: "Kamu Yarari", description: "Toplum cikarini on planda tutmak" },
    { icon: Zap, title: "Sadelik", description: "Kullanimi kolay ve anlasilir sistem" }
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
            EKIBIMIZ
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Taviz Yok, kamu hizmetlerinde hiz, duzen ve seffaflik saglayan modern bir dijital sistem gelistirme hedefiyle ortaya cikmis bir platformdur.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gelisim surecinde ihtiyac duyulan tum tasarim, planlama ve yazilim calismalari tek bir merkezden yurutulmustur. Platformun temel dayanagi yalinlik, uygulanabilirlik ve Turkiye'nin ihtiyaclarina uygun bir cozum uretme anlayisidir.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Bu yaklasim dogrultusunda Taviz Yok, sade ama etkili bir mimari ile tasarlanmis ve her kurumun kolaylikla kullanabilecegi bir yapiya kavusturulmustur.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold text-lacivert-900 mb-8 text-center">Calisma Ilkelerimiz</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, idx) => {
                const IconComponent = principle.icon
                return (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-lacivert-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 text-white rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold">
              Cozum odaklilik ilkesiyle hareket ediyoruz
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
