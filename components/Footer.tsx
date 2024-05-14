import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="bg-primary mt-12">
      <div className="mx-auto px-4 sm:px-2 py-4 max-w-7xl">
        <div>hallo</div>
        <div className="flex flex-col sm:flex-row justify-between my-24">
          <div className="mx-auto sm:mx-0">
            <Image src="/logo-big.png" alt="Logo" height={100} width={200} />
          </div>
          <div className="flex flex-col mt-12 sm:mt-0">
            <div className="p-1">
              <h1 className="font-bold text-xl text-center sm:text-left">
                {t("newsletterTitle")}
              </h1>
              <p className="mt-1 text-center sm:text-left">
                {t("newsletterSubTitle")}
              </p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-2 sm:mt-4">
              <Input type="email" placeholder={t("form.email")} />
              <Button type="submit" variant={"secondary"}>
                {t("form.subscribe")}
              </Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-9 mt-6 sm:mt-0">
            <div>
              <h1 className="font-bold text-lg">{t("data")}</h1>
              <p>PMOT</p>
              <p>Torenstraat 13</p>
              <p>9679 BN Scheemda</p>
              <p>Nederland</p>
              <p>+31 (0)597 591596</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">{t("information")}</h1>
              <Link
                href="mailto:info@pmot.nl"
                className="text-muted-foreground hover:text-tertiary"
              >
                info@pmot.nl
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                {t("company-information")}
              </Link>
              <Link
                href="https://www.facebook.com/PMOT.nl"
                className="text-muted-foreground hover:text-tertiary"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/in/pim-van-dort-7a2ba210"
                className="text-muted-foreground hover:text-tertiary"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-tertiary"
              >
                KVK: 02057913
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
