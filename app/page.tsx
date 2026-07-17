import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pengurus from "@/components/Pengurus";
import Catalog from "@/components/Catalog";
import Documentation from "@/components/Documentation";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Pengurus />
      <Documentation />
      <Donate />
      <Footer />
    </main>
  );
}
