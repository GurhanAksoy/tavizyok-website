"use client"

import { useState } from "react"
import { MapPin, TrendingUp, Users, CheckCircle } from "lucide-react"

export default function TurkeyMapSection() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  // GERÇEKÇİ DEMO VERİLERİ - Türkiye'nin büyük şehirleri
  const cityData = {
    "İstanbul": { bildirim: 2847, cozulen: 2654, oran: 93, ortalamaSure: "18sa" },
    "Ankara": { bildirim: 1523, cozulen: 1445, oran: 95, ortalamaSure: "16sa" },
    "İzmir": { bildirim: 1289, cozulen: 1221, oran: 95, ortalamaSure: "17sa" },
    "Bursa": { bildirim: 687, cozulen: 651, oran: 95, ortalamaSure: "15sa" },
    "Antalya": { bildirim: 624, cozulen: 593, oran: 95, ortalamaSure: "19sa" },
    "Adana": { bildirim: 531, cozulen: 498, oran: 94, ortalamaSure: "20sa" },
    "Konya": { bildirim: 478, cozulen: 459, oran: 96, ortalamaSure: "14sa" },
    "Gaziantep": { bildirim: 445, cozulen: 418, oran: 94, ortalamaSure: "21sa" },
    "Şanlıurfa": { bildirim: 398, cozulen: 366, oran: 92, ortalamaSure: "23sa" },
    "Kocaeli": { bildirim: 412, cozulen: 395, oran: 96, ortalamaSure: "15sa" },
    "Mersin": { bildirim: 389, cozulen: 364, oran: 94, ortalamaSure: "19sa" },
    "Diyarbakır": { bildirim: 356, cozulen: 325, oran: 91, ortalamaSure: "24sa" },
    "Kayseri": { bildirim: 312, cozulen: 299, oran: 96, ortalamaSure: "14sa" },
    "Eskişehir": { bildirim: 289, cozulen: 278, oran: 96, ortalamaSure: "13sa" },
    "Samsun": { bildirim: 267, cozulen: 253, oran: 95, ortalamaSure: "16sa" }
  }

  // SVG PATH koordinatları (basitleştirilmiş Türkiye haritası)
  const cities = [
    { name: "İstanbul", x: "28%", y: "35%" },
    { name: "Ankara", x: "42%", y: "45%" },
    { name: "İzmir", x: "20%", y: "55%" },
    { name: "Bursa", x: "25%", y: "42%" },
    { name: "Antalya", x: "35%", y: "68%" },
    { name: "Adana", x: "50%", y: "68%" },
    { name: "Konya", x: "45%", y: "58%" },
    { name: "Gaziantep", x: "58%", y: "65%" },
    { name: "Şanlıurfa", x: "65%", y: "62%" },
    { name: "Kocaeli", x: "32%", y: "38%" },
    { name: "Mersin", x: "48%", y: "72%" },
    { name: "Diyarbakır", x: "72%", y: "55%" },
    { name: "Kayseri", x: "52%", y: "50%" },
    { name: "Eskişehir", x: "35%", y: "45%" },
    { name: "Samsun", x: "52%", y: "32%" }
  ]

  const mapStats = [
    { icon: MapPin, title: "Aktif Bildirim", value: "11.2K", description: "Türkiye genelinde işlemde olan bildirimler", color: "from-red-500 to-red-600" },
    { icon: TrendingUp, title: "Çözüm Oranı", value: "%94.3", description: "Ulusal ortalama çözüm başarı oranı", color: "from-green-500 to-green-600" },
    { icon: Users, title: "Aktif Personel", value: "8.7K", description: "Şu an sistemde aktif kurum çalışanları", color: "from-blue-500 to-blue-600" }
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
            <span className="text-white font-semibold text-sm md:text-base">Canlı Demo Verileri</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">ULUSAL PERFORMANS PANELİ</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">Merkezi panel ile tüm Türkiye'yi tek ekrandan görüntüleyin</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          
          {/* İNTERAKTİF HARİTA */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 relative">
            <div className="relative w-full" style={{paddingBottom: "75%"}}>
              {/* Türkiye Harita Arka Plan */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/bayrak.svg" alt="Türkiye" className="w-full h-full object-contain opacity-20" />
              </div>
              
              {/* Şehir İşaretleri */}
              {cities.map((city) => {
                const data = cityData[city.name as keyof typeof cityData]
                const isHovered = hoveredCity === city.name
                
                return (
                  <div
                    key={city.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: city.x, top: city.y }}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {/* Pin İkonu */}
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isHovered 
                        ? 'bg-kirmizi-600 scale-150 shadow-lg shadow-kirmizi-600/50' 
                        : 'bg-white/60 hover:bg-white'
                    }`}>
                      <div className={`absolute inset-0 rounded-full animate-ping ${
                        isHovered ? 'bg-kirmizi-600' : 'bg-white/40'
                      }`} />
                    </div>
                    
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-6 z-50 animate-scale-in">
                        <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[200px] border-2 border-kirmizi-600">
                          <div className="text-lacivert-900 font-bold text-lg mb-2">{city.name}</div>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Bildirim:</span>
                              <span className="font-semibold">{data.bildirim}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Çözülen:</span>
                              <span className="font-semibold text-green-600">{data.cozulen}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Başarı:</span>
                              <span className="font-semibold text-blue-600">%{data.oran}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Ort. Süre:</span>
                              <span className="font-semibold text-purple-600">{data.ortalamaSure}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Alt Bilgi */}
            <div className="mt-6 text-center">
              <div className="text-white/60 text-xs md:text-sm">
                <p className="mb-2">🗺️ İnteraktif Harita - Şehirlerin üzerine gelin</p>
                <p className="font-semibold text-white/80">81 İl • 922 İlçe • 1.405 Belediye</p>
              </div>
            </div>
          </div>

          {/* İSTATİSTİKLER */}
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
            
            {/* EK BİLGİ KARTI */}
            <div className="bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 rounded-xl md:rounded-2xl p-5 md:p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <h4 className="text-white font-bold text-lg">Demo Veriler</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Gösterilen tüm veriler gerçekçi demo değerleridir. Canlı sistemde gerçek zamanlı güncel bilgiler görüntülenir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
