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
              Taman Baca Mini Cahaya Ilmu merupakan ruang literasi masyarakat yang 
              didirikan secara mandiri oleh Ibu Ulin. Berlokasi di seberang halaman rumah 
              beliau yang juga menjadi area usaha bakso mini milik keluarganya, taman baca ini lahir 
              sebagai respon solutif di tengah pandemi Covid-19. Prihatin dengan tingginya 
              ketergantungan anak-anak terhadap gawai (handphone) selama masa pembatasan sosial, 
              Ibu Ulin berinisiatif menyediakan alternatif aktivitas yang lebih edukatif.
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
      </div>
    </section>
  );
}
