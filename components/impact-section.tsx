"use client"

import { CheckCircle, Sparkles } from "lucide-react"

export default function ImpactSection() {
  const impacts = [
    "Vatandaş-Kurum güveni güçlenir",
    "Kurumların performansı veriye dayanır",
    "Türkiye genelinde hizmet kalitesi yükselir",
    "Sorunlar kaybolmaz, sonuçlanır",
    "Dijital dönüşüm hızlanır",
    "Herkesin işi kolaylaşır"
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-krem relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-altin/20 border border-altin/40 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-altin" />
              <span className="text-altin font-semibold text-sm md:text-base">Türkiye'nin Geleceği</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-lacivert-900 leading-tight px-4">
              Modern, Veriye Dayalı,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kirmizi-600 to-kirmizi-700">Şeffaf Hizmet Standardı</span>
            </h2>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-2xl border border-gray-200 mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-lacivert-900 mb-6 md:mb-8 text-center">Bu Platform Sayesinde:</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {impacts.map((impact, idx) => (
                <div key={idx} className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed pt-0.5 md:pt-1">{impact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed md:leading-tight py-2">
                Türkiye'de hizmet kalitesinden<br />
                <span className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-kirmizi-600 via-white to-kirmizi-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 cursor-pointer inline-block mt-4 leading-relaxed pb-2" style={{backgroundSize: '200% auto', animation: 'gradient 3s linear infinite', paddingTop: '0.5rem'}}>
                  TAVİZ YOK
                </span>
                <br />
                <span className="text-xl md:text-2xl">anlayışı yerleşir</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}