'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/A_digital_vector_graphic_of_a_logo_features_bold_m.png" alt="Taviz Yok Logo" width={50} height={50} />
          <span className="font-bold text-xl text-gray-800">TAVİZ YOK</span>
        </Link>

        {/* Menu */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-red-600 transition">Anasayfa</Link>
          <Link href="/kvkk" className="hover:text-red-600 transition">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:text-red-600 transition">Yasal Uyarı</Link>
        </nav>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@Taviz_Yok"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex items-center text-red-600 hover:text-red-800 transition"
        >
          <svg
            className="w-5 h-5 mr-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1-3-.2-7.4-.2-7.4-.2h-.1s-4.4 0-7.4.2c-.4 0-1.3.1-2.1 1C1.8 4.5 1.5 6.2 1.5 6.2S1.2 8.1 1.2 10v1.9c0 1.9.3 3.8.3 3.8s.2 1.7.8 2.4c.8.9 1.8.9 2.2 1 1.6.2 6.8.2 6.8.2s4.4 0 7.4-.2c.4 0 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.3-1.9.3-3.8V10c.1-1.9-.2-3.8-.2-3.8zM9.8 14.9V8.9l6 3-6 3z" />
          </svg>
          YouTube
        </a>
      </div>
    </header>
  );
}
