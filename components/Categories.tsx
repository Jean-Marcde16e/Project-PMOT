import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Categories() {
  const t = useTranslations("Navbar");

  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <p className="font-roboto cursor-pointer flex gap-1">
          <Menu />
          {t("categories")}
        </p>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-4">
          <Image src="/logo.png" alt="Logo" height={75} width={150} />
        </SheetHeader>
        <Separator className="my-4" />
        <SheetTitle>Alle Categorieën</SheetTitle>

        <ScrollArea className="h-full w-full rounded-md">
          <div className="grid gap-4 py-4">
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.robots")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.renewable_energy")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.electricity")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.physics")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.compact_building_blocks")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.wood_sets")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.calculate")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.giftedness")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.storage_systems")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.workbenches_etc")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.tools")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.discount")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.textbooks")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.gigo_tech")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.brick_r_knowledge")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.gigo_learning_lab")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.not_gigo_techsets")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.loose_parts")}</p>
              <ChevronRight />
            </div>
            <div className="flex justify-between hover:bg-gray-100 py-3 px-2 mr-5 rounded-md">
              <p>{t("categorieSheetItems.loose_parts")}</p>
              <ChevronRight />
            </div>
          </div>
        </ScrollArea>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
