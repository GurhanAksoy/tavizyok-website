import Link from "next/link"
import { ArrowLeft, Shield, Target, Heart, Zap } from "lucide-react"

export const metadata = {
  title: "Ekibimiz - Taviz Yok",
  description: "Kamu hizmetlerinde modern çözümler geliştiren ekibimiz"
}

export default function EkibimizPage() {
  const principles = [
    { icon: Shield, title: "Doğruluk", description: "Her süreçte doğru ve güvenilir bilgi", color: "from-blue-500 to-blue-600" },
    { icon: Target, title: "Şeffaflık", description: "Açık ve izlenebilir işleyiş", color: "from-green-500 to-green-600" },
    { icon: Heart, title: "Kamu Yararı", description: "Toplum çıkarını ön planda tutmak", color: "from-purple-500 to-purple-600" },
    { icon: Zap, title: "Sadelik", description: "Kullanımı kolay ve anlaşılır sistem", color: "from-orange-500 to-orange-600" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Ana Sayfaya Dön</span>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lacivert-900 mb-6">
              EKİBİMİZ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 mb-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <span className="font-bold text-lacivert-900">Taviz Yok</span>, kamu hizmetlerinde hız, düzen ve şeffaflık sağlayan modern bir dijital sistem geliştirme hedefiyle ortaya çıkmış bir platformdur.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Gelişim sürecinde ihtiyaç duyulan tüm tasarım, planlama ve yazılım çalışmaları tek bir merkezden yürütülmüştür. Platformun temel dayanağı yalınlık, uygulanabilirlik ve Türkiye'nin ihtiyaçlarına uygun bir çözüm üretme anlayışıdır.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                Bu yaklaşım doğrultusunda Taviz Yok, sade ama etkili bir mimari ile tasarlanmış ve her kurumun kolaylıkla kullanabileceği bir yapıya kavuşturulmuştur.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lacivert-900 mb-10 text-center">Çalışma İlkelerimiz</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, idx) => {
                const IconComponent = principle.icon
                return (
                  <div key={idx} className="flex items-start space-x-5 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-lacivert-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 text-white rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold">
              Çözüm odaklılık ilkesiyle hareket ediyoruz
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
