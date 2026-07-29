# Taman Baca Mini Cahaya Ilmu

Website profil untuk Taman Baca Mini Cahaya Ilmu — dibuat dengan **Next.js
(App Router)**, **TypeScript**, dan **Tailwind CSS**. Website ini berisi
beberapa bagian utama: Beranda/Hero, Tentang, Koleksi Buku (dengan katalog
pencarian), Dokumentasi Kunjungan KKN (galeri foto mingguan), dan Footer.

## Fitur utama

- **Hero** — papan tulis, pelangi, awan, dan statistik singkat di beranda.
- **Tentang** — penjelasan singkat mengenai Taman Baca Mini Cahaya Ilmu.
- **Koleksi Buku (`BookShowcase`)** — carousel sampul buku yang bisa
  digeser; klik salah satu sampul untuk melihat detail singkatnya lewat
  modal, lalu lanjut ke halaman **Katalog** (`/katalog`) dengan judul buku
  otomatis terisi di kolom pencarian.
- **Dokumentasi Kunjungan (`WeekPhotoCarousel`)** — galeri foto kegiatan
  per minggu dalam bentuk carousel, lengkap dengan placeholder warna-warni
  jika foto asli belum tersedia.
- **Navigasi & Footer** — navigasi atas dan footer kontak.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Build untuk hosting gratis

Project ini sudah diset `output: 'export'` di `next.config.js`, jadi hasil
build-nya berupa file statis biasa (HTML/CSS/JS) yang bisa di-hosting
gratis di layanan seperti Netlify, Cloudflare Pages, atau GitHub Pages —
**tanpa** perlu server Node.js.

```bash
npm run build
```

Hasilnya ada di folder `out/`. Upload isi folder itu ke hosting pilihanmu.

Catatan penting: karena project ini pakai Next.js, ia **tidak bisa**
di-upload langsung ke WordPress.com/Blogspot seperti file HTML biasa.
Kalau ingin hosting paling simpel & gratis untuk Next.js, Vercel
(pembuat Next.js) biasanya paling mudah — cukup hubungkan repo GitHub,
tanpa perlu folder `out/` sama sekali (baris `output: 'export'` boleh
dihapus dari `next.config.js` kalau deploy ke Vercel).

## Struktur folder

```
app/
  layout.tsx           -> pengaturan font & metadata halaman
  page.tsx             -> menyusun semua komponen jadi satu halaman
  globals.css          -> Tailwind + gaya dekorasi hero (awan, pelangi)
  katalog/              -> halaman katalog buku (pencarian judul)
components/
  Nav.tsx              -> navigasi atas
  Hero.tsx             -> papan tulis, pelangi, awan, statistik singkat
  About.tsx            -> bagian Tentang
  BookShowcase.tsx     -> carousel sampul buku + modal detail + link katalog
  BookCard.tsx         -> kartu tampilan satu sampul buku
  Documentation.tsx    -> galeri dokumentasi kegiatan KKN
  WeekPhotoCarousel.tsx-> carousel foto kegiatan per minggu
  Footer.tsx           -> footer kontak
lib/
  books.ts             -> tipe data & daftar buku (Book[])
```

## Mengganti konten

- **Foto kegiatan**: isi properti `src` pada data `WeekPhoto` di
  `WeekPhotoCarousel` — kalau `src` dikosongkan (`""`), akan otomatis
  tampil kotak warna placeholder supaya layout tetap kelihatan rapi.
- **Data buku**: tambah/ubah daftar buku pada `lib/books.ts` (judul,
  sampul, dsb.) — otomatis akan muncul di `BookShowcase` dan bisa dicari
  di halaman `/katalog`.
- **Teks & statistik lain**: langsung edit di masing-masing file
  komponen di folder `components/`.