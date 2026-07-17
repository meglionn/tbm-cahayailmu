# Taman Baca Mini Cahaya Ilmu

Website profil untuk Taman Baca Mini Cahaya Ilmu — dibuat dengan Next.js
(App Router) + Tailwind CSS. Berisi tiga bagian: Beranda/Hero, Tentang,
dan Dokumentasi Kunjungan KKN.

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
  layout.tsx      -> pengaturan font & metadata halaman
  page.tsx        -> menyusun semua komponen jadi satu halaman
  globals.css     -> Tailwind + gaya dekorasi hero (awan, pelangi)
components/
  Nav.tsx         -> navigasi atas
  Hero.tsx        -> papan tulis, pelangi, awan, statistik singkat
  About.tsx       -> bagian Tentang
  Documentation.tsx -> galeri dokumentasi kegiatan KKN
  Footer.tsx      -> footer kontak
```

## Mengganti konten

- Foto: ganti div placeholder (`Foto suasana...`, `Foto kegiatan...`) di
  `About.tsx` dan `Documentation.tsx` dengan komponen `<Image>` dari
  `next/image`, atau tag `<img>` biasa.
- Teks & statistik: langsung edit di masing-masing file komponen.
