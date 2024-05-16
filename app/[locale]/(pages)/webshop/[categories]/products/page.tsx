import ProductCard from "@/components/webshop/ProductCard";
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
import { WebshopFilter } from "@/components/webshop/WebshopFilter";
import Headline from "@/components/Headline";
import StrapiHelper from "@/app/helpers/strapiHelper";

import { getLocale } from "next-intl/server";

async function getProducts(param: string) {
  const locale = await getLocale();
  const strapiHelper = new StrapiHelper();
  try {
    console.log(locale);
    const res = await strapiHelper.getStrapiData({
      query: `/categories?locale=${locale}?filters[slug][$eq]=${param.categories}`,
    });

    const data = res.data;

    if (data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
  }
}

function ProductPage({params}: {params: {categories: string}}) {

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
          <Headline Text={params.categories} />
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
