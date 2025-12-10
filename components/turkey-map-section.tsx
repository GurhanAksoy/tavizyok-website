"use client"

import { useState } from "react"
import { MapPin, TrendingUp, Users, CheckCircle } from "lucide-react"

export default function TurkeyMapSection() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  // GERÇEKÇİ BÖLGESEL DEMO VERİLERİ
  const regionData = {
    "Marmara": { bildirim: 5234, cozulen: 4921, oran: 94, iller: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ"] },
    "İç Anadolu": { bildirim: 2456, cozulen: 2368, oran: 96, iller: ["Ankara", "Konya", "Kayseri", "Eskişehir"] },
    "Ege": { bildirim: 1876, cozulen: 1798, oran: 96, iller: ["İzmir", "Manisa", "Aydın", "Denizli"] },
    "Akdeniz": { bildirim: 1544, cozulen: 1451, oran: 94, iller: ["Antalya", "Adana", "Mersin"] },
    "Karadeniz": { bildirim: 892, cozulen: 847, oran: 95, iller: ["Samsun", "Trabzon", "Ordu"] },
    "Doğu Anadolu": { bildirim: 567, cozulen: 516, oran: 91, iller: ["Erzurum", "Malatya", "Van"] },
    "Güneydoğu Anadolu": { bildirim: 1199, cozulen: 1103, oran: 92, iller: ["Gaziantep", "Şanlıurfa", "Diyarbakır"] }
  }

  const getRegionColor = (region: string) => {
    const bildirim = regionData[region as keyof typeof regionData]?.bildirim || 0
    if (bildirim > 4000) return "#dc2626"
    if (bildirim > 2000) return "#ef4444"
    if (bildirim > 1500) return "#f97316"
    if (bildirim > 1000) return "#fb923c"
    if (bildirim > 500) return "#fbbf24"
    return "#34d399"
  }

  const mapStats = [
    { icon: MapPin, title: "Aktif Bildirim", value: "13.8K", description: "Türkiye genelinde işlemde olan bildirimler", color: "from-red-500 to-red-600" },
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
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 relative group">
            <svg 
              viewBox="0 0 800 600" 
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.3))' }}
            >
              <g onMouseEnter={() => setHoveredRegion("Marmara")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 150 120 L 250 100 L 280 150 L 260 180 L 200 190 L 160 160 Z" fill={hoveredRegion === "Marmara" ? "#dc2626" : getRegionColor("Marmara")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Marmara" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="210" y="145" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Marmara</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("İç Anadolu")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 260 180 L 400 160 L 480 220 L 460 300 L 350 310 L 280 270 L 250 220 Z" fill={hoveredRegion === "İç Anadolu" ? "#dc2626" : getRegionColor("İç Anadolu")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "İç Anadolu" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="370" y="235" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">İç Anadolu</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("Ege")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 100 200 L 200 190 L 250 220 L 230 290 L 150 310 L 90 270 Z" fill={hoveredRegion === "Ege" ? "#dc2626" : getRegionColor("Ege")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Ege" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="170" y="250" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Ege</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("Akdeniz")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 150 310 L 280 270 L 380 310 L 420 380 L 350 420 L 200 400 L 130 360 Z" fill={hoveredRegion === "Akdeniz" ? "#dc2626" : getRegionColor("Akdeniz")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Akdeniz" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="280" y="355" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Akdeniz</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("Karadeniz")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 280 60 L 500 50 L 580 90 L 550 140 L 400 160 L 280 150 Z" fill={hoveredRegion === "Karadeniz" ? "#dc2626" : getRegionColor("Karadeniz")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Karadeniz" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="420" y="105" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Karadeniz</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("Doğu Anadolu")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 550 140 L 680 160 L 720 240 L 680 320 L 560 300 L 480 220 Z" fill={hoveredRegion === "Doğu Anadolu" ? "#dc2626" : getRegionColor("Doğu Anadolu")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Doğu Anadolu" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="600" y="230" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle">Doğu</text>
                <text x="600" y="250" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle">Anadolu</text>
              </g>
              <g onMouseEnter={() => setHoveredRegion("Güneydoğu Anadolu")} onMouseLeave={() => setHoveredRegion(null)} className="cursor-pointer transition-all duration-300">
                <path d="M 460 300 L 560 300 L 620 360 L 580 420 L 480 410 L 420 380 L 380 310 Z" fill={hoveredRegion === "Güneydoğu Anadolu" ? "#dc2626" : getRegionColor("Güneydoğu Anadolu")} stroke="#1e3a8a" strokeWidth="2" opacity={hoveredRegion === "Güneydoğu Anadolu" ? "1" : "0.85"} className="transition-all duration-300" />
                <text x="500" y="350" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">G.Doğu</text>
                <text x="500" y="370" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Anadolu</text>
              </g>
            </svg>

            {hoveredRegion && (
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl p-4 min-w-[220px] border-2 border-kirmizi-600 z-50 animate-scale-in">
                <div className="text-lacivert-900 font-bold text-lg mb-3">{hoveredRegion}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Bildirim:</span><span className="font-semibold">{regionData[hoveredRegion as keyof typeof regionData].bildirim.toLocaleString('tr-TR')}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Çözülen:</span><span className="font-semibold text-green-600">{regionData[hoveredRegion as keyof typeof regionData].cozulen.toLocaleString('tr-TR')}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Başarı:</span><span className="font-semibold text-blue-600">%{regionData[hoveredRegion as keyof typeof regionData].oran}</span></div>
                  <div className="mt-3 pt-3 border-t border-gray-200"><div className="text-xs text-gray-500 mb-1">Başlıca İller:</div><div className="text-xs text-gray-700 font-medium">{regionData[hoveredRegion as keyof typeof regionData].iller.join(", ")}</div></div>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap text-xs">
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#dc2626]" /><span className="text-white/80">Çok Yüksek</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#ef4444]" /><span className="text-white/80">Yüksek</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#f97316]" /><span className="text-white/80">Orta</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#fbbf24]" /><span className="text-white/80">Düşük</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#34d399]" /><span className="text-white/80">Çok Düşük</span></div>
            </div>

            <div className="mt-4 text-center"><div className="text-white/60 text-xs md:text-sm"><p className="mb-2">🗺️ 7 Coğrafi Bölge - Bölgelerin üzerine gelin</p><p className="font-semibold text-white/80">81 İl • 922 İlçe • 1.405 Belediye</p></div></div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {mapStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <div key={idx} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}><IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" /></div>
                    <div className="flex-1"><div className="flex items-baseline space-x-2 md:space-x-3 mb-1"><h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3><span className="text-sm md:text-base text-gray-400 font-medium">{stat.title}</span></div><p className="text-xs md:text-sm text-gray-300">{stat.description}</p></div>
                  </div>
                </div>
              )
            })}
            <div className="bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 rounded-xl md:rounded-2xl p-5 md:p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3"><CheckCircle className="w-6 h-6 text-white" /><h4 className="text-white font-bold text-lg">Demo Veriler</h4></div>
              <p className="text-white/90 text-sm leading-relaxed">Gösterilen tüm veriler gerçekçi demo değerleridir. Canlı sistemde gerçek zamanlı güncel bilgiler görüntülenir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
