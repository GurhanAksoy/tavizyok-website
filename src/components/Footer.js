import Link from 'next/link';
import { FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          
          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-white mb-2">Hızlı Erişim</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/" className="text-gray-400 hover:text-red-400 transition-colors">Anasayfa</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-red-400 transition-colors">KVKK</Link></li>
              <li><Link href="/yasal-uyari" className="text-gray-400 hover:text-red-400 transition-colors">Yasal Uyarı</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white mb-2">İletişim</h4>
            <div className="space-y-1.5 text-xs">
              <a 
                href="https://wa.me/905304066686" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp className="text-sm" />
                <span>0 530 406 66 86</span>
              </a>
              <a 
                href="mailto:iletisim@tavizyok.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="text-sm" />
                <span>iletisim@tavizyok.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xs font-bold text-white mb-2">Sosyal Medya</h4>
            <div className="flex space-x-2">
              <a 
                href="https://www.youtube.com/@Taviz_Yok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-base text-white" />
              </a>
              <a 
                href="https://www.instagram.com/tavizyokplatformu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 bg-black py-3 text-center text-xs text-gray-500">
        © 2025 TAVİZ YOK. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}