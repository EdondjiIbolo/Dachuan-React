import { CheckIcon2, SecureIcon, SettingIcon } from "../Icons.jsx";
import "../sections/machining.css";
import { Technologies } from "../../mock/headerData.json";
import { AcordeonMaterial } from "../Acordeon.jsx";
import { useEffect, useState } from "react";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
import { Link } from "react-router-dom";

const { Turning } = Technologies;

export function TurningCnc() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]");
      let activeSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          activeSection = section.getAttribute("data-section");
          console.log(activeSection);
        }
      });

      setCurrentSection(activeSection);
      console.log(currentSection);
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
        <main className=" w-full max-w-[1300px] m-auto pt-20">
          <section className="relative flex items-center h-86 sm:h-96 overflow-hidden ">
            <picture className="absolute hidden sm:block z-5 top-0 left-0  w-full ">
              <img
                src="/img/banner-en-3.webp"
                className="h-96 object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
                alt="Banner img"
              />
            </picture>
            <section
              id="Services"
              data-section="Services"
              className="sm:px-12 p-4 sm:py-8 h-full flex flex-col z-10 relative w-full bg-white text-wrap gap-4  sm:w-[580px] sm:ml-24 sm:h-[320px] "
            >
              <h1 className="font-bold sm:text-2xl text-lg max-w-[40ch] uppercase text-wrap">
                CNC MACHINING - {Turning.Page}
              </h1>
              <ul className="">
                <li className="text-zinc-500  text-sm sm:text-sm flex gap-2 items-center ">
                  <p className=" text-black">
                    Online order for CNC {Turning.Page} parts.
                  </p>
                </li>
                <li className="text-zinc-500 text-sm sm:text-sm flex gap-2 items-center">
                  <p className="text-black">
                    Materials such as aluminum, steel, copper, polymers, etc.{" "}
                  </p>
                </li>
                <li className="text-zinc-500 text-sm sm:text-sm flex gap-2 items-center">
                  <p className="text-black">
                    Rapid manufacturing to be completed within 10 days.
                  </p>
                </li>
              </ul>
              <p className="text-black font-semibold text-sm flex flex-row items-center gap-1 mb-2">
                Please upload your 3D files to receive real-time quotations.
              </p>
              <Link
                to="/login"
                className="bg-blue-800 font-semibold text-white  p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
              >
                Get a Quotation
              </Link>
              <p className="text-zinc-500 text-xs flex flex-row items-center gap-1 mb-2">
                <SecureIcon />
                The documents you upload are strictly confidential and secure.
              </p>
            </section>
          </section>
          <ul className="flex px-2 sm:px-4 w-full justify-between sticky z-10 top-20 md:px-12 text-xs sm:text-base py-2 text-zinc-600 bg-zinc-50">
            <li>
              <a
                href="#Services"
                className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                  currentSection === "Services"
                    ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                    : ""
                }`}
              >
                Services
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
                Advantages
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
                Materials
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
                Finishing
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
                Get Quotation
              </a>
            </li>
          </ul>
          <section className="grid grid-cols-1 md:grid-cols-[400px,auto] gap-8 p-10">
            <h2 className="text-2xl">{Turning.introduction}</h2>
            <article className="text-pretty text-sm flex flex-col gap-2">
              <p>{Turning.description_1}</p>
              <p>{Turning.description_2}</p>
            </article>
          </section>
          <section
            id="Advantages"
            data-section="Advantages"
            className="p-8 flex flex-col gap-8 from-slate-100 to-slate-200 bg-gradient-to-b"
          >
            <h2 className="text-2xl text-center">{Turning.advantage_title}</h2>
            <article className="grid sm:grid-flow-col auto-cols-fr gap-6 max-w-[80%] m-auto">
              <div className="flex flex-col  gap-4">
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />{" "}
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />{" "}
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />{" "}
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />{" "}
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 p-2 border rounded flex-wrap justify-center items-center text-center md:text-left md:flex-nowrap">
                  <SettingIcon />{" "}
                  <div className="flex flex-col gap-2 max-w-[55ch]">
                    <strong>Fast delivery</strong>
                    <p>
                      Dachuan uses new CNC turning machines to produce
                      high-precision parts quickly within 10 days.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section
            id="Materials"
            data-section="Materials"
            className=" bg-slate-100 p-8"
          >
            <article className="section-art text-center items-center flex flex-col gap-4">
              <p className="text__title font-semibold text-xl">
                CNC {Turning.Page} materials
              </p>
              <p className="max-w-[80ch] ">
                All these materials are available in the Chuantai Instant
                Quoting Engine. If you require a different, material please
                specify it as custom when you make a request.
              </p>
            </article>
            <article className="section-qs">
              <ol className="qs-list">
                <div className="list__item">
                  {Turning.materials.map((material, index) => {
                    return (
                      <li key={index}>
                        <AcordeonMaterial item={material} />
                      </li>
                    );
                  })}
                </div>
              </ol>
            </article>
          </section>
          <section
            id="Finishing"
            data-section="Finishing"
            className=" bg-slate-100 p-8"
          >
            <article className="section-art text-center items-center flex flex-col gap-4">
              <p className="text__title font-semibold text-xl">
                CNC Turning Finishing Options
              </p>
              <p className="max-w-[80ch] ">
                All these Finishing Options are available in the Chuantai
                Instant Quoting Engine. If you require a different, Finishing
                Options please specify it as custom when you make a request.
              </p>
            </article>
            <article className="section-qs">
              <ol className="qs-list">
                <div className="list__item">
                  {Turning.Finishing.map((Finish, index) => {
                    return (
                      <li key={index}>
                        <AcordeonMaterial item={Finish} />
                      </li>
                    );
                  })}
                </div>
              </ol>
            </article>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-[400px,auto] gap-8 p-10">
            <h2 className="text-2xl">{Turning.Sumerise.Sumerise_title}</h2>
            <article className="text-pretty text-sm flex flex-col gap-2">
              <p>{Turning.Sumerise.Sumerise_description_1}</p>
              <p>{Turning.Sumerise?.Sumerise_description_2}</p>
              <p>{Turning.Sumerise?.Sumerise_description_3}</p>
            </article>
          </section>
        </main>
        <section className=" m-auto ">
          <section className="h-70 relative bg-blue-700   ">
            <section className="  m-auto flex text-wrap max-w-[1300px] relative  gap-4  h-full ">
              <section
                id="Quotation"
                data-section="Quotation"
                className=" flex sm:justify-center items-center sm:items-start py-4 sm:ml-4 sm-py-0 sm:w-[100ch] m-auto  flex-col gap-3"
              >
                <h1 className="font-bold text-xl sm:max-w-[80ch] text-white">
                  Rapid prototype and{" "}
                </h1>
                <ol className="flex gap-5">
                  <ul className="  max-w-[60ch]">
                    <li className="text-white text-xs sm:text-sm flex gap-2   items-center ">
                      <CheckIcon2 />
                      <strong className="text-yellow-400  text-xs md:text-sm">
                        50000+
                      </strong>
                      Customers
                    </li>
                    <li className="text-white text-xs  sm:text-sm flex gap-2 items-center">
                      <CheckIcon2 />
                      <strong className="text-yellow-400 text-xs md:text-sm">
                        100%
                      </strong>
                      Fully inspected
                    </li>

                    <li className="text-white text-xs sm:text-sm flex gap-2 items-center">
                      <CheckIcon2 />
                      <strong className="text-yellow-400  text-sm md:text-sm">
                        97%
                      </strong>
                      On-time one day.
                    </li>
                  </ul>
                  <ul className="  max-w-[60ch]">
                    <li className="text-white text-xs sm:text-sm flex gap-2   items-center ">
                      <CheckIcon2 />
                      <strong className="text-yellow-400  text-xs md:text-sm">
                        50000+
                      </strong>
                      Customers
                    </li>
                    <li className="text-white text-xs  sm:text-sm flex gap-2 items-center">
                      <CheckIcon2 />
                      <strong className="text-yellow-400 text-xs md:text-sm">
                        100%
                      </strong>
                      Fully inspected
                    </li>

                    <li className="text-white text-xs sm:text-sm flex gap-2 items-center">
                      <CheckIcon2 />
                      <strong className="text-yellow-400  text-sm md:text-sm">
                        97%
                      </strong>
                      On-time one day.
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
                  All uploaded drawings are strictly confidential.
                </p>
                <Link
                  to="/login"
                  className="p-2 text-center shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500  w-36 "
                >
                  Get a Quotation
                </Link>
              </section>
              <picture className="hidden sm:block   relative ">
                <img
                  src="/img/banner-cn-2.png"
                  className="h-full  relative z-5  object-cover object-right"
                  alt=""
                  style={{
                    clipPath:
                      " polygon(52% 0, 100% 0, 100% 100%, 50% 100%, 29% 50%)",
                  }}
                />
              </picture>
            </section>
          </section>
          <section className="  p-4 sm:h-80  overflow-hidden flex items-center w-full  relative">
            <picture className="absolute  blur-3xl  w-full h-full top-0 left-0 z-10">
              <img
                src="/img/Milling parts4.jpeg"
                className="object-cover object-center h-full w-full"
                alt=""
              />
            </picture>
            <article className="max-w-[1300px] w-full m-auto relative  z-20 ">
              <h4 className="text-center m-auto text-4xl font-semibold mb-4">
                Ready to Order Your Parts Online?
              </h4>
              <div className="flex flex-wrap gap-4 sm:gap-1 justify-center sm:justify-between items-center lg:px-44 lg:py-12">
                <div className="flex md:justify-start justify-center gap-10 text-center sm:border-r-2 w-full sm:w-[50%] border-gray-400">
                  <span>
                    <strong>Customers</strong>
                    <p className="text-3xl font-light">40,000 +</p>
                  </span>
                  <span>
                    <strong>Parts Quoted</strong>
                    <p className="text-3xl font-light">1 Millon +</p>
                  </span>
                </div>
                <div className="flex  flex-col justify-center items-center gap-1">
                  <Link
                    to="/login"
                    className="bg-blue-800 font-semibold text-white p-2 text-nowrap rounded md:w-18 w-44 text-center hover:bg-white  transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-blue-800 hover:text-blue-700"
                  >
                    Get an Instant Qote
                  </Link>
                  <p className="italic font-normal">
                    All uploads are secure and confidential.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
