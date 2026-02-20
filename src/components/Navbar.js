'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Taviz Yok Logo"
                width={65}
                height={65}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex-col hidden sm:flex">
              <span className="text-sm font-bold leading-tight">
                <span className="text-gray-900">Vatandaş Haberciliği</span>
                <span className="text-gray-600"> & </span>
                <span className="text-red-600">İhbar Platformu</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
            >
              Anasayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/kvkk" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
            >
              KVKK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/yasal-uyari" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
            >
              Yasal Uyarı
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Social Media */}
            <a
              href="https://www.youtube.com/@Taviz_Yok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-red-600 hover:text-red-700 transition-all hover:scale-105"
            >
              <FaYoutube className="text-xl" />
              <span className="text-sm font-semibold">YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/tavizyokplatformu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#E1306C] hover:opacity-80 transition-all hover:scale-105"
            >
              <Image
                src="/IG.png"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm font-semibold">Instagram</span>
            </a>

            {/* CTA Button */}
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-white">📲</span>
              <span className="text-white">Video Gönder</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-red-600 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg">
          {/* Navigation Links */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 py-3 text-gray-700 hover:text-red-600 font-medium transition-colors" 
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl">🏠</span>
            <span>Anasayfa</span>
          </Link>
          
          <Link 
            href="/kvkk" 
            className="flex items-center space-x-3 py-3 text-gray-700 hover:text-red-600 font-medium transition-colors" 
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl">📋</span>
            <span>KVKK</span>
          </Link>
          
          <Link 
            href="/yasal-uyari" 
            className="flex items-center space-x-3 py-3 text-gray-700 hover:text-red-600 font-medium transition-colors" 
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl">⚖️</span>
            <span>Yasal Uyarı</span>
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-4 space-y-4">
            {/* Social Media */}
            <a
              href="https://www.youtube.com/@Taviz_Yok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 py-3 text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <FaYoutube className="text-2xl" />
              <span>YouTube Kanalımız</span>
            </a>

            <a
              href="https://www.instagram.com/tavizyokplatformu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 py-3 text-[#E1306C] hover:opacity-80 font-medium transition-colors"
            >
              <Image
                src="/IG.png"
                alt="Instagram"
                width={24}
                height={24}
                className="object-contain"
              />
              <span>Instagram</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-200">
            <a
              href="https://wa.me/905304066686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xl text-white">📲</span>
              <span className="text-white">Video Gönder</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}