// src/app/layout.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TAVİZ YOK",
  description:
    "Hukuksuzluğa, insan haklarına ve kamu vicdanına aykırı olayları videoyla belgeleyin. Bize gönderin, biz de ilgili kuruma iletelim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
