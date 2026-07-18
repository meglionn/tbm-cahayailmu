"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Book } from "@/lib/books";

const cardGradients = [
  "from-pink to-[#fbc9d8]",
  "from-mint to-[#c7f0e6]",
  "from-lavender to-[#dcd2f7]",
  "from-sun to-[#ffe08a]",
  "from-coral to-[#f7b3a4]",
  "from-grass to-[#c9ecc7]",
];

export default function BookCatalog({ books }: { books: Book[] }) {
  // Kalau datang dari klik "Lihat di Katalog" di carousel Sampul Buku
  // Pilihan, linknya berbentuk /katalog?cari=<judul>. Sebelumnya nilai ini
  // tidak pernah dibaca (kotak pencarian selalu kosong), jadi di sini kita
  // ambil sebagai nilai awal pencarian.
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("cari") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [level, setLevel] = useState("Semua");
  const [selected, setSelected] = useState<Book | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const levelList = useMemo(() => {
    const unique = Array.from(new Set(books.map((b) => b.level))).filter(Boolean);
    unique.sort();
    return ["Semua", ...unique];
  }, [books]);

  const filtered = useMemo(() => {
    return books.filter((book) => {
      const matchLevel = level === "Semua" || book.level === level;
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        book.judul.toLowerCase().includes(q) ||
        book.pengarang.toLowerCase().includes(q);
      return matchLevel && matchQuery;
    });
  }, [books, query, level]);

  // Buku yang persis judulnya sama dengan link dari carousel -> disorot dan
  // otomatis di-scroll ke posisinya supaya user langsung melihat buku yang
  // sampulnya baru saja mereka klik.
  const highlightedId = useMemo(() => {
    const target = initialQuery.trim().toLowerCase();
    if (!target) return null;
    const exact = books.find((book) => book.judul.trim().toLowerCase() === target);
    return exact?.id ?? null;
  }, [books, initialQuery]);

  useEffect(() => {
    if (highlightedId && highlightRef.current) {
      highlightRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [highlightedId]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari judul atau nama pengarang..."
          className="flex-1 rounded-full px-5 py-3 border-2 border-board/10 bg-white text-sm font-body focus:outline-none focus:border-coral transition-colors"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-full px-5 py-3 border-2 border-board/10 bg-white text-sm font-bold text-board-dark focus:outline-none focus:border-coral transition-colors"
        >
          {levelList.map((l) => (
            <option key={l} value={l}>
              {l === "Semua" ? "Semua Level" : `Level ${l}`}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-ink-soft mb-5">
        Menampilkan {filtered.length} dari {books.length} buku
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-card shadow-soft">
          <p className="font-display font-bold text-lg text-board-dark mb-1">
            Buku tidak ditemukan
          </p>
          <p className="text-ink-soft text-sm">
            Coba kata kunci lain atau ganti filter level.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((book, index) => (
            <div
              key={book.id}
              ref={book.id === highlightedId ? highlightRef : undefined}
              className={`bg-white rounded-card overflow-hidden shadow-soft flex flex-col transition-shadow ${
                book.id === highlightedId
                  ? "ring-4 ring-coral ring-offset-2"
                  : ""
              }`}
            >
              <div
                className={`h-20 flex items-center justify-center text-white font-display font-bold text-sm text-center px-4 bg-gradient-to-br ${
                  cardGradients[index % cardGradients.length]
                }`}
              >
                {book.level ? `Level ${book.level}` : "Buku"}
              </div>
              <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
                {book.nomorInventaris && (
                  <h3 className="font-label font-bold text-xs tracking-wide text-coral mb-1">
                  {book.nomorInventaris}
                  </h3>
                )}
                <h3 className="font-display font-bold text-base text-board-dark mb-1.5">
                  {book.judul}
                </h3>
                {book.pengarang && (
                  <p className="text-sm text-ink-soft mb-1">Oleh {book.pengarang}</p>
                )}
                {(book.penerbit || book.tahunTerbit) && (
                  <p className="text-xs text-ink-soft/80 mb-1">
                    {book.penerbit}
                    {book.penerbit && book.tahunTerbit ? " · " : ""}
                    {book.tahunTerbit}
                  </p>
                )}
                {book.tanggalTerima && (
                  <p className="text-xs text-ink-soft/70 mb-3">
                    Diterima {book.tanggalTerima}
                  </p>
                )}
                <div className="mt-auto flex flex-wrap gap-1.5 items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {book.jumlahEksemplar && (
                      <span className="font-label font-bold text-[0.7rem] tracking-wide uppercase px-3 py-1 rounded-full bg-mint/20 text-grass-dark">
                        {book.jumlahEksemplar} eksemplar
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(book)}
                    className="font-bold text-xs text-coral hover:text-board-dark transition-colors whitespace-nowrap"
                  >
                    Lihat Detail →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-board-dark/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail buku ${selected.judul}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-card shadow-pop max-w-md w-full max-h-[85vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream-2 flex items-center justify-center text-board-dark hover:bg-cream transition-colors"
            >
              ✕
            </button>

            {selected.nomorInventaris && (
              <p className="font-label font-bold text-xs tracking-wide text-coral mb-1">
                {selected.nomorInventaris}
              </p>
            )}
            <h3 className="font-display font-bold text-lg text-board-dark mb-3 pr-8">
              {selected.judul}
            </h3>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.level && (
                <span className="font-label font-bold text-[0.7rem] tracking-wide uppercase bg-mint/20 text-grass-dark px-3 py-1 rounded-full">
                  Level {selected.level}
                </span>
              )}
              {selected.subjek && (
                <span className="font-label font-bold text-[0.7rem] tracking-wide uppercase bg-lavender/30 text-board-dark px-3 py-1 rounded-full">
                  {selected.subjek}
                </span>
              )}
              {selected.jumlahEksemplar && (
                <span className="font-label font-bold text-[0.7rem] tracking-wide uppercase bg-sun/40 text-board-dark px-3 py-1 rounded-full">
                  {selected.jumlahEksemplar} eksemplar
                </span>
              )}
            </div>

            <dl className="space-y-2.5 text-sm">
              {selected.pengarang && (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">Pengarang</dt>
                  <dd className="font-bold text-board-dark text-right">{selected.pengarang}</dd>
                </div>
              )}
              {selected.penerbit && (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">Penerbit</dt>
                  <dd className="font-bold text-board-dark text-right">{selected.penerbit}</dd>
                </div>
              )}
              {selected.tahunTerbit && (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">Tahun Terbit</dt>
                  <dd className="font-bold text-board-dark text-right">{selected.tahunTerbit}</dd>
                </div>
              )}
              {selected.tanggalTerima && (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">Tanggal Terima</dt>
                  <dd className="font-bold text-board-dark text-right">{selected.tanggalTerima}</dd>
                </div>
              )}
              {selected.nomorInventaris && (
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">No. Inventaris</dt>
                  <dd className="font-bold text-board-dark text-right">{selected.nomorInventaris}</dd>
                </div>
              )}
            </dl>

            {selected.keterangan && (
              <div className="mt-4 pt-4 border-t border-board/10">
                <p className="text-ink-soft text-xs font-bold uppercase tracking-wide mb-1">
                  Keterangan
                </p>
                <p className="text-sm text-board-dark whitespace-pre-line">
                  {selected.keterangan}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
