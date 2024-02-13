import { sections } from "../mock/headerData.json";
import { LoginIcon } from "../components/Icons.jsx";
import { HeaderListItem } from "./HeaderListItem.jsx";
import "./sections/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [menu, setMenu] = useState(false);
  const className = menu ? " main-nav show sm:flex-1" : "main-nav sm:flex-1";
  const handleclick = () => {
    setMenu(!menu);
  };
  return (
    <header className="main-header  justify-center h-20  bg-white w-full flex fixed top-0 left-0 z-40  md:pr-5">
      <section className="flex w-full max-w-[1320px]  items-center  border-b-2  bg-white  m-auto justify-between  h-20 z-30  fixed   ">
        <section className="header__container--right">
          <Link to="/" className="w-44 h-20  flex items-center overflow-hidden">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-full object-cover object-top"
            />
          </Link>
        </section>
        <section className={className} id="menu">
          <ul className="menu sm:flex-1 ">
            {sections.map((section, index) => {
              return (
                <li key={index} className="menu__item">
                  <HeaderListItem section={section} />
                </li>
              );
            })}
          </ul>
          <section className="log flex flex-nowrap relative items-center justify-center gap-3 ">
            <div className="flex gap-2 flex-nowrap">
              <span className="cursor-pointer hover:font-semibold">EN</span>|
              <span className="cursor-pointer hover:font-semibold">CH</span>
            </div>
            <div className="flex gap-1 cursor-pointer hover:font-semibold hover:outline outline-2 outline-bg-blue-700 rounded p-1 flex-nowrap">
              <p className="w-12">Log in</p>
              <LoginIcon />
            </div>
            <a
              href="#"
              className="bg-blue-800 font-semibold text-white p-2 text-nowrap rounded md:w-18 w-44 text-center hover:bg-blue-500  transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-blue-800 hover:text-white"
            >
              Get a Quotation
            </a>
          </section>
        </section>
        <picture
          onClick={handleclick}
          id="toggle"
          className="h-12 w-12 md:hidden mr-2 flex items-center  relative"
        >
          <img
            src="/img/menu.svg"
            alt="menu icon"
            className="w-12 h-12 fixed top-3 pointer-events-none right-1 "
          />
        </picture>
      </section>
    </header>
  );
}
