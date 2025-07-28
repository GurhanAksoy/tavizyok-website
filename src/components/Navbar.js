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
      } bg-background/90 backdrop-blur-md`}
    >
      <div className="flex justify-between items-center py-3">
        <Link href="/" className="text-2xl font-bold text-accent">
          TAVİZ YOK
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-text-soft">
          <Link href="/" className="hover:text-accent transition">Anasayfa</Link>
          <Link href="/kvkk" className="hover:text-accent transition">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:text-accent transition">Yasal Uyarı</Link>
          <Link href="/sss" className="hover:text-accent transition">SSS</Link>
          <a href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">YouTube</a>
          <a href="https://www.instagram.com/tavizyok" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Instagram</a>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü Aç/Kapat">
            {menuOpen ? <X className="text-accent" /> : <Menu className="text-accent" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü Açılır */}
      {menuOpen && (
        <div className="md:hidden bg-background px-6 py-4 space-y-3 text-text-soft shadow-md">
          <Link href="/" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>Anasayfa</Link>
          <Link href="/kvkk" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>KVKK</Link>
          <Link href="/yasal-uyari" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>Yasal Uyarı</Link>
          <Link href="/sss" className="block hover:text-accent" onClick={() => setMenuOpen(false)}>SSS</Link>
          <a href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="block hover:text-accent">YouTube</a>
          <a href="https://www.instagram.com/tavizyok" target="_blank" rel="noopener noreferrer" className="block hover:text-accent">Instagram</a>
        </div>
      )}
    </nav>
  );
}
