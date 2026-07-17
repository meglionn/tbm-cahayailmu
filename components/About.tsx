const points = [
  {
    text: "Menyediakan akses buku bacaan gratis untuk anak-anak sekitar, dari cerita bergambar hingga komik.",
    color: "bg-coral",
  },
  {
    text: "Mengadakan kegiatan literasi rutin: mendongeng, membaca bersama, dan lomba kecil.",
    color: "bg-grass-dark",
  },
  {
    text: "Melatih pengurus lokal agar taman baca tetap hidup setelah masa KKN selesai.",
    color: "bg-lavender",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-8 max-w-[60ch]">
          <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
            Tentang Kami
          </span>
          <h2 className="font-display font-bold text-3xl">
            Sudut kecil yang menyalakan rasa ingin tahu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-card bg-gradient-to-br from-mint to-sky-top flex items-center justify-center text-white font-bold text-center p-5 shadow-soft">
            Foto suasana
            <br />
            Taman Baca Mini Cahaya Ilmu
          </div>

          <div>
            <p>
              Taman Baca Mini Cahaya Ilmu adalah ruang literasi mandiri yang didirikan oleh Ibu Ulin
              di seberang rumahnya yang juga memiliki usaha bakso mini keluarga. Taman baca ini diinisiasi saat 
              pandemi Covid-19 sebagai solusi edukatif untuk mengurangi tingginya ketergantungan anak-
              anak terhadap gawai (handphone) akibat pembatasan sosial.
            </p>
            <p>
              Seiring berjalannya waktu, dedikasi taman baca ini mendapat apresiasi dan dukungan dari pemerintah. Melalui Perpustakaan Daerah (Perpusda), Perpustakaan Nasional (Perpusnas) turut menyalurkan donasi buku untuk mendukung operasional dan memperkaya bahan bacaan bagi anak-anak di lingkungan sekitar.
            </p>
            <ul className="list-none mt-5 grid gap-4 p-0">
              {points.map((point, i) => (
                <li key={i} className="flex gap-3.5 items-start">
                  <span
                    className={`font-display font-bold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-pop ${point.color}`}
                  >
                    {i + 1}
                  </span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
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
                href="https://www.google.com/maps/search/?api=1&query=Taman+Baca+Mini+Cahaya+Ilmu"
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
