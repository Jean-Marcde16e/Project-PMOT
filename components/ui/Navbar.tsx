import {
  ChevronUp,
  CircleUser,
  Menu,
  Package2,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import NetherlandsIMG from "../public/netherlands.png";
import "@fontsource/roboto";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="top-0 right-0 left-0 z-40 bg-primary drop-shadow-lg shadow-lg">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
        {/* <header className="top-0 sticky flex items-center gap-4 bg-background px-4 md:px-6 border-b h-16"> */}
        <nav className="md:flex md:flex-row flex-col md:items-center gap-6 md:gap-5 lg:gap-6 hidden font-medium text-lg md:text-sm">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-lg md:text-base"
          >
            <Image src="/logo.png" alt="Logo" height={100} width={200} />
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="gap-6 grid font-medium text-lg">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Image src="/logo.png" alt="Logo" height={100} width={200} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4 md:ml-auto w-full">
          <form className="sm:flex-initial flex-1 mx-auto">
            <div className="relative">
              <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Product zoeken..."
                className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]"
              />
            </div>
          </form>
          <Link href="#" className="hover:text-foreground">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 rounded-full"
              >
                <CircleUser className="w-6 h-6" />
                <span className="sr-only">Toggle language menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Inloggen</DropdownMenuItem>
              <DropdownMenuItem>Registreren</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
          <div className="flex gap-3 text-white font-roboto">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Webshop
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Media
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Publicaties
            </Link>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"secondary"}>
                  <Image
                    src="/netherlands.png"
                    className="mr-2"
                    alt="Logo"
                    height={10}
                    width={15}
                  />
                  Dutch
                  <ChevronUp className="rotate-180" />
                  <span className="sr-only">Toggle language menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  {" "}
                  <Image
                    src="/netherlands.png"
                    className="mr-2"
                    alt="Logo"
                    height={10}
                    width={15}
                  />
                  Dutch
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Image
                    src="/us.png"
                    className="mr-2"
                    alt="Logo"
                    height={10}
                    width={15}
                  />
                  English
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Image
                    src="/germany.png"
                    className="mr-2"
                    alt="Logo"
                    height={10}
                    width={15}
                  />
                  German
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
