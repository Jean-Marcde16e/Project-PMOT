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
            <Card className="w-80">
             <img src="https://via.placeholder.com/200" alt="Product" className="w-full" />
                <CardHeader>
                    <CardTitle>Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
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
