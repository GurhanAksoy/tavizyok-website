export const metadata = {
  title: 'Sıkça Sorulan Sorular | TAVİZ YOK',
  description: 'TAVİZ YOK hakkında sıkça sorulan sorular ve yanıtları bu sayfada.',
};

export default function SSSPage() {
  const sorular = [
    {
      soru: 'Gönderdiğim video ne zaman yayınlanır?',
      cevap: 'Her video editörlerimiz tarafından incelendikten sonra yayınlanır. Bu süreç genelde 24 saat içinde tamamlanır. Videonuzun yayınlanması için ilgili sosyal medya hesabımıza üye olmanız gerekmektedir.',
    },
    {
      soru: 'Kişisel bilgilerim güvende mi?',
      cevap: 'Evet. Kimlik bilgisi içeren hiçbir içerik paylaşılmaz. Tüm veriler KVKK’ya uygun şekilde korunur.',
    },
    {
      soru: 'Hangi tür videolar gönderilmelidir?',
      cevap: 'Toplum düzenine, hukuka veya insan haklarına aykırı bir durumu belgeleyen videolar gönderilmelidir.',
    },
    {
      soru: 'Video gönderirken nelere dikkat etmeliyim?',
      cevap: 'Video net olmalı, olayın yeri ve zamanı mümkünse belirtilmeli, hakaret ya da iftira içermemelidir.',
    },
    {
      soru: 'Videom anonim olarak paylaşılabilir mi?',
      cevap: 'Evet. Video gönderirken isim belirtmek zorunda değilsiniz.',
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 pt-24 pb-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h1>
      <div className="space-y-4">
        {sorular.map((item, i) => (
          <details key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <summary className="cursor-pointer font-semibold text-red-600">{item.soru}</summary>
            <p className="mt-2 text-gray-700">{item.cevap}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
