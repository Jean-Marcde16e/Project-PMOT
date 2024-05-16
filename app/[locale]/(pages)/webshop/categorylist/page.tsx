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
import Headline from "@/components/Headline";
import { GetCategories } from "@/components/webshop/GetCategories";
import { useTranslations } from "next-intl";

function CategorieList() {
  const t = useTranslations("Navbar");

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
                <Link href="/webshop/categorylist">Webshop</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Headline Text={t("categories")} />
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <GetCategories />
        </div>
      </div>
    </main>
  );
}

export default CategorieList;
