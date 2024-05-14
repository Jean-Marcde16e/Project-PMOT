import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <Hero />
        {/* <Button className="mt-4" variant={"secondary"}>
          Homepagina
        </Button> */}
      </div>
    </main>
  );
}
