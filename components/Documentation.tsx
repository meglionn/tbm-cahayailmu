const entries = [
  {
    week: "MINGGU 1",
    caption: "Pembukaan taman baca & perkenalan ke warga sekitar.",
    gradient: "from-pink to-[#fbc9d8]",
  },
  {
    week: "MINGGU 2",
    caption: "Sesi mendongeng bersama anak-anak TK dan PAUD.",
    gradient: "from-mint to-[#c7f0e6]",
  },
  {
    week: "MINGGU 3",
    caption: "Penataan ulang rak dan pendataan koleksi buku.",
    gradient: "from-lavender to-[#dcd2f7]",
  },
  {
    week: "MINGGU 4",
    caption: "Pelatihan pengurus taman baca untuk pengelolaan mandiri.",
    gradient: "from-sun to-[#ffe08a]",
  },
  {
    week: "MINGGU 5",
    caption: "Lomba membaca nyaring antar anak SD dan SMP.",
    gradient: "from-coral to-[#f7b3a4]",
  },
  {
    week: "MINGGU 6",
    caption: "Serah terima pengelolaan taman baca ke warga.",
    gradient: "from-grass to-[#c9ecc7]",
  },
];

export default function Documentation() {
  return (
    <section id="dokumentasi" className="py-16 bg-cream-2">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-8 max-w-[60ch]">
          <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
            Jurnal Kegiatan
          </span>
          <h2 className="font-display font-bold text-3xl">
            Dokumentasi kunjungan KKN
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {entries.map((entry) => (
            <figure
              key={entry.week}
              className="m-0 bg-white rounded-card overflow-hidden shadow-soft"
            >
              <div
                className={`aspect-square flex items-center justify-center text-white font-bold text-sm text-center p-3 bg-gradient-to-br ${entry.gradient}`}
              >
                Foto kegiatan
              </div>
              <figcaption className="px-4 pt-3.5 pb-4">
                <span className="font-label font-bold text-[0.7rem] text-coral inline-block mb-1.5 bg-coral/10 px-2.5 py-1 rounded-full">
                  {entry.week}
                </span>
                <span className="block text-[0.92rem]">{entry.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
