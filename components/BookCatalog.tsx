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

function statusStyle(status: string) {
  const s = status.toLowerCase();
  if (s.includes("tersedia")) {
    return "bg-grass/15 text-grass-dark";
  }
  if (s.includes("pinjam")) {
    return "bg-coral/15 text-coral";
  }
  return "bg-ink-soft/10 text-ink-soft";
}

export default function BookCatalog({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [kategori, setKategori] = useState("Semua");

  const kategoriList = useMemo(() => {
    const unique = Array.from(new Set(books.map((b) => b.kategori))).filter(Boolean);
    return ["Semua", ...unique];
  }, [books]);

  const filtered = useMemo(() => {
    return books.filter((book) => {
      const matchKategori = kategori === "Semua" || book.kategori === kategori;
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        book.judul.toLowerCase().includes(q) ||
        book.deskripsi.toLowerCase().includes(q);
      return matchKategori && matchQuery;
    });
  }, [books, query, kategori]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari judul atau kata kunci..."
          className="flex-1 rounded-full px-5 py-3 border-2 border-board/10 bg-white text-sm font-body focus:outline-none focus:border-coral transition-colors"
        />
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="rounded-full px-5 py-3 border-2 border-board/10 bg-white text-sm font-bold text-board-dark focus:outline-none focus:border-coral transition-colors"
        >
          {kategoriList.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-card shadow-soft">
          <p className="font-display font-bold text-lg text-board-dark mb-1">
            Buku tidak ditemukan
          </p>
          <p className="text-ink-soft text-sm">
            Coba kata kunci lain atau ganti filter kategori.
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
                className={`h-28 flex items-center justify-center text-white font-display font-bold text-sm text-center px-4 bg-gradient-to-br ${
                  cardGradients[index % cardGradients.length]
                }`}
              >
                {book.kategori}
              </div>
              <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base text-board-dark mb-1.5">
                  {book.judul}
                </h3>
                {book.deskripsi && (
                  <p className="text-sm text-ink-soft mb-3 flex-1">{book.deskripsi}</p>
                )}
                <span
                  className={`self-start font-label font-bold text-[0.7rem] tracking-wide uppercase px-3 py-1 rounded-full ${statusStyle(
                    book.status
                  )}`}
                >
                  {book.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
