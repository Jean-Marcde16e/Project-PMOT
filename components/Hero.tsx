import Link from "next/link";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Homepage.header");

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mt-5 sm:mt-12">
      <div className="flex justify-between flex-col-reverse sm:flex-row">
        <div className="sm:pr-5">
          <div className="sm:pr-12">
            <h1 className="text-xl md:text-4xl font-bold mt-4 text-tertiary sm:mt-0">
              {t("title")}
            </h1>
            <p className="mt-5 mb-8 text-lg sm:mb-12 text-left">
              {t("subtitle")}
            </p>
          </div>

          <div className="text-center sm:text-left">
            <Link
              href="#"
              className="px-5 py-3 text-md font-semibold border rounded-md bg-secondary text-white"
            >
              {t("cta")}
            </Link>
            <Link
              href="#"
              className="px-6 py-3 ml-3 text-md font-semibold border rounded-md outline outline-gray-200 outline-1 text-black"
            >
              {t("cta_shop")}
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://cdn.vox-cdn.com/thumbor/EuDyAxLrF4EZFo5KIJLTDQ35HUk=/0x0:2364x1330/1200x800/filters:focal(993x476:1371x854)/cdn.vox-cdn.com/uploads/chorus_image/image/52627899/lego_boost_design_products_technology_robots_dezeen_hero.0.jpg"
            alt=""
            className="object-contain rounded-md w-[300px] sm:w-[1200px] md:w-[1800px]"
          />
        </div>
      </div>
    </section>
  );
}
