"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Book } from "@/lib/books";
import BookCard from "./BookCard";
import BookRow from "./BookRow";

export default function BookCatalog({ books }: { books: Book[] }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("cari") ?? "");
  const [level, setLevel] = useState("Semua");

  // Kalau datang dari carousel di halaman utama (link ?cari=Judul Buku),
  // isi otomatis kolom pencarian supaya langsung menampilkan buku yang diklik.
  useEffect(() => {
    const cari = searchParams.get("cari");
    if (cari) setQuery(cari);
  }, [searchParams]);

  const levelList = useMemo(() => {
    const unique = Array.from(new Set(books.map((b) => b.level))).filter(Boolean);
    unique.sort();
    return ["Semua", ...unique];
  }, [books]);

  const isBrowsing = query.trim() === "" && level === "Semua";

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

  const groupedByLevel = useMemo(() => {
    const groups: { level: string; books: Book[] }[] = [];
    for (const l of levelList) {
      if (l === "Semua") continue;
      const groupBooks = books.filter((b) => b.level === l);
      if (groupBooks.length > 0) groups.push({ level: l, books: groupBooks });
    }
    const noLevel = books.filter((b) => !b.level);
    if (noLevel.length > 0) groups.push({ level: "", books: noLevel });
    return groups;
  }, [books, levelList]);

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

      {isBrowsing ? (
        // Mode jelajah: baris-baris horizontal per Level, bisa di-scroll ke samping
        groupedByLevel.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-card shadow-soft">
            <p className="font-display font-bold text-lg text-board-dark mb-1">
              Belum ada buku
            </p>
          </div>
        ) : (
          groupedByLevel.map((group) => (
            <BookRow
              key={group.level || "lainnya"}
              title={group.level ? `Level ${group.level}` : "Lainnya"}
              books={group.books}
            />
          ))
        )
      ) : (
        // Mode cari/filter: grid biasa
        <>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {filtered.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} hideCover />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
