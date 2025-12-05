import Link from "next/link"
import { ArrowLeft, Download, FileText, Image, Palette, Mail } from "lucide-react"

export const metadata = {
  title: "Basın Kiti - Taviz Yok",
  description: "Görsel ve metinsel içerikler"
}

export default function BasinPage() {
  const kitItems = [
    { icon: Image, title: "Logo Dosyaları", description: "PNG, SVG ve vektörel formatlar", color: "from-blue-500 to-blue-600" },
    { icon: Palette, title: "Renk Paleti", description: "Kurumsal renk kodları ve kullanım yönergeleri", color: "from-purple-500 to-purple-600" },
    { icon: FileText, title: "Tanıtım Metinleri", description: "Platform açıklamaları ve bilgilendirme metinleri", color: "from-green-500 to-green-600" },
    { icon: Download, title: "Ekran Görüntüleri", description: "Platform arayüz görselleri", color: "from-orange-500 to-orange-600" }
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
              BASIN KİTİ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-kirmizi-600 to-kirmizi-700 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            Taviz Yok platformuna ilişkin görsel ve metinsel içeriklerin doğru ve tutarlı şekilde kullanılabilmesi amacıyla hazırlanmış basın kiti aşağıdaki unsurları içerir:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {kitItems.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-lacivert-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-lg mb-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              Basın kiti içerikleri: <span className="font-semibold">Logo dosyaları, renk paleti ve tipografi yönergeleri, platform ekran görüntüleri, tanıtım metinleri, ulusal kapsam bilgileri ve iletişim detaylarını</span> kapsamaktadır.
            </p>
          </div>

          <div className="bg-gradient-to-r from-lacivert-900 to-lacivert-800 rounded-3xl p-12 text-center shadow-2xl">
            <Mail className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Basın Kiti Talebi</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Detaylı basın kiti için aşağıdaki e-posta adresinden iletişime geçebilirsiniz:
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
