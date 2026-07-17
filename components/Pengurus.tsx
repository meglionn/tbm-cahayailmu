const pengurus = [
  { name: "Ibu Ulin", role: "Pendiri TBM Cahaya Ilmu ", color: "bg-coral" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {pengurus.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-card p-5 text-center shadow-soft flex flex-col items-center gap-2.5"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-lg shadow-pop ${p.color}`}
              >
                {initials(p.name) || "?"}
              </div>
              <div>
                <p className="font-display font-bold text-base leading-tight">
                  {p.name}
                </p>
                <p className="font-label text-[0.78rem] text-ink-soft mt-0.5">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
