import Link from "next/link"
import { ArrowLeft, Download, FileText, Image, Palette } from "lucide-react"

export const metadata = {
  title: "Basin Kiti - Taviz Yok",
  description: "Gorsel ve metinsel icerikler"
}

export default function BasinPage() {
  const kitItems = [
    { icon: Image, title: "Logo Dosyalari", description: "PNG, SVG ve vektorel formatlar" },
    { icon: Palette, title: "Renk Paleti", description: "Kurumsal renk kodlari ve kullanim yonergeleri" },
    { icon: FileText, title: "Tanitim Metinleri", description: "Platform aciklamalari ve bilgilendirme metinleri" },
    { icon: Download, title: "Ekran Goruntuleri", description: "Platform arayuz gorselleri" }
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
            BASIN KITI
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            Taviz Yok platformuna iliskin gorsel ve metinsel iceriklerin dogru ve tutarli sekilde kullanilabilmesi amaciyla hazirlanmis basin kiti asagidaki unsurlari icerir:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {kitItems.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-kirmizi-600 to-kirmizi-700 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-lacivert-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-800 leading-relaxed">
              Basin kiti icerikleri: Logo dosyalari, renk paleti ve tipografi yonergeleri, platform ekran goruntuleri, tanitim metinleri, ulusal kapsam bilgileri ve iletisim detaylarini kapsamaktadir.
            </p>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Basin Kiti Talebi</h2>
            <p className="text-gray-300 mb-6">
              Detayli basin kiti icin asagidaki e-posta adresinden iletisime gecebilirsiniz:
            </p>
            <a href="mailto:iletisim@tavizyok.com" className="inline-flex items-center space-x-2 px-8 py-4 bg-kirmizi-600 hover:bg-kirmizi-700 text-white rounded-xl font-bold transition-all hover:scale-105">
              <span>iletisim@tavizyok.com</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
