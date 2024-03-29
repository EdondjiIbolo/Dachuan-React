import { sections } from "../mock/headerData.json";
import { LoginIcon } from "../components/Icons.jsx";
import { HeaderListItem } from "./HeaderListItem.jsx";
import "./sections/header.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../Hooks/useLang.jsx";
import { useTranslation } from "react-i18next";

export function Header() {
  const [menu, setMenu] = useState(false);
  const { changeLanguage, lang } = useLang();
  const className = menu ? " main-nav show sm:flex-1" : "main-nav sm:flex-1";
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleclick = () => {
    setMenu(!menu);
  };
  const closemenu = () => {
    setMenu(false);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleChange = (e) => {
    closemenu();
    navigate(0);
    changeLanguage(e.target.value);
    console.log(localStorage.getItem("lang"));
  };
  return (
    <header className="main-header  justify-center h-20  bg-white w-full flex fixed top-0 left-0 z-40  md:pr-1">
      <section className="flex w-full max-w-[1520px] px-4 items-center  border-b-2   m-auto justify-between  h-20 z-30  fixed  ">
        <section className="header__container--right ">
          <a
            href="/"
            className="w-44 h-20  flex items-center overflow-hidden"
            onClick={closemenu}
          >
            <img
              src="./images/logo.png"
              alt="Logo"
              className="w-full object-cover object-top"
            />
          </a>
        </section>
        <section className={className} id="menu">
          <ul className="menu sm:flex-1 gap-2">
            {sections.map((section, index) => {
              return (
                <li key={index} className="menu__item">
                  <HeaderListItem
                    section={section}
                    index={index}
                    setMenu={setMenu}
                  />
                </li>
              );
            })}
          </ul>

          <section className="log flex flex-nowrap relative items-center justify-center gap-3 ">
            <div className="flex gap-2 flex-nowrap">
              <label className="flex cursor-pointer hover:font-bold mr-2  w-6 text-center hover:text-blue-800 items-center">
                <input
                  type="radio"
                  name="lang"
                  value="en"
                  className=" hidden hover:font-semibold"
                  defaultChecked={lang == "en"}
                  onClick={handleChange}
                />
                <p className="w-full text-center text-nowrap ">
                  {t("HEADER.EN")}
                </p>
              </label>
              |
              <label className="flex items-center cursor-pointer hover:font-bold  hover:text-blue-800">
                <input
                  type="radio"
                  name="lang"
                  value="ch"
                  defaultChecked={lang == "ch"}
                  className=" hidden hover:font-semibold"
                  onClick={handleChange}
                />

                <p>{t("HEADER.CH")}</p>
              </label>
            </div>
            <Link
              to="/login"
              className="flex gap-1 cursor-pointer  hover:font-semibold hover:outline outline-2 outline-bg-blue-700 rounded p-1 flex-nowrap"
              onClick={closemenu}
            >
              <p className="w-10 text-nowrap">{t("HEADER.SECTION_8")}</p>
              <LoginIcon />
            </Link>
            <Link
              onClick={closemenu}
              to="/login"
              className="bg-blue-800 font-semibold sm:ml-2 text-white p-2 text-nowrap rounded md:w-18 w-44 text-center hover:bg-white transition-all duration-200 ease-in hover:outline-2  hover:outline hover:outline-bg-blue-800 hover:text-blue-800"
            >
              {t("BUTTON_QUOTATION")}
            </Link>
          </section>
        </section>
        <picture
          onClick={handleclick}
          id="toggle"
          className="h-12 w-12 mr-2 flex items-center  relative"
        >
          <img
            src="./images/menu.svg"
            alt="menu icon"
            className="w-12 h-12 fixed top-3 pointer-events-none right-1 "
          />
        </picture>
      </section>
    </header>
  );
}
