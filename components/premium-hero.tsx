"use client"

import { ArrowRight, Play } from "lucide-react"

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-lacivert-900 via-lacivert-800 to-lacivert-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-altin/20 border border-altin/40 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-altin rounded-full animate-pulse" />
                <span className="text-white font-semibold text-sm">Hizmette Aksaklıklara TAVİZ YOK </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                Türkiye'nin<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kirmizi-600 to-kirmizi-700">Dijital Bildirim</span><br />Platformu
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">Hızlı, şeffaf ve çözüm odaklı hizmetten</p>
              <div className="mb-12 py-2">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-kirmizi-600 via-white to-kirmizi-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 cursor-pointer inline-block leading-relaxed pb-2" style={{backgroundSize: '200% auto', animation: 'gradient 3s linear infinite', paddingTop: '0.25rem'}}>
                  TAVİZ YOK
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <a href="#iletisim" className="group flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-xl font-bold text-base md:text-lg shadow-2xl transition-all hover:scale-105">
                  <span>Kurumunuz İçin Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#nasil-calisir" className="flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5" />
                  <span>Nasıl Çalışır?</span>
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-8 text-gray-400 text-xs md:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>1.405 Belediye</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>81 Valilik</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span>922 Kaymakamlık</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-kirmizi-600 to-blue-600 rounded-full blur-3xl opacity-20" />
              <img src="/bayrak.gif" alt="Türkiye" className="relative w-full max-w-xl mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
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