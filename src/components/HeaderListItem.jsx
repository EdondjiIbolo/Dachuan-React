import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons.jsx";
import { ListItemNav } from "./ListItemNav.jsx";
import "./headerlistitem.css";
// import { ArrowIcon } from "./Icons.jsx";

export function HeaderListItem({ section, setMenu }) {
  const { section_list } = section;
  const closemenu = (e) => {
    console.log(section.section_list);
    if (section.section_list === undefined) {
      setMenu(false);
      return;
    }
  };
  return (
    <li className="menu__item" onClick={closemenu}>
      <div className="flex justify-center items-center">
        <Link to={section.Page} className="menu__link ">
          {section?.section_title}
        </Link>
        {section_list && (
          <div className="flecha transition-all duration-150 ease-in">
            <ArrowIcon />
          </div>
        )}
      </div>
      {section_list && (
        <ul className="hidden py-2 sm:px-8 sub-menu w-screen max-w-[1310px] flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-center md:shadow-md bg-white md:absolute -left-40 top-[40px]  md:h-min">
          {section_list?.map((item, index) => {
            return (
              <div key={index} onClick={() => setMenu(false)}>
                <ListItemNav item={item} />
              </div>
            );
          })}
        </ul>
      )}
    </li>
  );
}
