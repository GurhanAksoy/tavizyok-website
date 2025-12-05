import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Kullanim Kosullari - Taviz Yok",
  description: "Platform kullanim sartlari ve kurallar"
}

export default function KullanimPage() {
  const rules = [
    { icon: CheckCircle, text: "Bildirdiginiz bilgilerin dogrulugundan sorumlu olun", type: "do" },
    { icon: XCircle, text: "Yaniltici veya koту niyetli bildirimde bulunmayin", type: "dont" },
    { icon: XCircle, text: "Ucuncu kisilerin kisisel verilerini izinsiz payласmayin", type: "dont" },
    { icon: XCircle, text: "Kamu duzenini bozacak icerikler olusturmayin", type: "dont" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Ana Sayfaya Don</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lacivert-900 mb-6">
            KULLANIM KOSULLARI
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Taviz Yok'u kullanan herkes platformu dogru, guvenli ve kamu yararina uygun sekilde kullanmayi kabul etmis sayilir.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-lacivert-900 mb-6">Kullanici Sorumluluklari</h2>
            <div className="space-y-4">
              {rules.map((rule, idx) => {
                const IconComponent = rule.icon
                return (
                  <div key={idx} className={`flex items-start space-x-3 p-4 rounded-lg ${rule.type === 'do' ? 'bg-green-50' : 'bg-red-50'}`}>
                    <IconComponent className={`w-6 h-6 flex-shrink-0 ${rule.type === 'do' ? 'text-green-600' : 'text-red-600'}`} />
                    <p className="text-gray-700">{rule.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Onemli Uyari</h3>
                <p className="text-gray-800 leading-relaxed">
                  Taviz Yok, kotu niyetli kullanim tespit ettiginde kullanici erisimini sinirlandirma hakkini sakli tutar.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Platform Sorumluluklari</h2>
            <p className="leading-relaxed">
              Platform, bildirimin iletilmesini saglayan bir altyapidir. Sorunlarin cozume ulastirilmasindan ilgili kurum sorumludur.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
