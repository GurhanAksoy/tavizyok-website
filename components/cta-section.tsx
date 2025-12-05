import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Kurumunuz İçin TavizYok'u Aktif Edin</h2>
          <p className="text-2xl text-gray-300 mb-12">Vatandaşlara daha hızlı, şeffaf ve kaliteli hizmet sunmak için bugün başlayın</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="https://wa.me/905304066686?text=Merhaba, TavizYok platformu hakkında bilgi almak istiyorum" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all group">
              <MessageCircle className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold text-lg mb-2">WhatsApp</span>
              <span className="text-gray-300 text-sm">+90 530 406 66 86</span>
            </a>

            <a href="tel:+905304066686" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all group">
              <Phone className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold text-lg mb-2">Telefon</span>
              <span className="text-gray-300 text-sm">0530 406 66 86</span>
            </a>

            <a href="mailto:iletisim@tavizyok.com" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all group">
              <Mail className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold text-lg mb-2">E-posta</span>
              <span className="text-gray-300 text-sm">iletisim@tavizyok.com</span>
            </a>
          </div>

          <a href="mailto:iletisim@tavizyok.com" className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
            <span>Hemen İletişime Geçin</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}