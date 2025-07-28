'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      } bg-white/80 backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          TAVİZ YOK
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-red-600 transition">Anasayfa</Link>
          <Link href="/kvkk" className="hover:text-red-600 transition">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:text-red-600 transition">Yasal Uyarı</Link>
          <Link href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">YouTube</Link>
          <Link href="https://www.instagram.com/tavizyok" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">Instagram</Link>
          <Link href="/sss" className="hover:text-red-600 transition ml-4 font-semibold">SSS</Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü Aç/Kapat">
            {menuOpen ? <X className="text-red-600" /> : <Menu className="text-red-600" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 px-6 py-4 space-y-3 text-gray-800 shadow-md">
          <Link href="/" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>Anasayfa</Link>
          <Link href="/kvkk" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>KVKK</Link>
          <Link href="/yasal-uyari" className="block hover:text-red-600" onClick={() => setMenuOpen(false)}>Yasal Uyarı</Link>
          <Link href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="block hover:text-red-600">YouTube</Link>
          <Link href="https://www.instagram.com/tavizyok" target="_blank" rel="noopener noreferrer" className="block hover:text-red-600">Instagram</Link>
          <Link href="/sss" className="block hover:text-red-600 font-semibold" onClick={() => setMenuOpen(false)}>SSS</Link>
        </div>
      )}
    </nav>
  );
}
