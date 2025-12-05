"use client"

import { Clock, Target, BarChart3, Rocket, Award } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Benefit {
  icon: LucideIcon | (() => JSX.Element)
  title: string
  description: string
  stat: string
  color: string
  darkText?: boolean
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    { icon: Clock, title: "Zaman Tasarrufu", description: "Otomatik yönlendirme ile çözüm süreleri %60 kısalır", stat: "%60", color: "from-blue-500 to-blue-600" },
    { icon: () => <span className="text-3xl md:text-4xl font-bold">₺</span>, title: "Maliyet Tasarrufu", description: "Dijital süreçlerle operasyonel maliyetler %50 azalır", stat: "%50", color: "from-green-500 to-green-600" },
    { icon: Target, title: "Doğru Yönlendirme", description: "Yapay zeka ile %100 doğrulukla ilgili birime atama", stat: "%100", color: "from-purple-500 to-purple-600" },
    { icon: BarChart3, title: "Performans Ölçümü", description: "Birim ve ekip bazlı detaylı analiz ve raporlama", stat: "24/7", color: "from-orange-500 to-orange-600" },
    { icon: Rocket, title: "Dijitalleşme", description: "Kurumunuzun dijital dönüşümünü hızlandırır", stat: "10X", color: "from-cyan-500 to-cyan-600" },
    { icon: Award, title: "Ulusal Standart", description: "Türkiye genelinde kabul görmüş ortak platform", stat: "1.405", color: "from-kirmizi-500 to-kirmizi-600", darkText: true }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-lacivert-900">BELEDİYELER İÇİN 6 KRİTİK FAYDA</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Kanıtlanmış sonuçlar, ölçülebilir değer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon
            const isFunction = typeof IconComponent === 'function' && IconComponent.length === 0
            
            return (
              <div key={idx} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl md:rounded-3xl transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${benefit.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {isFunction ? <IconComponent /> : <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />}
                  </div>
                  <div className={`absolute top-0 right-0 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r ${benefit.color} rounded-lg md:rounded-xl shadow-lg`}>
                    <span className={`font-bold text-base md:text-lg ${benefit.darkText ? 'text-lacivert-900' : 'text-white'}`}>{benefit.stat}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-lacivert-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl md:rounded-b-3xl`} />
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12 md:mt-16 px-4">
          <a href="#iletisim" className="inline-flex items-center space-x-2 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 hover:from-kirmizi-700 hover:to-kirmizi-800 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-2xl transition-all hover:scale-105">
            <span>Kurumunuz İçin Detaylı Sunum</span>
          </a>
        </div>
      </div>
    </section>
  )
}