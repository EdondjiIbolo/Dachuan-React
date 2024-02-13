import { Link } from "react-router-dom";

export function MaterialCard({ id }) {
  return (
    <article className="flex flex-col gap-4 border-2 border-blue-500 rounded">
      <picture className="w-full flex justify-center overflow-hidden">
        <img src="/img/Milling3.png" alt="" className="h-36 object-cover" />
      </picture>
      <article className="p-3 flex flex-col gap-3 h-[520px]">
        <h3 className="font-bold text-lg">Feature material</h3>
        <div className="flex justify-between items-center">
          <span className="p-2 text-center font-semibold text-sm text-blue-700 bg-blue-200 rounded-3xl uppercase">
            service type
          </span>
          <div className="text-blue-500 flex flex-nowrap">
            {" "}
            <p className="text-blue-700 font-bold">&#165;&#165;</p>
            &#165;&#165;&#165;
          </div>
        </div>
        <div className="text-balance">
          <strong>Alias:</strong>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          </p>
        </div>
        <div>
          <strong>Caracteristicas clave:</strong>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            corrupti ratione quia harum placeat aut.
          </p>
        </div>
        <span>descripcion : Lorem ipsum dolor, sit amet consectetur</span>
        <div className="flex-grow flex justify-center items-end ">
          <Link
            to={`matelial/${id}`}
            className="border-2 font-bold w-full hover:bg-blue-500 hover:text-white hover:border-white transition-all duration-200 ease-linear border-blue-700 bg-white text-blue-700 p-3 text-center"
          >
            See More
          </Link>
        </div>
      </article>
    </article>
  );
}
