import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../card";
import { Button } from "../button";
import { ShoppingCart } from "lucide-react";

function ProductCard() {
    return (
        <div>
            <div className="py-4">
                <h1 className="text-3xl font-bold">
                    Webshop
                </h1>
                <p>
                    Bekijk hier alle producten in onze webshop.
                </p>
            </div>
            <Card className="w-80">
             <img src="https://via.placeholder.com/200" alt="Product" className="w-full" />
                <CardHeader>
                    <CardTitle>Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>Product description</CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-between items-center gap-x-2">
                        <Button>
                            <ShoppingCart />
                        </Button>
                        <Button variant='outline'>Bekijken</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ProductCard;
