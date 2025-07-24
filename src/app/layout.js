import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TAVİZ YOK",
  description:
    "TAVİZ YOK, hukuka, insan haklarına ve kamu vicdanına aykırı olayları belgeleyen vatandaş platformudur.",
  openGraph: {
    title: "TAVİZ YOK",
    description:
      "Hukuksuzluğa, haksızlığa, insan haklarına ve kamu vicdanına aykırı her durumu videoyla belgeleyin. Bize gönderin, biz ilgili kurumlara iletelim.",
    url: "https://tavizyok.com",
    siteName: "TAVİZ YOK",
    images: [
      {
        url: "https://tavizyok.com/logo.png",
        width: 1200,
        height: 630,
        alt: "TAVİZ YOK",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAVİZ YOK",
    description:
      "Hukuksuzluğa, haksızlığa karşı vatandaşların sesi. Gönder, biz iletelim.",
    creator: "@Taviz_Yok",
    images: ["https://tavizyok.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
