import { SearchIcon } from "../Icons";
import { MaterialCard } from "../MaterialCard";
import "../sections/materials.css";
export function Materials() {
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
  return (
    <main className=" w-full max-w-[1300px] m-auto  relative  pt-20">
      <header className="p-3 flex justify-between items-center">
        <h1 className="font-bold text-3xl p-3 capitalize">
          materials for manufacturing
        </h1>
        <form action="">
          <label className="relative flex gap-2" htmlFor="">
            <input
              type="text"
              className=" focus:outline-none  border border-slate-300 rounded p-2 "
            />
            <button className="bg-blue-700 h-10 w-10 flex rounded justify-center items-center text-white">
              <SearchIcon />
            </button>
          </label>
        </form>
      </header>
      <main>
        <p className="max-w-[80ch] text-lg">
          You will find all materials on Dachuan&apos;s real-time quoting
          engine, KeMi KeJi. If you need different materials than those listed,
          please fill in the custom column in the engine.
        </p>
        <ul className="flex px-2 sm:px-4 w-full justify-between sticky z-10 top-20 md:px-12 font-semibold text-xs sm:text-lg py-2 text-blue-600 bg-zinc-50">
          {materiales.map((material, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${material.name}`}
                  className="sm:p-1 p-[6px] hover:font-medium transition-all duration-250 ease-linear w2"
                >
                  {material.name}
                </a>
              </li>
            );
          })}
        </ul>
        <section className="my-2 p-3 border-2 border-slate-200 rounded">
          <header>
            <h1 className="text-lg font-bold">CNC MACHINING</h1>
          </header>

          <section className="flex flex-col gap-16">
            {materiales.map((material, index) => {
              return (
                <section key={index} id={material.name}>
                  <h2 className="font-semibold mb-2 text-lg w-min text-blue-700 hover:underline cursor-pointer p-1">
                    {material.name}
                  </h2>
                  <ul className="materials-container">
                    {material?.Features.map((feature, index) => {
                      return (
                        <li key={index}>
                          <MaterialCard id={index} />
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </section>
        </section>
      </main>
    </main>
  );
}
