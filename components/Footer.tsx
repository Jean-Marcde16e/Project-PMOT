import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <div className="bg-primary">
      <div className="mx-auto px-4 sm:px-2 py-4 max-w-7xl">
        <div className="flex justify-between my-24">
          <div>
            <Image src="/logo-big.png" alt="Logo" height={100} width={200} />
          </div>
          <div className="flex-col">
            <div>
              <h1 className="font-bold text-xl">Aanmelden voor nieuwsbrief</h1>
              <p className="mt-1">Blijf op de hoogte van de nieuwste dingen!</p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
              <Input type="email" placeholder="Email" />
              <Button type="submit" variant={"secondary"}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex gap-9">
            <div>
              <h1 className="font-bold text-lg">Gegevens</h1>
              <p>PMOT</p>
              <p>Torenstraat 13</p>
              <p>9679 BN Scheemda</p>
              <p>Nederland</p>
              <p>+31 (0)597 591596</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">Informatie</h1>
              <Link
                href="mailto:info@pmot.nl"
                className="text-muted-foreground hover:text-tertiary"
              >
                info@pmot.nl
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                Bedrijfsinformatie
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                KVK: 02057913
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
