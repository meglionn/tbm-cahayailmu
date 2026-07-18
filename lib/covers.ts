import fs from "fs";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const MIN_SLUG_LENGTH = 4;

// File-file ini SUDAH dipakai untuk hal lain (foto suasana, poster, dll),
// jadi jangan pernah dianggap sebagai cover buku walau namanya cocok.
const EXCLUDED_FILES = new Set([
  "poster.png",
  "halaman.jpg",
  "tbm.jpg",
  "image.jpg",
]);

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // hilangkan aksen (é -> e, dll)
    .replace(/[^a-z0-9]/g, ""); // sisakan huruf & angka saja
}

type CoverFile = { slug: string; filename: string };

let cachedCoverFiles: CoverFile[] | null = null;

function getCoverFiles(): CoverFile[] {
  if (cachedCoverFiles) return cachedCoverFiles;

  let files: string[] = [];
  try {
    files = fs
      .readdirSync(IMAGES_DIR)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !EXCLUDED_FILES.has(f));
  } catch {
    files = [];
  }

  cachedCoverFiles = files
    .map((filename) => ({
      slug: slugify(filename.replace(/\.[^.]+$/, "")),
      filename,
    }))
    .filter((f) => f.slug.length >= MIN_SLUG_LENGTH);

  return cachedCoverFiles;
}

// Cari cover yang nama filenya "terkandung" di dalam judul buku, contoh:
// file "hebat-lopo.jpg" (slug "hebatlopo") cocok untuk judul "Hebat, Lopo!" (slug "hebatlopo").
// Kalau tidak ketemu yang cocok, return null (nanti tampil placeholder, bukan cover salah).
export function findCoverForTitle(judul: string): string | null {
  const titleSlug = slugify(judul);
  if (!titleSlug) return null;

  const match = getCoverFiles().find((f) => titleSlug.includes(f.slug));
  return match ? `/images/${encodeURIComponent(match.filename)}` : null;
}
