export type Book = {
  call: string;
  title: string;
  author: string;
  kategori: string;
};

// ------------------------------------------------------------------
// KONFIGURASI GOOGLE SHEETS
// ------------------------------------------------------------------
// 1. Buat Google Sheet dengan kolom PERSIS seperti ini di baris pertama:
//      call | title | author | kategori | status
//    (isi "status" hanya boleh "tersedia" atau "dipinjam")
//
// 2. Di Google Sheets: File > Share > Publish to web
//    - Pilih sheet yang berisi data buku
//    - Pilih format "Comma-separated values (.csv)"
//    - Klik Publish, lalu salin URL yang muncul
//
// 3. Tempel URL tsb ke SHEET_CSV_URL di bawah ini, contoh:
//    "https://docs.google.com/spreadsheets/d/e/2PACX-xxxxxxx/pub?output=csv"
//
// Selama SHEET_CSV_URL masih kosong, halaman katalog akan menampilkan
// data contoh (SAMPLE_BOOKS) di bawah supaya tampilannya tetap terisi.
// ------------------------------------------------------------------
export const SHEET_CSV_URL = "";

export const SAMPLE_BOOKS: Book[] = [
  { call: "813.6 / LAS", title: "Laskar Pelangi", author: "Andrea Hirata", kategori: "Fiksi", status: "tersedia" },
  { call: "398.2 / DON", title: "Kumpulan Dongeng Nusantara", author: "Tim Perpusnas", kategori: "Anak", status: "tersedia" },
  { call: "370 / EDU", title: "Ki Hajar Dewantara: Pemikiran Pendidikan", author: "Bambang S.", kategori: "Pendidikan", status: "dipinjam" },
  { call: "910 / TRA", title: "Menjelajah Nusantara", author: "Yusuf Adi", kategori: "Referensi", status: "tersedia" },
  { call: "641.5 / MAS", title: "Resep Masakan Rumahan", author: "Ibu Siti", kategori: "Referensi", status: "tersedia" },
  { call: "813 / BUM", title: "Bumi Manusia", author: "Pramoedya Ananta Toer", kategori: "Fiksi", status: "dipinjam" },
  { call: "158 / MOT", title: "Motivasi Anak Bangsa", author: "Rani Kartika", kategori: "Motivasi", status: "tersedia" },
  { call: "595.7 / SER", title: "Serangga di Sekitar Kita", author: "Tim Sains Anak", kategori: "Anak", status: "tersedia" },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Fiksi: "bg-pink",
  Anak: "bg-mint",
  Pendidikan: "bg-lavender",
  Referensi: "bg-sky-top",
  Motivasi: "bg-sun",
};

export function colorFor(kategori: string): string {
  return CATEGORY_COLORS[kategori] || "bg-grass";
}

// Menormalkan satu baris hasil parse CSV menjadi bentuk Book yang rapi,
// supaya tahan terhadap spasi ekstra, huruf besar/kecil, dsb dari Sheets.
export function normalizeRow(row: Record<string, string>): Book | null {
  const call = (row.call || "").trim();
  const title = (row.title || "").trim();
  const author = (row.author || "").trim();
  const kategori = (row.kategori || "Umum").trim();

  if (!title) return null;

  return {
    call: call || "-",
    title,
    author: author || "Tanpa nama",
    kategori,
  };
}