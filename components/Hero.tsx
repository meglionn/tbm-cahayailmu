export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-sky-top via-sky-bottom to-cream pt-14 pb-24"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="rainbow-arc" />
        <div className="cloud w-[90px] h-[34px] top-10 left-[6%] animate-float1" />
        <div className="cloud w-[70px] h-[26px] top-[100px] right-[10%] animate-float2" />
        <div className="cloud w-[60px] h-[22px] top-5 right-[28%] animate-float1" />
        <span className="absolute top-[60px] left-[16%] text-sun text-2xl animate-twinkle [animation-delay:.2s]">★</span>
        <span className="absolute top-[130px] right-[16%] text-sun text-base animate-twinkle [animation-delay:1s]">★</span>
        <span className="absolute top-[30px] left-[38%] text-sun text-sm animate-twinkle [animation-delay:1.8s]">★</span>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative">
        <div className="relative z-[2] max-w-[760px] mx-auto mt-[70px] bg-wood rounded-[26px] p-4 shadow-soft">
          <div className="bg-board rounded-[18px] px-9 py-11 text-center">
            <h1 className="text-cream font-display font-bold text-[clamp(1.9rem,5vw,2.6rem)] leading-tight [text-shadow:0_3px_0_rgba(0,0,0,0.15)]">
              Taman Baca Mini
              <span className="block text-sun text-[1.15em] mt-1.5 [text-shadow:0_3px_0_rgba(0,0,0,0.15)]">
                Cahaya Ilmu
              </span>
            </h1>
          </div>
          <div className="h-3.5 bg-wood-dark rounded-b-[10px] mx-1.5 shadow-[inset_0_3px_4px_rgba(0,0,0,0.15)]" />
        </div>

        <p className="max-w-[560px] mx-auto mt-6 text-center text-ink-soft text-base relative z-[2]">
          Ruang baca kecil yang hangat untuk anak-anak TK, PAUD, SD, hingga SMP
          
        </p>

        <div className="flex justify-center gap-3.5 flex-wrap mt-8 relative z-[2]">
          {[
            { num: "900+", label: "JUDUL BUKU" },
            { num: "7", label: "HARI OPERASIONAL" },
            { num: "30+", label: "PENGUNJUNG ANAK" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl px-5 py-3.5 text-center shadow-soft min-w-[110px]"
            >
              <div className="font-display font-bold text-2xl text-board-dark">
                {item.num}
              </div>
              <div className="font-label text-[0.7rem] text-ink-soft font-semibold tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
