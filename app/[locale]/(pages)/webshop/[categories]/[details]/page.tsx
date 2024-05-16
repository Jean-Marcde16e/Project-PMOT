import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/lib/Link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronUp, ShoppingCart } from "lucide-react";
import ToastButton from "@/components/ToastButton";

export default function ProductDetails() {
  return (
    <main className="mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/webshop/categorylist">Webshop</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/webshop/categorylist">Categories</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/webshop/categorylist">Robotica</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>RoboBloq Qoopers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-40 mt-14">
          <div>
            <img
              src="https://pmot.nl/wp-content/uploads/2018/04/58BD0823-0A8C-4778-8F47-FF5986A98130-1034-000000BDD83D3F98_tmp-768x952.jpg"
              alt="Product"
              className="w-full md:h-[625px] object-contain rounded-lg"
            />
          </div>
          <div>
            <div>
              <h1 className="text-xl text-center sm:text-left mb-3">
                RoboBloq Qoopers
              </h1>
              <Separator className="my-4" />
            </div>
            <div>
              <p className="text-secondary font-bold text-xl text-center sm:text-left">
                €185.00
              </p>
              <p className="font-semibold my-5 text-gray-700 text-center sm:text-left">
                Beschikbaarheid:{" "}
                <span className="text-green-600">Op voorraad</span>
              </p>
              <p className="w-full sm:w-[500px] text-sm text-center sm:text-left">
                Robobloq Qoopers is een betaalbare, eenvoudig te gebruiken robot
                voor kinderen om ervaring op te doen met grafisch programmeren
                (met Scratch), elektronica en robotica. Het is een alles in een
                oplossing voor het leren over robotica en ontworpen voor STEAM
                onderwijs. Vanaf 8 jaar.
              </p>
            </div>
            {/* <Separator className="my-4" /> */}
            <div>
              <Separator className="my-4" />
              <h1 className="font-semibold text-md text-center sm:text-left">
                Beschrijving
              </h1>
              <Separator className="my-4" />
              <p className="w-full sm:w-[500px] text-sm text-center sm:text-left">
                De Qoopers heeft een aluminium behuizing wat de robot een
                uitdagend uiterlijk geeft en daarmee bestendig is tegen
                beschadigingen. Er kunnen 6 verschillende modellen gebouwd
                worden met deze set. De ene nog uitdagender dan de ander. Deze
                Bluetooth versie is nadat deze in elkaar gezet is direct te
                gebruiken met een speciale app voor tablets en smartphones. De
                Qoopers werkt met Arduino Qmind plus en heeft 8 poorten.
                Ultrasonic sensor met 6 RGB LEDs, zoemer 2x RGB LED en 1 LED
                Matrix . Kan ook aangestuurd worden met een remote control. De
                Arduino is ingebouwd in een stevige behuizing wat beschadigingen
                voorkomen kan. Daarnaast beschermt deze behuizing de ogen van
                kinderen tegen de felle onboard LEDs. De robot kan zowel met
                rupsbanden als met gewone wielen rijden. De motoren zijn extra
                krachtig.
              </p>
            </div>
            <div className="flex justify-center sm:justify-normal gap-3">
              <div className="">
                <Button
                  variant="outline"
                  className="mt-5 p-3 py-2 flex gap-1 items-center"
                >
                  <span>1</span>
                  <ChevronUp className="rotate-180 text-black" />
                </Button>
              </div>
              <div className="mt-5">
                <ToastButton Text="In winkelwagen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
