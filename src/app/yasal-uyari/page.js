'use client';

import Navbar from '@/components/Navbar';

export default function YasalUyari() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-10 text-gray-900 space-y-4 leading-relaxed">
        <h1 className="text-3xl font-bold">Yasal Uyarı ve Sorumluluk Reddi</h1>

        <p><strong>TAVİZ YOK</strong>, yalnızca bir dijital iletişim ve kamusal bilgilendirme platformudur.<br />
        Kullanıcılar tarafından paylaşılan içeriklerin tüm <strong>hukuki, etik ve cezai sorumluluğu</strong>, içeriği gönderen kişiye aittir.</p>

        <p><strong>Platform;</strong></p>
        <ul className="list-disc list-inside">
          <li>İftira, hakaret, özel hayatın ihlali,</li>
          <li>Gerçek dışı, kurgu veya manipülatif içeriklerden</li>
        </ul>
        <p>sorumlu tutulamaz.</p>

        <p>TAVİZ YOK, gönderilen içerikleri <strong>ön incelemeye</strong> tabi tutma hakkını saklı tutar; ancak <strong>tüm içerikleri denetleme yükümlülüğü</strong> bulunmamaktadır.<br />
        Sadece <strong>kamu yararı taşıyan içerikler</strong>, ilgili resmi kurumlara iletilir ve/veya sosyal medya platformlarında kamuoyuyla paylaşılır.</p>

        <h2 className="text-xl font-semibold mt-6">Kullanıcının Sorumluluğu ve Hak Devri</h2>
        <p>Kullanıcı, içerik gönderimi ile birlikte aşağıdaki koşulları <strong>önceden okuyup, anladığını ve kabul ettiğini</strong> beyan eder:</p>
        <ul className="list-disc list-inside">
          <li>Gönderilen içeriklerin <strong>yayın, iletim, çoğaltma ve dağıtım hakları</strong> münhasıran TAVİZ YOK platformuna aittir.</li>
          <li>Kullanıcı, gönderdiği içeriği daha sonra <strong>tek taraflı olarak geri çekme, silme veya başka bir mecrada paylaşma hakkına</strong> sahip değildir.</li>
          <li>İçerikler, gerektiğinde <strong>TAVİZ YOK logosu, amblemi veya işaretleriyle</strong> yayımlanabilir.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">İlave Koruma ve Denge İlkeleri</h2>
        <ul className="list-disc list-inside">
          <li>Kullanıcı, gönderdiği içeriklerin <strong>TAVİZ YOK’un güvenilirliğine, tarafsızlığına veya itibarına zarar vermeyecek</strong> nitelikte olduğunu kabul eder.</li>
          <li>Resmi kurumlarca talep edilmesi hâlinde, gönderilen içeriklere ilişkin <strong>elde bulunan bilgiler (varsa)</strong> sadece <strong>yetkili makamlara</strong> açıklanabilir.</li>
        </ul>

        <p className="text-sm text-gray-600">
          Bu metin, <strong>yasal sorumlulukları sınırlandırmak</strong> ve kullanıcılarımızı bilgilendirmek amacıyla hazırlanmıştır.<br />
          İçerik gönderen her kullanıcı bu koşulları <strong>peşinen kabul etmiş sayılır</strong>.
        </p>
      </main>
    </div>
  );
}