'use client';

import Navbar from '@/components/Navbar';

export default function YasalUyari() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-10 text-gray-900 space-y-4 leading-relaxed">
        <h1 className="text-3xl font-bold">Yasal Uyarı ve Sorumluluk Reddi</h1>

        <p>TAVİZ YOK, yalnızca bir dijital iletişim ve kamusal bilgilendirme platformudur. Kullanıcılar tarafından paylaşılan içeriklerin tüm hukuki, etik ve cezai sorumluluğu, içeriği gönderen kişiye aittir.</p>

        <p>Platform;</p>
        <ul className="list-disc list-inside">
          <li>İftira, hakaret, özel hayatın ihlali,</li>
          <li>Gerçek dışı, kurgu veya manipülatif içeriklerden</li>
        </ul>
        <p>sorumlu tutulamaz.</p>

        <p>TAVİZ YOK, gönderilen içerikleri ön incelemeye tabi tutma hakkını saklı tutar; ancak tüm içerikleri denetlemekle yükümlü değildir. Yalnızca kamu yararı taşıyan içerikler, ilgili resmi kurumlara yönlendirilir ve/veya sosyal medya platformlarında kamuoyuyla paylaşılır.</p>

        <h2 className="text-xl font-semibold mt-6">Kullanıcının Sorumluluğu ve Hak Devri</h2>
        <p>Kullanıcı, içerik gönderimi ile birlikte aşağıdaki koşulları önceden okuyup, anladığını ve kayıtsız şartsız kabul ettiğini taahhüt eder:</p>
        <ul className="list-disc list-inside">
          <li>Gönderilen içeriklerin yayın, iletim, çoğaltma ve dağıtım hakları münhasıran TAVİZ YOK platformuna aittir.</li>
          <li>Kullanıcı, gönderdiği içeriği daha sonra geri çekme, silme veya başka bir platformda paylaşma hakkına tek başına sahip değildir.</li>
          <li>İçerikler, gerektiğinde TAVİZ YOK logosu, amblemi veya işaretleriyle yayımlanabilir.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">İlave Koruma ve Denge İlkeleri</h2>
        <ul className="list-disc list-inside">
          <li>Kullanıcı, gönderdiği içeriklerin TAVİZ YOK’un güvenilirliğine, tarafsızlığına veya itibarına zarar vermeyecek nitelikte olacağını kabul eder.</li>
          <li>Resmi kurumlarca talep edilmesi hâlinde, gönderilen içeriklere ilişkin elde bulunan bilgiler (varsa) yalnızca yetkili makamlara açıklanabilir.</li>
        </ul>

        <p className="text-sm text-gray-600">
          Bu metin, yasal sorumlulukları sınırlandırmak ve kullanıcıları bilgilendirmek amacıyla hazırlanmıştır. İçerik gönderen her kullanıcı bu koşulları kabul etmiş sayılır.
        </p>
      </main>
    </div>
  );
}