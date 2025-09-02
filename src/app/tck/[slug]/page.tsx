import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  // JSON dosyasını public klasöründen oku
  const filePath = path.join(process.cwd(), 'public', 'data', 'tck_maddeleri_tam_350.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  // Slug'a göre maddeyi bul
  const madde = data.find(
    (m: any) => m.madde_no.replace(/\s+/g, "").toLowerCase() === params.slug
  );

  // Eğer madde bulunamazsa 404 sayfası göster
  if (!madde) return notFound();

  // Sayfa içeriği
  return (
    <main className="max-w-3xl mx-auto p-6 mt-24"> {/* mt-24: Navbar sabitse içerik altına iner */}
      <h1 className="text-2xl font-bold mb-4">TCK {madde.madde_no}</h1>
      <article className="whitespace-pre-wrap leading-relaxed text-gray-800">
        {madde.metin}
      </article>
    </main>
  );
}
