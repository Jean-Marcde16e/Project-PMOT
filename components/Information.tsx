import { ImagePlus, NotepadText, Store } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export function Information() {
  const t = useTranslations("Homepage.information");
  return (
    <div className="bg-primary rounded-md mt-20">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-center p-4 my-2">
          <Store className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("webshopTitle")}</h1>
          <p className="text-center my-2 sm:w-[400px]">
            {t("webshopSubtitle")}
          </p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
        <div className="text-center p-4 my-2">
          <ImagePlus className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("mediaTitle")}</h1>
          <p className="text-center my-2 sm:w-[400px]">{t("mediaSubtitle")}</p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
        <div className="text-center p-4 my-2">
          <NotepadText className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("publicationsTitle")}</h1>
          <p className="text-center my-2 sm:w-[400px]">
            {t("publicationsSubtitle")}
          </p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
      </div>
    </div>
  );
}
