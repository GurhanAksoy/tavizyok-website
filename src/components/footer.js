// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p className="mb-2">
          WhatsApp: 0 530 406 66 86 | E-posta: tavizyokplatformu@gmail.com
        </p>
        <p className="mb-2 space-x-4">
          <a href="/kvkk" className="text-red-400 hover:underline">KVKK</a>
          <a href="/yasal-uyari" className="text-red-400 hover:underline">Yasal Uyarı</a>
          <a href="https://www.youtube.com/@taviz_yok" target="_blank" className="text-red-400 hover:underline">YouTube</a>
          <a href="https://www.instagram.com/tavizyokplatformu" target="_blank" className="text-red-400 hover:underline">Instagram</a>
        </p>
        <p className="text-xs text-gray-400">&copy; 2025 TAVİZ YOK. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
