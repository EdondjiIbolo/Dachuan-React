import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-indigo-950 w-full h-auto text-white ">
      <section className="p-12 pb-4 max-w-[1300px] m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 pb-8 gap-16 border-b-[1px] :mdjustify-center border-zinc-500">
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">{t("FOOTER.HEADER_1")}</p>
            <li>
              <a
                href="/machining-milling"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_1_DATA_1")}
              </a>
            </li>
            <li>
              <a
                href="/machining-turning"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_1_DATA_2")}
              </a>
            </li>
            <li>
              <a
                href="/machining-drilling"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_1_DATA_3")}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">{t("FOOTER.HEADER_2")}</p>
            <li>
              <Link
                to="/guide"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_2_DATA_1")}
              </Link>
            </li>
            <li>
              <a
                href="/materials"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_2_DATA_2")}
              </a>
            </li>
            <li>
              <Link
                to="/assistance"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_2_DATA_3")}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">{t("FOOTER.HEADER_3")}</p>
            <li>
              <a
                href="/about"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_3_DATA_1")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_3_DATA_2")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                {t("FOOTER.COLUMN_3_DATA_3")}
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">{t("FOOTER.HEADER_4")}</p>
            <li>
              <a href="tel:999 999 999" className="hover:text-blue-400 ">
                {t("FOOTER.COLUMN_4_DATA_1")}
              </a>
            </li>
            <li>
              <a
                href="mailto:example@gmail.com"
                className="hover:text-blue-400 "
              >
                {t("FOOTER.COLUMN_4_DATA_2")}
              </a>
            </li>
          </ul>
        </ul>
        <ul className="flex-col md:flex-row flex  md:justify-between items-center relative">
          <div className="flex h-32 gap-3 items-center justify-center flex-col sm:flex-row w-min ">
            <picture className=" h-20 overflow-hidden w-20 flex justify-start cursor-pointer text-zinc-500 ">
              <img
                className="object-cover  "
                src="img/logo.png"
                alt="Dachuan Logo"
              />
            </picture>
            <p className="text-nowrap w-min flex">
              &copy; 2024 , Chuantai Enterprise
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center sm:items-start text-xs sm:text-sm w-full sm:justify-between md:justify-end">
            <a
              href="#"
              className="text-slate-300 hover:shadow-lg hover:drop-shadow-lg hover:text-white transition-all ease duration-200"
            >
              沪ICP备2022003370号-1
            </a>
            <a
              href="#"
              className="text-slate-300 hover:shadow-lg hover:drop-shadow-lg hover:text-white transition-all ease duration-200"
            >
              沪公网安备31010902003376号
            </a>
          </div>
        </ul>
      </section>
    </footer>
  );
}
