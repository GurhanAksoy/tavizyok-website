'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Sol: Metin */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-4 bg-red-50 px-3 py-1.5 rounded-full">
                Vatandaş Haberciliği Platformu
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Gördüğünüzü<br />
                <span className="text-red-600">Belgeleyin.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Toplumu ilgilendiren her olay, her haksızlık, her ihlal — WhatsApp üzerinden anonim olarak iletin. Editör ekibimiz değerlendirsin, ilgili yerlere ulaşsın.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/905304066686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                >
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Haber veya Video Gönder
                </a>
                <a
                  href="https://wa.me/905304066686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-red-50 text-red-600 font-semibold px-7 py-3.5 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all duration-200 text-sm sm:text-base"
                >
                  Haksızlık Bildir
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                {['Anonim', 'KVKK Uyumlu', 'Editörlük Güvencesi', '7/24 Aktif'].map((t) => (
                  <span key={t} className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Sağ: Logo */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 relative">
                <Image
                  src="/logo.png"
                  alt="TAVİZ YOK"
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── İSTATİSTİKLER ── */}
      <section className="bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { num: '%65', label: 'Vatandaş Haberciliği' },
              { num: '%35', label: 'İhbar Hattı' },
              { num: '100%', label: 'Anonim Güvence' },
              { num: '7/24', label: 'Aktif Hat' },
            ].map((s, i) => {
              const borderClass = i === 0 ? 'border-r border-b md:border-b-0 border-red-500'
                : i === 1 ? 'border-b md:border-b-0 md:border-r border-red-500'
                : i === 2 ? 'border-r border-red-500' : '';
              return (
              <div key={i} className={`text-center px-4 py-2 ${borderClass}`}>
                <div className="text-2xl sm:text-3xl font-bold mb-0.5">{s.num}</div>
                <div className="text-xs text-red-100 uppercase tracking-wider">{s.label}</div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VATANDAŞ HABERCİLİĞİ (ANA HİZMET) ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Başlık */}
          <div className="mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3 bg-red-50 px-3 py-1.5 rounded-full">
              Ana Hizmet
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Vatandaş Haberciliği
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl">
              Toplumu ilgilendiren her gelişmeyi, yerel sorunu, kamu ihlalini anonim ve güvenli biçimde iletin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">

            {/* Ana kart */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200 md:row-span-2">
              <div className="w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">📰</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Gördüğünüzü Gönderin</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Kameranız ve WhatsApp hattımız yeterli. Trafik ihlalinden çevre kirliliğine, kamu hizmeti sorunlarından sosyal olaylara kadar her şeyi iletin.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '🎥', title: 'Haber Değerli İçerik', desc: 'Trafik, çevre, altyapı, sosyal olaylar, yerel sorunlar' },
                  { icon: '✂️', title: 'Editörlük Süreci', desc: 'Her içerik uzman ekip tarafından incelenir' },
                  { icon: '📡', title: 'Geniş Yayın', desc: 'Sosyal medya kanallarımızda kamuoyuyla paylaşılır' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-3.5 bg-white rounded-xl border border-gray-100">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/905304066686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm"
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Haber Göndermek İçin Tıklayın
              </a>
            </div>

            {/* Kategoriler */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200">
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Kabul Edilen Konular</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '🚗', label: 'Trafik' },
                  { icon: '🌿', label: 'Çevre' },
                  { icon: '🏗️', label: 'Altyapı' },
                  { icon: '🐾', label: 'Hayvan Hakları' },
                  { icon: '🏥', label: 'Sağlık' },
                  { icon: '👥', label: 'Sosyal Olaylar' },
                  { icon: '🏛️', label: 'Kamu Düzeni' },
                  { icon: '📍', label: 'Yerel Sorunlar' },
                ].map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="text-sm shrink-0">{cat.icon}</span>
                    <span className="text-xs font-medium text-gray-700">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nasıl işler */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200">
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Nasıl İşler?</p>
              <div className="space-y-0">
                {[
                  { step: '01', label: 'Video veya bilgi WhatsApp\'a iletilir' },
                  { step: '02', label: 'Editör ekibi içeriği inceler ve değerlendirir' },
                  { step: '03', label: 'Onaylanan içerik yayına alınır veya kuruma iletilir' },
                ].map((s, i) => (
                  <div key={s.step} className={`flex gap-3 py-3.5 ${i < 2 ? 'border-b border-gray-200' : ''}`}>
                    <span className="text-lg font-bold text-red-200 w-8 shrink-0 font-mono">{s.step}</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── İHBAR HATTI (İKİNCİL) ── */}
      <section className="py-14 sm:py-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-8 sm:mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3 bg-red-50 px-3 py-1.5 rounded-full">
              Ek Hizmet
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">İhbar ve Bildirim Hattı</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl">
              Hukuki ihlaller, hayvan hakları ve trafik güvenliğine ilişkin bildirimler doğrudan yetkili kurumlara iletilir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: '⚖️', title: 'Hukuki İhlaller', desc: 'İnsan hakları ve kamu hukukuna aykırı davranışlar yetkili makamlara iletilir.', kurumlar: ['Savcılık', 'Emniyet'] },
              { icon: '🐾', title: 'Hayvan Hakları', desc: 'Hayvan istismarı ve ihmaline dair belgeler ilgili birimlerle paylaşılır.', kurumlar: ['Belediye', 'Tarım Bakanlığı'] },
              { icon: '🚦', title: 'Trafik ve Güvenlik', desc: 'Tehlikeli sürüş ve trafik düzeni ihlalleri Trafik Başkanlığı\'na iletilir.', kurumlar: ['Trafik Başkanlığı'] },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.kurumlar.map((k) => (
                    <span key={k} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{k}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Kabul edilmeyenler */}
          <div className="mt-5 bg-white rounded-2xl p-5 sm:p-6 border border-orange-200 bg-orange-50">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-base">⚠️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">Kabul Edilmeyen İçerikler</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    İftira, hakaret, özel hayat ihlali; yargı süreci devam eden konular; haber değeri veya yer ve zaman bilgisi yetersiz kayıtlar kabul edilmez.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/905304066686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-200 w-full sm:w-auto shrink-0"
              >
                Haksızlık Bildir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GİZLİLİK VE GÜVEN ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3 bg-red-50 px-3 py-1.5 rounded-full">
              Güvencemiz
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Kimliğiniz Bizimle Güvende
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-gray-100">
            {[
              { icon: '🔒', title: 'Sıfır Kimlik Talebi', desc: 'Adınızı ya da iletişim bilgilerinizi paylaşmanız zorunlu değildir. Tamamen anonim gönderebilirsiniz.' },
              { icon: '🛡️', title: 'KVKK Uyumu', desc: 'Tüm süreçlerimiz Kişisel Verilerin Korunması Kanunu çerçevesinde yürütülür. Bilgileriniz üçüncü taraflarla paylaşılmaz.' },
              { icon: '📊', title: 'Süreç Takibi', desc: 'Gönderdiğiniz içeriğin hangi aşamada olduğunu öğrenebilir, yayına alınıp alınmadığından haberdar olabilirsiniz.' },
            ].map((item, i) => (
              <div key={item.title} className={`text-center sm:text-left p-6 sm:p-8 ${i === 1 ? 'bg-gray-50 rounded-2xl sm:rounded-none' : ''}`}>
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gray-900 text-white py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Her Saniye Önemlidir
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Tanık olduğunuz önemli anı belgeleyin ve iletin. Editör ekibimiz değerlendirsin, hak ettiği yere ulaşsın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
            >
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Haber veya Video Gönder
            </a>
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-200 text-sm sm:text-base"
            >
              Haksızlık Bildir
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
