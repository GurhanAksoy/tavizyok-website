import { Shield, Zap, Globe, BarChart3 } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    { icon: Zap, title: "Yapay Zeka Destekli", description: "OpenAI teknolojisi ile otomatik kategorizasyon", gradient: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Maksimum Güvenlik", description: "256-bit SSL şifreleme ve çok katmanlı güvenlik", gradient: "from-blue-500 to-cyan-500" },
    { icon: Globe, title: "Türkiye Geneli", description: "81 il valiliği ve 1000+ belediye entegrasyonu", gradient: "from-red-500 to-pink-500" },
    { icon: BarChart3, title: "Detaylı Analitik", description: "Kurum ve birim bazında performans takibi", gradient: "from-green-500 to-emerald-500" },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Platform Özellikleri</h2>
          <p className="text-xl text-gray-600">Modern teknoloji ile desteklenen güçlü altyapı</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}