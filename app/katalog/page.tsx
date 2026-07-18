import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCatalog from "@/components/BookCatalog";
import { getBooks } from "@/lib/books";

export const metadata: Metadata = {
  title: "Katalog Buku — Taman Baca Mini Cahaya Ilmu",
  description: "Daftar koleksi buku di Taman Baca Mini Cahaya Ilmu.",
};

export default async function KatalogPage() {
  const books = await getBooks();

  return (
    <main>
      <Nav />

      <section className="bg-gradient-to-b from-sky-top via-sky-bottom to-cream pt-14 pb-10">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
            Koleksi Kami
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-board-dark mb-3">
            Katalog Buku
          </h1>
          <p className="max-w-[560px] mx-auto text-ink-soft text-base">
            Daftar buku yang tersedia di Taman Baca Mini Cahaya Ilmu. Data diperbarui
            otomatis dari catatan koleksi kami.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream-2">
        <div className="max-w-[1100px] mx-auto px-6">
          {books.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-card shadow-soft">
              <p className="font-display font-bold text-lg text-board-dark mb-1">
                Data katalog belum bisa dimuat
              </p>
              <p className="text-ink-soft text-sm">
                Pastikan Google Sheets sudah dibagikan sebagai &quot;Anyone with the
                link&quot; dan ID sheet di <code>lib/books.ts</code> sudah benar.
              </p>
            </div>
          ) : (
            <BookCatalog books={books} />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
