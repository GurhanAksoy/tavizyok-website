'use client';
import Navbar from '../../components/Navbar';

export default function KVKK() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni</h1>
        <p className="mb-4">
          TAVİZ YOK platformu olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla,
          kullanıcılarımızın kişisel verilerinin gizliliğine ve güvenliğine önem veriyoruz.
        </p>
        <p className="mb-4">
          TAVİZ YOK platformu, kullanıcılarından doğrudan ad, soyad, T.C. kimlik numarası veya iletişim bilgileri gibi kişisel verileri talep etmez.
          Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri içerisinde yer alabilecek görsel, sesli ve çevresel veriler,
          kamu düzeninin sağlanması, hukuka aykırılıkların bildirimi ve kamu yararı amaçları doğrultusunda, KVKK m.5/2-d ve m.28/1-c kapsamında
          açık rıza aranmaksızın işlenebilir.
        </p>
        <p className="mb-4">
          Gönderilen içerikler; hukuka aykırı durumların resmi kurumlara bildirilmesi, toplumun bilinçlendirilmesi amacıyla sosyal medya
          ve dijital platformlarda yayımlanması, kamu düzeni, kamu sağlığı ve çevre güvenliği konularında farkındalık oluşturulması
          amaçlarıyla işlenir.
        </p>
        <p>
          Kullanıcı, TAVİZ YOK platformuna video göndererek; içeriğin gerektiğinde orijinal haliyle resmi makamlara iletilmesini ve gerektiğinde
          sosyal medya veya diğer açık dijital platformlarda yayımlanmasını kabul eder.
        </p>
      </main>
    </>
  );
}