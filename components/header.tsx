"use client"

import { Building2, BarChart3, Phone, Mail } from "lucide-react"

export default function Header() {
  return (
    <div className="fixed top-0 w-full z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="TavizYok" className="w-16 h-16" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">TAVİZYOK</h1>
              <p className="text-xs text-gray-500">Dijital Bildirim Platformu</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:+905304066686" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0530 406 66 86</span>
            </a>

            <a href="mailto:iletisim@tavizyok.com" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">İletişim</span>
            </a>

            <a href="/kurum-giris" className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors">
              <Building2 className="w-4 h-4" />
              <span>Kurum Girişi</span>
            </a>

            <a href="/merkez-panel-giris" className="flex items-center space-x-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span>Merkezi Panel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}