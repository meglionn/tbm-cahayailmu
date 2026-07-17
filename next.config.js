/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'export' menghasilkan file statis (folder /out) sehingga bisa di-hosting
  // gratis di Netlify, GitHub Pages, Cloudflare Pages, dsb.
  // Jika deploy ke Vercel, baris ini boleh dihapus/dikomentari.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
