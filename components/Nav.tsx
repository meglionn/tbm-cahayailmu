export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-sky-bottom border-b-[3px] border-board/10">
      <div className="max-w-[1100px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4 flex-wrap">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <span className="w-[42px] h-[42px] rounded-full bg-sun flex items-center justify-center text-xl shadow-pop flex-shrink-0">
            📖
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-board-dark">
              Taman Baca Mini
            </span>
            <span className="font-label text-[0.68rem] text-ink-soft tracking-wide">
              CAHAYA ILMU
            </span>
          </span>
        </a>
        <nav className="flex gap-1 flex-wrap">
          {[
            { href: "/#tentang", label: "Tentang" },
            { href: "/#pengurus", label: "Pengurus" },
            { href: "/katalog", label: "Katalog" },
            { href: "/#dokumentasi", label: "Dokumentasi" },
            { href: "/#donasi", label: "Donasi" },
            { href: "/#kontak", label: "Kontak" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-bold text-sm text-board-dark no-underline px-4 py-2 rounded-full transition-colors hover:bg-sun focus-visible:outline focus-visible:outline-2 focus-visible:outline-board-dark focus-visible:outline-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}