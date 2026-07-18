export type Book = {
  id: string;
  judul: string;
  kategori: string;
  deskripsi: string;
  status: string;
};

// GANTI dengan ID Google Sheets kamu.
// ID adalah bagian di antara "/d/" dan "/edit" pada URL sheet-nya, contoh:
// https://docs.google.com/spreadsheets/d/INI_ID_NYA/edit#gid=0
const SHEET_ID = "1rtTNDbVv-IXbhLSVx7aI2NhmoSCatzek";
const GID = "1"; // ganti kalau data ada di tab/sheet lain

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

export async function getBooks(): Promise<Book[]> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error("Gagal mengambil data Google Sheets, status:", res.status);
      return [];
    }

    const csvText = await res.text();
    const lines = csvText.split(/\r?\n/).filter((line) => line.trim() !== "");

    // Baris 1 = judul dokumen/kosong, baris 2 = header kolom, data mulai baris 3
    // Sesuaikan indeks ini kalau struktur sheet kamu berbeda.
    const dataLines = lines.slice(1);

    const books: Book[] = dataLines.map((line, index) => {
      const cols = parseCsvLine(line);
      return {
        id: cols[0]?.trim() || String(index + 1),
        judul: cols[1]?.trim() || "Tanpa judul",
        kategori: cols[2]?.trim() || "Umum",
        deskripsi: cols[3]?.trim() || "",
        status: cols[4]?.trim() || "Tidak diketahui",
      };
    });

    return books.filter((book) => book.judul !== "Tanpa judul" || book.deskripsi);
  } catch (error) {
    console.error("Gagal mengambil data dari Google Sheets:", error);
    return [];
  }
}