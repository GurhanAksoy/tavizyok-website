import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Çerez Politikası - Taviz Yok",
  description: "Çerez kullanımı ve tercihleri"
}

export default function CerezPage() {
  const cookieTypes = [
    { icon: Settings, title: "Zorunlu Çerezler", description: "Platformun temel işlevleri için gerekli çerezler", color: "from-blue-500 to-blue-600" },
    { icon: BarChart3, title: "Performans Çerezleri", description: "Site performansını ölçmek için kullanılan çerezler", color: "from-green-500 to-green-600" },
    { icon: Cookie, title: "Analitik Çerezler", description: "Kullanıcı davranışlarını anlamak için çerezler", color: "from-purple-500 to-purple-600" }
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
              ÇEREZ POLİTİKASI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Taviz Yok web sitesi, kullanıcı deneyimini iyileştirmek, güvenli oturum yönetimini sağlamak ve sistem performansını artırmak amacıyla çerezlerden yararlanır.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cookieTypes.map((type, idx) => {
              const IconComponent = type.icon
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-lacivert-900 mb-3 text-center">{type.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 mb-12 rounded-r-2xl shadow-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              Çerezler aracılığıyla kişisel veri niteliğinde bilgiler izinsiz olarak toplanmaz. Kullanıcılar diledikleri zaman tarayıcı ayarlarından çerez tercihlerini değiştirebilir.
            </p>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 text-white rounded-3xl p-12 shadow-2xl">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Çerez Tercihleriniz</h2>
            <p className="text-xl leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Tarayıcınızın ayarlar bölümünden çerez tercihlerinizi yönetebilir, zorunlu olmayan çerezleri devre dışı bırakabilirsiniz.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-gray-300 text-center">
                <strong className="text-white">Not:</strong> Zorunlu çerezlerin devre dışı bırakılması platformun düzgün çalışmasını engelleyebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
