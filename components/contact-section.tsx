"use client"

import { useState } from "react"
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ kurumAdi: "", yetkili: "", email: "", telefon: "", mesaj: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="iletisim" className="py-16 md:py-24 bg-gradient-to-br from-lacivert-900 to-lacivert-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">BİZE ULAŞIN</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 px-4">Kurumunuz için demo talep edin, tüm sorularınızı yanıtlayalım</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-lacivert-900 mb-4 md:mb-6">Demo Talep Formu</h3>
              {submitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Talebiniz Alındı!</h4>
                  <p className="text-sm md:text-base text-gray-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kurum Adı *</label>
                    <input type="text" required value={formData.kurumAdi} onChange={(e) => setFormData({...formData, kurumAdi: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors text-base" placeholder="Örn: Kadıköy Belediyesi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Yetkili Kişi *</label>
                    <input type="text" required value={formData.yetkili} onChange={(e) => setFormData({...formData, yetkili: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors text-base" placeholder="Ad Soyad" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors text-base" placeholder="ornek@belediye.gov.tr" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                      <input type="tel" required value={formData.telefon} onChange={(e) => setFormData({...formData, telefon: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors text-base" placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                    <textarea rows={4} value={formData.mesaj} onChange={(e) => setFormData({...formData, mesaj: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors resize-none text-base" placeholder="Demo talebiniz veya sorularınız..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 hover:from-kirmizi-700 hover:to-kirmizi-800 text-white rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    <Send className="w-5 h-5" />
                    <span>Gönder</span>
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">İletişim Bilgileri</h3>
                <div className="space-y-4 md:space-y-6">
                  <a href="https://wa.me/905304066686" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 md:space-x-4 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">WhatsApp</p>
                      <p className="text-white font-semibold text-base md:text-lg">+90 530 406 66 86</p>
                    </div>
                  </a>
                  <a href="mailto:iletisim@tavizyok.com" className="flex items-center space-x-3 md:space-x-4 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-kirmizi-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">E-posta</p>
                      <p className="text-white font-semibold text-base md:text-lg">iletisim@tavizyok.com</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Hızlı Demo</h4>
                <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">15 dakikalık online demo ile platformu canlı olarak görün</p>
                <a href="https://wa.me/905304066686?text=Demo talep ediyorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-5 md:px-6 py-3 bg-white text-kirmizi-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg text-sm md:text-base">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span>WhatsApp'tan Demo Talep Et</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}