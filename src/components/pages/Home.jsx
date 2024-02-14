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

import "../sections/home.css";
import { Acordeon } from "../Acordeon.jsx";
export function HomePage() {
  return (
    <>
      <main className=" w-full max-w-[1300px] m-auto  relative  pt-20">
        <section className="relative h-86 sm:h-96 overflow-hidden">
          <picture className="absolute z-5 top-0 left-0  w-full  ">
            <img
              src="/img/banner-en-3.webp"
              className="h-96 object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
              alt="Banner img"
            />
          </picture>

          <section className="sm:px-12 p-4 sm:py-8 flex flex-col z-10  text-wrap  relative  gap-4 w-full h-full sm:w-[580px] sm:ml-24 sm:h-[320px]">
            <span className="text-zinc-500 text-sm font-semibold">
              One-stop service
            </span>
            <h1 className="font-bold text-2xl max-w-[40ch] text-wrap">
              Rapid prototype and mass production of components.
            </h1>
            <ul>
              <li className="text-zinc-500 text-xs sm:text-sm flex gap-2   items-center ">
                <CheckIcon />
                <strong className="text-blue-700 text-xs md:text-sm">
                  50000+{" "}
                </strong>{" "}
                Customers trusted choice.
              </li>
              <li className="text-zinc-500 text-xs  sm:text-sm flex gap-2 items-center">
                <CheckIcon />
                <strong className="text-blue-700 text-xs md:text-sm">
                  100%{" "}
                </strong>{" "}
                Fully inspected shipment, quality not compromised.
              </li>

              <li className="text-zinc-500 text-xs sm:text-sm flex gap-2 items-center">
                <CheckIcon />
                <strong className="text-blue-700 text-sm md:text-sm">
                  97%{" "}
                </strong>{" "}
                On-time delivery rate of 100%, with the fastest delivery in one
                day.
              </li>
            </ul>
            <p className="text-zinc-500 text-xs flex flex-row items-center gap-1 mb-2">
              <SecureIcon />
              All uploaded drawings are strictly confidential.
            </p>
            <a
              href="#"
              className="bg-blue-800 font-semibold text-white p-2 text-nowrap rounded md:w-18 w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
            >
              Get a Quotation
            </a>
          </section>
        </section>
        <ul className="flex px-1 sm:px-4 w-full text-nowrap text-ellipsis justify-between sticky z-10 top-20 md:px-12 text-xs sm:text-base py-2 text-zinc-600 bg-zinc-50">
          <li>
            <a
              href="#Services"
              className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear "
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Advantages"
              className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear "
            >
              Advantages
            </a>
          </li>
          <li>
            <a
              href="#Materials"
              className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear "
            >
              Materials
            </a>
          </li>
          <li>
            <a
              href="#Assistance"
              className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear "
            >
              Design Assistance
            </a>
          </li>
          <li>
            <a
              href="#Quotation"
              className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear "
            >
              Get Quotation
            </a>
          </li>
        </ul>
        <section>
          <Services />
          <section id="Advantages" className="flex pt-20 flex-wrap">
            <article className="w-full m-auto flex justify-center items-center gap-8  p-4 bg-slate-100 flex-col">
              <h3 className="font-bold text-xl mb-2">How to place an order?</h3>
              <p className="text-blue-800">
                You can place your order in just{" "}
                <strong className="font-bold text-lg">3</strong> steps
              </p>
              <div className="items-container ">
                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-green-900 text-white  text-xl p-3 h-12px w-12 rounded-full flex justify-center items-center font-semibold ">
                    1
                  </span>
                  <picture className="flex justify-center">
                    <UploadIcon />
                  </picture>
                  <p className="font-semibold  max-w-[12ch] text-center">
                    Upload Your 3D File
                  </p>
                </article>
                <div className=" rotate-90 flex sm:rotate-0  p-1">
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                </div>
                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-green-900 text-white  text-xl p-3 h-12px w-12 rounded-full flex justify-center items-center font-semibold ">
                    2
                  </span>
                  <picture className="flex justify-center">
                    <SettingIcon />
                  </picture>
                  <p className="font-semibold  max-w-[12ch] text-center">
                    Set Your Parametres
                  </p>
                </article>
                <div className="flex rotate-90 sm:rotate-0 p-1">
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                  <span className="w-4 h-4">{/* <Arrow2 /> */}</span>
                </div>
                <article className="item">
                  <span className="absolute -top-2 -left-2 bg-green-900 text-white  text-xl p-3 h-12px w-12 rounded-full flex justify-center items-center font-semibold ">
                    3
                  </span>
                  <picture className="flex justify-center">
                    <Quotation />
                  </picture>
                  <p className="font-semibold  max-w-[12ch] text-center">
                    Receive your parts
                  </p>
                </article>
              </div>
              <a
                href="#"
                className="flex p-2 shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500 w-40 "
              >
                <div className="rotate-90">
                  <ArrowIcon />
                </div>
                <p className="w-full text-sm text-center font-bold">
                  Get a Quotation
                </p>
              </a>
            </article>
            <article className="items-container2 bg-slate-100">
              <h3 className="font-bold text-xl m-auto text-center mb-2">
                In your custom parts design procurement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 gap-4  py-8">
                <div className="item2 ">
                  <header className="bg-green-400 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p>Upload you 3D File</p>
                  </header>
                  <div className="flex-grow flex flex-col sm:gap-4 h-full justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <UploadIcon />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Load 3D maps without </p>
                      <p>the need for drawings.</p>
                    </div>
                  </div>
                </div>

                <div className="item2 ">
                  <header className="bg-green-400 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p>Quality Assurance</p>
                  </header>
                  <div className=" flex-grow flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <QualityIcon />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Strictly controlled quality </p>
                    </div>
                  </div>
                </div>
                <div className="item2 ">
                  <header className="bg-green-400 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p>Short quotation time</p>
                  </header>
                  <div className="flex-grow flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-full flex justify-center items-center">
                      <TimeIcon />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Automatic quotes </p>
                      <p>in one minute.</p>
                    </div>
                  </div>
                </div>
                <div className="item2 ">
                  <header className="bg-green-400 p-2 w-full text-center font-semibold text-white sm:text-sm">
                    <p>Delivery guarantee</p>
                  </header>
                  <div className="flex-grow  flex flex-col sm:gap-4  justify-center items-center py-2">
                    <picture className="h-16 w-16 flex justify-center items-center">
                      <ShippingIcon />
                    </picture>
                    <div className="flex-col flex gap-0 text-xs max-w-[20ch] font-semibold">
                      <p>Express shipping in 1 day, faster. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <picture className="h-24 flex  items-center justify-center overflow-hidden">
                  <img
                    src="/img/logo.png"
                    className="h-24 oblockbject-cover"
                    alt="order-file"
                  />
                </picture>
                <p className="text-lg p-0 m-0 text-blue-700 font-bold">
                  One click solution
                </p>
              </div>
            </article>
          </section>
          <section
            id="Materials"
            className="relative flex justify-center pt-20 w-full"
          >
            <Material />
          </section>
          <Assistance />
        </section>

        <section className="flex flex-col gap-8 p-16">
          <h3 className="w-full text-center">
            Chuantai Select Power Technology provides strong support for your
            customized parts production
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-3 text-balance content-center gap-6  justify-center">
            <article className="flex  text-center gap-4 flex-col">
              <picture className="flex justify-center">
                <img
                  className="w-36 h-36 block"
                  src="/img/masive.svg"
                  alt="Capabilitie"
                />
              </picture>
              <h4>Manufacturing Fusion</h4>
              <p className="max-w-[60ch] m-auto text-center">
                Chuantai has over 10,000 manufacturing partners located in China
                and over 30 countries worldwide, with different manufacturing
                capabilities and certifications. Orders can be placed online.
                Our manufacturing network strictly adheres to confidentiality
                agreements to protect customer privacy.
              </p>
            </article>
            <article className="flex   text-center gap-4 flex-col">
              <picture className="flex justify-center">
                <img
                  className="w-36 h-36 block"
                  src="/img/check.svg"
                  alt="Capabilitie"
                />
              </picture>
              <h4>Instant feedback</h4>
              <p className="max-w-[60ch] m-auto text-center ">
                No need to wait for long, just a few clicks and you can get DFM
                ( Design for Manufacturability ) feedback to learn about lead
                times and quotes, among other information. Dachuan real-time
                quoting engine (IQE) powered by data science serves you to
                easily choose appropriate price/lead time options for your
                projects. It is compatible with STEP, Mesh, Parasolid, and ACIS
                files.
              </p>
            </article>
            <article className="flex   text-center gap-4 flex-col">
              <picture className="flex justify-center">
                <img
                  className="w-36 h-36 block"
                  src="/img/order.svg"
                  alt="Capabilitie"
                />
              </picture>
              <h4>Precision Logistics</h4>
              <p className="max-w-[60ch] m-auto text-center">
                With strict quality assurance and regular status updates, we can
                ensure that the components you order will be accurately and
                timely delivered.
              </p>
            </article>
          </div>
        </section>
        <section
          id="Quotation"
          className="flex flex-col justufy-center bg-slate-70 pt-20 pb-5 px-4 items-center gap-8"
        >
          <h4 className="font-bold text-2xl text-center">
            Video tutorial to quickly understand Chuantai
          </h4>
          <article className=" flex flex-col gap-8 items-center">
            <section className="flex gap-20 flex-wrap">
              <video
                className="w-96 max-w-screen flex-1  h-48 border-[3px] rounded shadow-lg"
                poster="/img/logo.png"
                controls="controls"
              >
                <source src="/video/misumi-video.mp4" type="video/mp4" />
              </video>
              <video
                className="w-96 max-w-screen flex-1 h-48 border-[3px] shadow-lg  rounded "
                poster="/img/logo.png"
                controls="controls"
              >
                <source src="/video/misumi-video.mp4" type="video/mp4" />
              </video>
            </section>
            <div className="flex p-2 items-center shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500 w-40 ">
              <div className="rotate-90">
                <ArrowIcon />
              </div>
              <a href="#" className="w-full text-center text-sm font-bold">
                Get a Quotation
              </a>
            </div>
          </article>
        </section>
      </main>
      <section className="bg-slate-100 ">
        <Acordeon />
      </section>
    </>
  );
}
