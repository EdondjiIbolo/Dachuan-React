import { Link } from "react-router-dom";

export function ListItemNav({ item }) {
  return (
    <Link
      to={item?.Page}
      className="hover:scale-[1.05] p-3 md:p-0 transition-all duration-75 flex border-b-2 md:border-0 md:items-center gap-6"
    >
      <picture className="w-12 h-12 hidden md:block">
        <img
          src={item?.section_img}
          alt={item?.section_img_alt}
          className=" w-12 h-12"
        />
      </picture>
      <section className="flex flex-col gap-2">
        <div>
          <p className="font-bold text-sm text-blue-800">
            {item?.section_intro}
          </p>
        </div>
        <p className="text-xs font-semibold max-w-[30ch] hidden md:block text-pretty">
          {item?.section_description}
        </p>
      </section>
    </Link>
  );
}
