"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { MapPin, TrendingUp, Users, CheckCircle } from "lucide-react"

// Leaflet'i client-side only yükle (SSR problemi önlemek için)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
)

export default function TurkeyMapSection() {
  const [geoData, setGeoData] = useState<any>(null)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // GERÇEKÇİ DEMO VERİLERİ
  const cityData: Record<string, { bildirim: number; cozulen: number; oran: number; ortalamaSure: string }> = {
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

  useEffect(() => {
    setMounted(true)
    
    // Leaflet CSS yükle
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)
    
    // GeoJSON yükle
    fetch("https://raw.githubusercontent.com/cihadturhan/tr-geojson/master/geo/tr-cities-utf8.json")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("GeoJSON yükleme hatası:", err))
  }, [])

  const getColor = (cityName: string) => {
    const data = cityData[cityName]
    if (!data) return "#3b82f6"
    
    const bildirim = data.bildirim
    if (bildirim > 2000) return "#dc2626"
    if (bildirim > 1000) return "#ef4444"
    if (bildirim > 500) return "#f97316"
    if (bildirim > 300) return "#fb923c"
    if (bildirim > 150) return "#fbbf24"
    return "#34d399"
  }

  const style = (feature: any) => {
    const cityName = feature.properties?.name || ""
    return {
      fillColor: getColor(cityName),
      weight: 1,
      opacity: 1,
      color: "#1e3a8a",
      fillOpacity: hoveredCity === cityName ? 1 : 0.7
    }
  }

  const onEachFeature = (feature: any, layer: any) => {
    const cityName = feature.properties?.name || ""
    const data = cityData[cityName]

    layer.on({
      mouseover: () => {
        setHoveredCity(cityName)
        layer.setStyle({ weight: 3, color: "#ffffff", fillOpacity: 1 })
      },
      mouseout: () => {
        setHoveredCity(null)
        layer.setStyle({ weight: 1, color: "#1e3a8a", fillOpacity: 0.7 })
      }
    })

    if (data) {
      layer.bindTooltip(
        `<div style="padding: 12px; font-family: system-ui;">
          <div style="font-weight: bold; font-size: 18px; color: #1e3a8a; margin-bottom: 10px;">${cityName}</div>
          <div style="font-size: 14px; line-height: 1.8;">
            <div><span style="color: #6b7280;">Bildirim:</span> <strong>${data.bildirim.toLocaleString('tr-TR')}</strong></div>
            <div><span style="color: #6b7280;">Çözülen:</span> <strong style="color: #16a34a;">${data.cozulen.toLocaleString('tr-TR')}</strong></div>
            <div><span style="color: #6b7280;">Başarı:</span> <strong style="color: #2563eb;">%${data.oran}</strong></div>
            <div><span style="color: #6b7280;">Ort. Süre:</span> <strong style="color: #7c3aed;">${data.ortalamaSure}</strong></div>
          </div>
        </div>`,
        { permanent: false, direction: "top", className: "custom-tooltip", opacity: 0.95 }
      )
    }
  }

  const mapStats = [
    { icon: MapPin, title: "Aktif Bildirim", value: "11.2K", description: "Türkiye genelinde işlemde olan bildirimler", color: "from-red-500 to-red-600" },
    { icon: TrendingUp, title: "Çözüm Oranı", value: "%94.3", description: "Ulusal ortalama çözüm başarı oranı", color: "from-green-500 to-green-600" },
    { icon: Users, title: "Aktif Personel", value: "8.7K", description: "Şu an sistemde aktif kurum çalışanları", color: "from-blue-500 to-blue-600" }
  ]

  if (!mounted || !geoData) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-lacivert-900 via-lacivert-800 to-blue-900">
        <div className="container mx-auto px-4"><div className="text-center text-white text-xl">Harita yükleniyor...</div></div>
      </section>
    )
  }

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
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8">
            <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <MapContainer center={[39.0, 35.0]} zoom={6} style={{ height: "100%", width: "100%" }} zoomControl={true} scrollWheelZoom={false} dragging={true}>
                <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature} />
              </MapContainer>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap text-xs">
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#dc2626]" /><span className="text-white/80">Çok Yüksek</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#ef4444]" /><span className="text-white/80">Yüksek</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#f97316]" /><span className="text-white/80">Orta</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#fbbf24]" /><span className="text-white/80">Düşük</span></div>
              <div className="flex items-center space-x-1.5"><div className="w-3 h-3 rounded bg-[#34d399]" /><span className="text-white/80">Çok Düşük</span></div>
            </div>
            <div className="mt-4 text-center"><div className="text-white/60 text-xs md:text-sm"><p className="mb-2">🗺️ 81 İl - İllerin üzerine gelin</p><p className="font-semibold text-white/80">81 İl • 922 İlçe • 1.405 Belediye</p></div></div>
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
              <p className="text-white/90 text-sm leading-relaxed">Gösterilen tüm veriler gerçekçi demo değerleridir. Canlı sistemde Supabase'den gerçek zamanlı güncel bilgiler görüntülen

ir.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .leaflet-container { background: transparent !important; }
        .leaflet-control-attribution { display: none !important; }
        .custom-tooltip { background: white !important; border: 2px solid #dc2626 !important; border-radius: 12px !important; box-shadow: 0 10px 40px rgba(0,0,0,0.2) !important; }
        .leaflet-tooltip-top:before { border-top-color: #dc2626 !important; }
      `}</style>
    </section>
  )
}
