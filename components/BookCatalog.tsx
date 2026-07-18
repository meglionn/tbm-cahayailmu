"use client";

import { useMemo, useState } from "react";
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
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("Semua");

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
              className="bg-white rounded-card overflow-hidden shadow-soft flex flex-col"
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
                  <span className="font-label font-bold text-xs tracking-wide text-coral mb-1">
                  {book.nomorInventaris}
                  </span>
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
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {book.jumlahEksemplar && (
                    <span className="font-label font-bold text-[0.7rem] tracking-wide uppercase px-3 py-1 rounded-full bg-mint/20 text-grass-dark">
                      {book.jumlahEksemplar} eksemplar
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
