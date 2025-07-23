'use client';

import { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">TAVİZ YOK</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition">Anasayfa</a>
          <a href="#kvkk" className="text-gray-700 hover:text-red-600 font-medium transition">KVKK</a>
          <a href="#yasal" className="text-gray-700 hover:text-red-600 font-medium transition">Yasal Uyarı</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-red-600 font-medium">Anasayfa</a>
          <a href="#kvkk" className="block text-gray-700 hover:text-red-600 font-medium">KVKK</a>
          <a href="#yasal" className="block text-gray-700 hover:text-red-600 font-medium">Yasal Uyarı</a>
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="flex flex-col items-center text-center mb-12 border-b pb-8">
            <Image src="/logo.png" alt="Taviz Yok Logo" width={200} height={200} className="shadow-md rounded-full" />
            <p className="mt-6 text-xl text-gray-700 max-w-2xl leading-relaxed">
              Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgele, bize gönder. Biz de ilgili kuruma iletelim ve kamuyla paylaşalım.
            </p>
          </header>

          <section className="mb-12" id="bildirim">
            <h2 className="text-2xl font-semibold mb-4">Nasıl Bildirim Gönderilir?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Videoyu maksimum 30 saniye olacak şekilde kaydedin.</li>
              <li>Videoda yer ve zaman bilgisi belirtin.</li>
              <li>
                WhatsApp hattımıza gönderin:
                <span className="text-white bg-green-500 px-2 py-1 rounded font-semibold ml-2">
                  0 530 406 66 86
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/905304066686"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                <span className="text-white font-semibold">WhatsApp Bildirim Gönder</span>
              </a>
            </div>
          </section>

          <section className="mb-12" id="kvkk">
            <h2 className="text-2xl font-semibold mb-4">Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni</h2>
            <p className="text-gray-700 leading-relaxed">
              TAVİZ YOK platformu olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla, kullanıcılarımızın kişisel verilerinin gizliliğine ve güvenliğine önem veriyoruz.
              TAVİZ YOK platformu, kullanıcılarından doğrudan ad, soyad, T.C. kimlik numarası veya iletişim bilgileri gibi kişisel verileri talep etmez. Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri içerisinde yer alabilecek görsel, sesli ve çevresel veriler, kamu düzeninin sağlanması, hukuka aykırılıkların bildirimi ve kamu yararı amaçları doğrultusunda, KVKK m.5/2-d ve m.28/1-c kapsamında açık rıza aranmaksızın işlenebilecektir.
              Gönderilen içerikler; hukuka aykırı durumların resmi kurumlara bildirilmesi, toplumun bilinçlendirilmesi amacıyla sosyal medya ve dijital platformlarda yayımlanması, kamu düzeni, kamu sağlığı ve çevre güvenliği konularında farkındalık oluşturulması amaçlarıyla işlenir.
              Kullanıcı, TAVİZ YOK platformuna video göndererek; içeriğin gerektiğinde orijinal haliyle resmi makamlara iletilmesini ve gerektiğinde sosyal medya veya diğer açık dijital platformlarda yayımlanmasını kabul etmiş sayılır.
            </p>
          </section>

          <section className="mb-12" id="yasal">
            <h2 className="text-2xl font-semibold mb-4">Yasal Uyarı ve Sorumluluk Reddi</h2>
            <p className="text-gray-700 leading-relaxed">
              TAVİZ YOK, yalnızca bir dijital iletişim ve bilgilendirme platformudur. Platform aracılığıyla iletilen içerikler, kullanıcıların kendi rızasıyla paylaştığı bilgilerdir. Gönderilen içeriklerin doğruluğu, güncelliği ve yasal uygunluğu tamamen kullanıcı sorumluluğundadır.
              TAVİZ YOK, iftira, hakaret, özel hayatın gizliliğini ihlal eden, manipülatif veya kurgu içeriklerden sorumlu tutulamaz. İçerikler ön incelemeye tabi tutulabilir, ancak platform tüm içerikleri denetlemekle yükümlü değildir.
              TAVİZ YOK yalnızca kamu yararını ilgilendiren içerikleri; ilgili kamu kurumlarına ve sosyal medya platformlarında kamuoyuna açık şekilde iletir.
              Kullanıcı, içerik gönderimiyle birlikte bu koşulları önceden okuduğunu, anladığını ve kabul ettiğini taahhüt eder.
              Gönderilen video ve içeriklerin tüm yayın, iletim, çoğaltma ve dağıtım hakkı TAVİZ YOK platformuna aittir. Kullanıcı bu içerikleri daha sonra farklı bir platformda paylaşmak, silmek veya geri çekmek hakkına tek başına sahip değildir. İçerikler, TAVİZ YOK logosu veya işaretleriyle yayımlanır.
            </p>
          </section>

          <footer className="bg-gray-100 border-t pt-6 text-sm text-gray-600 text-center mt-16">
            <p>WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com</p>
            <div className="space-x-4 mt-2">
              <a href="#kvkk" className="hover:underline">KVKK</a>
              <a href="#yasal" className="hover:underline">Yasal Uyarı</a>
              <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" className="hover:underline">YouTube</a>
            </div>
            <p className="mt-2">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
          </footer>
        </div>
      </main>
    </>
  );
}