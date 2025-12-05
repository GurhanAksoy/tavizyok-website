"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Mail, Lock, BarChart3, Shield, AlertCircle, Loader2 } from "lucide-react"

export default function MerkezPanelGiris() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [csrfToken, setCsrfToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("/api/auth/csrf")
      .then(res => res.json())
      .then(data => setCsrfToken(data.token))
      .catch(() => setError("Güvenlik token alınamadı"))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Giriş başarısız")
        setLoading(false)
        return
      }

      router.push(data.redirect)
    } catch (err) {
      setError("Bağlantı hatası")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center space-x-2 text-blue-100 mb-8">
          <ArrowLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white/95 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Merkezi Yönetim Paneli</h1>
            <p className="text-gray-600">Parti Merkezi / Bakanlık Girişi</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">Yüksek güvenlikli giriş</span>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Yetkili E-posta</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-lg" required disabled={loading} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Güvenlik Şifresi</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-lg" required disabled={loading} />
              </div>
            </div>

            <button type="submit" disabled={loading || !csrfToken} className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold flex items-center justify-center disabled:opacity-50">
              {loading ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Giriş Yapılıyor...</>) : "Güvenli Giriş Yap"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}