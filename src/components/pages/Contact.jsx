import { Link } from "react-router-dom";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";
import { Loading } from "../Loading.jsx";
import { useEffect, useState } from "react";
import contactService from "../../Hooks/login.js";
export function Contact() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [surename, setSureName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    console.log({ check, name, companyName });
  }, [check]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!(name && email && phone && companyName && message && phone)) {
      setLoading(false);
      setError(true);
      setErrorText("All fields must be filled");
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    console.log({
      name,
      surename,
      email,
      companyName,
      phone,
      message,
      check,
    });
    setTimeout(() => {
      setError(false);
    }, 2500);

    try {
      const sendMessage = await contactService.contactMessage({
        name,
        surename,
        email,
        companyName,
        phone,
        message,
        check,
      });
      console.log(sendMessage);
    } catch (error) {
      setError(true);
      console.log(error);
      setErrorText(Error.message);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
    console.log({ name, surename, email, companyName, message });
  };
  return (
    <>
      {loading && <Loading />}
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
                method="POST"
                className="md:max-w-[90%] flex  m-auto flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <div className=" flex lg:flex-row md:flex-col flex-wrap sm:flex-row gap-2 max-w-full lg:items-center">
                  <input
                    type="text"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    } p-2 border border-gray-400 rounded outline-none flex-grow shadow`}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="Surename"
                    value={surename}
                    onChange={(e) => setSureName(e.target.value)}
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    } p-2 border border-gray-400 rounded outline-none flex-grow shadow`}
                    placeholder="Last Name"
                  />
                </div>

                <div className="w-full flex">
                  <input
                    type="text"
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    } p-2 border border-gray-400 rounded outline-none flex-grow shadow`}
                    placeholder="Company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="w-full flex">
                  <input
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    } p-2 border border-gray-400 rounded outline-none flex-grow shadow`}
                    placeholder="Email"
                  />
                </div>
                <div className="w-full flex">
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    } p-2 border border-gray-400 rounded outline-none flex-grow shadow`}
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full flex">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`focus:ring ${
                      error
                        ? "border-red-600 border-2 shadow-red-400"
                        : "border-gray-400"
                    }  border rounded resize-none shadow outline-none p-1 h-40 flex-grow`}
                    placeholder="Message"
                  ></textarea>
                </div>
                {error && (
                  <p className="text-white shadow-rose-500 shadow-sm italic  text-center border-red-500 rounded p-1 px-3 text-lg bg-red-500 duration-250 transition-all  justify-center ease-in ">
                    Error : {errorText}
                  </p>
                )}
                <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    className=" cursor-pointer  w-7 h-7"
                    value={check}
                    onChange={(e) => setCheck(e.target.checked)}
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
                <button className="bg-blue-800 font-semibold text-white  p-2 flex items-center justify-center text-nowrap rounded w-full   text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2 cursor-pointer hover:outline hover:outline-bg-blue-800 hover:text-blue-800">
                  Submit
                </button>
              </form>
            </section>
          </article>
        </main>
      </main>
      <Footer />
    </>
  );
}
