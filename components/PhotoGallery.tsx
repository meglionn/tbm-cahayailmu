"use client";

import { useRef } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

const gradients = [
  "from-mint to-sky-top",
  "from-pink to-lavender",
  "from-sun to-coral",
  "from-grass to-mint",
  "from-lavender to-pink",
];

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
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
          <div
            key={i}
            className="snap-start shrink-0 w-[78%] sm:w-[46%] md:w-[38%] aspect-[4/3] rounded-card overflow-hidden shadow-soft"
          >
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
                className={`w-full h-full flex items-center justify-center text-white font-bold text-center p-5 bg-gradient-to-br ${
                  gradients[i % gradients.length]
                }`}
              >
                {photo.alt}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(-320)}
        aria-label="Geser ke kiri"
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow-soft items-center justify-center text-board-dark hover:bg-cream transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(320)}
        aria-label="Geser ke kanan"
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow-soft items-center justify-center text-board-dark hover:bg-cream transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
