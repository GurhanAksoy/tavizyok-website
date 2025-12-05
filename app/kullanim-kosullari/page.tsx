import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Kullanım Koşulları - Taviz Yok",
  description: "Platform kullanım şartları ve kurallar"
}

export default function KullanimPage() {
  const rules = [
    { icon: CheckCircle, text: "Bildirdiğiniz bilgilerin doğruluğundan sorumlu olun", type: "do" },
    { icon: XCircle, text: "Yanıltıcı veya kötü niyetli bildirimde bulunmayın", type: "dont" },
    { icon: XCircle, text: "Üçüncü kişilerin kişisel verilerini izinsiz paylaşmayın", type: "dont" },
    { icon: XCircle, text: "Kamu düzenini bozacak içerikler oluşturmayın", type: "dont" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Ana Sayfaya Dön</span>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lacivert-900 mb-6">
              KULLANIM KOŞULLARI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Taviz Yok'u kullanan herkes platformu doğru, güvenli ve kamu yararına uygun şekilde kullanmayı kabul etmiş sayılır.
          </p>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lacivert-900 mb-8 text-center">Kullanıcı Sorumlulukları</h2>
            <div className="space-y-6">
              {rules.map((rule, idx) => {
                const IconComponent = rule.icon
                return (
                  <div key={idx} className={`flex items-start space-x-4 p-6 rounded-2xl ${rule.type === 'do' ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                    <IconComponent className={`w-8 h-8 flex-shrink-0 ${rule.type === 'do' ? 'text-green-600' : 'text-red-600'}`} />
                    <p className="text-lg text-gray-700 leading-relaxed">{rule.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-8 mb-12 rounded-r-2xl shadow-lg">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-10 h-10 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Önemli Uyarı</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Taviz Yok, kötü niyetli kullanım tespit ettiğinde kullanıcı erişimini sınırlandırma hakkını saklı tutar.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Sorumlulukları</h2>
            <p className="text-xl leading-relaxed">
              Platform, bildirimin iletilmesini sağlayan bir altyapıdır. Sorunların çözüme ulaştırılmasından ilgili kurum sorumludur.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
