'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Taviz Yok Logo"
                width={48}
                height={48}
                priority
              />
              <span className="text-xl font-bold text-black tracking-wide">TAVİZ YOK</span>
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-red-600 transition">Anasayfa</Link>
          </li>
          <li>
            <Link href="/kvkk" className="hover:text-red-600 transition">KVKK</Link>
          </li>
          <li>
            <Link href="/yasal-uyari" className="hover:text-red-600 transition">Yasal Uyarı</Link>
          </li>
        </ul>

        {/* YouTube */}
        <div className="flex items-center space-x-2">
          <a
            href="https://www.youtube.com/@Taviz_Yok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-700 transition text-sm font-medium"
          >
            <FaYoutube className="mr-1 text-lg" />
            YouTube
          </a>
        </div>
      </nav>
    </header>
  );
}
