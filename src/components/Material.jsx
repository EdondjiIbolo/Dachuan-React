import { ArrowIcon } from "./Icons";
import "./sections/material.css";
export function Material() {
  return (
    <div className="container flex flex-col gap-2">
      <h2 className="text-center font-semibold text-2xl mb-8 ">Materials</h2>
      <p className="max-w-[70ch] text-center m-auto pb-2">
        All these materials are available in the Chuantai Instant Quoting
        Engine. If you require a different, material please specify it as custom
        when you make a request.
      </p>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th colSpan="4">Features</th>
          </tr>
        </thead>
        <tbody className="sm:text-base text-xs ">
          <tr>
            <td>Aluminum</td>
            <td>Aluminum 6061-T6</td>
            <td>Aluminum 2024</td>
            <td>Aluminum MIC-6</td>
            <td>Aluminum 6063</td>
          </tr>
          <tr>
            <td>Stainless Steel</td>
            <td>Stainless Steel 303</td>
            <td>Stainless Steel 304</td>
            <td>Stainless Steel 304L</td>
            <td>Stainless Steel 17-4PH</td>
          </tr>
          <tr>
            <td>Steel Alloy</td>
            <td>Steel Alloy 1045</td>
            <td>Steel Alloy A36</td>
            <td>Steel Alloy 4340</td>
            <td>Steel Alloy 4140</td>
          </tr>
          <tr>
            <td>Copper</td>
            <td>Copper C101</td>
            <td>Copper C102</td>
            <td>Copper C110</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Plastic</td>
            <td>ABS</td>
            <td>Bakelite</td>
            <td>Garolite G10/FR4</td>
            <td>Nylon 66</td>
          </tr>
        </tbody>
      </table>
      <div className="flex p-2 items-center m-auto my-8 shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500 w-40 ">
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
