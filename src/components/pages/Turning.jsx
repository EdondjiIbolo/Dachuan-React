import { CheckIcon, CheckIcon2, SecureIcon } from "../Icons.jsx";
import "../sections/machining.css";

import { AcordeonMaterial } from "../Acordeon.jsx";
import { useEffect, useState } from "react";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useData } from "../../Hooks/useData.jsx";
// const { Turning } = Technologies;

export function TurningCnc() {
  const material = undefined;
  const { loading, info } = useData({ material });
  const { dataInfo } = info;
  const Turning = dataInfo;
  const [currentSection, setCurrentSection] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]");
      let activeSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop + 100;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          activeSection = section.getAttribute("data-section");
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <Header />
      <main className=" relative  ">
        <section
          id="Services"
          data-section="Services"
          className=" w-full m-auto pt-20"
        >
          <section className="relative flex items-center h-86 sm:h-[450px] overflow-hidden ">
            <article className="w-full max-w-[1310px] mx-auto">
              <picture className="absolute hidden sm:block z-5 h-[450px] top-0 left-0  w-screen ">
                <img
                  src="/img/banner-en-3.webp"
                  className="h-full object-[-235px]  sm:object-center block object-cover w-full"
                  alt="Banner img"
                />
              </picture>
              <section className="sm:px-12 p-4 sm:py-8 h-full flex flex-col z-10 relative w-full bg-white text-wrap gap-4  sm:w-[580px] sm:ml-24 sm:h-[340px] ">
                <h1 className="font-bold sm:text-2xl text-lg max-w-[40ch] uppercase text-wrap">
                  {t("TURNING.TURNING_TITLE")}
                </h1>
                <ul className="">
                  <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                    <CheckIcon />
                    <strong className="text-blue-700 text-xs md:text-sm">
                      {t("TURNING.BANNER_STRONG_1")}
                    </strong>{" "}
                    {t("TURNING.BANNER_DESCRIPTION_1")}
                  </li>
                  <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                    <CheckIcon />
                    <strong className="text-blue-700 text-xs md:text-sm">
                      {t("TURNING.BANNER_STRONG_2")}
                    </strong>{" "}
                    {t("TURNING.BANNER_DESCRIPTION_2")}
                  </li>
                  <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                    <CheckIcon />
                    <strong className="text-blue-700 text-xs md:text-sm">
                      {t("TURNING.BANNER_STRONG_3")}
                    </strong>{" "}
                    {t("TURNING.BANNER_DESCRIPTION_3")}
                  </li>
                  <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                    <CheckIcon />
                    <strong className="text-blue-700 text-xs md:text-sm">
                      {t("TURNING.BANNER_STRONG_4")}
                    </strong>{" "}
                    {t("TURNING.BANNER_DESCRIPTION_4")}
                  </li>
                </ul>
                <p className="text-black font-semibold text-sm flex flex-row items-center gap-1 mb-2">
                  {t("TURNING.BANNER_DESCRIPTION_6")}
                </p>
                <Link
                  to="/login"
                  className="bg-blue-800 font-semibold text-white  p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
                >
                  {t("BUTTON_QUOTATION")}
                </Link>
                <p className="text-zinc-500 text-xs flex flex-row items-center gap-1 mb-2">
                  <SecureIcon />
                  {t("TURNING.BANNER_DESCRIPTION_5")}
                </p>
              </section>
            </article>
          </section>
        </section>
        <article className="relative">
          <nav className="sticky z-10 w-full top-20 bg-zinc-50">
            <ul className="flex px-2 sm:px-4 max-w-[1310px]  mx-auto w-full justify-between  md:px-12 text-xs sm:text-base py-2 text-zinc-600 ">
              <li>
                <a
                  href="#Services"
                  className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                    currentSection === "Services"
                      ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                      : ""
                  }`}
                >
                  {t("TURNING.NAV_ITEM_1")}
                </a>
              </li>
              <li>
                <a
                  href="#Advantages"
                  className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                    currentSection === "Advantages"
                      ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                      : ""
                  }`}
                >
                  {t("TURNING.NAV_ITEM_2")}
                </a>
              </li>
              <li>
                <a
                  href="#Materials"
                  className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                    currentSection === "Materials"
                      ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                      : ""
                  }`}
                >
                  {t("TURNING.NAV_ITEM_3")}
                </a>
              </li>
              <li>
                <a
                  href="#Finishing"
                  className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                    currentSection === "Finishing"
                      ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                      : ""
                  }`}
                >
                  {t("TURNING.NAV_ITEM_4")}
                </a>
              </li>
              <li>
                <a
                  href="#Quotation"
                  className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                    currentSection === "Quotation"
                      ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                      : ""
                  }`}
                >
                  {t("TURNING.NAV_ITEM_5")}
                </a>
              </li>
            </ul>
          </nav>
          <section className="grid grid-cols-1 md:grid-cols-[400px,auto] max-w-[1310px] m-auto gap-8 p-10">
            <h2 className="text-2xl">{t("TURNING.SERVICE_TITLE")}</h2>
            <article
              id="Advantages"
              className="text-pretty text-sm flex flex-col gap-2"
            >
              <p>{t("TURNING.SERVICE_DESCRIPTION_1")}</p>
              <p>{t("TURNING.SERVICE_DESCRIPTION_2")}</p>
            </article>
          </section>

          <section className="w-full from-slate-100 to-slate-200 bg-gradient-to-b ">
            <section
              data-section="Advantages"
              className="p-8 flex flex-col gap-8  max-w-[1310px] m-auto "
            >
              <h2 className="text-2xl text-center">
                {t("TURNING.ADVANTAGE_SECTION_TITLE")}
              </h2>
              <article className="grid sm:grid-flow-col auto-cols-fr gap-6 max-w-[80%] m-auto">
                <div className="flex flex-col  gap-4">
                  <div className="flex gap-8 p-2 border pl-3 h-min sm:h-24 border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/advantage-2.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div className="flex flex-col gap-2  flex-grow max-w-[50ch] text-sm">
                      <strong>{t("TURNING.ADVANTAGE_1_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_1_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 border pl-3 h-min sm:h-24 border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/iconos/assurance.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div className="flex flex-col gap-2 h-min sm:h-24  justify-center flex-grow max-w-[50ch] text-sm">
                      <strong>{t("TURNING.ADVANTAGE_2_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_2_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 border pl-3 flex-grow border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/advantage-4.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div className="flex flex-col gap-2 flex-grow max-w-[50ch] text-sm">
                      <strong>{t("TURNING.ADVANTAGE_3_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_3_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-8 p-2 border pl-3 h-min sm:h-24  border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/iconos/finishing.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div className="flex flex-col gap-2 flex-grow max-w-[50ch] text-sm">
                      <strong>{t("TURNING.ADVANTAGE_4_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_4_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 border pl-3 h-min sm:h-24  border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/iconos/material.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div className="flex flex-col gap-2 flex-grow max-w-[50ch] text-sm">
                      <strong>{t("TURNING.ADVANTAGE_5_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_5_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 p-2 border pl-3 flex-grow  border-zinc-300 rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                    <picture className="h-10 w-10 items-stretch">
                      <img
                        src="./images/advantage-5.png"
                        alt="advantage icon"
                      />
                    </picture>
                    <div
                      id="Materials"
                      className="flex flex-col gap-2 flex-grow max-w-[50ch] text-sm"
                    >
                      <strong>{t("TURNING.ADVANTAGE_6_TITLE")}</strong>
                      <p>{t("TURNING.ADVANTAGE_6_TITLE_DESCRIPTION")}</p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </section>
          <section data-section="Materials" className=" bg-slate-100 p-8">
            <article className="section-art text-center items-center flex flex-col gap-4">
              <p className="text__title font-semibold text-xl">
                {t("TURNING.MATERIALS.MATERIAL_SECTION_TITLE")}
              </p>
              <p className="max-w-[80ch] ">
                {t("TURNING.MATERIALS.MATERIAL_SECTION_DESCRIPTION")}
              </p>
            </article>
            <article className="section-qs flex flex-col gap-8">
              <ol id="Finishing" className="qs-list">
                <div className="list__item">
                  {Turning?.materials?.map((material, index) => {
                    return (
                      <li key={index}>
                        <AcordeonMaterial
                          item={material}
                          section={"MATERIALS"}
                          index={index}
                          page={"TURNING"}
                        />
                      </li>
                    );
                  })}
                </div>
              </ol>
              <Link
                to="/materials"
                className="bg-blue-800 font-semibold text-white m-auto p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
              >
                {t("BUTTON_SEE_MORE")}
              </Link>
            </article>
          </section>
          <section data-section="Finishing" className=" bg-slate-100 p-8">
            <article className=" text-center items-center flex flex-col gap-4">
              <p className="text__title font-semibold text-xl">
                {t("TURNING.FINISHING.FINISHING_SECTION_TITLE")}
              </p>
              <p className="max-w-[80ch] ">
                {t("TURNING.FINISHING.FINISHING_SECTION_DESCRIPTION")}
              </p>
            </article>
            <article id="Quotation" className="section-qs flex flex-col gap-8">
              <ol className="qs-list">
                <div className="list__item">
                  {Turning?.Finishing?.map((finishing, index) => {
                    return (
                      <li key={index}>
                        <AcordeonMaterial
                          item={finishing}
                          section={"FINISHING"}
                          index={index}
                          page={"TURNING"}
                        />
                      </li>
                    );
                  })}
                </div>
              </ol>
              <Link
                to="/finishing"
                className="bg-blue-800 font-semibold text-white m-auto p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
              >
                {t("BUTTON_SEE_MORE")}
              </Link>
            </article>
          </section>
          <section
            data-section="Quotation"
            className="grid grid-cols-1 md:grid-cols-[400px,auto] w-full max-w-[1310px] m-auto gap-8 p-10"
          >
            <h2 className="text-2xl">
              {" "}
              <p>{t("TURNING.SUMERISE_TITLE")}</p>
            </h2>

            <article className="text-pretty text-sm flex flex-col gap-2">
              <p>{t("TURNING.SUMERISE_DESCRIPTION_1")}</p>
              <p>{t("TURNING.SUMERISE_DESCRIPTION_2")}</p>
            </article>
          </section>
        </article>
        <section className="h-[420px] px-3 py-4 relative bg-blue-800 sm:text-left  ">
          <section className="  m-auto flex text-wrap max-w-[1300px] relative justify-between gap-4  h-full ">
            {/* flex text-center sm:text-left items-center sm:items-start p-4
              sm:ml-4 sm-py-0 m-auto flex-col gap-3 */}
            <section className="flex flex-col justify-center gap-3 sm:gap-1 items-center text-center sm:text-left sm:items-start">
              <h3 className="font-medium text-xl sm:max-w-[70ch] text-white">
                <p>{t("TURNING.PREFOOTER.PREFOOTER_HEADER")}</p>
              </h3>
              <h3 className="font-normal text-md sm:max-w-[50ch] text-white">
                <p>{t("TURNING.PREFOOTER.PREFOOTER_SUBTITLE")}</p>
              </h3>
              <ol className="flex gap-5">
                <ul className="  max-w-[40ch]">
                  <li className="text-white text-xs  sm:text-sm flex gap-2 items-center">
                    <CheckIcon2 />
                    <strong className="text-yellow-400 text-xs md:text-sm">
                      {t("TURNING.PREFOOTER.STRONG_1")}
                    </strong>
                    {t("TURNING.PREFOOTER.DESCRIPTION_1")}
                  </li>
                  <li className="text-white text-xs  sm:text-sm flex gap-2 items-center">
                    <CheckIcon2 />
                    <strong className="text-yellow-400 text-xs md:text-sm">
                      {t("TURNING.PREFOOTER.STRONG_2")}
                    </strong>
                    {t("TURNING.PREFOOTER.DESCRIPTION_2")}
                  </li>
                </ul>
              </ol>

              <p className="text-white text-xs flex flex-row items-center gap-1 mb-2">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-4 w-4"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#fff"
                    d="M52,24h-4v-8c0-8.836-7.164-16-16-16S16,7.164,16,16v8h-4c-2.211,0-4,1.789-4,4v32c0,2.211,1.789,4,4,4h40
                                      c2.211,0,4-1.789,4-4V28C56,25.789,54.211,24,52,24z M32,48c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S34.211,48,32,48z M40,24
                                      H24v-8c0-4.418,3.582-8,8-8s8,3.582,8,8V24z"
                  />
                </svg>
                {t("TURNING.PREFOOTER.ITALIC")}
              </p>
              <Link
                to="login"
                className="p-2 mt-4 text-center  shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500  w-36 "
              >
                {t("BUTTON_QUOTATION")}
              </Link>
            </section>
            <picture className="hidden sm:block pr-4 w-[400px] relative ">
              <img
                src="/images/CNC2.webp"
                className="h-full  relative z-5  object-cover "
                alt="manufacturing illustration"
              />
            </picture>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
