'use client';

import Navbar from '@/components/Navbar';

export default function KVKK() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kişisel Verilerin Korunması
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            6698 sayılı KVKK kapsamında hazırlanmış aydınlatma metni
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Veri Sorumlusu</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-2">TAVİZ YOK Platformu</p>
              <p className="text-sm">İletişim: <a href="mailto:iletisim@tavizyok.com" className="text-red-600 hover:text-red-700 font-medium">iletisim@tavizyok.com</a></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">İşlenen Kişisel Veriler</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Platformumuz, kullanıcıdan doğrudan <strong>ad, soyad, T.C. kimlik numarası, iletişim bilgileri</strong> gibi kişisel verileri kesinlikle talep etmez.
              </p>
              <p>
                Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri kapsamında dolaylı kişisel veriler elde edilebilir:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Görsel ve işitsel veriler (yüz görüntüsü, ses)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Konum ve çevresel bilgiler (arka plan, konuşma, tabela vb.)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Kişisel Verilerin İşlenme Amaçları</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Toplanan kişisel veriler aşağıdaki amaçlarla <strong>KVKK m.5/2-d ve m.28/1-c</strong> kapsamında açık rıza alınmaksızın işlenebilir:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Hukuka, insan haklarına veya kamu vicdanına aykırı durumların resmi kurumlara bildirilmesi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Kamu düzeni, güvenlik ve sağlıkla ilgili ihlallerin yetkili mercilere iletilmesi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Toplumsal farkındalık yaratılması ve kamuoyunun bilgilendirilmesi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>İlgili video içeriklerinin sosyal medya ve dijital platformlarda yayımlanması</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Hukuki Dayanak</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p className="font-semibold text-gray-900">KVKK'nın:</p>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">5/2-d maddesi:</p>
                  <p className="text-sm">İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaati için veri işlenebilir.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">28/1-c maddesi:</p>
                  <p className="text-sm">Suçların önlenmesi ve bildirilmesi kapsamında veri işleme faaliyetleri Kanun'un kapsamı dışındadır.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Kişisel Verilerin Aktarılması</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Gönüllü gönderilen video içerikleri, içeriğin niteliğine göre aşağıdaki kurumlara aktarılabilir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="font-semibold text-blue-700 text-sm">Trafik</p>
                  <p className="text-xs text-gray-600">Trafik Denetleme Şube Müdürlükleri</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="font-semibold text-blue-700 text-sm">Asayiş</p>
                  <p className="text-xs text-gray-600">İl/İlçe Emniyet Müdürlükleri</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="font-semibold text-blue-700 text-sm">Sağlık</p>
                  <p className="text-xs text-gray-600">Sağlık Bakanlığı ve bağlı kurumlar</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="font-semibold text-blue-700 text-sm">Diğer</p>
                  <p className="text-xs text-gray-600">İlgili kamu kurum ve kuruluşları</p>
                </div>
              </div>
              <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <strong>Not:</strong> İçerikler, sosyal medya platformlarında ve dijital mecralarda kamuoyunu bilgilendirme amacıyla yayımlanabilir.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Kişisel Verilerin Saklama Süresi</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>İşlenen veriler yalnızca aşağıdaki durumlarda saklanır:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Resmi kuruma iletim süreci tamamlanana kadar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Yayınlanan içerik sosyal medya platformlarında erişilebilir olduğu sürece</span>
                </li>
              </ul>
              <p className="text-sm bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                Sürecin ardından veriler, mevzuata uygun şekilde <strong>silinir, yok edilir veya anonim hale getirilir.</strong>
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border-2 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">İlgili Kişinin Hakları</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                <strong>KVKK'nın 11. maddesi</strong> uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>İşlenmişse buna ilişkin bilgi talep etme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Üçüncü kişilere aktarılıp aktarılmadığını öğrenme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Eksik veya yanlış işlenmişse düzeltilmesini isteme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Gerekli şartlar oluştuğunda silinmesini veya yok edilmesini isteme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Otomatik sistemlerce analiz edilmesi durumunda buna itiraz etme</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-4 border-2 border-red-300 mt-4">
                <p className="text-sm">
                  <strong className="text-red-600">Taleplerinizi:</strong><br/>
                  <a href="mailto:iletisim@tavizyok.com" className="text-red-600 hover:text-red-700 font-semibold underline">iletisim@tavizyok.com</a> adresine e-posta göndererek iletebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h2 className="text-xl font-bold">Kullanıcı Onayı ve Sorumluluk</h2>
            </div>
            <div className="leading-relaxed space-y-3 text-gray-300">
              <p>
                Kullanıcı, video gönderimiyle birlikte:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Gönderdiği içerikte yer alan kişisel verilerin yukarıda açıklanan şartlar kapsamında işlenmesini</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>İlgili kurumlara iletilmesini</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sosyal medya ve dijital mecralarda kamuoyunu bilgilendirme amacıyla yayımlanmasını</span>
                </li>
              </ul>
              <p className="text-white font-semibold pt-2">
                önceden kabul etmiş sayılır.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}