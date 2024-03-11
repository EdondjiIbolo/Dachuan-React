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
      <p className="max-w-[120ch] text-balance text-center m-auto pb-1 mb-2">
        We are well aware that every customer has their own unique needs.
        Therefore, we are committed to providing personalized custom services,
        from instant quoting to production and delivery, in as quickly as 10
        days, ensuring that we meet every detail requirement of yours.
      </p>
      <p className="max-w-[100ch] text-balance  text-center m-auto pb-2 mb-4">
        CNC milling, CNC turning, CNC drilling All of these services will be
        provided to you in the ChuanTai instant quote platform
      </p>
      <section className="grid md:grid-cols-3 md:grid-flow-col md:gap-4 gap-8  ">
        <article className="flex flex-col  rounded shadow-xl  bg-gradient-to-l p-4 pt-8 text-black to-slate-300 from-slate-400 gap-6 py-4 ">
          <picture className=" pt-2  flex items-center w-40 m-auto h-28">
            <img
              src="./images/milling.png"
              className="object-cover h-full w-full"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 pt-1">
            <h3 className="font-bold text-lg border-b py-4">CNC Milling</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                We are committed to providing high-precision CNC milling
                services, utilizing a wide range of high-quality materials to
                efficiently customize parts to your specific specifications.
              </li>
            </ul>
            <div className=" flex-1 flex items-end justify-center">
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
          </div>
        </article>
        <article className="flex flex-col  rounded shadow-xl  bg-gradient-to-l p-4  pt-8 text-black to-gray-300 from-gray-400 gap-6 py-4 ">
          <picture className="  pt-2 flex items-center w-40 m-auto h-28">
            <img
              src="./images/turning.png"
              className="object-cover h-full w-full"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 pt-1  flex-1">
            <h3 className="font-bold text-lg border-b py-4">CNC Turning</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                Our CNC turning services utilize state-of-the-art CNC lathes to
                efficiently produce cylindrical components with complex shapes.
              </li>
            </ul>
            <div className=" flex-1 flex items-end justify-center">
              <Link
                to="/machining-turning"
                className="flex mt-12  items-end p-3 shadow-md rounded text-white bg-blue-900 w-[200px] md:w-1/2  font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
              >
                <div className="rotate-90">
                  <ArrowIcon />
                </div>
                <p className="text-center w-full">See More</p>
              </Link>
            </div>
          </div>
        </article>
        <article className="flex flex-col  rounded shadow-xl  bg-gradient-to-l p-4 pt-8 text-black  to-zinc-300 from-zinc-400 gap-6 py-4 ">
          <picture className="  pt-2 flex items-center w-40 m-auto h-28">
            <img
              src="./images/drilling.png"
              className="object-cover h-full w-full"
              alt="Service Picture cnc"
            />
          </picture>

          <div className="flex  flex-col gap-4 p-4 flex-1">
            <h3 className="font-bold text-lg border-b py-4">CNC Drilling</h3>

            <ul className="flex flex-col gap-2 ">
              <li className="list-disc text-md ">
                Our CNC drilling services provide efficient drilling solutions
                for a wide range of metals, plastics, and more.
              </li>
            </ul>
            <div className=" flex-1 flex items-end justify-center">
              <Link
                to="/machining-drilling"
                className="flex mt-12  items-end p-3 shadow-md rounded text-white bg-blue-900 w-[200px] md:w-1/2  font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
              >
                <div className="rotate-90">
                  <ArrowIcon />
                </div>
                <p className="text-center w-full">See More</p>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
