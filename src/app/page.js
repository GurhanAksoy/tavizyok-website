'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md border-b sticky top-0 bg-white z-50">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Taviz Yok Logo" width={48} height={48} priority />
        </div>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/yasal-sartlar" className="hover:text-[var(--accent)]">Yasal Şartlar</Link>
          <Link href="/hakkimizda" className="hover:text-[var(--accent)]">Hakkımızda</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Haksızlığa ve Hukuksuzluğa TAVİZ YOK</h1>
        <p className="max-w-2xl text-lg text-gray-700 mb-8">
          Hukuka, insan haklarına ve kamu vicdanına aykırı her durumu kısa videolarla bildirin.  
          Kurumlara iletelim, kamuoyuyla paylaşalım.
        </p>
        <Link
          href="/bildir"
          className="bg-[var(--accent)] hover:bg-[#cc0000] text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          Bildirim Gönder
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        © 2025 Taviz Yok. Tüm hakları saklıdır. www.tavizyok.com
      </footer>
    </main>
  );
}