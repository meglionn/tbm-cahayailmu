export default function Donate() {
  return (
    <section id="donasi" className="py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-board rounded-card px-7 py-10 sm:px-12 sm:py-12 text-center relative overflow-hidden shadow-soft">
          <span
            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-sun/20"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-mint/20"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-sun block mb-2">
              Ingin Berbagi?
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-cream max-w-[36ch] mx-auto">
              Dukung Taman Baca Mini Cahaya Ilmu
            </h2>
            <p className="text-cream/85 max-w-[52ch] mx-auto mt-3">
              Donasi buku maupun dana sangat membantu keberlangsungan taman
              baca ini. Silakan hubungi atau
              kirimkan donasi ke nomor berikut.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 mt-7 bg-white rounded-2xl px-7 py-5 shadow-pop">
              <div className="text-left">
                <p className="font-label font-bold text-[0.7rem] text-ink-soft tracking-wide">
                  WHATSAPP / E-WALLET (DANA · OVO · GOPAY)
                </p>
                <p className="font-display font-bold text-2xl text-board-dark">
                  0856-4649-5241                
                </p>
                <p className="text-[0.8rem] text-ink-soft mt-0.5">
                  a.n. Ulin 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
