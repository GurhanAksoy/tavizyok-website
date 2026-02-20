'use client';

import Navbar from '@/components/Navbar';

export default function YasalUyari() {
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

      {/* FIX: px-4 mobile → px-6 tablet, pt-24 mobile yeterli */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 font-body">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs text-[#c8102e] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 font-body">Hukuki Bilgilendirme</p>
          {/* FIX: text-3xl mobile → text-4xl tablet → text-5xl desktop */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#f5f0e8] mb-4 leading-tight">
            Yasal Uyarı ve<br />Sorumluluk Reddi
          </h1>
          <div className="gold-line w-20 sm:w-24 mx-auto mt-5 sm:mt-6"></div>
        </div>

        <div className="space-y-4 sm:space-y-5">

          {/* Card 1 */}
          {/* FIX: p-5 mobile → p-8 tablet */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">📱</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Platform Tanımı</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-4 text-sm sm:text-base">
              <strong className="text-[#f5f0e8]">TAVİZ YOK</strong>, yalnızca bir dijital iletişim ve kamusal bilgilendirme platformudur.
            </p>
            <div className="bg-[#c8102e]/8 rounded-xl p-3 sm:p-4 border border-[#c8102e]/20">
              <p className="text-xs sm:text-sm text-[#aaa] leading-relaxed">
                <strong className="text-[#c8102e]">Önemli:</strong> Kullanıcılar tarafından paylaşılan içeriklerin tüm{' '}
                <strong className="text-[#ddd]">hukuki, etik ve cezai sorumluluğu</strong>, içeriği gönderen kişiye aittir.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">⚠️</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Sorumluluk Reddi</h2>
            </div>
            <p className="text-[#aaa] leading-relaxed mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Platform aşağıdaki içeriklerden sorumlu tutulamaz:</p>
            <div className="space-y-2 mb-4 sm:mb-5">
              {['İftira, hakaret, özel hayatın ihlali', 'Gerçek dışı, kurgu veya manipülatif içerikler'].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[#c8102e] mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/4 rounded-xl p-3 sm:p-4 border border-white/8 mb-3">
              <p className="text-xs sm:text-sm text-[#888] leading-relaxed">
                TAVİZ YOK, gönderilen içerikleri <strong className="text-[#ddd]">ön incelemeye</strong> tabi tutma hakkını saklı tutar; ancak{' '}
                <strong className="text-[#ddd]">tüm içerikleri denetleme yükümlülüğü</strong> bulunmamaktadır.
              </p>
            </div>
            <div className="bg-white/4 rounded-xl p-3 sm:p-4 border border-white/8">
              <p className="text-xs sm:text-sm text-[#888] leading-relaxed">
                Sadece <strong className="text-[#ddd]">kamu yararı taşıyan içerikler</strong>, ilgili resmi kurumlara iletilir ve/veya sosyal medya platformlarında kamuoyuyla paylaşılır.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">👤</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8] leading-tight">Kullanıcının Sorumluluğu ve Hak Devri</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
              Kullanıcı, içerik gönderimi ile birlikte aşağıdaki koşulları{' '}
              <strong className="text-amber-400">önceden okuyup, anladığını ve kabul ettiğini</strong> beyan eder:
            </p>
            <div className="space-y-2 sm:space-y-3">
              {[
                'Gönderilen içeriklerin yayın, iletim, çoğaltma ve dağıtım hakları münhasıran TAVİZ YOK platformuna aittir.',
                'Kullanıcı, gönderdiği içeriği daha sonra tek taraflı olarak geri çekme, silme veya başka bir mecrada paylaşma hakkına sahip değildir.',
                'İçerikler, gerektiğinde TAVİZ YOK logosu, amblemi veya işaretleriyle yayımlanabilir.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-amber-400 mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-dark rounded-2xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">🛡️</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">İlave Koruma ve Denge İlkeleri</h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {[
                'Kullanıcı, gönderdiği içeriklerin TAVİZ YOK\'un güvenilirliğine, tarafsızlığına veya itibarına zarar vermeyecek nitelikte olduğunu kabul eder.',
                'Resmi kurumlarca talep edilmesi hâlinde, gönderilen içeriklere ilişkin elde bulunan bilgiler (varsa) sadece yetkili makamlara açıklanabilir.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-purple-400 mt-0.5 text-sm shrink-0">•</span>
                  <span className="text-[#888] text-xs sm:text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 — Son Uyarı */}
          <div className="rounded-2xl p-5 sm:p-8" style={{ background: 'linear-gradient(135deg, #1a0808, #110505)', border: '1px solid rgba(200,16,46,0.2)' }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">📋</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8]">Önemli Hatırlatma</h2>
            </div>
            <p className="text-[#888] leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
              Bu metin, <strong className="text-[#ddd]">yasal sorumlulukları sınırlandırmak</strong> ve kullanıcılarımızı bilgilendirmek amacıyla hazırlanmıştır.
            </p>
            <div className="rounded-xl p-4 sm:p-5 text-center" style={{ background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.2)' }}>
              <p className="text-[#f5f0e8] font-semibold text-sm sm:text-base">
                İçerik gönderen her kullanıcı bu koşulları <strong className="text-[#c8102e]">peşinen kabul etmiş sayılır.</strong>
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
