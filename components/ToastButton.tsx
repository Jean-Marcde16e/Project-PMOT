"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function ToastButton() {
  return (
    <Button
      variant="secondary"
      onClick={() => toast("Product toegevoegd aan winkelwagen.")}
    >
      <ShoppingCart />
    </Button>
  );
}
