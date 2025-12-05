import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lacivert-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4 md:mb-6 bg-krem p-3 md:p-4 rounded-xl inline-block">
              <img src="/logo.png" alt="Taviz Yok" className="w-12 h-12 md:w-16 md:h-16" />
              <div>
                <p className="text-xs md:text-sm text-lacivert-900 font-semibold">Dijital Bildirim Platformu</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">Türkiye'nin dijital bildirim platformu. Hızlı, şeffaf ve çözüm odaklı hizmetten taviz yok.</p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6">Kurumsal</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><Link href="#hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="#vizyon" className="hover:text-white transition-colors">Vizyon & Misyon</Link></li>
              <li><Link href="#ekip" className="hover:text-white transition-colors">Ekibimiz</Link></li>
              <li><Link href="#basin" className="hover:text-white transition-colors">Basın Kiti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6">Yasal</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6">İletişim</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li className="flex items-center space-x-2 md:space-x-3">
                <MessageCircle size={16} className="text-green-400 flex-shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="https://wa.me/905304066686" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+90 530 406 66 86</a>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Mail size={16} className="text-kirmizi-500 flex-shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="mailto:iletisim@tavizyok.com" className="hover:text-white transition-colors">iletisim@tavizyok.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            <div className="text-xs md:text-sm text-gray-400 text-center">© {currentYear} Taviz Yok. Tüm hakları saklıdır.</div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-[10px] md:text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistem Aktif</span>
              </div>
              <span>•</span>
              <span>256-bit SSL Güvenlik</span>
              <span>•</span>
              <span>KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}