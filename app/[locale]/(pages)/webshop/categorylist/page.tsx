// "use client";

import React, { useEffect, useState } from "react";

import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/lib/Link";
import Headline from "@/components/Headline";

import { GetCategories } from "@/components/webshop/GetCategories";
import { CategoryCard } from "@/components/webshop/CategoryCard";

// async function Categories() {

// import StrapiHelper from "@/app/helpers/strapiHelper";

// interface Categorie {
//   attributes: {
//     Name: string;
//     Country: string;
//     Date: string;
//     review: string;
//     stars: number;
//   };
// }

function CategorieList() {
  // const [loading, setLoading] = useState(true);
  // const [ReviewsList, setReviewsList] = useState<Categorie[]>([]);

  // useEffect(() => {
  //   const getStrapiData = async () => {
  //     const strapiHelper = new StrapiHelper();

  //     try {
  //       const res = await strapiHelper.getStrapiData({
  //         query: `/testimonials`,
  //       });

  //       const data = res.data;

  //       if (data) {
  //         setReviewsList(data);
  //         setLoading(false);
  //       } else {
  //         console.error("No data found");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Strapi data:", error);
  //     }
  //   };

  //   getStrapiData();
  // }, []);
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <div className="flex">
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
          {/* <Headline Text="Products" /> */}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <GetCategories />
          {/* <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          />
          <CategoryCard
            Image="https://via.placeholder.com/200"
            Title="Robotica"
          /> */}
        </div>
      </div>
    </main>
  );
}

export default CategorieList;
