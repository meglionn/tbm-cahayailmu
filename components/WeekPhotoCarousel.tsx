"use client";
 
import { useRef } from "react";
 
export type WeekPhoto = {
  // Kosongkan src ("") kalau foto asli belum ada -> akan tampil kotak
  // warna placeholder dulu supaya layout & carousel tetap kelihatan.
  src: string;
  alt: string;
  caption: string;
};
 
const gradients = [
  "from-pink to-[#fbc9d8]",
  "from-mint to-[#c7f0e6]",
  "from-lavender to-[#dcd2f7]",
  "from-sun to-[#ffe08a]",
  "from-coral to-[#f7b3a4]",
  "from-grass to-[#c9ecc7]",
];
 
export default function WeekPhotoCarousel({ photos }: { photos: WeekPhoto[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
 
  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };
 
  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <figure
            key={i}
            className="m-0 snap-start shrink-0 w-[78%] sm:w-[46%] md:w-[34%] bg-white rounded-card overflow-hidden shadow-soft"
          >
            <div className="aspect-[4/3]">
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center text-white font-bold text-sm text-center p-4 bg-gradient-to-br ${
                    gradients[i % gradients.length]
                  }`}
                >
                  {photo.alt}
                </div>
              )}
            </div>
            <figcaption className="px-4 pt-3 pb-4 text-[0.88rem] text-board-dark">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
 
      <button
        type="button"
        onClick={() => scrollByAmount(-300)}
        aria-label="Geser foto ke kiri"
        className="hidden sm:flex absolute left-0 top-[38%] -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-white shadow-soft items-center justify-center text-board-dark hover:bg-cream transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(300)}
        aria-label="Geser foto ke kanan"
        className="hidden sm:flex absolute right-0 top-[38%] -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-white shadow-soft items-center justify-center text-board-dark hover:bg-cream transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
 
