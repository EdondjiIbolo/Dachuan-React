import { Link } from "react-router-dom";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
export function Contact() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <main className="w-full max-w-[1310px] m-auto p-3">
          <header className="flex justify-between items-center md:px-3">
            <h1 className="font-bold text-2xl md:text-4xl p-3 md:text-center sm:mb-3">
              Contact Us
            </h1>
            <Link
              to="/#Services"
              className="bg-slate-300 font-semibold text-black border border-black  p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2 h-8 md:h-12 hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
            >
              See Capabilities
            </Link>
          </header>
          <article className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-5">
            <section className="p-3 flex flex-col gap-3">
              <h2 className="font-medium text-2xl">How to reach us </h2>
              <p>Mon-Fri 08:00-18:00 (CET)</p>
              <address className="flex flex-col gap-1">
                <p>
                  <strong>Address:</strong> Avenida de los Álamos, 5678,
                  Urbanización Los Robles, Colonia El Bosque, Ciudad, Estado,
                  País, Código Postal <strong>300000</strong>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+123456789" className="text-blue-600">
                    +123456789
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:ejemplo@example.com"
                    className="text-blue-600"
                  >
                    ejemplo@example.com
                  </a>
                </p>
              </address>
              <div className=" flex flex-col gap-3">
                <h3 className=" font-medium text-lg">
                  RFQs for turning and milling parts
                </h3>
                <p className="text-base italic">
                  With Dachuan, you can get instant quotes for your turning and
                  milling parts. There you also have the possibility to submit
                  RFQs, e.g. for larger quantities or materials, quickly and
                  easily. Of course, we are always available to answer your
                  questions.
                </p>
                <Link
                  to="/login"
                  className="bg-blue-800 font-semibold text-white  p-2 flex items-center justify-center text-nowrap rounded md:w-18 sm:w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
                >
                  Get a Quotation
                </Link>
              </div>
            </section>

            <section className="p-3 rounded shadow-sm bg-slate-100 ">
              <form
                action=""
                method="POST"
                className="md:max-w-[90%] flex  m-auto flex-col gap-3"
              >
                <div className=" flex lg:flex-row md:flex-col flex-wrap sm:flex-row gap-2 max-w-full lg:items-center">
                  <input
                    type="text"
                    className=" p-2 border border-gray-400 rounded flex-grow shadow"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className=" p-2 border border-gray-400 rounded flex-grow shadow"
                    placeholder="Last Name"
                  />
                </div>

                <div className="w-full flex">
                  <input
                    type="text"
                    className=" p-2 border border-gray-400 rounded flex-grow shadow"
                    placeholder="Company"
                  />
                </div>
                <div className="w-full flex">
                  <input
                    type="email"
                    className=" p-2 border border-gray-400 rounded flex-grow shadow"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full flex">
                  <input
                    type="tel"
                    className=" p-2 border border-gray-400 rounded flex-grow shadow"
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full flex">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="border border-slate-400 outline-none p-1 h-40 flex-grow"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    className=" cursor-pointer  w-7 h-7"
                  />
                  <div className="px-2 flex flex-col gap-2">
                    <label htmlFor="terminos">
                      Yes, I would like to receive updates about CNC
                      manufacturing and solutions from Dachuan approximately
                      once a month.
                    </label>
                    <p className="italic text-xs text-orange-800">
                      By submitting the form you agree to our Privacy policy .
                    </p>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="bg-blue-800 font-semibold text-white  p-2 flex items-center justify-center text-nowrap rounded w-full   text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2 cursor-pointer hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
                />
              </form>
            </section>
          </article>
        </main>
      </main>
      <Footer />
    </>
  );
}
