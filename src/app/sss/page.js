'use client';

import { useState } from "react";

const sorular = [
  {
    soru: "Gönderdiğim video ne zaman yayınlanır?",
    cevap: "Videonuz ekibimiz tarafından incelenir. Uygun bulunursa 24-48 saat içinde sosyal medya hesaplarımızda yayınlanır.",
  },
  {
    soru: "Kişisel bilgilerim güvende mi?",
    cevap: "Evet. Tüm kişisel verileriniz KVKK kapsamında korunur, kesinlikle üçüncü kişilerle paylaşılmaz.",
  },
  {
    soru: "Hangi tür videolar gönderilmelidir?",
    cevap: "Hukuka, kamu düzenine veya insan haklarına aykırı durumları belgeleyen, toplum yararına içerikler gönderilmelidir.",
  },
  {
    soru: "Video gönderirken nelere dikkat etmeliyim?",
    cevap: "Net görüntü, mümkünse tarih ve konum bilgisi, kısa ve tarafsız anlatım önemlidir.",
  },
  {
    soru: "Videom anonim olarak paylaşılabilir mi?",
    cevap: "Evet. Dilerseniz kimliğiniz gizli tutularak videonuz anonim olarak yayınlanır.",
  },
];

export default function SSS() {
  const [acikIndex, setAcikIndex] = useState(null);

  const toggle = (index) => {
    setAcikIndex(acikIndex === index ? null : index);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h1>
      <div className="space-y-5">
        {sorular.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-sm p-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left text-lg font-medium focus:outline-none"
            >
              {item.soru}
            </button>
            {acikIndex === index && (
              <p className="mt-3 text-gray-700">{item.cevap}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
