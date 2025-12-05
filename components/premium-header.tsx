"use client"

import { useState } from "react"
import { Building2, BarChart3, Mail, X, Send, Menu } from "lucide-react"

export default function PremiumHeader() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailData, setEmailData] = useState({ konu: "", mesaj: "" })

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:iletisim@tavizyok.com?subject=${encodeURIComponent(emailData.konu)}&body=${encodeURIComponent(emailData.mesaj)}`
    setShowEmailModal(false)
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-krem/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-4">
              <img src="/logo.png" alt="Taviz Yok" className="w-16 h-16 md:w-24 md:h-24" />
              <div className="hidden sm:block">
                <p className="text-xs md:text-sm text-lacivert-900 font-semibold">Dijital Bildirim Platformu</p>
              </div>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-lacivert-900">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => setShowEmailModal(true)} className="flex items-center space-x-2 text-kirmizi-600 hover:text-kirmizi-700 transition-colors font-semibold">
                <Mail className="w-4 h-4" />
                <span className="text-sm">E-posta Gönder</span>
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a href="/kurum-giris" className="flex items-center space-x-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg">
                <Building2 className="w-4 h-4" />
                <span>Kurum Girişi</span>
              </a>
              <a href="/merkez-panel-giris" className="flex items-center space-x-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg">
                <BarChart3 className="w-4 h-4" />
                <span>Merkezi Panel</span>
              </a>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <button onClick={() => { setShowEmailModal(true); setMobileMenuOpen(false); }} className="w-full flex items-center space-x-2 px-4 py-3 text-kirmizi-600 hover:bg-kirmizi-50 rounded-lg transition-colors font-semibold">
                <Mail className="w-5 h-5" />
                <span>E-posta Gönder</span>
              </button>
              <a href="/kurum-giris" className="w-full flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg">
                <Building2 className="w-5 h-5" />
                <span>Kurum Girişi</span>
              </a>
              <a href="/merkez-panel-giris" className="w-full flex items-center space-x-2 px-4 py-3 bg-kirmizi-600 text-white rounded-lg font-semibold shadow-lg">
                <BarChart3 className="w-5 h-5" />
                <span>Merkezi Panel</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => setShowEmailModal(false)}>
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-lacivert-900">E-posta Gönder</h3>
              <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Konu</label>
                <input type="text" required value={emailData.konu} onChange={(e) => setEmailData({...emailData, konu: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none" placeholder="Mesaj konusu" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                <textarea rows={4} required value={emailData.mesaj} onChange={(e) => setEmailData({...emailData, mesaj: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none resize-none" placeholder="Mesajınızı yazın..." />
              </div>
              <button type="submit" className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-xl font-bold transition-all">
                <Send className="w-5 h-5" />
                <span>Gönder</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}