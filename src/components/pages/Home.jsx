import {
  ArrowIcon,
  CheckIcon,
  ShippingIcon,
  UploadIcon,
  SecureIcon,
  QualityIcon,
  TimeIcon,
  SettingIcon,
  Quotation,
} from "../Icons.jsx";

import { Assistance } from "../Assistance.jsx";
import { Material } from "../Material.jsx";
import { Services } from "../Services.jsx";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
import "../sections/home.css";
import { Acordeon } from "../Acordeon.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function HomePage() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]");
      let activeSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
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
      <main className=" w-full  m-auto  bg-zinc-100 relative  pt-20">
        <section className="relative max-w-[1310px] m-auto h-86 sm:h-96 overflow-hidden">
          <picture className="absolute w-1/2 z-10 top-0 right-0     ">
            <img
              src="./images/main-banner.jpg"
              className="h-96 object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
              alt="Banner img"
              style={{
                clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </picture>

          <section className="sm:px-12 p-4 sm:py-8 flex flex-col z-10  text-wrap  relative  gap-4 w-full h-full sm:w-[580px] sm:ml-24 sm:h-[320px]">
            <span className="text-zinc-500 text-sm font-semibold">
              One-stop services
            </span>
            <h1 className="font-bold text-2xl max-w-[40ch] text-wrap">
              Customized CNC machining, combining speed and quality.
            </h1>
            <ul>
              <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                <CheckIcon />
                <strong className="text-blue-700 text-xs md:text-sm">
                  10s{" "}
                </strong>{" "}
                online instant quote
              </li>
              <li className="text-zinc-500 text-xs  sm:text-sm flex gap-2 items-center">
                <CheckIcon />
                <strong className="text-blue-700 text-xs md:text-sm">
                  100%{" "}
                </strong>{" "}
                fully audited, excellent quality assurance
              </li>

              <li className="text-zinc-500 text-xs sm:text-sm flex gap-2 items-center">
                <CheckIcon />
                <strong className="text-blue-700 text-sm md:text-sm">
                  100%
                </strong>
                On-time delivery rate ,The fastest processing of parts is 1 day
              </li>
              <li className="text-zinc-500 text-xs sm:text-sm flex gap-2 items-center">
                <CheckIcon />{" "}
                <strong className="text-blue-700 text-sm md:text-sm">
                  100+
                </strong>
                materials, 15+ surface treatment methods
              </li>
            </ul>
            <p className="text-zinc-500 text-xs flex flex-row items-center gap-1 mb-2">
              <SecureIcon />
              All uploaded drawings are strictly confidential.
            </p>
            <Link
              to="/login"
              className="bg-blue-800 font-semibold text-white p-2 text-nowrap rounded md:w-18 w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
            >
              {" "}
              Get a Quotation
            </Link>
          </section>
        </section>
        <nav className="  sticky z-10 top-20 md:px-12 text-xs sm:text-base border-b border-gray-300 shadow  py-2 text-zinc-600 bg-zinc-50">
          <ul className="flex px-1 sm:px-4 w-full text-ellipsis max-w-[1300px] m-auto justify-between ">
            <li>
              <a
                href="#Services"
                className={`sm:p-1 p-[6px] hover:font-medium  transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
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
            <li className="text-nowrap text-ellipsis overflow-hidden">
              <a
                href="#Assistance"
                className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                  currentSection === "Assistance"
                    ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                    : ""
                }`}
              >
                Design Assistance
              </a>
            </li>
            <li>
              <a
                href="#Introduction"
                className={`sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear hover:border-b-4 hover:border-orange-500 ${
                  currentSection === "Introduction"
                    ? "font-bold  border-blue-700  border-b-4 hover:border-blue-500"
                    : ""
                }`}
              >
                Introduction
              </a>
            </li>
          </ul>
        </nav>
        <section>
          <Services />
          <section
            id="Advantages"
            data-section="Advantages"
            className="flex    bg-slate-100 flex-wrap"
          >
            <article className="w-full max-w-[1300px] m-auto pt-20 flex justify-center items-center gap-8  p-4 flex-col">
              <h3 className="font-bold text-2xl mb-2">
                How to place an order?
              </h3>
              <p className="text-blue-900 text-lg">
                You can place your order in just <strong>3</strong> steps
              </p>
              <div className="items-container md:mb-4 ">
                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-blue-800 text-white  text-xl p-3 h-12 w-12 rounded-full flex justify-center items-center font-semibold ">
                    1
                  </span>
                  <picture className="flex justify-center mb-3">
                    <img src="./images/upload.webp" className="w-14 " />
                  </picture>
                  <p className="font-semibold  max-w-[16ch] text-center">
                    Upload drawings
                  </p>
                </article>

                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-blue-800 text-white  text-xl p-3 h-12 w-12 rounded-full flex justify-center items-center font-semibold ">
                    2
                  </span>
                  <picture className="flex justify-center">
                    <img src="./images/select.webp" className="w-14 " />
                  </picture>
                  <p className="font-semibold  max-w-[16ch] text-center">
                    Select processes
                  </p>
                </article>

                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-blue-800 text-white  text-xl p-3 h-12 w-12 rounded-full flex justify-center items-center font-semibold ">
                    3
                  </span>
                  <picture className="flex justify-center">
                    <img src="./images/orderd.webp" alt="" className="w-14 " />
                  </picture>
                  <p className="font-semibold  max-w-[16ch] text-center">
                    Receive your parts
                  </p>
                </article>
              </div>
              <Link
                to="/login"
                className="flex p-2 shadow-md rounded  transition-all duration-200 ease-in hover:outline-2  bg-blue-800 font-semibold text-white hover:bg-white hover:outline
              hover:outline-bg-blue-800 hover:text-blue-800 w-1/2 md:w-40 "
              >
                <div className="rotate-90">
                  <ArrowIcon />
                </div>
                <p className="w-full text-sm text-center font-bold">
                  Get a Quotation
                </p>
              </Link>
            </article>
            <article className="items-container2 p-2 bg-slate-100">
              <h3 className="font-bold text-xl m-auto text-center mb-2">
                In your custom parts design procurement
              </h3>
              <p className="text-center">
                Receive your products with ease and speed, because your
                satisfaction is our priority!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 gap-4  py-8">
                <div className="item2 ">
                  <header className="bg-blue-800 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p className="font-semibold">Easy and Fast</p>
                  </header>
                  <div className="flex-grow flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <img src="./images/time.webp" alt="" className="w-14 " />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Automatic quotes </p>
                      <p>in one minute.</p>
                    </div>
                  </div>
                </div>
                <div className="item2 ">
                  <header className="bg-blue-800 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p className="font-semibold">Materials</p>
                  </header>
                  <div className="flex-grow flex flex-col sm:gap-4 h-full justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <img src="./images/edit.webp" alt="" className="w-14 " />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>High-quality materials</p>
                    </div>
                  </div>
                </div>

                <div className="item2 ">
                  <header className="bg-blue-800 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p className="font-semibold">Quality Assurance</p>
                  </header>
                  <div className=" flex-grow flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <img
                        src="./images/assurance.webp"
                        alt=""
                        className="w-14 "
                      />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Strictly controlled quality </p>
                    </div>
                  </div>
                </div>
                <div className="item2 ">
                  <header className="bg-blue-800 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p className="font-semibold">Post-processing</p>
                  </header>
                  <div className="flex-grow  flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-16 flex justify-center items-center">
                      <img
                        src="./images/setting.webp"
                        alt=""
                        className="w-14 "
                      />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Express shipping in 1 day, faster. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col justify-center py-3">
                <picture className="h-10 flex  items-center justify-center overflow-hidden">
                  <img
                    src="/img/logo.png"
                    className="h-24 oblockbject-cover"
                    alt="order-file"
                  />
                </picture>
                <p className="text-lg p-3 sm:p-0 m-0 text-blue-700 text-center font-bold">
                  One-click solution to get price quotes for your machined
                  parts!
                </p>
              </div>
            </article>
          </section>
          <section
            id="Materials"
            data-section="Materials"
            className="relative flex justify-center bg-slate-200 w-full"
          >
            <Material />
          </section>
          <section
            id="Assistance"
            data-section="Assistance"
            className=" bg-gray-300 bg-opacity-20"
          >
            <Assistance />
            <section
              id="Introduction"
              data-section="Introduction"
              className="bg-slate-300 bg-opacity-50"
            >
              <section className="flex flex-col max-w-[1310px] m-auto   gap-8 p-16">
                <h3 className="w-full text-center max-w-[70ch] mx-auto my-2 font-medium">
                  In the process of designing and sourcing your custom parts, it
                  is our top priority to receive the product quickly and to your
                  satisfaction
                </h3>
                <div className=" grid grid-cols-1 md:grid-cols-3 text-balance content-center sm:gap-6 gap-20  justify-center">
                  <article className="flex  text-center gap-6 sm:gap-4 flex-col">
                    <picture className="flex justify-center">
                      <img
                        className="w-24 h-24 block"
                        src="./images/safety.png"
                        alt="Capabilitie"
                      />
                    </picture>
                    <h4>Stay safe</h4>
                    <p className="max-w-[60ch]   sm:text-center">
                      Our manufacturing network strictly adheres to
                      confidentiality agreements to protect customer privacy We
                      will also regularly update our security procedures to
                      protect your account and design security
                    </p>
                  </article>
                  <article className="flex   sm:text-center gap-4 flex-col">
                    <picture className="flex justify-center">
                      <img
                        className="w-24 h-24 block"
                        src="./images/feedback.png"
                        alt="Capabilitie"
                      />
                    </picture>
                    <h4>Timely feedback </h4>
                    <p className="max-w-[60ch]   sm:text-center ">
                      You can know the delivery time and quotation and other
                      information in real time, and the Chuantai real-time
                      quotation engine can make it easy for you to choose the
                      right price/delivery time for your project
                    </p>
                  </article>
                  <article className="flex   sm:text-center gap-4 flex-col">
                    <picture className="flex justify-center">
                      <img
                        className="w-24 h-24 block"
                        src="./images/logistic.png"
                        alt="Capabilitie"
                      />
                    </picture>
                    <h4>Precision Logistics</h4>
                    <p className="max-w-[60ch]   sm:text-center">
                      Through strict quality assurance, we update the product
                      order and shipping status in real time, and we can ensure
                      that the products you order are delivered 100% on time
                    </p>
                  </article>
                </div>
              </section>
            </section>
          </section>
        </section>

        <section className="bg-slate-300 bg-opacity-40">
          <section className="flex flex-col justufy-center bg-slate-70 pt-20 pb-5 px-4 items-center gap-8">
            <h4 className="font-bold text-2xl text-center">
              Video tutorial to quickly understand Chuantai
            </h4>
            <article className=" flex flex-col gap-8 items-center">
              <section className="flex gap-20 flex-wrap">
                <video
                  className="w-96 max-w-screen flex-1  h-48 border-[3px] border-slate-300 rounded shadow-lg"
                  poster="/img/logo.png"
                  controls="controls"
                >
                  <source src="/video/misumi-video.mp4" type="video/mp4" />
                </video>
                <video
                  className="w-96 max-w-screen flex-1 h-48 border-[3px] border-slate-300 shadow-lg  rounded "
                  poster="/img/logo.png"
                  controls="controls"
                >
                  <source src="/video/misumi-video.mp4" type="video/mp4" />
                </video>
              </section>
              <div
                className="flex p-2 my-2 items-center shadow-md rounded    transition-all duration-200 ease-in hover:outline-2  bg-blue-800 font-semibold text-white hover:bg-white hover:outline
              hover:outline-bg-blue-800 hover:text-blue-800 w-40 "
              >
                <div className="rotate-90">
                  <ArrowIcon />
                </div>
                <Link to="#" className="w-full text-center text-sm font-bold">
                  See More
                </Link>
              </div>
            </article>
          </section>
        </section>
      </main>
      <section className="bg-slate-50 pb-8 ">
        <Acordeon />
        <div
          className="flex p-2 items-center shadow-md rounded m-auto   transition-all duration-200 ease-in hover:outline-2  bg-blue-800 font-semibold text-white hover:bg-white hover:outline
              hover:outline-bg-blue-800 hover:text-blue-800 w-56 "
        >
          <div className="rotate-90">
            <ArrowIcon />
          </div>
          <Link to="/login" className="w-full text-center text-sm font-bold">
            Get an instant Qotation
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
