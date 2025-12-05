"use client"

import { MapPin, TrendingUp, Users } from "lucide-react"
import dynamic from "next/dynamic"

const DynamicTurkeyMap = dynamic(() => import("./dynamic-turkey-map"), { ssr: false })

export default function TurkeyMapSection() {
  const mapStats = [
    { icon: MapPin, title: "Yoğunluk Haritası", value: "Canlı", description: "Türkiye genelinde anlık bildirim yoğunluğu", color: "from-red-500 to-red-600" },
    { icon: TrendingUp, title: "Çözüm Oranı", value: "+95", description: "İller bazlı ortalama çözüm başarısı", color: "from-green-500 to-green-600" },
    { icon: Users, title: "Aktif Kullanıcı", value: "12K+", description: "Kurum personeli ve yöneticiler", color: "from-blue-500 to-blue-600" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-lacivert-900 via-lacivert-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-kirmizi-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm md:text-base">Gerçek Zamanlı Panel</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">ULUSAL PERFORMANS PANELİ</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">Merkezi panel ile tüm Türkiye'yi tek ekrandan görüntüleyin</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          <DynamicTurkeyMap />
          <div className="space-y-4 md:space-y-6">
            {mapStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div key={idx} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-2 md:space-x-3 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3>
                        <span className="text-sm md:text-base text-gray-400 font-medium">{stat.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300">{stat.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6">
            <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-2">İnteraktif Harita</p>
            <p className="text-gray-300 text-xs md:text-sm">Her ile tıklayarak detaylı istatistikleri görün</p>
          </div>
        </div>
      </div>
    </section>
  )
}