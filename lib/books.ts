import { findCoverForTitle } from "./covers";

export type Book = {
  id: string;
  nomorInventaris: string;
  tanggalTerima: string;
  judul: string;
  pengarang: string;
  penerbit: string;
  tahunTerbit: string;
  jumlahEksemplar: string;
  level: string;
  subjek: string;
  keterangan: string;
  coverUrl: string | null;
};

// GANTI dengan ID Google Sheets kamu.
// ID adalah bagian di antara "/d/" dan "/edit" pada URL sheet-nya, contoh:
// https://docs.google.com/spreadsheets/d/INI_ID_NYA/edit#gid=0
const SHEET_ID = "1Gm9uHBEEVH1DYbrA57cqLOrt33JXGRkb";
// gid=0 adalah tab PERTAMA (paling kiri) di Google Sheets kamu.
// Kalau data buku dipindah ke tab lain, klik tab-nya lalu lihat "gid=..." di address bar.
const GID = "495376071";

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

// Parser CSV sederhana yang tetap aman untuk field berisi koma
// selama field tersebut dibungkus tanda kutip ("seperti ini, contoh").
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// Header di Google Sheets dicocokkan berdasarkan NAMA kolom (bukan posisi),
// supaya tetap aman walau kolom digeser/ditambah di kemudian hari.
function normalizeHeader(header: string): string {
  // Buang semua karakter selain huruf/angka (spasi ganda, karakter tak
  // terlihat dari Google Sheets, dsb) supaya pencocokan nama kolom lebih
  // tahan banting terhadap variasi kecil penulisan header.
  return header
    .trim()
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[^a-z0-9]/g, "");
}

// Beberapa kemungkinan nama header untuk tiap field, biar fleksibel
// kalau ada perbedaan penulisan kecil di sheet.
const HEADER_ALIASES: Record<keyof Omit<Book, "id" | "nomorInventaris" | "coverUrl">, string[]> = {
  tanggalTerima: ["tanggal terima", "tanggal"],
  judul: ["judul buku", "judul"],
  pengarang: ["pengarang", "penulis"],
  penerbit: ["penerbit"],
  tahunTerbit: ["tahun terbit", "tahun"],
  jumlahEksemplar: ["jumlah eksemplar", "eksemplar", "jumlah"],
  level: ["level"],
  subjek: ["subjek", "kategori"],
  keterangan: ["keterangan", "catatan"],
};

function buildColumnIndex(headerRow: string[]): Record<string, number> {
  const normalized = headerRow.map(normalizeHeader);
  const index: Record<string, number> = {};

  for (const field of Object.keys(HEADER_ALIASES) as (keyof typeof HEADER_ALIASES)[]) {
    const aliases = HEADER_ALIASES[field].map(normalizeHeader);
    // "includes" (bukan exact match) supaya tahan variasi kecil, misal
    // header "Judul Buku " (ada spasi ekstra) tetap cocok dengan alias "judulbuku".
    const foundIndex = normalized.findIndex((h) =>
      aliases.some((alias) => h.includes(alias) || alias.includes(h))
    );
    if (foundIndex !== -1) {
      index[field] = foundIndex;
    }
  }

  // Nomor Inventaris dipakai sebagai id unik tiap buku, dan juga ditampilkan
  const invAliases = ["nomorinventaris", "noinventaris", "nomor"].map(normalizeHeader);
  const invIndex = normalized.findIndex((h) =>
    invAliases.some((alias) => h.includes(alias))
  );
  if (invIndex !== -1) {
    index["id"] = invIndex;
    index["nomorInventaris"] = invIndex;
  }

  return index;
}

export async function getBooks(): Promise<Book[]> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error("Gagal mengambil data Google Sheets, status:", res.status);
      return [];
    }

    const csvText = await res.text();
    const lines = csvText.split(/\r?\n/).filter((line) => line.trim() !== "");

    if (lines.length < 2) {
      console.error("Sheet tidak punya data (hanya header atau kosong).");
      return [];
    }

    const headerRow = parseCsvLine(lines[0]);
    const columnIndex = buildColumnIndex(headerRow);

    if (columnIndex.judul === undefined) {
      console.error(
        "Kolom 'Judul Buku' tidak ditemukan di header sheet. Header yang terbaca:",
        headerRow
      );
      return [];
    }

    const dataLines = lines.slice(1);

    const books: Book[] = dataLines
      .map((line, i) => {
        const cols = parseCsvLine(line);
        const get = (field: string) =>
          columnIndex[field] !== undefined ? cols[columnIndex[field]]?.trim() || "" : "";

        return {
          id: get("id") || String(i + 1),
          nomorInventaris: get("nomorInventaris"),
          tanggalTerima: get("tanggalTerima"),
          judul: get("judul"),
          pengarang: get("pengarang"),
          penerbit: get("penerbit"),
          tahunTerbit: get("tahunTerbit"),
          jumlahEksemplar: get("jumlahEksemplar"),
          level: get("level"),
          subjek: get("subjek"),
          keterangan: get("keterangan"),
          coverUrl: null as string | null,
        };
      })
      .filter((book) => book.judul !== "")
      .map((book) => ({ ...book, coverUrl: findCoverForTitle(book.judul) }));

    return books;
  } catch (error) {
    console.error("Gagal mengambil data dari Google Sheets:", error);
    return [];
  }
}
