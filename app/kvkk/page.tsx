import Link from "next/link"
import { ArrowLeft, FileText, Database, Trash2, Mail } from "lucide-react"

export const metadata = {
  title: "KVKK Aydınlatma Metni - Taviz Yok",
  description: "Kişisel verilerin korunması ve işlenmesi"
}

export default function KVKKPage() {
  const dataTypes = [
    "Fotoğraf ve video içerikleri",
    "Konum bilgisi",
    "Açıklama metinleri",
    "Bildirimin gönderildiği zaman bilgisi",
    "Kurum tarafından oluşturulan işlem kayıtları"
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
              KVKK AYDINLATMA METNİ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 mb-12 rounded-r-2xl shadow-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold">6698 sayılı Kişisel Verilerin Korunması Kanunu</span> kapsamında Taviz Yok üzerinden paylaşılan tüm bilgiler kişisel veri niteliğinde olabilir ve yalnızca bildirimin ilgili kurum tarafından işleme alınması ve çözüme ulaştırılması amacıyla işlenir.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lacivert-900 mb-8 flex items-center space-x-4">
              <Database className="w-10 h-10 text-kirmizi-600" />
              <span>İşlenen Veri Türleri</span>
            </h2>
            <ul className="space-y-4">
              {dataTypes.map((type, idx) => (
                <li key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-kirmizi-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200 hover:scale-105 transition-all">
              <FileText className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-lacivert-900 mb-3">Güvenli Saklama</h3>
              <p className="text-gray-600">Veriler güvenli veri merkezlerinde saklanır</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:scale-105 transition-all">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-lacivert-900 mb-3">Sınırlı Erişim</h3>
              <p className="text-gray-600">Yalnızca ilgili kurum erişebilir</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200 hover:scale-105 transition-all">
              <Trash2 className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-lacivert-900 mb-3">Otomatik Silme</h3>
              <p className="text-gray-600">Yasal süreler sonunda silinir</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-3xl p-12 text-center shadow-2xl">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kişisel Veri Talepleriniz</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kişisel verilerinize ilişkin taleplerinizi aşağıdaki adres üzerinden iletebilirsiniz:
            </p>
            <a href="mailto:iletisim@tavizyok.com" className="inline-flex items-center space-x-3 px-10 py-5 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl">
              <Mail className="w-6 h-6" />
              <span>iletisim@tavizyok.com</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
