
'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md border-b sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Taviz Yok Logo" width={50} height={50} />
          <span className="text-xl font-bold tracking-wide">TAVİZ YOK</span>
        </div>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/yasal-sartlar" className="hover:text-red-600 transition">Yasal Şartlar</Link>
          <Link href="/hakkimizda" className="hover:text-red-600 transition">Hakkımızda</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Haksızlığa ve Hukuksuzluğa TAVİZ YOK</h1>
        <p className="max-w-2xl text-lg text-gray-700 mb-8">
          Hukuka, insan haklarına ve kamu vicdanına aykırı her durumu kısa videolarla bildirin.  
          Kurumlara iletelim, kamuoyuyla paylaşalım.
        </p>
        <Link
          href="/bildir"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          Bildirim Gönder
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        © 2025 Taviz Yok. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
