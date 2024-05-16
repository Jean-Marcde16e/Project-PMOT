import ProductCard from "@/components/webshop/ProductCard";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import Link from "@/lib/Link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WebshopFilter } from "@/components/webshop/WebshopFilter";

function ProductPage() {
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/webshop/products">Webshop</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 mt-12">
          <div id="filter-system" className="mt-">
            <WebshopFilter />
          </div>
          <div id="products" className="flex flex-wrap gap-6">
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
            <ProductCard
              Image="https://via.placeholder.com/200"
              Title="Titel"
              Description="Beschrijving"
              Price={4.99}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
