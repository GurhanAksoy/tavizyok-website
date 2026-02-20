'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const WA_SVG = (
  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --cream: #f5f0e8;
          --red: #c8102e;
          --red-light: #e8192e;
          --gold: #b8960c;
          --dark: #0a0a0a;
        }

        body { background: var(--dark); }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-body   { font-family: 'DM Sans', sans-serif; }

        .hero-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #c8102e, transparent);
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8960c, transparent);
        }
        .card-border {
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(135deg, #141414, #0f0f0f);
        }
        .card-border:hover {
          border-color: rgba(200,16,46,0.3);
          background: linear-gradient(135deg, #161010, #110909);
        }
        .red-glow {
          box-shadow: 0 0 60px rgba(200,16,46,0.15), 0 0 120px rgba(200,16,46,0.05);
        }
        .badge {
          background: rgba(200,16,46,0.1);
          border: 1px solid rgba(200,16,46,0.25);
          color: #e8192e;
        }
        .badge-neutral {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #999;
        }
        .whatsapp-btn {
          background: #128C7E;
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
          background: #075E54;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(18,140,126,0.35);
        }
        .red-btn {
          background: var(--red);
          transition: all 0.3s ease;
        }
        .red-btn:hover {
          background: var(--red-light);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(200,16,46,0.4);
        }
        .noise-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.9s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s;  opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s;  opacity: 0; }

        /* Mobile: buton tam genişlik */
        @media (max-width: 639px) {
          .cta-btn-full { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="noise-overlay"></div>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16">
        {/* BG glow — overflow-hidden ile taşmayı önle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)' }}>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

          {/* Platform tag */}
          <div className="animate-fade-up inline-flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            <div className="hero-line w-8 sm:w-16"></div>
            <span className="badge text-xs font-body tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-2 rounded-full">
              Vatandaş Haberciliği Platformu
            </span>
            <div className="hero-line w-8 sm:w-16"></div>
          </div>

          {/* Logo */}
          <div className="animate-fade-up delay-1 mb-8 sm:mb-10 flex justify-center">
            <Image
              src="/logo.png"
              alt="TAVİZ YOK"
              width={110}
              height={110}
              className="drop-shadow-2xl sm:w-[140px] sm:h-[140px]"
              priority
            />
          </div>

          {/* Headline — FIX: text-4xl mobile, 7xl tablet, 8xl desktop */}
          <h1 className="animate-fade-up delay-2 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-5 sm:mb-6">
            <span style={{ color: '#f5f0e8' }}>Gördüğünüz</span>
            <br />
            <span style={{ color: '#c8102e' }}>Gerçeği Belgeleyin</span>
          </h1>

          <div className="animate-fade-up delay-3 gold-line w-32 sm:w-48 mx-auto mb-6 sm:mb-8"></div>

          <p className="animate-fade-up delay-3 font-body text-base sm:text-lg md:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
            Habere değer her anı, her haksızlığı, her ihlali — anonim ve güvenli biçimde iletin.
            Editöryal süreçten geçsin, ilgili kurumlara ulaşsın, kamuoyuyla paylaşılsın.
          </p>

          {/* CTA Buttons — tam genişlik mobilde */}
          <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn cta-btn-full font-body font-semibold text-white px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              {WA_SVG}
              Haber veya Video Gönder
            </a>
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="red-btn cta-btn-full font-body font-semibold text-white px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              <span>⚠</span> Haksızlık Bildir
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up delay-4 mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Anonim Bildirim', 'KVKK Uyumlu', 'Editörlük Güvencesi', '7/24 Aktif Hat'].map((label) => (
              <span key={label} className="badge-neutral font-body text-xs tracking-wide px-3 sm:px-4 py-2 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white"></div>
        </div>
      </section>

      {/* ─── STAT BAR — FIX: 2x2 grid mobilden 4'e gidiyor ─── */}
      <section className="border-t border-b border-white/5 bg-[#0f0f0f] py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '%65', label: 'Vatandaş Haberciliği' },
            { num: '%35', label: 'İhbar & Bildirim' },
            { num: '100%', label: 'Anonim Güvence' },
            { num: '7/24', label: 'Aktif WhatsApp Hattı' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center px-3 sm:px-6 py-5 sm:py-4
                ${i % 2 === 0 ? 'border-r border-white/5' : ''}
                ${i < 2 ? 'border-b md:border-b-0 border-white/5' : ''}
                ${i === 1 || i === 2 ? 'md:border-r md:border-white/5' : ''}
              `}
            >
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#c8102e] mb-1">{stat.num}</div>
              <div className="font-body text-[10px] sm:text-xs text-[#666] tracking-widest uppercase leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VATANDAŞ HABERCİLİĞİ ─── */}
      <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div className="w-1 h-10 sm:h-12 bg-[#c8102e] rounded-full shrink-0"></div>
          <div>
            <p className="font-body text-xs text-[#c8102e] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-1">Ana Hizmet</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0e8]">Vatandaş Haberciliği</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">

          {/* Ana kart */}
          <div className="card-border rounded-2xl p-5 sm:p-8 transition-all duration-300 red-glow md:row-span-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center mb-5">
              <span className="text-xl sm:text-2xl">📰</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f5f0e8] mb-3 sm:mb-4">Gördüğünüzü Gönderin</h3>
            <p className="font-body text-sm text-[#888] leading-relaxed mb-6 sm:mb-8">
              Toplumu ilgilendiren her olay, yerel bir sorun, ilginç bir gelişme ya da gündeme taşınması gereken bir gerçek —
              kameranız ve WhatsApp hattımız yeterli.
            </p>
            <div className="space-y-3 mb-6 sm:mb-8">
              {[
                { icon: '🎥', title: 'Haber Değerli İçerik', desc: 'Trafik, çevre, altyapı, sosyal olaylar, yerel sorunlar' },
                { icon: '✂️', title: 'Editörlük Süreci', desc: 'Her içerik uzman ekip tarafından incelenir ve düzenlenir' },
                { icon: '📡', title: 'Geniş Yayın', desc: 'Sosyal medya kanallarımız üzerinden kamuoyuyla paylaşılır' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-lg sm:text-xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-body font-semibold text-[#ddd] text-sm mb-0.5">{item.title}</p>
                    <p className="font-body text-[#666] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn w-full font-body font-semibold text-white px-5 sm:px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-sm"
            >
              {WA_SVG}
              Haber Göndermek İçin Tıklayın
            </a>
          </div>

          {/* Kategoriler */}
          <div className="card-border rounded-2xl p-5 sm:p-8 transition-all duration-300">
            <p className="font-body text-xs text-[#666] tracking-[0.2em] uppercase mb-4 sm:mb-5">Kabul Edilen Konular</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { icon: '🚗', label: 'Trafik & Ulaşım' },
                { icon: '🌿', label: 'Çevre & Doğa' },
                { icon: '🏗️', label: 'Altyapı' },
                { icon: '🐾', label: 'Hayvan Hakları' },
                { icon: '🏥', label: 'Sağlık' },
                { icon: '👥', label: 'Sosyal Olaylar' },
                { icon: '🏛️', label: 'Kamu Düzeni' },
                { icon: '📍', label: 'Yerel Sorunlar' },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-sm sm:text-base shrink-0">{cat.icon}</span>
                  <span className="font-body text-xs text-[#aaa] leading-tight">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Süreç */}
          <div className="card-border rounded-2xl p-5 sm:p-8 transition-all duration-300">
            <p className="font-body text-xs text-[#666] tracking-[0.2em] uppercase mb-4 sm:mb-5">Nasıl İşler?</p>
            <div className="space-y-0">
              {[
                { step: '01', label: 'Video veya bilgi WhatsApp\'a iletilir' },
                { step: '02', label: 'Editör ekibi içeriği inceler ve değerlendirir' },
                { step: '03', label: 'Onaylanan içerik yayına alınır veya kuruma iletilir' },
              ].map((s, i) => (
                <div key={s.step} className={`flex gap-3 sm:gap-4 py-3 sm:py-4 ${i < 2 ? 'border-b border-white/5' : ''}`}>
                  <span className="font-display text-xl sm:text-2xl font-black text-[#c8102e]/30 w-8 shrink-0">{s.step}</span>
                  <p className="font-body text-sm text-[#999] leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── İHBAR HATTI ─── */}
      <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="w-1 h-10 sm:h-12 bg-[#c8102e]/50 rounded-full shrink-0"></div>
          <div>
            <p className="font-body text-xs text-[#c8102e]/70 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-1">Ek Hizmet</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0e8]">İhbar & Bildirim Hattı</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: '⚖️',
              title: 'Hukuki İhlaller',
              desc: 'İnsan hakları, kamu hukuku ve mevzuata aykırı davranışlar yetkili makamlara iletilir.',
              kurumlar: ['Savcılık', 'Emniyet'],
            },
            {
              icon: '🐾',
              title: 'Hayvan Hakları',
              desc: 'Hayvan istismarı ve ihmaline dair belgeler derhal ilgili birimlerle paylaşılır.',
              kurumlar: ['Belediye', 'Tarım Bakanlığı'],
            },
            {
              icon: '🚦',
              title: 'Trafik & Güvenlik',
              desc: 'Tehlikeli sürüş, kaza ve trafik düzeni ihlalleri Trafik Başkanlığı\'na iletilir.',
              kurumlar: ['Trafik Başkanlığı'],
            },
          ].map((item) => (
            <div key={item.title} className="card-border rounded-2xl p-5 sm:p-7 transition-all duration-300">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#c8102e]/10 border border-[#c8102e]/15 flex items-center justify-center mb-4 sm:mb-5">
                <span className="text-lg sm:text-xl">{item.icon}</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#f5f0e8] mb-2 sm:mb-3">{item.title}</h3>
              <p className="font-body text-sm text-[#777] leading-relaxed mb-4 sm:mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.kurumlar.map((k) => (
                  <span key={k} className="font-body text-xs bg-white/5 border border-white/10 text-[#888] px-3 py-1 rounded-full">{k}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Kabul edilmeyenler — FIX: tam mobil uyumlu */}
        <div className="mt-5 sm:mt-6 card-border rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#c8102e]/10 border border-[#c8102e]/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-base sm:text-lg">⚠️</span>
              </div>
              <div>
                <p className="font-body font-semibold text-[#ddd] text-sm mb-1">Kabul Edilmeyen İçerikler</p>
                <p className="font-body text-xs text-[#666] leading-relaxed">
                  İftira, hakaret, özel hayat ihlali; yargı süreci devam eden konular; haber değeri veya yer/zaman bilgisi yetersiz kayıtlar kabul edilmez.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="red-btn font-body font-semibold text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm w-full sm:w-auto shrink-0"
            >
              <span>⚠</span> Haksızlık Bildir
            </a>
          </div>
        </div>
      </section>

      {/* ─── GİZLİLİK & GÜVEN — FIX: p-6 mobilde, border düzeltildi ─── */}
      <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-20" style={{ background: 'linear-gradient(180deg, #0a0a0a, #0f0808, #0a0a0a)' }}>
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <p className="font-body text-xs text-[#c8102e] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4">Güvencemiz</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-[#f5f0e8] leading-tight">
            Kimliğiniz Bizimle <span className="text-[#c8102e]">Güvende</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-0">
          {[
            {
              icon: '🔒',
              title: 'Sıfır Kimlik Talebi',
              desc: 'Adınızı, soyadınızı veya iletişim bilgilerinizi paylaşmanız kesinlikle zorunlu değildir. İster anonim, ister isimli gönderin.',
            },
            {
              icon: '🛡️',
              title: 'KVKK Uyumu',
              desc: 'Tüm süreçlerimiz Kişisel Verilerin Korunması Kanunu çerçevesinde yürütülmektedir. Bilgileriniz üçüncü taraflarla paylaşılmaz.',
            },
            {
              icon: '📊',
              title: 'Süreç Takibi',
              desc: 'Gönderdiğiniz içeriğin hangi aşamada olduğunu öğrenebilir, yayına alınıp alınmadığından haberdar olabilirsiniz.',
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`p-6 sm:p-8
                ${i < 2 ? 'border-b sm:border-b-0 sm:border-r border-white/5' : ''}
              `}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 sm:mb-5">
                <span className="text-xl sm:text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#f5f0e8] mb-2 sm:mb-3">{item.title}</h3>
              <p className="font-body text-sm text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA — FIX: text-3xl mobile, butonlar tam genişlik ─── */}
      <section className="px-4 sm:px-6 py-16 sm:py-24" style={{ background: '#0f0f0f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line w-16 sm:w-24 mx-auto mb-8 sm:mb-10"></div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-[#f5f0e8] leading-tight mb-4 sm:mb-6">
            Her Saniye<br />
            <span className="text-[#c8102e]">Önemlidir</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-[#666] leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto px-2">
            Tanık olduğunuz her önemli an — belgeleyin, iletin.
            Editör ekibimiz değerlendirsin, hak ettiği yere ulaşsın.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn font-body font-bold text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto"
            >
              {WA_SVG}
              Haber veya Video Gönder
            </a>
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="red-btn font-body font-bold text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto"
            >
              ⚠ Haksızlık Bildir
            </a>
          </div>

          <div className="gold-line w-16 sm:w-24 mx-auto mt-8 sm:mt-10"></div>
        </div>
      </section>

    </main>
  );
}
