import PhotoGallery from "./PhotoGallery";

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

// TAMBAHKAN foto suasana taman baca di sini. Taruh file gambarnya di folder
// public/images/suasana/, lalu isi src dengan path-nya, contoh:
// { src: "/images/suasana/1.jpg", alt: "Anak-anak membaca bersama" }
// Kalau src dikosongkan (""), akan tampil kotak warna placeholder dulu.
const suasanaPhotos = [
  { src: "/images/halaman.jpg"},
  { src: "/images/tbm.jpg"},
  { src: "/images/image.jpg" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
          </div>

          <ul className="list-none grid gap-4 p-0 content-start">
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

        <div className="mt-12">
          <span className="font-label font-bold text-[0.78rem] tracking-wide uppercase text-coral block mb-1.5">
            Foto Suasana
          </span>
          <h3 className="font-display font-bold text-xl mb-4">
            Taman Baca Mini Cahaya Ilmu
          </h3>
          <PhotoGallery photos={suasanaPhotos} />
        </div>
      </div>
    </section>
  );
}
