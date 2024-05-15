"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function LanguageSelector() {
  const t = useTranslations("LanguageSelector");
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("nl");

  useEffect(() => {
    const currentLocale = pathname.split("/")[1];
    setSelectedLanguage(currentLocale);
  }, [pathname]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${language}`);
    router.push(newPathname);
  };

  const getLanguageLabel = (language: string) => {
    switch (language) {
      case "nl":
        return t("Dutch");
      case "en":
        return t("English");
      case "de":
        return t("German");
      default:
        return "";
    }
  };

  const getLanguageFlag = (language: string) => {
    switch (language) {
      case "nl":
        return "/netherlands.png";
      case "en":
        return "/us.png";
      case "de":
        return "/germany.png";
      default:
        return "/netherlands.png";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center">
          <Image
            src={getLanguageFlag(selectedLanguage)}
            className="mr-2"
            alt="Logo"
            height={10}
            width={15}
          />
          <span className="text-sm font-semibold text-white">
            {getLanguageLabel(selectedLanguage)}
          </span>
          <ChevronUp className="rotate-180 hover:text-black text-white" />
          <span className="sr-only">Toggle language menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onSelect={() => handleLanguageChange("nl")}
          className="cursor-pointer"
        >
          <Image
            src="/netherlands.png"
            className="mr-2"
            alt="Logo"
            height={10}
            width={15}
          />
          {t("Dutch")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => handleLanguageChange("en")}
          className="cursor-pointer"
        >
          <Image
            src="/us.png"
            className="mr-2"
            alt="Logo"
            height={10}
            width={15}
          />
          {t("English")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => handleLanguageChange("de")}
          className="cursor-pointer"
        >
          <Image
            src="/germany.png"
            className="mr-2"
            alt="Logo"
            height={10}
            width={15}
          />
          {t("German")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
