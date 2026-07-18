import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCatalog from "@/components/BookCatalog";
import { getBooks } from "@/lib/books";
import { featuredBooks } from "@/lib/featuredBooks";

export const metadata: Metadata = {
  title: "Katalog Buku — Taman Baca Mini Cahaya Ilmu",
  description: "Daftar koleksi buku di Taman Baca Mini Cahaya Ilmu.",
};

export default async function KatalogPage() {
  const sheetBooks = await getBooks();

  // Buku pilihan (lib/featuredBooks.ts) dipakai di carousel homepage, dan
  // link "Lihat di Katalog"-nya mengarah ke sini. Supaya buku itu benar-benar
  // bisa ditemukan (bukan cuma disorot ke pencarian kosong), kita gabungkan
  // ke daftar katalog di sini kalau judulnya belum ada dari Google Sheets.
  const existingTitles = new Set(
    sheetBooks.map((b) => b.judul.trim().toLowerCase())
  );
  const extraFeatured = featuredBooks.filter(
    (b) => !existingTitles.has(b.judul.trim().toLowerCase())
  );
  const books = [...sheetBooks, ...extraFeatured];

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
                link&quot;, tab yang berisi data ada di <code>gid</code> yang benar,
                dan baris pertama berisi nama-nama header kolom (mis. &quot;Judul
                Buku&quot;). Cek pengaturan di <code>lib/books.ts</code>.
              </p>
            </div>
          ) : (
            <Suspense fallback={<p className="text-center text-ink-soft py-10">Memuat katalog...</p>}>
              <BookCatalog books={books} />
            </Suspense>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
