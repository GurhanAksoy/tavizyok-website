// components/Footer.js

'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm py-6">
      <div className="container mx-auto px-4 grid gap-4 md:flex md:justify-between md:items-center">
        <div>
          WhatsApp: 0 530 406 66 86<br />
          E-posta: tavizyokplatformu@gmail.com
        </div>
        <div className="space-x-4">
          <Link href="/kvkk" className="hover:underline text-gray-300">KVKK</Link>
          <Link href="/yasal-uyari" className="hover:underline text-gray-300">Yasal Uyarı</Link>
          <Link href="/sss" className="hover:underline text-gray-300">SSS</Link>
          <a href="https://www.youtube.com/@tavizyok" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">YouTube</a>
          <a href="https://www.instagram.com/tavizyok" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Instagram</a>
        </div>
      </div>
      <div className="text-center text-xs mt-4 text-gray-500">
        © 2025 TAVİZ YOK. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
