import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons.jsx";
export function Services() {
  return (
    <section
      id="Services"
      data-section="Services"
      className="max-w-[1300px] m-auto py-10 px-4 "
    >
      <h2 className="text-center font-semibold text-2xl mb-4 pt-4 ">
        Services
      </h2>
      <p className="max-w-[70ch] text-center m-auto pb-2 mb-4">
        All these Services are available in the Chuantai Instant Quoting Engine.
      </p>
      <section className="grid md:grid-cols-3 md:grid-flow-col md:gap-4 gap-3  ">
        <article className="grid overflow-hidden rounded shadow-xl  place-content-center  bg-gradient-to-l p-4  text-black to-slate-300 from-slate-400 gap-6 py-4 ">
          <picture className=" overflow-hidden flex items-center w-40 m-auto h-28">
            <img
              src="/img/Milling parts3.jpg"
              className="object-cover h-full w-full"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 ">
            <h3 className="font-bold text-lg border-b py-4">CNC Milling</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                We offer high precision CNC milling services to create custom
                parts according to your exact specifications.
              </li>
              <li className="list-disc">
                Our CNC turning service uses cutting-edge technology to
                efficiently produce high-quality cylindrical components.
              </li>
              <li className="list-disc">
                We provide advanced CNC machining solutions that guarantee the
                accuracy and quality of your industrial projects.
              </li>
            </ul>
            <Link
              to="/machining-milling"
              className="flex mt-12  items-center p-3 shadow-md rounded text-white bg-blue-900 w-[200px] md:w-1/2 m-auto font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
            >
              <div className="rotate-90">
                <ArrowIcon />
              </div>
              <p className="text-center w-full">See More</p>
            </Link>
          </div>
        </article>
        <article className="overflow-hidden grid place-content-center  bg-gradient-to-l p-4  text-black to-gray-300 from-gray-400 rounded shadow-md gap-6 py-4 ">
          <picture className=" flex items-center overflow-hidden w-40 m-auto h-28">
            <img
              src="/img/Turning-parts-2.jpeg"
              className="object-cover"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 ">
            <h3 className="font-bold text-lg border-b py-4">CNC Turning</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                Our CNC turning service utilizes state-of-the-art equipment to
                deliver precise and intricately shaped cylindrical components.
              </li>
              <li className="list-disc">
                With our CNC turning capabilities, we can efficiently produce a
                wide range of turned parts, including shafts, pins, and
                connectors, to meet your specific requirements.
              </li>
              <li className="list-disc">
                Our skilled machinists and advanced turning machines ensure the
                highest level of accuracy and repeatability in the production of
                your turned components.
              </li>
            </ul>
            <Link
              to="/machining-turning"
              className="flex   items-center p-3 shadow-md rounded text-white bg-blue-900  w-[200px] md:w-1/2 m-auto font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
            >
              <div className="rotate-90 ">
                <ArrowIcon />
              </div>
              <p className="text-center w-full">See More</p>
            </Link>
          </div>
        </article>
        <article className="overflow-hidden grid place-content-center  bg-gradient-to-l p-4  text-black to-zinc-200 from-zinc-300 rounded shadow-md gap-6 py-4 ">
          <picture className=" flex items-center overflow-hidden w-40 m-auto h-28">
            <img
              src="/img/Drilling-product.png"
              className="object-cover"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 ">
            <h3 className="font-bold text-lg border-b py-4">CNC Drilling</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                Our drilling services offer precise and efficient hole drilling
                solutions for a variety of materials, including metal, plastic,
                and wood.
              </li>
              <li className="list-disc">
                We have a range of drilling machines, including CNC drills, that
                can handle different hole sizes and depths to meet your specific
                needs.
              </li>
              <li className="list-disc">
                Our experienced operators are skilled in drilling holes with
                tight tolerances, ensuring the highest level of accuracy and
                consistency in your drilled components.
              </li>
            </ul>
            <Link
              to="/machining-drilling"
              className="flex mt-6  items-center p-3 shadow-md rounded text-white bg-blue-900  w-[200px] md:w-1/2 m-auto font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
            >
              <div className="rotate-90 ">
                <ArrowIcon />
              </div>
              <p className="text-center w-full">See More</p>
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
}
