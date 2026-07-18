"use client";

import { useRef } from "react";
import type { Book } from "@/lib/books";
import BookCard from "./BookCard";

export default function BookRow({ title, books }: { title: string; books: Book[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-bold text-lg text-board-dark">{title}</h3>
        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-320)}
            aria-label="Geser ke kiri"
            className="w-8 h-8 rounded-full bg-white shadow-soft flex items-center justify-center text-board-dark hover:bg-cream transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(320)}
            aria-label="Geser ke kanan"
            className="w-8 h-8 rounded-full bg-white shadow-soft flex items-center justify-center text-board-dark hover:bg-cream transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
          <div key={book.id} className="snap-start shrink-0 w-[42%] sm:w-[26%] md:w-[19%] lg:w-[16%]">
            <BookCard book={book} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
