"use client"

import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Ulusal Dijital Platform
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Hızlı, Şeffaf ve<br />
                <span className="text-red-600">Kaliteli Hizmet</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                WhatsApp ile saniyeler içinde bildirim yapın. AI destekli sistem, bildirimi otomatik olarak ilgili kuruma yönlendirir.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "81 İl Valiliği + Tüm Belediyeler",
                  "Yapay Zeka ile Otomatik Yönlendirme",
                  "Gerçek Zamanlı Takip ve Bildirim"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/905304066686?text=Merhaba, bildirim yapmak istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp ile Bildir</span>
                </a>

                {/* Nasıl Çalışır Button */}
                <a
                  href="#stats"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 rounded-xl font-bold text-lg transition-colors"
                >
                  <span>Nasıl Çalışır?</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

              </div>
            </div>

            <div className="flex justify-center">
              <img src="/bayrak.svg" alt="Türkiye" className="w-full max-w-md drop-shadow-2xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
