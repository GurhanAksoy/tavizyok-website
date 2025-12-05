"use client"

import { MessageSquare, Brain, Building2, CheckCircle2, ArrowRight } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    { number: "01", icon: MessageSquare, title: "Vatandaş Bildirir", description: "WhatsApp, web veya mobil uygulama üzerinden kolayca bildirim yapılır", detail: "Fotoğraf/video eklenebilir, konum otomatik tespit edilir", color: "from-blue-500 to-blue-600" },
    { number: "02", icon: Brain, title: "Yapay Zeka Analiz Eder", description: "Bildirim içeriği anında analiz edilir ve kategorilendirilir", detail: "İlgili birim ve öncelik seviyesi belirlenir", color: "from-purple-500 to-purple-600" },
    { number: "03", icon: Building2, title: "Kuruma Yönlendirilir", description: "İlgili kurum ve birime otomatik olarak atanır", detail: "Zabıta, Fen İşleri, Park Bahçeler vb.", color: "from-green-500 to-green-600" },
    { number: "04", icon: CheckCircle2, title: "Sorun Çözülür", description: "Ekip göreve başlar, süreç izlenir, vatandaş bilgilendirilir", detail: "WhatsApp ile anlık durum güncellemeleri", color: "from-kirmizi-600 to-kirmizi-700", isRed: true }
  ]

  return (
    <section id="nasil-calisir" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-lacivert-900">ÇÖZÜM SÜRECİ</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">4 adımda hızlı, akıllı ve şeffaf bildirim yönetimi</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div key={idx} className="relative">
                  <div className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent">
                    <div className={`absolute -top-4 md:-top-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <span className="font-bold text-lg md:text-2xl text-white">{step.number}</span>
                    </div>
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-lacivert-900 mb-3 md:mb-4">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed font-medium">{step.description}</p>
                    <div className="flex items-start space-x-2 text-xs md:text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5" />
                      <span>{step.detail}</span>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="mt-12 md:mt-16 text-center px-4">
            <div className="inline-flex items-center space-x-3 bg-green-50 border-2 border-green-200 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <div className="text-left">
                <div className="text-green-900 font-bold text-base md:text-lg">Hızlı Çözüm Süresi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}