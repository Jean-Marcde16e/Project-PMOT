import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "@/lib/Link";

interface CardProps {
  Image: string;
  Title: string;
  CategorySlug: string;
}

export function CategoryCard({ Image, Title, CategorySlug }: CardProps) {
  return (
    <Card className="w-72 bg-primary rounded-lg">
      <Link href={`/webshop/category/${CategorySlug}/products`}>
        {" "}
        <img
          src={Image}
          alt="Product"
          className="w-full h-72 object-contain rounded-t-lg"
        />
        <CardHeader className="my-10">
          <CardTitle className="text-center">{Title}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
