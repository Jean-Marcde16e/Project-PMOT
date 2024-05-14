import { Hero } from "@/components/Hero";
import { Information } from "@/components/Information";

export default function HomePage() {
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <Hero />
        <Information />
      </div>
    </main>
  );
}