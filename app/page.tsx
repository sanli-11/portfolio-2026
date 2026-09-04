import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      <Header />
      <div className="px-4">
        <Hero />
        <Projects />
        <Gallery />
      </div>
    </div>
  );
}
