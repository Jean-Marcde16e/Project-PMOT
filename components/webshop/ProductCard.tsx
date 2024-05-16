import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "@/components/ui/button";
import ToastButton from "../ToastButton";

interface ProductProps {
  Image: string;
  Title: string;
  Description: string;
  Price: number;
}

function ProductCard({ Image, Title, Description, Price }: ProductProps) {
  return (
    <Card className="w-80 rounded-lg">
      <img src={Image} alt="Product" className="w-full h-72 rounded-t-lg" />
      <CardHeader>
        <CardTitle>{Title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{Description}</CardDescription>
        <p className="mt-3 text-lg">€{Price}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center gap-x-2">
          <ToastButton />
          <Button variant="outline">Bekijken</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
