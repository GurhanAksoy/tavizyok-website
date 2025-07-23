'use client';
import Navbar from '@/components/Navbar';

export default function KVKK() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto space-y-4 leading-relaxed">
        <h1 className="text-3xl font-bold">Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni</h1>
        <p>
          TAVİZ YOK platformu olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz.
          Kullanıcılarımızın kişisel verilerinin gizliliği ve güvenliği, platformumuz için en öncelikli konular arasında yer almaktadır.
        </p>
        <p>
          Platformumuz, kullanıcıdan doğrudan ad, soyad, T.C. kimlik numarası, iletişim bilgileri gibi kişisel verileri kesinlikle talep etmez.
          Ancak kullanıcılar tarafından gönüllü olarak gönderilen video içerikleri kapsamında yer alabilecek görsel, sesli veya çevresel veriler,
          kamu düzeninin sağlanması, hukuka aykırılıkların bildirimi ve kamu yararı amaçları doğrultusunda, KVKK m.5/2-d ve m.28/1-c hükümleri
          gereğince açık rıza alınmaksızın işlenebilir.
        </p>
        <p>Bu içerikler;</p>
        <ul className="list-disc list-inside">
          <li>Hukuka aykırı durumların resmi kurumlara iletilmesi,</li>
          <li>Toplumsal farkındalık sağlanması,</li>
          <li>Kamu sağlığı, güvenliği ve çevre koruması konularında bilinç oluşturulması</li>
        </ul>
        <p>
          amaçlarıyla sosyal medya ve dijital platformlarda yayımlanabilir.
        </p>
        <p>
          Kullanıcı, video gönderimi ile birlikte; bu içeriğin gerektiğinde orijinal haliyle ilgili resmi kurumlara iletilmesini ve sosyal medya ile
          benzeri dijital ortamlarda yayımlanmasını önceden kabul etmiş sayılır.
        </p>
      </main>
    </>
  );
}