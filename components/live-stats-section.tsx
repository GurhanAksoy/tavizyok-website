"use client"

import { useEffect, useState } from "react"

export default function LiveStatsSection() {
  const [counters, setCounters] = useState({ belediye: 0, valilik: 0, kaymakamlik: 0, vatandas: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = duration / steps
    const targets = { belediye: 1405, valilik: 81, kaymakamlik: 922, vatandas: 85 }
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounters({
        belediye: Math.floor(targets.belediye * progress),
        valilik: Math.floor(targets.valilik * progress),
        kaymakamlik: Math.floor(targets.kaymakamlik * progress),
        vatandas: Math.floor(targets.vatandas * progress)
      })
      if (step >= steps) clearInterval(timer)
    }, increment)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { label: "Belediye", value: counters.belediye, suffix: "+", color: "from-kirmizi-600 to-kirmizi-700" },
    { label: "İl Valiliği", value: counters.valilik, suffix: "", color: "from-blue-600 to-blue-700" },
    { label: "Kaymakamlık", value: counters.kaymakamlik, suffix: "+", color: "from-green-600 to-green-700" },
    { label: "Milyon Vatandaş", value: counters.vatandas, suffix: "M", color: "from-purple-600 to-purple-700" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-lacivert-900 to-lacivert-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm md:text-base">Canlı Veri</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">ULUSAL KAPSAM</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">Türkiye genelinde tüm kurumlar için kapsamlı dijital altyapı</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-lacivert-900">{stat.value.toLocaleString("tr-TR")}</span>
                <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent ml-1`}>{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-semibold text-base md:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center px-4">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-bold">Türkiye'nin %100'ü Kapsanıyor</p>
            <p className="text-gray-300 text-sm md:text-base mt-2">Her il, her ilçe, her belde için hazır altyapı</p>
          </div>
        </div>
      </div>
    </section>
  )
}