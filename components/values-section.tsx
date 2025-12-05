"use client"

import { Shield, Scale, Handshake, Target, MessageSquare, Zap } from "lucide-react"

export default function ValuesSection() {
  const values = [
    { icon: Shield, title: "Etiklik", description: "Dürüstlük ve sorumluluk ilkesiyle hareket ederiz", color: "from-blue-500 to-blue-600" },
    { icon: Scale, title: "Şeffaflık", description: "Tüm süreçler açık ve izlenebilir", color: "from-cyan-500 to-cyan-600" },
    { icon: Handshake, title: "Güven", description: "Vatandaş ve kurum arasında köprü", color: "from-green-500 to-green-600" },
    { icon: Target, title: "Çözüm Odaklılık", description: "Her bildirim bir çözüm fırsatı", color: "from-orange-500 to-orange-600" },
    { icon: MessageSquare, title: "Etkin İletişim", description: "Hızlı, net ve sürekli bilgilendirme", color: "from-purple-500 to-purple-600" },
    { icon: Zap, title: "Yenilikçilik", description: "Yapay zeka ve modern teknoloji", color: "from-yellow-500 to-yellow-600" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-lacivert-900">TAVİZ YOK İLKELERİ</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Türkiye'de hizmet kalitesini arttıran değerlerimiz</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {values.map((value, idx) => {
            const IconComponent = value.icon
            return (
              <div key={idx} className="group relative bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500`} />
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-lacivert-900 mb-2 md:mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl md:rounded-b-3xl`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}