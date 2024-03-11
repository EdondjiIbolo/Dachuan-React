import { ArrowIcon } from "./Icons";
import "./sections/materialstable.css";
export function MaterialTable() {
  return (
    <div className="container container-table max-w-[1300px] pt-20 flex flex-col gap-2">
      <h2 className="text-center font-semibold text-2xl mb-8 ">Materials</h2>
      <p className="max-w-[80ch] text-center m-auto pb-8">
        All of these materials can be found on the Chuantai Technology instant
        quote platform. If you need a different material, please specify it as
        custom when you make a request.
      </p>
      <table className="mytable m-auto">
        <thead>
          <tr>
            <th>Materials</th>
            <th colSpan={4}>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold text-left">Stell</td>
            <td>SA-285</td>
            <td>SA-285</td>
            <td>1045</td>
            <td>GCr15L3</td>
          </tr>
          <tr>
            <td className="font-semibold text-left">Aluminum</td>
            <td>AW6060</td>
            <td>AA 6061</td>
            <td>AA 6061</td>
            <td>A9 7075</td>
          </tr>
          <tr>
            <td className="font-semibold text-left">Copper</td>
            <td>H90</td>
            <td>C22000</td>
            <td>TU1(99.97)</td>
            <td>QSn4-4-4</td>
          </tr>

          <tr>
            <td className="font-semibold text-left">Plastic</td>
            <td>Polyurethane</td>
            <td>Polyoxymethylene</td>
            <td>Nylon</td>
            <td>PC</td>
          </tr>
        </tbody>
      </table>
      <div
        className="flex p-2 items-center m-auto my-8 shadow-md rounded   transition-all duration-200 ease-in hover:outline-2  bg-blue-800 font-semibold text-white hover:bg-white hover:outline
              hover:outline-bg-blue-800 hover:text-blue-800 w-40 "
      >
        <div className="rotate-90">
          <ArrowIcon />
        </div>
        <a href="/Materials" className="w-full text-center text-sm font-bold">
          See More
        </a>
      </div>
    </div>
  );
}
