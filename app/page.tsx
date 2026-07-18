import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pengurus from "@/components/Pengurus";
import Documentation from "@/components/Documentation";
import Donate from "@/components/Donate";
import BookShowcase from "@/components/BookShowcase";
import Footer from "@/components/Footer";
import { getBooks } from "@/lib/books";

export default async function Home() {
  const books = await getBooks();
  // Tampilkan 5 buku saja di carousel halaman utama
  const showcaseBooks = books.slice(0, 5);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Pengurus />
      <Documentation />
      <Donate />
      <BookShowcase books={showcaseBooks} />
      <Footer />
    </main>
  );
}
