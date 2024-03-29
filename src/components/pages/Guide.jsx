import { Header } from "../Header";
import { Footer } from "../Footer";
import { useEffect, useState } from "react";

const materiales = [
  {
    name: "Aluminium",
    Features: ["1", "2", "3", "4", "5"],
  },
  {
    name: "Copper",
    Features: ["1", "2", "3", "4", "5"],
  },
  {
    name: "Plastic",
    Features: ["1", "2", "3", "4", "5"],
  },
  {
    name: "Brass",
    Features: ["1", "2", "3", "4", "5"],
  },
  {
    name: "Titanium",
    Features: ["1", "2", "3", "4", "5"],
  },
];
export function Guide() {
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
      <main className=" w-full max-w-[1300px] m-auto relative  pt-20">
        <header className="p-3 flex max-w-[80%] ml-auto  justify-between flex-col  ">
          <h1 className="font-bold text-center sm:text-start text-3xl p-3 capitalize">
            Customers Guide
          </h1>

          <p className="max-w-[100ch] p-2 text-lg">
            Welcome to our Customers Guide! This is your go-to resource for
            learning how to use our platform to get a quotation. Whether
            you&apos;re a new customer or a returning one, we&apos;ll walk you
            through the steps to ensure you have a seamless experience. From
            creating an account to submitting a request, we&apos;ll cover
            everything you need to know to make the process as easy as possible.
            Let&apos;s get started!
          </p>
        </header>

        <main className="flex w-full gap-8 ">
          <aside className="bg-slate-300 w-[20%] sticky h-[300px] top-24 shadow-lg rounded-sm">
            <nav className="pb-0">
              <h4 className=" text-lg font-bold  p-2 px-3 border-b border-slate-400">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2 ">
                <li className="w-full ">
                  <a
                    href="#login"
                    className="p-2 px-3 hover:border-b hover:bg-slate-400 hover:font-semibold transition-all duration-150 ease-linear border-slate-500 cursor-pointer flex items-center text-lg "
                  >
                    How to login
                  </a>
                </li>
                <li className="w-full ">
                  <a
                    href="#upload"
                    className="p-2 px-3 hover:border-b hover:bg-slate-400 hover:font-semibold transition-all duration-150 ease-linear border-slate-500 cursor-pointer flex items-center text-lg "
                  >
                    Upload your files
                  </a>
                </li>
                <li className="w-full ">
                  <a
                    href="#parameters"
                    className="p-2 px-3 hover:border-b hover:bg-slate-400 hover:font-semibold transition-all duration-150 ease-linear border-slate-500 cursor-pointer flex items-center text-lg "
                  >
                    Set parameters
                  </a>
                </li>
                <li className="w-full ">
                  <a
                    href="#quotation"
                    className="p-2 px-3 hover:border-b hover:bg-slate-400 hover:font-semibold transition-all duration-150 ease-linear border-slate-500 cursor-pointer flex items-center text-lg "
                  >
                    Request for quotation
                  </a>
                </li>
                <li className="w-full ">
                  <a
                    href="#payment"
                    className="p-2 px-3 hover:border-b hover:bg-slate-400 hover:font-semibold transition-all duration-150 ease-linear border-slate-500 cursor-pointer flex items-center text-lg "
                  >
                    Payment
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <section className="flex flex-col w-[80%]">
            <article className="flex flex-col gap-5 mb-20">
              <section className="flex flex-col gap-3">
                <header id="login">
                  <h2 className="font-semibold text-2xl py-3">
                    How to Get an Instant Quote
                  </h2>
                  <p className="font-medium">
                    You can obtain a quote by following a few simple steps:
                  </p>
                </header>
                <article className="flex flex-col pb-2 ">
                  <section className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg">
                      <strong>Step 1 :</strong> Login
                    </h3>
                    <p className="max-w-[100ch]">
                      The First stage requires you to fill in your full name,
                      email and phone number. Please make sure the information
                      is correct since it will be used to communicate with you
                      on your projects.
                    </p>
                    <p>
                      <strong>Note:</strong>
                      If you dont have ana account you can Sing up filling the
                      from
                    </p>
                  </section>
                  <section className="grid grid-flow-col gap-3 auto-cols-fr p-1 mb-2">
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                  </section>
                </article>
                <article className="flex flex-col pb-2">
                  <section className="flex flex-col gap-2 py-2" id="upload">
                    <h3 className="text-lg">
                      <strong>Step 2 :</strong> Upload your 3D Files
                    </h3>
                    <p className="max-w-[100ch]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et consectetur aspernatur quod minus distinctio. Velit
                      molestias architecto, magnam deserunt ducimus sapiente
                      temporibus suscipit sed fugiat.
                    </p>
                    <p>
                      <strong>Note:</strong>
                      If you dont have ana account you can Sing up filling the
                      from
                    </p>
                  </section>
                  <picture className=" w-full rounded overflow-hidden shadow-xl">
                    <img
                      src="./img/CNC.webp"
                      alt="Step 1:How to log in"
                      className="w-full h-[500px] object-cover block"
                    />
                  </picture>
                </article>
                <article className="flex flex-col pb-2">
                  <section className="flex flex-col gap-2 py-2" id="parameters">
                    <h3 className="text-lg">
                      <strong>Step 3 :</strong> Set your parametres
                    </h3>
                    <p className="max-w-[100ch]">
                      <b>select quantity :</b>
                      Select your preferred manufacturing process, material, and
                      part quantity. Note that at this stage you see only basic
                      manufacturing options. More options would become
                      accessible later on.
                    </p>
                    <p className="max-w-[100ch]">
                      <b>select technology :</b>
                      If you uploaded several models that have different
                      requirements, don’t worry about the current selection. You
                      will be able to modify preferences later on.
                    </p>
                  </section>
                  <section className="grid grid-flow-col gap-3 auto-cols-fr p-1 mb-2">
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                  </section>
                </article>
                <article className="flex flex-col pb-2">
                  <section className="flex flex-col gap-2 py-2">
                    <h3 className="text-lg">
                      <strong>Step 4 :</strong> Set shipping information
                    </h3>
                    <p className="max-w-[100ch]">
                      <b>set the lead time :</b>
                      Select your preferred manufacturing process, material, and
                      part quantity. Note that at this stage you see only basic
                      manufacturing options. More options would become
                      accessible later on.
                    </p>
                    <p className="max-w-[100ch]">
                      <b>set the shipping option and information :</b>
                      If you uploaded several models that have different
                      requirements, don’t worry about the current selection. You
                      will be able to modify preferences later on.
                    </p>
                  </section>

                  <picture className=" w-full rounded overflow-hidden shadow-xl">
                    <img
                      src="./img/CNC.webp"
                      alt="Step 1:How to log in"
                      className="w-full h-[500px] object-cover block"
                    />
                  </picture>
                </article>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  doloremque assumenda fugit corporis repellat, nobis corrupti
                  cupiditate alias. Iusto, esse, doloremque repellendus culpa
                  quidem unde voluptas perspiciatis minus soluta et accusantium
                  dolore eveniet exercitationem voluptates fugiat quia dolores
                  maiores laboriosam. Magnam quasi beatae excepturi quidem
                  molestiae laborum placeat ut magni reprehenderit? Iusto
                  doloribus blanditiis cum libero soluta quibusdam ullam
                  exercitationem quam, placeat molestias beatae voluptas harum
                  expedita. Eligendi aliquid facilis aliquam, quibusdam omnis
                  quod aperiam necessitatibus! Rerum quidem quisquam consequatur
                </p>
                <article className="flex flex-col pb-2">
                  <section className="flex flex-col gap-2 py-2" id="quotation">
                    <h3 className="text-lg">
                      <strong>Step 5 :</strong> Request for a quotation
                    </h3>
                    <p className="max-w-[100ch]">
                      <b>set the lead time :</b>
                      Select your preferred manufacturing process, material, and
                      part quantity. Note that at this stage you see only basic
                      manufacturing options. More options would become
                      accessible later on.
                    </p>
                    <p className="max-w-[100ch]">
                      <b>set the shipping option and information :</b>
                      If you uploaded several models that have different
                      requirements, don’t worry about the current selection. You
                      will be able to modify preferences later on.
                    </p>
                  </section>

                  <picture className=" w-full rounded overflow-hidden shadow-xl">
                    <img
                      src="./img/CNC.webp"
                      alt="Step 1:How to log in"
                      className="w-full h-[500px] object-cover block"
                    />
                  </picture>
                </article>
                <article className="flex flex-col pb-2">
                  <section className="flex flex-col gap-2 py-2" id="payment">
                    <h3 className="text-lg">
                      <strong>Step 6 :</strong> Order and payment
                    </h3>
                    <p className="max-w-[100ch]">
                      <b>order your machine :</b>
                      Select your preferred manufacturing process, material, and
                      part quantity. Note that at this stage you see only basic
                      manufacturing options. More options would become
                      accessible later on.
                    </p>
                    <p className="max-w-[100ch]">
                      <b>How to pay :</b>
                      If you uploaded several models that have different
                      requirements, don’t worry about the current selection. You
                      will be able to modify preferences later on.
                    </p>
                  </section>
                  <section className="grid grid-flow-col gap-3 auto-cols-fr p-1 mb-2">
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                    <picture className=" w-full rounded overflow-hidden shadow-xl">
                      <img
                        src="./img/CNC.webp"
                        alt="Step 1:How to log in"
                        className=" aspect-square block"
                      />
                    </picture>
                  </section>
                </article>
              </section>
            </article>
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
}
