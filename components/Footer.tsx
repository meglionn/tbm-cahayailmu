export default function Footer() {
  return (
    <footer id="kontak" className="bg-board-dark text-[#FFF3E0] pt-11 pb-7 mt-5 scroll-mt-24">
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
            Jl. Arjuna 77 RT 03/RW 01 Kelurahan Kademangan, Kecamatan Kademangan, Kabupaten Blitar, Jawa Timur 66161
            <br />
            Jam kunjungan: Senin–Sabtu, 07.00–17.30
            <br />
            telp: 085646495241
          </p>
        </div>
      </div>
      <p className="max-w-[1100px] mx-auto px-6 text-[0.82rem] opacity-75 mt-6">
        © 2026 Taman Baca Mini Cahaya Ilmu. 
      </p>
    </footer>
  );
}
