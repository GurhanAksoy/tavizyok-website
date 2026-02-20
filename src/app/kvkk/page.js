'use client';

import Navbar from '@/components/Navbar';

export default function KVKK() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kişisel Verilerin Korunması
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            6698 sayılı KVKK kapsamında hazırlanmış aydınlatma metni
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">🏢</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Veri Sorumlusu</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <p className="font-semibold text-gray-900 mb-2">TAVİZ YOK Platformu</p>
              <p className="text-sm">İletişim: <a href="mailto:iletisim@tavizyok.com" className="text-red-600 hover:text-red-700 font-medium">iletisim@tavizyok.com</a></p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">📋</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">İşlenen Kişisel Veriler</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>Platformumuz, kullanıcıdan doğrudan <strong>ad, soyad, T.C. kimlik numarası, iletişim bilgileri</strong> gibi kişisel verileri kesinlikle talep etmez.</p>
              <p>Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri kapsamında dolaylı kişisel veriler elde edilebilir:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Görsel ve işitsel veriler (yüz görüntüsü, ses)</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Konum ve çevresel bilgiler (arka plan, konuşma, tabela vb.)</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">🎯</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Kişisel Verilerin İşlenme Amaçları</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>Toplanan kişisel veriler aşağıdaki amaçlarla <strong>KVKK m.5/2-d ve m.28/1-c</strong> kapsamında açık rıza alınmaksızın işlenebilir:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Hukuka, insan haklarına veya kamu vicdanına aykırı durumların resmi kurumlara bildirilmesi</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Kamu düzeni, güvenlik ve sağlıkla ilgili ihlallerin yetkili mercilere iletilmesi</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Toplumsal farkındalık yaratılması ve kamuoyunun bilgilendirilmesi</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>İlgili video içeriklerinin sosyal medya ve dijital platformlarda yayımlanması</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">⚖️</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Hukuki Dayanak</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p className="font-semibold text-gray-900">KVKK'nın:</p>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div><p className="font-semibold text-gray-900 text-sm">5/2-d maddesi:</p><p className="text-sm">İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaati için veri işlenebilir.</p></div>
                <div><p className="font-semibold text-gray-900 text-sm">28/1-c maddesi:</p><p className="text-sm">Suçların önlenmesi ve bildirilmesi kapsamında veri işleme faaliyetleri Kanun'un kapsamı dışındadır.</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">🔄</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Kişisel Verilerin Aktarılması</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>Gönüllü gönderilen video içerikleri, içeriğin niteliğine göre aşağıdaki kurumlara aktarılabilir:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[['Trafik','Trafik Denetleme Şube Müdürlükleri'],['Asayiş','İl/İlçe Emniyet Müdürlükleri'],['Sağlık','Sağlık Bakanlığı ve bağlı kurumlar'],['Diğer','İlgili kamu kurum ve kuruluşları']].map(([k,v]) => (
                  <div key={k} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="font-semibold text-blue-700 text-sm">{k}</p>
                    <p className="text-xs text-gray-600">{v}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-3"><strong>Not:</strong> İçerikler, sosyal medya platformlarında kamuoyunu bilgilendirme amacıyla yayımlanabilir.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">⏱️</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Kişisel Verilerin Saklama Süresi</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p>İşlenen veriler yalnızca aşağıdaki durumlarda saklanır:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Resmi kuruma iletim süreci tamamlanana kadar</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">•</span><span>Yayınlanan içerik sosyal medya platformlarında erişilebilir olduğu sürece</span></li>
              </ul>
              <p className="text-sm bg-green-50 border border-green-200 rounded-lg p-3 mt-3">Sürecin ardından veriler, mevzuata uygun şekilde <strong>silinir, yok edilir veya anonim hale getirilir.</strong></p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border-2 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">👤</span></div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">İlgili Kişinin Hakları</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
              <p><strong>KVKK'nın 11. maddesi</strong> uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
              <ul className="space-y-2 ml-4">
                {['Kişisel verilerinizin işlenip işlenmediğini öğrenme','İşlenmişse buna ilişkin bilgi talep etme','Amacına uygun kullanılıp kullanılmadığını öğrenme','Üçüncü kişilere aktarılıp aktarılmadığını öğrenme','Eksik veya yanlış işlenmişse düzeltilmesini isteme','Gerekli şartlar oluştuğunda silinmesini veya yok edilmesini isteme','Otomatik sistemlerce analiz edilmesi durumunda buna itiraz etme'].map((h) => (
                  <li key={h} className="flex items-start space-x-2"><span className="text-red-600 mt-1 shrink-0">✓</span><span>{h}</span></li>
                ))}
              </ul>
              <div className="bg-white rounded-lg p-4 border-2 border-red-300 mt-4">
                <p className="text-sm"><strong className="text-red-600">Taleplerinizi:</strong><br/><a href="mailto:iletisim@tavizyok.com" className="text-red-600 hover:text-red-700 font-semibold underline break-all">iletisim@tavizyok.com</a> adresine e-posta göndererek iletebilirsiniz.</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0"><span className="text-2xl">✅</span></div>
              <h2 className="text-lg sm:text-xl font-bold">Kullanıcı Onayı ve Sorumluluk</h2>
            </div>
            <div className="leading-relaxed space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Kullanıcı, video gönderimiyle birlikte:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2"><span className="text-red-400 mt-1 shrink-0">•</span><span>Gönderdiği içerikte yer alan kişisel verilerin yukarıda açıklanan şartlar kapsamında işlenmesini</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-400 mt-1 shrink-0">•</span><span>İlgili kurumlara iletilmesini</span></li>
                <li className="flex items-start space-x-2"><span className="text-red-400 mt-1 shrink-0">•</span><span>Sosyal medya ve dijital mecralarda kamuoyunu bilgilendirme amacıyla yayımlanmasını</span></li>
              </ul>
              <p className="text-white font-semibold pt-2">önceden kabul etmiş sayılır.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
