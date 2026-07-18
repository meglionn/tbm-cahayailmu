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
        <div className="mt-14">
            <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
              Lokasi Kami
            </span>
            <h3 className="font-display font-bold text-2xl mb-5">
              Kunjungi Taman Baca Mini Cahaya Ilmu
            </h3>
  
            <div className="relative rounded-card overflow-hidden shadow-soft">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Taman+Baca+Cahaya+Ilmu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-sm font-bold text-sky-700 shadow-soft hover:bg-cream transition-colors"
              >
                Maps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
  
              <iframe
                title="Lokasi Taman Baca Mini Cahaya Ilmu"
                src="https://www.google.com/maps?q=Taman+Baca+Cahaya+Ilmu+Jl.+Arjuno+77&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
