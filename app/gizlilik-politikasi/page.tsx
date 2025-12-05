import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react"

export const metadata = {
  title: "Gizlilik Politikası - Taviz Yok",
  description: "Veri güvenliği ve gizlilik politikamız"
}

export default function GizlilikPage() {
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
              GİZLİLİK POLİTİKASI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-blue-200 hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-lacivert-900">Güvenli Veri</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-green-200 hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-lacivert-900">Şifreleme</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-purple-200 hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-lacivert-900">Şeffaflık</h3>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <span className="font-bold text-lacivert-900">Taviz Yok</span>, kullanıcıların paylaştığı tüm verileri gizlilik, güvenlik ve yürürlükteki mevzuata tam uyum çerçevesinde işler.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Platform üzerinden iletilen fotoğraf, video, konum ve açıklama bilgileri yalnızca ilgili kurumların erişimine sunulur. Bu veriler üçüncü kişilerle paylaşılmaz, yetkisiz erişime karşı korunur ve güvenli iletişim protokolleri ile saklanır.
            </p>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-8 my-12 rounded-r-2xl shadow-lg">
              <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                Veri güvenliği Taviz Yok için teknik bir zorunluluk olmanın ötesinde, vatandaşla kurum arasındaki güven ilişkisinin temel unsurlarından biridir.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Bu nedenle platformun tüm süreçlerinde gizlilik ve güvenlik ön planda tutulur. Tüm veri aktarımları şifrelenir ve güvenli sunucularda saklanır.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
