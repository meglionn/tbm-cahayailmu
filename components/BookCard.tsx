"use client";

import { useState } from "react";
import type { Book } from "@/lib/books";

const gradients = [
  "from-pink to-[#fbc9d8]",
  "from-mint to-[#c7f0e6]",
  "from-lavender to-[#dcd2f7]",
  "from-sun to-[#ffe08a]",
  "from-coral to-[#f7b3a4]",
  "from-grass to-[#c9ecc7]",
];

export default function BookCard({
  book,
  index = 0,
  hideCover = false,
}: {
  book: Book;
  index?: number;
  hideCover?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  // Cover dicocokkan OTOMATIS dari nama file di folder public/images/ ke judul
  // buku (lihat lib/covers.ts). Kalau belum ada file yang cocok, coverUrl
  // bernilai null dan otomatis tampil placeholder warna, bukan cover salah.
  const showCover = book.coverUrl && !imgFailed;

  return (
    <div className="w-full">
      {!hideCover && (
        <div className="relative aspect-[3/4] rounded-card overflow-hidden shadow-soft bg-cream-2 mb-2.5">
          {showCover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={book.coverUrl!}
              alt={`Sampul buku ${book.judul}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center text-white font-display font-bold text-sm text-center p-4 bg-gradient-to-br ${
                gradients[index % gradients.length]
              }`}
            >
              {book.judul}
            </div>
          )}
          {book.level && (
            <span className="absolute top-2 left-2 font-label font-bold text-[0.65rem] tracking-wide uppercase bg-white/90 text-board-dark px-2.5 py-1 rounded-full shadow-soft">
              Level {book.level}
            </span>
          )}
        </div>
      )}
      <div className={hideCover ? "bg-white rounded-card shadow-soft p-4" : "px-0.5"}>
        <h3 className="font-display font-bold text-sm text-board-dark leading-snug line-clamp-2">
          {book.nomorInventaris && (
            <span className="text-coral font-bold mr-1">{book.nomorInventaris}</span>
          )}
          {book.judul}
        </h3>
        {book.pengarang && (
          <p className="text-xs text-ink-soft mt-0.5 line-clamp-1">Oleh {book.pengarang}</p>
        )}
        {hideCover && book.level && (
          <span className="inline-block mt-2 font-label font-bold text-[0.65rem] tracking-wide uppercase bg-mint/20 text-grass-dark px-2.5 py-1 rounded-full">
            Level {book.level}
          </span>
        )}
      </div>
    </div>
  );
}
        