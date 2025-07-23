
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 font-sans">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="TAVİZ YOK Logo" width={40} height={40} />
          <h1 className="text-xl font-bold tracking-wide">TAVİZ YOK</h1>
        </div>
        <nav className="space-x-4 hidden md:block">
          <Link href="#platform"><span className="hover:text-red-600">Platform Nedir?</span></Link>
          <Link href="#bildirim"><span className="hover:text-red-600">Nasıl Bildirim Gönderilir?</span></Link>
          <Link href="#kurallar"><span className="hover:text-red-600">Kurallar</span></Link>
        </nav>
      </header>

      <section className="text-center py-16 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu bildirmenin<br className="hidden sm:block" /> pratik ve güvenli yolu.</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Türkiye Cumhuriyeti vatandaşlarının yanındayız. Devletin ilgili kurumlarına destek sunuyoruz.
        </p>
      </section>

      <section id="platform" className="bg-white py-12 px-4 sm:px-8 shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Platform Nedir?</h3>
          <p className="text-gray-700">
            TAVİZ YOK, vatandaşların Türkiye sınırları içinde karşılaştığı hukuka aykırı olayları, kısa videolarla bize iletebildiği tarafsız ve kamu yararına çalışan bir iletişim sistemidir.
          </p>
        </div>
      </section>

      <section id="bildirim" className="py-12 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Nasıl Bildirim Gönderilir?</h3>
          <ul className="space-y-4 text-gray-800 list-disc pl-6">
            <li>Karşılaştığınız durumu maksimum 30 saniyelik bir videoya kaydedin.</li>
            <li>Videonun içinde yer ve zaman bilgisi belirtin (sesli ya da yazılı olabilir).</li>
            <li>WhatsApp hattımıza gönderin: <strong>0 530 406 66 86</strong></li>
          </ul>
          <div className="text-center mt-8">
            <a href="https://wa.me/905304066686" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg">
                WhatsApp Bildirim Gönder
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="kurallar" className="bg-white py-12 px-4 sm:px-8 shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Kurallar ve Şartlar</h3>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Gönderilen videoların içeriği gerçeği yansıtmalıdır.</li>
            <li>Yer ve zaman bilgisi olmayan videolar geçerli sayılmaz.</li>
            <li>Gönderim yaparak <Link href="https://www.tavizyok.com"><span className="text-red-600 underline">www.tavizyok.com</span></Link>'daki şartları kabul etmiş sayılırsınız.</li>
            <li>Videolar, gerekirse buzlanarak sosyal medyada paylaşılır. Ancak resmi kurumlara orijinal haliyle iletilir.</li>
          </ul>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-gray-100">
        <div>WhatsApp: 0 530 406 66 86 | tavizyokplatformu@gmail.com</div>
        <div className="mt-2">© 2025 TAVİZ YOK. Tüm hakları saklıdır.</div>
      </footer>
    </main>
  );
}
