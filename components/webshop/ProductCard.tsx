import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "@/components/ui/button";
import ToastButton from "../ToastButton";
import Image from "next/image";
import { priceFormatter } from "@/lib/utils";

interface ProductProps {
  ImageData: string;
  Title: string;
  Price: string;
}


function ProductCard({ ImageData, Title, Price }: ProductProps) {
  return (
   <>
    <Card className="w-80 rounded-lg">
      <Image src={ImageData} alt="Product" className="w-full h-72 rounded-t-lg" width={320} height={320} />
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-lg">{
          priceFormatter(Price)
        }</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center gap-x-2">
          <ToastButton />
          <Button variant="outline">Bekijken</Button>
        </div>
      </CardFooter>
    </Card></>
  );
}

export default ProductCard;
