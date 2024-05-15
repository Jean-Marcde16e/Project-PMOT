import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import Headline from "./Headline";

const ReviewsList = [
  {
    name: "Joëlle",
    country: "netherlands",
    date: "17-08-2021",
    text: "Fijne, snelle service: goed advies en contact. Daarnaast ook nog eens zeer attent! Uiterst tevreden :)",
    stars: 5,
  },
  {
    name: "Petra Snel",
    country: "netherlands",
    date: "12-07-2018",
    text: "Zeer vlotte levering van verschillende losse onderdelen. Nu alle sets van Gigo Gear weer compleet. Zo kunnen onze leerlingen goed van start na de zomervakantie!",
    stars: 5,
  },
  {
    name: "Sieger",
    country: "netherlands",
    date: "05-07-2018",
    text: "Zeer tevreden over de service van PMOT. Snelle en goede communicatie en prima service, ook als er eens iets niet helemaal goed gaat. Echt zeer tevreden.",
    stars: 5,
  },
  {
    name: "Fons Alkemade",
    country: "netherlands",
    date: "12-05-2016",
    text: "De mBot die ik bestelde (om te gaan gebruiken op de basisschool in Haarlem waar ik techniekco&ouml;rdinator ben) was zeer snel in huis. En dan ook nog die 20% korting! Fijn dat er een directe lijn is met de eigenaar van PMOT, dan zijn vragen snel beantwoord.",
    stars: 4,
  },
  {
    name: "Jimbo",
    country: "belgium",
    date: "21-11-2016",
    text: "Had als particulier een els/priem nodig, ben tevreden van Narex, en PMOT was &eacute;&eacute;n vd weinige webwinkels die de priemen van Narex kon leveren, en dan nog aan een z&eacute;&eacute;r schappelijke prijs. Snelle levering, degelijk verpakt: tevreden klant!",
    stars: 5,
  },
  {
    name: "Henk Janssen",
    country: "netherlands",
    date: "12-10-2016",
    text: "Was altijd een fan van Lego Education, maar ben nu overgegaan op Gigo. Hoge kwaliteit, betaalbare prijs, goed bruikbaar in de klas. De eigenaar heeft erg veel kennis over hoe techniek in de klas vorm gegeven kan worden. PMOT een echte aanrader",
    stars: 5,
  },
  {
    name: "Daisy Dolstra",
    country: "netherlands",
    date: "17-03-2016",
    text: "Uitstekende service en kwalitatief uitstekende producten.",
    stars: 5,
  },
  {
    name: "Rik Kuiper",
    country: "netherlands",
    date: "12-05-2016",
    text: "Uitstekende service en bijvoorbeeld echt hele mooie (Jansen techniek) tafels en goed gereedschap (vlot geleverd en met service als er bijvoorbeeld een dopje van een tabouret kapot is gegaan bij transport). Voor mijn basisschool in Amsterdam (www.natuurentechniek.nl) heb ik een mBOT besteld. Een robot die zelf in elkaar wordt gezet en met Scratch is te programmeren vanaf de iPad. Mooi materiaal, kinderen zijn wild enthousiast, zie hier: https://www.pmot.nl/winkel/makeblock-mbot-blue-tooth/ Gefeliciteerd met 20 jaar PMOT!",
    stars: 5,
  },
  {
    name: "Haakmeer",
    country: "netherlands",
    date: "02-10-2015",
    text: "Het was fijn dat jullie zelf door hadden dat de portokosten voor mijn kleine pakketje te hoog waren. Jullie hebben het vlot en goed afgehandeld. Bedant daarvoor! Bestelnummer: 387",
    stars: 5,
  },
];

function renderStars(amount: number) {
  let stars = [];

  for (let i = 0; i < amount; i++) {
    stars.push(<Star className="fill-yellow-400 text-yellow-400" />);
  }

  return stars;
}

export function Reviews() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-screen mx-auto px-4 sm:px-2 py-4 max-w-7xl mt-20"
    >
      <Headline Text="Reviews" />
      <CarouselContent>
        {ReviewsList.map((review, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <p className="text-center">"{review.text}"</p>
                  <div className="my-4 text-center">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/" + review.country + ".png"}
                        className=""
                        alt="Logo"
                        height={15}
                        width={25}
                      />
                      <p className="text-md">{review.name}</p>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{review.date}</p>
                  </div>
                  <div className="flex">{renderStars(review.stars)}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
