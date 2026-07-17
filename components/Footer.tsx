export default function Footer() {
  return (
    <footer className="bg-board-dark text-[#FFF3E0] pt-11 pb-7 mt-5">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between gap-6 flex-wrap">
        <div>
          <h3 className="font-display font-bold text-lg text-cream">
            Taman Baca Mini Cahaya Ilmu
          </h3>
          <p className="max-w-[36ch] text-[0.88rem] opacity-85">
            Program KKN Literasi mahasiswa, berkolaborasi dengan Perpustakaan
            Nasional RI.
          </p>
          <div className="flex gap-2.5 items-center flex-wrap mt-3.5">
            <span className="font-label font-bold text-[0.7rem] bg-white/10 px-3 py-1.5 rounded-full">
              KKN LITERASI
            </span>
            <span className="font-label font-bold text-[0.7rem] bg-white/10 px-3 py-1.5 rounded-full">
              PERPUSNAS RI
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-cream">
            Kontak
          </h3>
          <p className="text-[0.88rem] opacity-85">
            Alamat taman baca
            <br />
            Jam kunjungan: Senin–Sabtu, 09.00–15.00
            <br />
            Email / kontak pengurus
          </p>
        </div>
      </div>
      <p className="max-w-[1100px] mx-auto px-6 text-[0.82rem] opacity-75 mt-6">
        © 2026 Taman Baca Mini Cahaya Ilmu. Dibuat dalam rangka KKN Literasi.
      </p>
    </footer>
  );
}
