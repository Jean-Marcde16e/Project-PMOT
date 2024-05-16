import ProductCard from "@/components/webshop/ProductCard";
import React from "react";

function ProductPage() {
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <div>
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
