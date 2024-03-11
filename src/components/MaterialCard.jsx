import { Link } from "react-router-dom";

export function MaterialCard({ id }) {
  return (
    <article className="flex flex-col gap-4 border-2 border-blue-500 rounded">
      <picture className="w-full flex justify-center overflow-hidden">
        <img src="/img/Milling3.png" alt="" className="h-36 object-cover" />
      </picture>
      <article className="p-3 flex flex-col gap-3 h-min text-sm">
        <h3 className="font-bold text-lg">Feature material Name</h3>
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
        <div className="text-pretty">
          <p>
            {" "}
            <b>Alternative Designations:</b> EN AW-2007 / 3.1645 / AlCuMgPb
          </p>
        </div>
        <div>
          <p>
            <b>Key features: </b>
            High strength • Tough • Resistant to fatigue • Excellent
            machinability
          </p>
        </div>
        <span>
          descripcion : Aluminium 3.4365/EN-AW7075 has high strength (57MPa),
          toughness and excellent resistance to fatigue. It has very good
          machinability.
        </span>
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
