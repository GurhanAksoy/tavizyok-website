'use client';

import Navbar from '@/components/Navbar';

export default function YasalUyari() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yasal Uyarı ve Sorumluluk Reddi
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Platform kullanım koşulları ve sorumluluk sınırları
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Card 1 - Platform Tanımı */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Platform Tanımı</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                <strong className="text-gray-900">TAVİZ YOK</strong>, yalnızca bir dijital iletişim ve kamusal bilgilendirme platformudur.
              </p>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-sm">
                  <strong className="text-red-600">Önemli:</strong> Kullanıcılar tarafından paylaşılan içeriklerin tüm <strong>hukuki, etik ve cezai sorumluluğu</strong>, içeriği gönderen kişiye aittir.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Sorumluluk Reddi */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Sorumluluk Reddi</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p className="font-semibold text-gray-900">Platform aşağıdaki içeriklerden sorumlu tutulamaz:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>İftira, hakaret, özel hayatın ihlali</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Gerçek dışı, kurgu veya manipülatif içerikler</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="text-sm">
                  TAVİZ YOK, gönderilen içerikleri <strong>ön incelemeye</strong> tabi tutma hakkını saklı tutar; ancak <strong>tüm içerikleri denetleme yükümlülüğü</strong> bulunmamaktadır.
                </p>
              </div>
              <p className="text-sm bg-green-50 border border-green-200 rounded-lg p-3">
                Sadece <strong>kamu yararı taşıyan içerikler</strong>, ilgili resmi kurumlara iletilir ve/veya sosyal medya platformlarında kamuoyuyla paylaşılır.
              </p>
            </div>
          </div>

          {/* Card 3 - Kullanıcının Sorumluluğu */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border-2 border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Kullanıcının Sorumluluğu ve Hak Devri</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Kullanıcı, içerik gönderimi ile birlikte aşağıdaki koşulları <strong className="text-orange-600">önceden okuyup, anladığını ve kabul ettiğini</strong> beyan eder:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <div>
                    <p>Gönderilen içeriklerin <strong>yayın, iletim, çoğaltma ve dağıtım hakları</strong> münhasıran TAVİZ YOK platformuna aittir.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <div>
                    <p>Kullanıcı, gönderdiği içeriği daha sonra <strong>tek taraflı olarak geri çekme, silme veya başka bir mecrada paylaşma hakkına</strong> sahip değildir.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <div>
                    <p>İçerikler, gerektiğinde <strong>TAVİZ YOK logosu, amblemi veya işaretleriyle</strong> yayımlanabilir.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4 - İlave Koruma */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">İlave Koruma ve Denge İlkeleri</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <p>Kullanıcı, gönderdiği içeriklerin <strong>TAVİZ YOK'un güvenilirliğine, tarafsızlığına veya itibarına zarar vermeyecek</strong> nitelikte olduğunu kabul eder.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <p>Resmi kurumlarca talep edilmesi hâlinde, gönderilen içeriklere ilişkin <strong>elde bulunan bilgiler (varsa)</strong> sadece <strong>yetkili makamlara</strong> açıklanabilir.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 5 - Son Uyarı */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-xl font-bold">Önemli Hatırlatma</h2>
            </div>
            <div className="leading-relaxed space-y-3 text-gray-300">
              <p>
                Bu metin, <strong className="text-white">yasal sorumlulukları sınırlandırmak</strong> ve kullanıcılarımızı bilgilendirmek amacıyla hazırlanmıştır.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mt-4">
                <p className="text-white font-semibold text-center">
                  İçerik gönderen her kullanıcı bu koşulları <strong>peşinen kabul etmiş sayılır.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}