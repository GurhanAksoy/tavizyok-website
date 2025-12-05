"use client"

import { useState } from "react"
import { Building2, BarChart3, Mail, X, Send, Menu, CheckCircle } from "lucide-react"

export default function PremiumHeader() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailData, setEmailData] = useState({ yetkili: "", email: "", mesaj: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kurumAdi: "",
          yetkili: emailData.yetkili,
          email: emailData.email,
          telefon: "-",
          mesaj: emailData.mesaj
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setEmailData({ yetkili: "", email: "", mesaj: "" })
        setTimeout(() => {
          setSubmitted(false)
          setShowEmailModal(false)
        }, 3000)
      } else {
        alert("Mail gönderilemedi. Lütfen tekrar deneyin.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setLoading(false)
    }
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
              <button 
                onClick={() => setShowEmailModal(true)} 
                className="flex items-center space-x-2 text-kirmizi-600 hover:text-kirmizi-700 transition-colors font-semibold group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
              <button 
                onClick={() => { setShowEmailModal(true); setMobileMenuOpen(false); }} 
                className="w-full flex items-center space-x-2 px-4 py-3 text-kirmizi-600 hover:bg-kirmizi-50 rounded-lg transition-colors font-semibold"
              >
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={() => !loading && setShowEmailModal(false)}>
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-3">Gönderildi!</h3>
                <p className="text-gray-600 text-lg">Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-lacivert-900">E-posta Gönder</h3>
                  </div>
                  <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg" disabled={loading}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      required 
                      value={emailData.yetkili} 
                      onChange={(e) => setEmailData({...emailData, yetkili: e.target.value})} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors" 
                      placeholder="Ad Soyad" 
                      disabled={loading} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-posta Adresiniz</label>
                    <input 
                      type="email" 
                      required 
                      value={emailData.email} 
                      onChange={(e) => setEmailData({...emailData, email: e.target.value})} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none transition-colors" 
                      placeholder="ornek@domain.com" 
                      disabled={loading} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız</label>
                    <textarea 
                      rows={5} 
                      required 
                      value={emailData.mesaj} 
                      onChange={(e) => setEmailData({...emailData, mesaj: e.target.value})} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-kirmizi-600 focus:outline-none resize-none transition-colors" 
                      placeholder="Mesajınızı yazın..." 
                      disabled={loading} 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 hover:from-kirmizi-700 hover:to-kirmizi-800 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    <span>{loading ? "Gönderiliyor..." : "Gönder"}</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
