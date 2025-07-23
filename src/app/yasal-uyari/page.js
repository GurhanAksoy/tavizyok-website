'use client';
import Navbar from '../../components/Navbar';

export default function YasalUyari() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Yasal Uyarı ve Sorumluluk Reddi</h1>
        <p className="mb-4">
          TAVİZ YOK, yalnızca bir dijital iletişim ve bilgilendirme platformudur. Platform aracılığıyla iletilen içerikler,
          kullanıcıların kendi rızasıyla paylaştığı bilgilerdir. Gönderilen içeriklerin doğruluğu, güncelliği ve yasal uygunluğu tamamen kullanıcı sorumluluğundadır.
        </p>
        <p className="mb-4">
          TAVİZ YOK, iftira, hakaret, özel hayatın gizliliğini ihlal eden, manipülatif veya kurgu içeriklerden sorumlu tutulamaz.
          İçerikler ön incelemeye tabi tutulabilir, ancak platform tüm içerikleri denetlemekle yükümlü değildir.
        </p>
        <p className="mb-4">
          TAVİZ YOK yalnızca kamu yararını ilgilendiren içerikleri; ilgili kamu kurumlarına ve sosyal medya platformlarında kamuoyuna açık şekilde iletir.
        </p>
        <p className="mb-4">
          Kullanıcı, içerik gönderimiyle birlikte bu koşulları önceden okuduğunu, anladığını ve kabul ettiğini taahhüt eder.
        </p>
        <p>
          Gönderilen video ve içeriklerin tüm yayın, iletim, çoğaltma ve dağıtım hakkı TAVİZ YOK platformuna aittir. Kullanıcı bu içerikleri daha sonra farklı bir
          platformda paylaşmak, silmek veya geri çekmek hakkına tek başına sahip değildir. İçerikler, TAVİZ YOK logosu veya işaretleriyle yayımlanır.
        </p>
      </main>
    </>
  );
}