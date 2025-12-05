import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react"

export const metadata = {
  title: "Gizlilik Politikasi - Taviz Yok",
  description: "Veri guvenligi ve gizlilik politikamiz"
}

export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center space-x-2 text-lacivert-900 hover:text-kirmizi-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Ana Sayfaya Don</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lacivert-900 mb-6">
            GIZLILIK POLITIKASI
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lacivert-900">Guvenli Veri</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lacivert-900">Sifreleme</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lacivert-900">Seffaflik</h3>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Taviz Yok, kullanicilarin paylastigi tum verileri gizlilik, guvenlik ve yururlukteki mevzuata tam uyum cercevesinde isler.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Platform uzerinden iletilen fotograf, video, konum ve aciklama bilgileri yalnizca ilgili kurumlarin erisim

ine sunulur. Bu veriler ucuncu kisilerle paylasilmaz, yetkisiz erisime karsi korunur ve guvenli iletisim protokolleri ile saklanir.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed font-semibold">
                Veri guvenligi Taviz Yok icin teknik bir zorunluluk olmanin otesinde, vatandasla kurum arasindaki guven iliskisinin temel unsurlarindan biridir.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bu nedenle platformun tum sureclerinde gizlilik ve guvenlik on planda tutulur. Tum veri aktarimlari sifrelenir ve guvenli sunucularda saklanir.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
