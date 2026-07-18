"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Book } from "@/lib/books";
import BookCard from "./BookCard";

export default function BookShowcase({ books }: { books: Book[] }) {
  const router = useRouter();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Book | null>(null);

  if (books.length === 0) return null;

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleGoToCatalog = () => {
    if (!selected) return;
    const judul = selected.judul;
    setSelected(null);
    router.push(`/katalog?cari=${encodeURIComponent(judul)}`);
  };

  return (
    <section id="sampul-buku" className="py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-7 flex-wrap">
          <div>
            <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
              Koleksi Kami
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-board-dark">
              Sampul Buku Pilihan
            </h2>
            <p className="text-ink-soft mt-2 max-w-[48ch]">
              Klik salah satu sampul untuk melihat detailnya, lalu lanjut ke katalog lengkap.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-320)}
              aria-label="Geser ke kiri"
              className="w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center text-board-dark hover:bg-cream transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(320)}
              aria-label="Geser ke kanan"
              className="w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center text-board-dark hover:bg-cream transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {books.map((book, i) => (
            <button
              key={book.id}
              type="button"
              onClick={() => setSelected(book)}
              aria-label={`Lihat detail buku ${book.judul}`}
              className="snap-start shrink-0 w-[46%] sm:w-[28%] md:w-[20%] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-board-dark focus-visible:outline-offset-2 rounded-card"
            >
              <BookCard book={book} index={i} />
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/katalog"
            className="inline-block font-bold text-sm text-board-dark bg-white border-2 border-board/10 px-6 py-3 rounded-full hover:bg-sun transition-colors"
          >
            Lihat Semua Buku →
          </a>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-board-dark/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail buku ${selected.judul}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-card shadow-pop max-w-sm w-full p-6 relative"
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

            <div className="w-32 mx-auto mb-4">
              <BookCard book={selected} />
            </div>

            <button
              type="button"
              onClick={handleGoToCatalog}
              className="mt-2 w-full font-bold text-sm text-white bg-coral px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Lihat di Katalog →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
