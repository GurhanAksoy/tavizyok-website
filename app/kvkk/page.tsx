import Link from "next/link"
import { ArrowLeft, FileText, Database, Trash2, Mail } from "lucide-react"

export const metadata = {
  title: "KVKK Aydinlatma Metni - Taviz Yok",
  description: "Kisisel verilerin korunmasi ve islenmesi"
}

export default function KVKKPage() {
  const dataTypes = [
    "Fotograf ve video icerikleri",
    "Konum bilgisi",
    "Aciklama metinleri",
    "Bildirimin gonderildigi zaman bilgisi",
    "Kurum tarafindan olusturulan islem kayitlari"
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
            KVKK AYDINLATMA METNI
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              6698 sayili Kisisel Verilerin Korunmasi Kanunu kapsaminda Taviz Yok uzerinden paylasilan tum bilgiler kisisel veri niteliginde olabilir ve yalnizca bildirimin ilgili kurum tarafindan isleme alinmasi ve cozume ulastirilmasi amaciyla islenir.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-lacivert-900 mb-6 flex items-center space-x-3">
              <Database className="w-6 h-6 text-kirmizi-600" />
              <span>Islenen Veri Turleri</span>
            </h2>
            <ul className="space-y-3">
              {dataTypes.map((type, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kirmizi-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FileText className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-lacivert-900 mb-2">Guvenli Saklama</h3>
              <p className="text-sm text-gray-600">Veriler guvenli veri merkezlerinde saklanir</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Database className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lacivert-900 mb-2">Sinirli Erisim</h3>
              <p className="text-sm text-gray-600">Yalnizca ilgili kurum erisebilir</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Trash2 className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-bold text-lacivert-900 mb-2">Otomatik Silme</h3>
              <p className="text-sm text-gray-600">Yasal sureler sonunda silinir</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-2xl p-8 text-center">
            <Mail className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Kisisel Veri Talepleriniz</h2>
            <p className="text-gray-300 mb-6">
              Kisisel verilerinize iliskin taleplerinizi asagidaki adres uzerinden iletebilirsiniz:
            </p>
            <a href="mailto:iletisim@tavizyok.com" className="inline-flex items-center space-x-2 px-8 py-4 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-xl font-bold transition-all">
              <span>iletisim@tavizyok.com</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
