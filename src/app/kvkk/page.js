'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
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
          <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition">Anasayfa</Link>
          <Link href="/kvkk" className="text-gray-700 hover:text-red-600 font-medium transition">KVKK</Link>
          <Link href="/yasal-uyari" className="text-gray-700 hover:text-red-600 font-medium transition">Yasal Uyarı</Link>
        </div>
      </div>
    </nav>
  );
}


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