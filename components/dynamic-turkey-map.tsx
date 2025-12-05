"use client"

import { useEffect, useState } from "react"
import { MapContainer, GeoJSON, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

interface CityData {
  name: string
  notifications: number
  resolved: number
  avgTime: string
}

const demoData: Record<string, CityData> = {
  "İstanbul": { name: "İstanbul", notifications: 12450, resolved: 11230, avgTime: "2.3sa" },
  "Ankara": { name: "Ankara", notifications: 8920, resolved: 8100, avgTime: "2.8sa" },
  "İzmir": { name: "İzmir", notifications: 7650, resolved: 6890, avgTime: "3.1sa" },
  "Antalya": { name: "Antalya", notifications: 4320, resolved: 3950, avgTime: "2.5sa" },
  "Bursa": { name: "Bursa", notifications: 3890, resolved: 3560, avgTime: "2.7sa" },
  "Adana": { name: "Adana", notifications: 3210, resolved: 2890, avgTime: "3.2sa" }
}

export default function DynamicTurkeyMap() {
  const [geoData, setGeoData] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    fetch("https://raw.githubusercontent.com/cihadturhan/tr-geojson/master/geo/tr-cities-utf8.json")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("GeoJSON yükleme hatası:", err))
  }, [])

  const getColor = (notifications: number) => {
    if (notifications > 10000) return "#dc2626"
    if (notifications > 5000) return "#f97316"
    if (notifications > 2000) return "#eab308"
    return "#22c55e"
  }

  const style = (feature: any) => {
    const cityName = feature.properties.name
    const data = demoData[cityName]
    const notifications = data?.notifications || Math.floor(Math.random() * 5000)
    
    return {
      fillColor: getColor(notifications),
      weight: 2,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7
    }
  }

  const onEachFeature = (feature: any, layer: any) => {
    const cityName = feature.properties.name
    const data = demoData[cityName] || {
      name: cityName,
      notifications: Math.floor(Math.random() * 5000),
      resolved: Math.floor(Math.random() * 4500),
      avgTime: `${(Math.random() * 2 + 2).toFixed(1)}sa`
    }

    layer.on({
      mouseover: (e: any) => {
        const layer = e.target
        layer.setStyle({
          weight: 4,
          fillOpacity: 0.9
        })
      },
      mouseout: (e: any) => {
        const layer = e.target
        layer.setStyle({
          weight: 2,
          fillOpacity: 0.7
        })
      }
    })

    layer.bindTooltip(
      `<div class="p-3 bg-white rounded-lg shadow-xl">
        <h3 class="font-bold text-lacivert-900 text-lg mb-2">${data.name}</h3>
        <div class="space-y-1 text-sm">
          <p><span class="font-semibold">Bildirim:</span> ${data.notifications.toLocaleString("tr-TR")}</p>
          <p><span class="font-semibold">Çözülen:</span> ${data.resolved.toLocaleString("tr-TR")}</p>
          <p><span class="font-semibold">Ort. Süre:</span> ${data.avgTime}</p>
          <p><span class="font-semibold">Başarı:</span> ${Math.round((data.resolved / data.notifications) * 100)}%</p>
        </div>
      </div>`,
      { 
        permanent: false,
        direction: "top",
        className: "custom-tooltip"
      }
    )
  }

  if (!mounted || !geoData) {
    return (
      <div className="w-full h-[400px] md:h-[500px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center">
        <div className="text-white text-lg">Harita yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
      <MapContainer
        center={[39.0, 35.0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <GeoJSON 
          data={geoData} 
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  )
}