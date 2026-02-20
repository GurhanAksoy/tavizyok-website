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
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight">
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
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-white">Video Gönder</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}