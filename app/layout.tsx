import type { Metadata } from "next";
import { Baloo_2, Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Taman Baca Mini Cahaya Ilmu",
  description:
    "Taman baca mini untuk anak TK, PAUD, SD, hingga SMP — kolaborasi KKN Literasi mahasiswa dengan Perpustakaan Nasional RI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${baloo.variable} ${nunito.variable} ${quicksand.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
