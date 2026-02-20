'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const SITE_URL = 'https://tavizyok.com';
const SHARE_TEXT = '🚨 Haksızlığa sessiz kalmayın! TAVİZ YOK ile ihbar edin, vatandaş haberciliği yapın. Kimliğiniz tamamen gizli kalır.';

function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'TAVİZ YOK | Vatandaş Haberciliği & İhbar Platformu',
          text: SHARE_TEXT,
          url: SITE_URL,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-white/20">
      <p className="text-white/75 text-sm font-medium mb-4 text-center tracking-wide">
        📣 Platformumuzu arkadaşlarınla paylaş
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + '\n' + SITE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </a>
        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
          </svg>
          Twitter / X
        </a>
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] hover:bg-[#1464d8] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>
        {/* Native Share / Kopyala */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-white/30"
        >
          {copied ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              Kopyalandı!
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
              Paylaş
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 relative z-10">
          {/* Logo with subtle animation effect */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo.png" 
              alt="TAVİZ YOK Logo" 
              width={280} 
              height={280} 
              className="drop-shadow-2xl" 
              priority
            />
          </div>

          {/* Main Message - Bütünleşik Tasarım */}
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Haksızlığa <span className="text-red-600">Sessiz Kalmayın</span>
            </h1>
            
            {/* İhbar + Vatandaş Haberciliği Birleşik Bölüm */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200">
              <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                
                {/* İki Ana Kategori */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* İhbar Kartı */}
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border-2 border-red-200">
                    <div className="text-4xl mb-3 text-center">🚨</div>
                    <h3 className="text-xl font-bold text-red-600 mb-3 text-center">İhbar Videoları</h3>
                    <p className="text-sm text-gray-700 text-center mb-3">
                      Hukuka, insan haklarına, hayvan haklarına ve kamu vicdanına aykırı olayları belgeleyin.
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-red-600">✓</span>
                        <span className="font-medium">İlgili kurumlara iletilir</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-red-600">✓</span>
                        <span className="font-medium">Sosyal medyada paylaşılır</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-red-600">✓</span>
                        <span className="font-medium">Sürecin sonuna kadar takipçisiyiz</span>
                      </p>
                    </div>
                  </div>

                  {/* Vatandaş Haberciliği Kartı */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200">
                    <div className="text-4xl mb-3 text-center">📰</div>
                    <h3 className="text-xl font-bold text-blue-600 mb-3 text-center">Vatandaş Haberciliği</h3>
                    <p className="text-sm text-gray-700 text-center mb-3">
                      Habere değer her türlü videoyu gönderin. Toplumu ilgilendiren olayları paylaşın.
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-blue-600">✓</span>
                        <span className="font-medium">Editörlük sürecinden geçer</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-blue-600">✓</span>
                        <span className="font-medium">Sosyal medyada yayınlanır</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-blue-600">✓</span>
                        <span className="font-medium">Geniş kitlelere ulaşır</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Süreç Açıklaması */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center justify-center gap-3 flex-wrap text-sm md:text-base">
                    <span className="font-semibold text-gray-900">📤 Video Gönderin</span>
                    <span className="text-gray-400">→</span>
                    <span className="font-semibold text-gray-900">✅ Editör İncelemesi</span>
                    <span className="text-gray-400">→</span>
                    <span className="font-semibold text-gray-900">📢 Yayın/İletim</span>
                  </div>
                </div>
                
                {/* Gizlilik Vurgusu */}
                <div className="bg-red-50 rounded-2xl p-4 border-2 border-red-200">
                  <p className="text-lg md:text-xl font-bold text-red-600 text-center">
                    🔒 Kimliğiniz tamamen gizli kalır
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-4 bg-[#25D366] text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 border-2 border-[#25D366] hover:border-[#20BD5A]"
            >
              <span className="text-2xl mr-3">📲</span>
              <span className="text-white">Video Gönder</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform text-white">→</span>
            </a>
            
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-4 bg-red-600 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-red-700 hover:scale-105 transition-all duration-300 border-2 border-red-600 hover:border-red-700"
            >
              <span className="text-2xl mr-3">🚨</span>
              <span className="text-white">Haksızlık Bildir</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform text-white">→</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="text-green-600 text-lg">✓</span>
              <span className="font-medium">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="text-green-600 text-lg">✓</span>
              <span className="font-medium">Gizlilik Garantisi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="text-green-600 text-lg">✓</span>
              <span className="font-medium">Editörlük Süreci</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="text-green-600 text-lg">✓</span>
              <span className="font-medium">Sosyal Medya Yayını</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 md:px-12 py-16 bg-gradient-to-b from-white/50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-red-600">Merak Ettikleriniz</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Sıkça sorulan sorulara yanıtlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">📹</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Hangi videolar gönderilebilir?
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="font-semibold text-red-600 mb-1">1. Vatandaş Haberciliği:</p>
                  <p>Habere değer her türlü içerik (ilginç olaylar, toplumsal konular, gündem)</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                  <p className="font-semibold text-blue-600 mb-1">2. İhbar Videoları:</p>
                  <p>Hukuka, insan haklarına, hayvan haklarına ve kamu vicdanına aykırı durumlar</p>
                </div>
                <p className="text-red-600 font-semibold pt-2 text-center">
                  ⚠️ İftira, hakaret ve özel hayat ihlali kabul edilmez
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Gönderdiğim video ne işlem görür?
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-semibold text-gray-900">İnceleme</p>
                    <p className="text-xs text-gray-600">İçerik ve kalite kontrolü</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <p className="font-semibold text-gray-900">İhbar Videoları</p>
                    <p className="text-xs text-gray-600">İlgili kuruma iletilir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Haber İçerikleri</p>
                    <p className="text-xs text-gray-600">Sosyal medyada yayınlanır</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs pt-2 text-center italic">
                  * Sosyal medya yayını için abone olunması gerekir
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">🔒</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Kişisel bilgilerim güvende mi?
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-3">
                <p className="text-center">
                  <strong className="text-green-600 text-2xl">✓ Kesinlikle evet</strong>
                </p>
                <p className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                  Platformumuz kişisel bilgi talep etmez ve hiçbir şekilde paylaşmaz.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200 text-center">
                  <p className="font-semibold text-green-700 mb-1">KVKK Koruması</p>
                  <p className="text-xs text-green-600">Kimliğiniz bizim için tamamen güvendedir</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">❌</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Kabul edilmeyen içerikler
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-2 text-sm">
                <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2 border border-red-100">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Yargı süreci devam eden konular</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2 border border-red-100">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>İftira ve hakaret içeren videolar</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2 border border-red-100">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Kamu yararı ve haber değeri taşımayan içerikler</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2 border border-red-100">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Yer/zaman bilgisi veya görüntü kalitesi yetersiz kayıtlar</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">🏛️</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Hangi kurumlara iletiliyor?
              </h3>
              <p className="text-gray-700 text-sm mb-4 text-center">
                İçeriğin konusuna göre yetkili kuruma yönlendirilir:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex items-center gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-semibold text-blue-700">Trafik</p>
                    <p className="text-xs text-blue-600">Trafik Başkanlığı</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex items-center gap-3">
                  <span className="text-2xl">👮</span>
                  <div>
                    <p className="font-semibold text-blue-700">Asayiş</p>
                    <p className="text-xs text-blue-600">Emniyet Müdürlüğü</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex items-center gap-3">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <p className="font-semibold text-blue-700">Sağlık</p>
                    <p className="text-xs text-blue-600">Sağlık Bakanlığı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-200 hover:border-red-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-5 relative z-10">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
              <h3 className="font-bold mb-4 text-lg text-gray-900 text-center">
                Ad-soyad belirtmek zorunlu mu?
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-3">
                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200 text-center">
                  <p className="text-2xl font-bold text-red-600 mb-1">Hayır</p>
                  <p className="text-xs text-red-600">Zorunlu değildir</p>
                </div>
                <p className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
                  Kimlik bilgisi paylaşmanız gerekmez. Bu tamamen sizin tercihinizdir.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-200 text-center">
                  <p className="text-xs text-purple-700 font-medium">
                    🎭 İster isimsiz, ister isimli gönderin
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7 - Full width */}
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border-3 border-red-300 md:col-span-2 lg:col-span-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                    <span className="text-5xl">📢</span>
                  </div>
                </div>
                <h3 className="font-bold mb-4 text-2xl text-gray-900">
                  Bildirim sonrası bilgi alabiliyor muyum?
                </h3>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200">
                  <p className="text-gray-700 leading-relaxed text-lg mb-3">
                    <strong className="text-green-600 text-2xl">✓ Evet, kesinlikle!</strong>
                  </p>
                  <p className="text-gray-700 text-base">
                    Gönderdiğiniz içeriklerle ilgili düzenli olarak bilgilendirilirsiniz.
                  </p>
                  <p className="text-gray-600 text-sm mt-3 bg-gray-50 rounded-lg p-3 inline-block">
                    📊 Videonuzun hangi aşamada olduğunu ve ne zaman yayınlandığını öğrenebilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Tanık olduğunuz her önemli anı paylaşın
          </h2>
          <p className="text-base md:text-lg mb-6 opacity-95">
            Haksızlık mı gördünüz? Hayvan hakları ihlali mi? Habere değer bir olay mı yaşandı?<br />
            <strong>Vatandaş haberciliği</strong> ile birlikte sesimizi yükseltelim.
          </p>
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 text-base md:text-lg font-bold rounded-2xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <span className="text-xl mr-2">📱</span>
            <span>Hemen Gönder</span>
          </a>

          <ShareButtons />
        </div>
      </div>
    </main>
  );
}