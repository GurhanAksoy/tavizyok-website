'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
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
          <span className="text-xl font-bold text-gray-800">TAVİZ YOK</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 hover:text-red-600 focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-red-600 transition">Anasayfa</Link>
          <Link href="/kvkk" className="hover:text-red-600 transition">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:text-red-600 transition">Yasal Uyarı</Link>

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

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tavizyokplatformu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition space-x-1"
          >
            <Image
              src="/IG.png"
              alt="Instagram"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="hidden sm:inline font-medium text-[#E1306C]">Instagram</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 px-6 py-4 space-y-3 text-gray-800 shadow-md">
          <Link href="/" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>Anasayfa</Link>
          <Link href="/kvkk" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>KVKK</Link>
          <Link href="/yasal-uyari" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>Yasal Uyarı</Link>
          
          <a
            href="https://www.youtube.com/@Taviz_Yok"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-red-600 hover:text-red-800"
          >
            <FaYoutube className="inline mr-1" /> YouTube
          </a>

          <a
            href="https://www.instagram.com/tavizyokplatformu"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#E1306C]"
          >
            <Image
              src="/IG.png"
              alt="Instagram"
              width={20}
              height={20}
              className="inline-block mr-1 object-contain"
            />
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
