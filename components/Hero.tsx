import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-sky-top via-sky-bottom to-cream pt-14 pb-24"
    >
      <div className="max-w-[900px] mx-auto px-6 relative z-[2] mb-10">
        <div className="relative rounded-card overflow-hidden shadow-soft">
          <Image
            src="/images/poster.png"
            alt="Poster Taman Baca Mini Cahaya Ilmu"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

        <p className="max-w-[560px] mx-auto mt-6 text-center text-ink-soft text-base relative z-[2]">
          Ruang baca kecil yang hangat untuk anak-anak TK, PAUD, SD, hingga SMP
          
        </p>

         <div className="flex justify-center gap-3.5 flex-wrap mt-7 relative z-[2]">
          {[
            { num: "900+", label: "JUDUL BUKU" },
            { num: "7", label: "HARI OPERASIONAL" },
            { num: "30+", label: "PENGUNJUNG ANAK" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl px-7 py-5 text-center shadow-soft min-w-[200px]"
            >
              <div className="font-display font-bold text-2xl text-board-dark">
                {item.num}
              </div>
              <div className="font-label text-[1rem] text-ink-soft font-semibold tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="rainbow-arc" />
        <div className="cloud w-[90px] h-[34px] top-10 left-[6%] animate-float1" />
        <div className="cloud w-[70px] h-[26px] top-[100px] right-[10%] animate-float2" />
        <div className="cloud w-[60px] h-[22px] top-5 right-[28%] animate-float1" />
        <span className="absolute top-[60px] left-[16%] text-sun text-2xl animate-twinkle [animation-delay:.2s]">★</span>
        <span className="absolute top-[130px] right-[16%] text-sun text-base animate-twinkle [animation-delay:1s]">★</span>
        <span className="absolute top-[30px] left-[38%] text-sun text-sm animate-twinkle [animation-delay:1.0s]">★</span>
      </div>
    </section>
  );
}