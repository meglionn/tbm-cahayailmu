import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pengurus from "@/components/Pengurus";
import Documentation from "@/components/Documentation";
import Donate from "@/components/Donate";
import BookShowcase from "@/components/BookShowcase";
import Footer from "@/components/Footer";
import { featuredBooks } from "@/lib/featuredBooks";

export default async function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Pengurus />
      <Documentation />
      <BookShowcase books={featuredBooks} />
      <Donate />
      <Footer />
    </main>
  );
}
