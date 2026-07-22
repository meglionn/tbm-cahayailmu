const pengurus = [
  {
    name: "Ulin Nikmatin Nihayah",
    role: "Pendiri TBM Cahaya Ilmu",
    color: "bg-coral",
    photo: "/images/bu-ulin.png",
    ttl: "Blitar, 24 Juni 2001",
    pendidikan: "S1 Ilmu Perpustakaan dan Informasi Islam",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.toLowerCase() !== "nama")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Pengurus() {
  return (
    <section id="pengurus" className="py-16 bg-cream-2">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-8 max-w-[60ch]">
          <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
            Di Balik Layar
          </span>
          <h2 className="font-display font-bold text-3xl">
            Pengurus Taman Baca
          </h2>
          </div>

        <div className="flex justify-center">
          {pengurus.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-card shadow-soft overflow-hidden flex flex-col sm:flex-row w-full max-w-[720px]"
            >
              <div className="sm:w-[280px] w-full h-[260px] sm:h-auto flex-shrink-0">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center text-white font-display font-bold text-4xl ${p.color}`}
                  >
                    {initials(p.name) || "?"}
                  </div>
                )}
              </div>
              <div className="p-7 flex flex-col gap-3 justify-center">
                <div>
                  <p className="font-display font-bold text-2xl leading-tight">
                    {p.name}
                  </p>
                  <p className="font-label text-sm text-coral font-bold mt-1 uppercase tracking-wide">
                    {p.role}
                  </p>
                </div>
                {(p.ttl || p.pendidikan ) && (
                  <div className="space-y-2 pt-2 border-t border-cream-2">
                    {p.ttl && (
                      <p className="font-label text-[0.9rem] text-ink-soft leading-snug">
                        <span className="font-bold text-ink">TTL:</span> {p.ttl}
                      </p>
                    )}
                    {p.pendidikan && (
                      <p className="font-label text-[0.9rem] text-ink-soft leading-snug">
                        <span className="font-bold text-ink">Pend. Terakhir:</span>{" "}
                        {p.pendidikan}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}