'use client';

import Navbar from '@/components/Navbar';

export default function KVKK() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        .card-dark {
          background: linear-gradient(135deg, #141414, #0f0f0f);
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s ease;
        }
        .card-dark:hover { border-color: rgba(200,16,46,0.25); }
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8960c, transparent);
        }
      `}</style>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 font-body">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs text-[#c8102e] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 font-body">6698 Sayılı Kanun</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#f5f0e8] mb-3 sm:mb-4 leading-tight">
            Kişisel Verilerin<br />Korunması
          </h1>
          <p className="text-[#666] text-xs sm:text-sm font-body">KVKK kapsamında hazırlanmış aydınlatma metni</p>
          <div className="gold-line w-20 sm:w-24 mx-auto mt-5 sm:mt-6"></div>
        </div>

        <div className="space-y-4 sm:space-y-5">

          {/* Card 1 — Veri Sorumlusu */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">🏢</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Veri Sorumlusu</h2>
            </div>
            <p className="text-[#ddd] font-semibold mb-1 text-sm sm:text-base">TAVİZ YOK Platformu</p>
            <p className="text-xs sm:text-sm text-[#666]">
              İletişim:{' '}
              <a href="mailto:iletisim@tavizyok.com" className="text-[#c8102e] hover:text-red-400 transition-colors">
                iletisim@tavizyok.com
              </a>
            </p>
          </div>

          {/* Card 2 — İşlenen Veriler */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">📋</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">İşlenen Kişisel Veriler</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              Platformumuz, kullanıcıdan doğrudan <strong className="text-[#ddd]">ad, soyad, T.C. kimlik numarası, iletişim bilgileri</strong> gibi kişisel verileri kesinlikle talep etmez.
            </p>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri kapsamında dolaylı kişisel veriler elde edilebilir:
            </p>
            <div className="space-y-2">
              {[
                'Görsel ve işitsel veriler (yüz görüntüsü, ses)',
                'Konum ve çevresel bilgiler (arka plan, konuşma, tabela vb.)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[#c8102e] mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — İşlenme Amaçları */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">🎯</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Kişisel Verilerin İşlenme Amaçları</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              Toplanan kişisel veriler aşağıdaki amaçlarla{' '}
              <strong className="text-[#ddd]">KVKK m.5/2-d ve m.28/1-c</strong> kapsamında açık rıza alınmaksızın işlenebilir:
            </p>
            <div className="space-y-2">
              {[
                'Hukuka, insan haklarına veya kamu vicdanına aykırı durumların resmi kurumlara bildirilmesi',
                'Kamu düzeni, güvenlik ve sağlıkla ilgili ihlallerin yetkili mercilere iletilmesi',
                'Toplumsal farkındalık yaratılması ve kamuoyunun bilgilendirilmesi',
                'İlgili video içeriklerinin sosyal medya ve dijital platformlarda yayımlanması',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[#c8102e] mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 — Hukuki Dayanak */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">⚖️</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Hukuki Dayanak</h2>
            </div>
            <p className="text-[#aaa] font-semibold mb-3 sm:mb-4 text-sm">KVKK'nın:</p>
            <div className="space-y-2 sm:space-y-3">
              {[
                {
                  madde: '5/2-d maddesi',
                  aciklama: 'İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaati için veri işlenebilir.',
                },
                {
                  madde: '28/1-c maddesi',
                  aciklama: 'Suçların önlenmesi ve bildirilmesi kapsamında veri işleme faaliyetleri Kanun\'un kapsamı dışındadır.',
                },
              ].map((item) => (
                <div key={item.madde} className="p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-semibold text-[#ddd] text-xs sm:text-sm mb-1">{item.madde}</p>
                  <p className="text-[#777] text-xs leading-relaxed">{item.aciklama}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 — Aktarım */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">🔄</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Kişisel Verilerin Aktarılması</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-4 sm:mb-5 text-xs sm:text-sm">
              Gönüllü gönderilen video içerikleri, içeriğin niteliğine göre aşağıdaki kurumlara aktarılabilir:
            </p>
            {/* FIX: grid-cols-2 zaten mobil için uygun ama padding küçültüldü */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {[
                { label: 'Trafik', sub: 'Trafik Denetleme Şube Müdürlükleri' },
                { label: 'Asayiş', sub: 'İl/İlçe Emniyet Müdürlükleri' },
                { label: 'Sağlık', sub: 'Sağlık Bakanlığı ve bağlı kurumlar' },
                { label: 'Diğer', sub: 'İlgili kamu kurum ve kuruluşları' },
              ].map((item) => (
                <div key={item.label} className="p-2.5 sm:p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-semibold text-[#ddd] text-xs sm:text-sm mb-0.5">{item.label}</p>
                  <p className="text-[#666] text-[10px] sm:text-xs leading-tight">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(184,150,12,0.06)', border: '1px solid rgba(184,150,12,0.15)' }}>
              <p className="text-xs sm:text-sm text-[#888] leading-relaxed">
                <strong className="text-[#b8960c]">Not:</strong> İçerikler, sosyal medya platformlarında ve dijital mecralarda kamuoyunu bilgilendirme amacıyla yayımlanabilir.
              </p>
            </div>
          </div>

          {/* Card 6 — Saklama Süresi */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">⏱️</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Kişisel Verilerin Saklama Süresi</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">İşlenen veriler yalnızca aşağıdaki durumlarda saklanır:</p>
            <div className="space-y-2 mb-3 sm:mb-4">
              {[
                'Resmi kuruma iletim süreci tamamlanana kadar',
                'Yayınlanan içerik sosyal medya platformlarında erişilebilir olduğu sürece',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[#c8102e] mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-xs sm:text-sm text-[#888] leading-relaxed">
                Sürecin ardından veriler, mevzuata uygun şekilde{' '}
                <strong className="text-[#ddd]">silinir, yok edilir veya anonim hale getirilir.</strong>
              </p>
            </div>
          </div>

          {/* Card 7 — Haklar */}
          <div className="rounded-2xl p-5 sm:p-8" style={{ background: 'linear-gradient(135deg, #1a0808, #110505)', border: '1px solid rgba(200,16,46,0.2)' }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">👤</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">İlgili Kişinin Hakları</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
              <strong className="text-[#ddd]">KVKK'nın 11. maddesi</strong> uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <div className="space-y-2 mb-5 sm:mb-6">
              {[
                'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
                'İşlenmişse buna ilişkin bilgi talep etme',
                'Amacına uygun kullanılıp kullanılmadığını öğrenme',
                'Üçüncü kişilere aktarılıp aktarılmadığını öğrenme',
                'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
                'Gerekli şartlar oluştuğunda silinmesini veya yok edilmesini isteme',
                'Otomatik sistemlerce analiz edilmesi durumunda buna itiraz etme',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-green-400 mt-0.5 text-sm shrink-0">✓</span>
                  <span className="text-[#888] text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.2)' }}>
              <p className="text-xs sm:text-sm text-[#aaa]">
                <strong className="text-[#c8102e]">Taleplerinizi:</strong>{' '}
                <a href="mailto:iletisim@tavizyok.com" className="text-[#c8102e] hover:text-red-400 transition-colors font-semibold underline break-all">
                  iletisim@tavizyok.com
                </a>{' '}
                adresine e-posta göndererek iletebilirsiniz.
              </p>
            </div>
          </div>

          {/* Card 8 — Kullanıcı Onayı */}
          <div className="rounded-2xl p-5 sm:p-8" style={{ background: 'linear-gradient(135deg, #1a0808, #110505)', border: '1px solid rgba(200,16,46,0.2)' }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">✅</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Kullanıcı Onayı ve Sorumluluk</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">Kullanıcı, video gönderimiyle birlikte:</p>
            <div className="space-y-2 mb-4 sm:mb-5">
              {[
                'Gönderdiği içerikte yer alan kişisel verilerin yukarıda açıklanan şartlar kapsamında işlenmesini',
                'İlgili kurumlara iletilmesini',
                'Sosyal medya ve dijital mecralarda kamuoyunu bilgilendirme amacıyla yayımlanmasını',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[#c8102e] mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 sm:p-5 rounded-xl text-center" style={{ background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.2)' }}>
              <p className="text-[#f5f0e8] font-semibold text-sm sm:text-base">
                önceden kabul etmiş sayılır.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
