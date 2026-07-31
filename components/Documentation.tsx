import WeekPhotoCarousel, { type WeekPhoto } from "./WeekPhotoCarousel";

// Dokumentasi kegiatan dibagi jadi 3 minggu. Tiap minggu punya beberapa foto
// yang bisa digeser ke samping (carousel), dan tiap foto punya deskripsinya
// masing-masing lewat field "caption".
//
// CARA NAMBAH/GANTI FOTO:
// 1. Taruh file fotonya di folder public/images/ (atau bikin subfolder baru
//    misal public/images/dokumentasi/).
// 2. Isi "src" dengan path-nya, misal "/images/dokumentasi/minggu1-1.jpg".
// 3. Kalau "src" dikosongkan (""), otomatis tampil kotak warna placeholder
//    dulu (pakai teks dari "alt") sampai fotonya beneran diisi.
const weeks: { week: string; title: string; photos: WeekPhoto[] }[] = [
  {
    week: "MINGGU 1",
    title: "Pembukaan dan Pengenalan Taman Baca",
    photos: [
      {
        src: "/images/week1.jpg",
        alt: "Pembukaan taman baca",
        caption: "Pembukaan di taman baca & perkenalan ke warga sekitar.",
      },
      {
        src: "/images/pengelolaan.jpeg",
        alt: "Sesi pengelolaan taman baca",
        caption: "Pengelolaan taman baca berupa penomoran buku dan mendata inventaris.",
      },
      {
        src: "/images/week1-1.jpeg",
        alt: "Tambahkan foto",
        caption: "Sesi membaca nyaring buku bersama anak-anak di taman baca.",
      },
      {
        src: "/images/proyek.jpg",
        alt: "Tambahkan foto",
        caption: "Membuat proyek mencampurkan warna dan mengenal warna-warna berbasis buku bacaan.",
      },
      {
        src: "/images/proyek1.jpg",
        alt: "Tambahkan foto",
        caption: "Hasil pembuatan proyek anak-anak tbm cahaya ilmu.",
      },
    ],
  },
  {
    week: "MINGGU 2",
    title: "Melanjutkan Program Kerja dan Pengelolaan Taman Baca",
    photos: [
      {
        src: "/images/proyek.jpeg",
        alt: "Pelatihan pengurus",
        caption: "Membuat proyek berbasis buku bacaan.",
      },
      {
        src: "/images/fotbar.jpeg",
        alt: "Penataan rak buku",
        caption: "Membuat konten bersama anak-anak Taman Baca Cahaya Ilmu.",
      },
      {
        src: "/images/kunjungan dpl.jpg",
        alt: "Tambahkan foto",
        caption: "Kunjungan DPL ke Taman Baca Cahaya Ilmu.",
      },
    ],
  },
  {
    week: "MINGGU 3",
    title: "Kunjungan Literasi dari TK dan SD",
    photos: [
      {
        src: "/images/kunjungan-tk.jpeg",
        alt: "Lomba membaca nyaring",
        caption: "Kunjungan Literasi dari TK ke Taman Baca Cahaya Ilmu.",
      },
      {
        src: "/images/mewarnai tk.jpeg",
        alt: "Tambahkan foto",
        caption: "Membuat proyek mewarnai bersama anak-anak TK berdasarkan buku bacaan.",
      },
      {
        src: "/images/fotbar-sd.jpeg",
        alt: "Tambahkan foto",
        caption: "Kunjungan Literasi dari SD ke Taman Baca Cahaya Ilmu.",
      },
      {
        src: "/images/nyaring-tk.jpeg",
        alt: "Serah terima pengelolaan",
        caption: "Membaca nyaring bersama anak-anak TK.",
      },
      {
        src: "/images/membaca-sd.jpeg",
        alt: "Tambahkan foto",
        caption: "Membaca nyaring bersama anak-anak SD.",
      },
      {
        src: "/images/membuat-kipas.jpeg",
        alt: "Tambahkan foto",
        caption: "Membuat proyek kipas berbentuk bunga dan mewarnai bersama anak-anak SD berdasarkan buku bacaan.",
      },
    ],
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

        <div className="flex flex-col gap-10">
          {weeks.map((weekEntry) => (
            <div key={weekEntry.week}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label font-bold text-[0.7rem] text-coral bg-coral/10 px-2.5 py-1 rounded-full">
                  {weekEntry.week}
                </span>
                <h3 className="font-display font-bold text-lg text-board-dark">
                  {weekEntry.title}
                </h3>
              </div>
              <WeekPhotoCarousel photos={weekEntry.photos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}