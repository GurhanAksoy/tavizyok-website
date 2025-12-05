"use client"

import { Shield, Globe, Users, Target, Scale, Zap } from "lucide-react"

export default function AboutSection() {
  const features = [
    { icon: Globe, title: "Ulusal Vizyon", description: "Türkiye'nin geniş kapsamlı ulusal dijital bildirim platformu" },
    { icon: Users, title: "Kapsamlı Yapı", description: "81 il + 922 ilçe + 1.405 belediye için entegre sistem" },
    { icon: Target, title: "Çözüm Modeli", description: "Yapay zeka destekli akıllı yönlendirme ve takip" },
    { icon: Scale, title: "Tarafsızlık İlkesi", description: "Politik ayrım gözetmeksizin tüm kurumlara eşit hizmet" },
    { icon: Shield, title: "Güvenli Altyapı", description: "256-bit SSL şifreleme ve çok katmanlı güvenlik" },
    { icon: Zap, title: "Modern Standart", description: "Avrupa Birliği standartlarında dijital hizmet kalitesi" }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-lacivert-900">TAVİZ YOK NEDİR?</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p><strong className="text-lacivert-900">Taviz Yok</strong>, Türkiye'nin vatandaş-kurum ilişkisini güçlendirmek ve hizmet kalitesini arttırmak amacıyla geliştirilen ulusal çapta bir dijital çözüm mekanizmasıdır.</p>
                <p>Platform, 81 il valiliği, 922 kaymakamlık ve 1.405 belediyeyi tek bir dijital ekosistem altında birleştirerek, vatandaşların bildirilerinin hızlı, şeffaf ve etkili şekilde çözümlenmesini sağlar.</p>
                <p>Yapay zeka destekli sistemimiz, her bildirimi otomatik olarak analiz eder, kategorize eder ve ilgili kuruma yönlendirir. Böylece vatandaşlar sorunlarının takibini gerçek zamanlı olarak yapabilir, kurumlar ise performanslarını veriye dayalı olarak ölçebilir.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-kirmizi-600/20 to-blue-600/20 rounded-2xl md:rounded-3xl blur-3xl" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl">
                <img src="/logo.png" alt="Taviz Yok" className="w-full max-w-xs md:max-w-md mx-auto" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-kirmizi-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-lacivert-900 mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}