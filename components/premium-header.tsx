"use client"

import { useState } from "react"
import { Building2, BarChart3, Mail, X, Send, Menu, CheckCircle, AlertCircle } from "lucide-react"

export default function PremiumHeader() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailData, setEmailData] = useState({ yetkili: "", email: "", mesaj: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!emailData.yetkili.trim() || !emailData.email.trim() || !emailData.mesaj.trim()) {
      setError("Lütfen tüm alanları doldurun")
      setTimeout(() => setError(""), 3000)
      return
    }

    setLoading(true)
    setError("")

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

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        setEmailData({ yetkili: "", email: "", mesaj: "" })
        setTimeout(() => {
          setSubmitted(false)
          setShowEmailModal(false)
        }, 3000)
      } else {
        setError(data.error || "Mail gönderilemedi. Lütfen tekrar deneyin.")
        setTimeout(() => setError(""), 5000)
      }
    } catch (error: any) {
      console.error("Error:", error)
      setError("Bağlantı hatası. Lütfen tekrar deneyin.")
      setTimeout(() => setError(""), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-krem/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <img src="/logo.png" alt="Taviz Yok" className="w-16 h-16 md:w-24 md:h-24" />
              <div className="hidden sm:block">
                <p className="text-xs md:text-sm text-lacivert-900 font-semibold">Dijital Bildirim Platformu</p>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 text-lacivert-900 z-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex items-center gap-3 relative z-50">
              {/* E-POSTA GÖNDER BUTTON */}
              <button 
                type="button"
                onClick={() => {
                  console.log('🔥 E-POSTA BUTTON TIKLANDI!')
                  setShowEmailModal(true)
                }}
                className="flex items-center space-x-2 px-4 py-2 text-kirmizi-600 hover:text-white hover:bg-kirmizi-600 rounded-lg transition-all font-semibold border-2 border-kirmizi-600"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">E-posta Gönder</span>
              </button>
              
              {/* KURUM GİRİŞİ */}
              <a 
                href="/kurum-giris" 
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all shadow-lg"
              >
                <Building2 className="w-4 h-4" />
                <span>Kurum Girişi</span>
              </a>
              
              {/* MERKEZİ PANEL */}
              <a 
                href="/merkez-panel-giris" 
                className="flex items-center space-x-2 px-4 py-2 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-lg font-semibold text-sm transition-all shadow-lg"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Merkezi Panel</span>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <button 
                type="button"
                onClick={() => { 
                  console.log('🔥 MOBILE E-POSTA BUTTON TIKLANDI!')
                  setShowEmailModal(true)
                  setMobileMenuOpen(false)
                }} 
                className="w-full flex items-center space-x-2 px-4 py-3 text-kirmizi-600 hover:bg-kirmizi-50 rounded-lg transition-colors font-semibold border-2 border-kirmizi-600"
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

      {/* EMAIL MODAL */}
      {showEmailModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4" 
          onClick={() => {
            if (!loading) {
              console.log('🔥 MODAL BACKDROP TIKLANDI - KAPANIYOR')
              setShowEmailModal(false)
            }
          }}
        >
          <div 
            className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full shadow-2xl relative z-[1000]" 
            onClick={(e) => e.stopPropagation()}
          >
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
                  <button 
                    type="button"
                    onClick={() => {
                      console.log('🔥 KAPAT BUTTON TIKLANDI')
                      setShowEmailModal(false)
                    }} 
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg" 
                    disabled={loading}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-red-800 font-semibold">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız *</label>
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-posta Adresiniz *</label>
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız *</label>
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
