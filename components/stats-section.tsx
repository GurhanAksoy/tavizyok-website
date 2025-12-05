"use client"

import { useEffect, useState } from "react"
import { Building2, MapPin, Clock, TrendingUp } from "lucide-react"

export default function StatsSection() {
  const [counters, setCounters] = useState({ institutions: 0, reports: 0, cities: 0, satisfaction: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    const targets = { institutions: 1081, reports: 15420, cities: 81, satisfaction: 98 }

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        institutions: Math.floor(targets.institutions * progress),
        reports: Math.floor(targets.reports * progress),
        cities: Math.floor(targets.cities * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      })

      if (step >= steps) clearInterval(timer)
    }, increment)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Building2, label: "Aktif Kurum", value: counters.institutions, suffix: "+", color: "from-blue-500 to-blue-600" },
    { icon: MapPin, label: "İl Valiliği", value: counters.cities, suffix: "", color: "from-red-500 to-red-600" },
    { icon: Clock, label: "Çözülen Bildirim", value: counters.reports, suffix: "+", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, label: "Memnuniyet", value: counters.satisfaction, suffix: "%", color: "from-purple-500 to-purple-600" },
  ]

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Canlı İstatistikler</h2>
          <p className="text-xl text-gray-600">Gerçek zamanlı platform performans verileri</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-slate-900">{stat.value.toLocaleString("tr-TR")}</span>
                <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent ml-1`}>{stat.suffix}</span>
              </div>

              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}