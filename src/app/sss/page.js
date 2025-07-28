'use client';

import { useState } from "react";
import Navbar from '@/components/Navbar';

const sorular = [
  {
    soru: "Gönderdiğim video ne zaman yayınlanır?",
    cevap: "Videonuz ekibimiz tarafından incelenir. Uygun bulunursa ve hangi sosyal medya hesabımıza üye olduysanız, 24-48 saat içinde o sosyal medya hesabımızda yayınlanır.",
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
    cevap: "Net görüntü, zaman ve konum bilgisi, kısa ve tarafsız anlatım önemlidir.",
  },
  {
    soru: "Videom anonim olarak paylaşılabilir mi?",
    cevap: "Evet, kimliğiniz gizli tutularak videonuz anonim olarak yayınlanır.",
  },
];

export default function SSS() {
  const [acikIndex, setAcikIndex] = useState(null);

  const toggle = (index) => {
    setAcikIndex(acikIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-10">Sıkça Sorulan Sorular</h1>
        <div className="space-y-4">
          {sorular.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                  acikIndex === index ? "bg-red-100 text-red-700" : "bg-red-500 text-white"
                }`}
              >
                {item.soru}
              </button>
              {acikIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                  {item.cevap}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
