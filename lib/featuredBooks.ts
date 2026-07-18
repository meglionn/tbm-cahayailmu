import type { Book } from "./books";

// Buku PILIHAN untuk carousel "Sampul Buku Pilihan" di halaman utama.
// Berbeda dengan daftar di /katalog (yang datanya otomatis dari Google
// Sheets), daftar di sini SENGAJA ditulis manual di kode, supaya sampul yang
// sudah diupload ke /public/images pasti muncul di carousel apa pun isi
// Google Sheets-nya.
//
// Kalau mau ganti/tambah buku pilihan, cukup edit array di bawah ini.
export const featuredBooks: Book[] = [
  {
    id: "featured-1",
    nomorInventaris: "",
    tanggalTerima: "",
    judul: "Awas, Satya!",
    pengarang: "Yasmin Vilany",
    penerbit: "Kementerian Pendidikan Dasar dan Menengah RI",
    tahunTerbit: "",
    jumlahEksemplar: "",
    level: "2",
    subjek: "",
    keterangan: "",
    coverUrl: "/images/awas-satya.png",
  },
  {
    id: "featured-2",
    nomorInventaris: "",
    tanggalTerima: "",
    judul: "Ayo, Berayun, Momo!",
    pengarang: "Iwok Abqary",
    penerbit: "Kementerian Pendidikan Dasar dan Menengah RI",
    tahunTerbit: "",
    jumlahEksemplar: "",
    level: "B1",
    subjek: "",
    keterangan: "",
    coverUrl: "/images/berayun-momo.jpg",
  },
  {
    id: "featured-3",
    nomorInventaris: "",
    tanggalTerima: "",
    judul: "Gara-Gara Ole", // TODO: lengkapi judul penuh, lihat catatan di chat
    pengarang: "Zulfa Adiputri",
    penerbit: "Kementerian Pendidikan Dasar dan Menengah RI",
    tahunTerbit: "",
    jumlahEksemplar: "",
    level: "B3",
    subjek: "",
    keterangan: "",
    coverUrl: "/images/gara-gara.jpg",
  },
  {
    id: "featured-4",
    nomorInventaris: "",
    tanggalTerima: "",
    judul: "Hebat, Lopo!",
    pengarang: "Dyah Suroyya",
    penerbit: "Kementerian Pendidikan Dasar dan Menengah RI",
    tahunTerbit: "",
    jumlahEksemplar: "",
    level: "B1",
    subjek: "",
    keterangan: "",
    coverUrl: "/images/hebat lopo.jpg",
  },
  {
    id: "featured-5",
    nomorInventaris: "",
    tanggalTerima: "",
    judul: "Alya dan Kacamata Kak Livi", // TODO: lengkapi judul penuh, lihat catatan di chat
    pengarang: "Laila",
    penerbit: "Kementerian Pendidikan Dasar dan Menengah RI",
    tahunTerbit: "",
    jumlahEksemplar: "",
    level: "B1",
    subjek: "",
    keterangan: "",
    coverUrl: "/images/livi.jpg",
  },
];
