'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Giriş */}
      <section className="text-center max-w-3xl mx-auto">
        <Image
          src="/logo.png"
          alt="Taviz Yok Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">TAVİZ YOK</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Hukuka, insan haklarına ve kamu vicdanına aykırı gördüğünüz olayları videoyla kaydedin.
          Bize gönderin. Biz de yetkili mercilere iletelim ve kamuoyunu bilgilendirelim.
        </p>
      </section>

      {/* Bildirim Gönder */}
      <section className="mt-10 max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center sm:text-left">Nasıl Bildirim Gönderilir?</h2>
        <ul className="list-disc pl-4 text-sm text-gray-700 text-left">
          <li>Telefonunuzla dikey formatta kısa bir video çekin.</li>
          <li>Video içeriğinde hukuka aykırı bir durum net biçimde görünsün.</li>
          <li>Kimseyle tartışmayın, müdahale etmeyin. Sadece kayıt alın.</li>
          <li>Gizli çekim yapmayın. Kendi güvenliğinizi riske atmayın.</li>
        </ul>
        <div className="mt-4 text-center">
          <a
            href="https://wa.me/905304066686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            WhatsApp ile Bildir
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        <div className="mt-2 space-x-4 inline-flex items-center">
          <Link href="/kvkk" className="hover:underline text-red-400">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:underline text-red-400">Yasal Uyarı</Link>
          <a href="https://www.youtube.com/@Taviz_Yok" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">YouTube</a>
          <a
            href="https://www.instagram.com/tavizyokplatformu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-red-400 inline-flex items-center space-x-1"
          >
            <Image src="/IG.png" alt="Instagram" width={16} height={16} />
            <span>Instagram</span>
          </a>
        </div>
        <div className="mt-1">© {new Date().getFullYear()} TAVİZ YOK. Tüm hakları saklıdır.</div>
      </footer>
    </main>
  );
}