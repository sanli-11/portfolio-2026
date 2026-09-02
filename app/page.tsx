import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <div className="px-4">
        <Hero />
      </div>
    </div>
  );
}
