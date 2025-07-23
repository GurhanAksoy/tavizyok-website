'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Taviz Yok Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-lg font-bold text-gray-800">TAVİZ YOK</span>
        </Link>

        {/* Menü */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-red-600 transition">Anasayfa</Link>
          <Link href="/kvkk" className="hover:text-red-600 transition">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:text-red-600 transition">Yasal Uyarı</Link>
        </div>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@Taviz_Yok"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-red-600 hover:text-red-800 transition space-x-1"
        >
          <FaYoutube className="text-xl" />
          <span className="hidden sm:inline font-medium">YouTube</span>
        </a>
      </div>
    </nav>
  );
}
