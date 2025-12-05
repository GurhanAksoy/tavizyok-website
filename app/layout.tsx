import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Taviz Yok - Türkiye'nin Ulusal Dijital Bildirim Platformu",
  description: "1.405 belediye için ulusal çözüm mekanizması. Hızlı, şeffaf ve çözüm odaklı hizmetten taviz yok.",
  keywords: "belediye, bildirim, dijital platform, e-devlet, vatandaş, kurum, taviz yok",
  authors: [{ name: "Taviz Yok" }],
  openGraph: {
    title: "Taviz Yok - Ulusal Dijital Bildirim Platformu",
    description: "Türkiye'nin ilk ulusal dijital bildirim platformu",
    type: "website",
    locale: "tr_TR",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}