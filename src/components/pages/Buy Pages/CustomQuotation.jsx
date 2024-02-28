export function CustomQuotation() {
  return (
    <main className="pt-20  min-h-screen main-body">
      <header className="h-16 flex items-center  bg-white shadow-md  ">
        <section className="flex w-full items-center justify-between max-w-[1310px] m-auto">
          <section className="flex gap-4 items-center ">
            <p>
              <b>Quote Name :</b> Name
            </p>
            <p>
              <b>Quote No: SQ000125555669</b>
            </p>
          </section>
          <button className="p-2 px-2 w-44 bg-blue-200 rounded-md hover:bg-blue-400 transition-all duration-150 ease-linear hover:scale-x-[1.02] hover:text-white text blue-800">
            Request for quotation
          </button>
        </section>
      </header>
      <main className="sm:px-32 py-5 flex gap-16 flex-col sm:flex-row">
        <section className="sm:w-2/3 flex flex-col  gap-3">
          <section className="  shadow rounded flex flex-col gap-3 bg-white p-3 ">
            <header className="flex border-b-2 pb-2 justify-between items-center">
              <h2 className="font-semibold">Parts & Configurations</h2>
              <div className="flex gap-3">
                <button className="bg-blue-300 p-1 rounded text-slate-800 px-2 font-semibold">
                  Configure
                </button>
                <button className="bg-blue-300 p-1 rounded text-slate-800 px-2 font-semibold">
                  Remove
                </button>
              </div>
            </header>
            <section className="flex gap-3 justify-between items-start ">
              <article className="flex flex-col gap-0">
                <picture>
                  <img src="/img/CNC.webp" className="w-20 h-20" alt="" />
                </picture>
                <p>
                  <b>Part Name :</b> nombre
                </p>
                <p>
                  <b>Dimensions :</b> dimensiones
                </p>
                <p>
                  <b>Volume</b> Volumen
                </p>
              </article>
              <article>
                <p>
                  <b>Material</b> Aluminum 6061-T6
                </p>
                <p>
                  <b>Finishing</b> Sand Blasting-Grit 80#
                </p>
                <p>
                  <b>Tolerance</b> ISO 2768 Medium (m)
                </p>
                <p>
                  <b>Roughness</b> Ra1.6μm
                </p>
                <p>
                  <b>Part Marking</b> None
                </p>
                <p>
                  <b>Threads</b> None
                </p>
                <p>
                  <b>Notes</b> None
                </p>
              </article>
              <div className="bg-slate-200 p-1 rounded-md w-24 flex justify-between items-center">
                <button className="p-1 font-bold text-gray-700 hover:text-black  hover:bg-slate-300 rounded">
                  +
                </button>
                <input
                  type="number"
                  inputMode="number"
                  defaultValue={1}
                  className="border-gray-400 border w-10 pl-1 rounded focus:border focus:outline-none"
                />
                <button className="p-1 font-bold text-gray-700 hover:text-black  hover:bg-slate-300 rounded">
                  -
                </button>
              </div>
            </section>
          </section>
          <section className="  shadow rounded flex flex-col gap-3 bg-white p-3 ">
            <header className="flex border-b-2 pb-2 justify-between items-center">
              <h2 className="font-semibold"> Configurations</h2>
            </header>
            <section className="flex gap-3 justify-between items-start "></section>
          </section>
        </section>
        <section className="sm:w-1/3 flex flex-col gap-3">
          <article>
            <header className="px-2 p-1">holaaa</header>
            <article className=" bg-white p-2 py-4 flex flex-col gap-3 rounded shadow-sm">
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis eligendi mollitia error labore incidunt minima
                pariatur consectetur quos molestiae a!
              </p>
              <input
                type="text"
                inputMode="text"
                placeholder="Enetr your expexted lead time"
                className="p-2 border rounded border-gray-400 w-full "
              />
            </article>
          </article>
          <article>
            <header>holaaa</header>
            <article className=" bg-white p-2 rounded shadow-sm flex gap-4">
              <input type="checkbox" inputMode="text" />
              <p>textasasasaso</p>
            </article>
          </article>
          <article>
            <header>holaaa</header>
            <article className=" bg-white p-2 rounded shadow-sm flex gap-4">
              <input type="checkbox" inputMode="text" />
              <p>ahoiuhushisah</p>
            </article>
          </article>
        </section>
      </main>
    </main>
  );
}
