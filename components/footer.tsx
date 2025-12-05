import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/bayrak.svg" alt="TavizYok" className="w-20 h-20 mb-4" />
            <p className="text-sm text-gray-400">Türkiye'nin ulusal dijital bildirim platformu.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kurum-giris">Kurum Girişi</Link></li>
              <li><Link href="/merkez-panel-giris">Merkezi Panel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MessageCircle size={16} className="text-green-400" />
                <a href="https://wa.me/905304066686" target="_blank" className="hover:text-white">+90 530 406 66 86</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:iletisim@tavizyok.com" className="hover:text-white">iletisim@tavizyok.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Ankara, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TavizYok. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}