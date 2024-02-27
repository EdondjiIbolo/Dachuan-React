<main className="main-body pt-20 flex flex-col justify-center items-center">
  <section className=" flex flex-col max-w-[75%] m-auto gap-4 w-full h-full">
    <h1 className="text-2xl bg-blue-50 sticky top-20 p-2 font-bold">
      My Quotes
    </h1>
    <article className="flex flex-col   bg-white">
      <header className="border-b-2 border-gray-300 flex justify-between items-center px-2">
        <h1 className="flex items-center p-2 gap-2 text-lg font-bold">
          <SecureIcon /> Sheet Metal
        </h1>
        <label className="flex gap-2 items-center ml-auto">
          <p className="font-medium">Qty: </p>
          <input
            type="number"
            inputMode="number"
            value={qty}
            className="p-1 w-32
                  border rounde border-gray-300"
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </header>
      <article
        className="grid md:grid-flow-col auto-cols-fr p-2 gap-2
          "
      >
        <section className="flex gap-2 items-start ">
          <picture className="border border-gray-400 rounded overflow-hidden">
            <div className="w-20 h-20 bg-red-500"></div>
          </picture>
          <div>
            <span className="flex gap-1 ">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
            <span className="">
              <b className="text-sm">Dimensions: </b>
              <span className="text-sm"> 49.0mm × 49.0mm × 1.0mm</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Material:</b>
              <span className="text-sm">0Cr19Ni9</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Finish: </b>
              <span className="text-sm">Standard</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-3 items-center text-center">
          <div className="border-2 border-blue-600 rounded w-full p-2 flex flex-col gap-0">
            <p className="text-slate-500 font-medium">Standard</p>
            <b>2024.03.07</b>
            <p>
              <strong className="text-red-800">&yen;190.00</strong>{" "}
              <span className="text-slate-400 font-medium capitalize">
                (incl. VAT: &yen;21.97)
              </span>
            </p>
            <p className="font-semibold capitalize text-slate-500">
              &yen;191.00 / unit
            </p>
          </div>
        </section>
      </article>
      <footer className="flex justify-center gap-3 sm:justify-between flex-wrap  p-2 px-8">
        <button className="p-2 rounded shadow cursor-pointer hover:bg-white hover:text-blue-700 border-2 border-transparent  hover:border-2 hover:border-blue-700 transition-all duration-200 ease-linear bg-blue-600 font-semibold capitalize text-white">
          Edit specifications
        </button>
        <section className="flex gap-4">
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Duplicate
          </button>
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Delete
          </button>
        </section>
      </footer>
    </article>
    <article className="flex flex-col   bg-white">
      <header className="border-b-2 border-gray-300 flex justify-between items-center px-2">
        <h1 className="flex items-center p-2 gap-2 text-lg font-bold">
          <SecureIcon /> Sheet Metal
        </h1>
        <label className="flex gap-2 items-center ml-auto">
          <p className="font-medium">Qty: </p>
          <input
            type="number"
            inputMode="number"
            value={qty}
            className="p-1 w-32
                  border rounde border-gray-300"
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </header>
      <article
        className="grid md:grid-flow-col auto-cols-fr p-2 gap-2
          "
      >
        <section className="flex gap-2 items-start ">
          <picture className="border border-gray-400 rounded overflow-hidden">
            <div className="w-20 h-20 bg-red-500"></div>
          </picture>
          <div>
            <span className="flex gap-1 ">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
            <span className="">
              <b className="text-sm">Dimensions: </b>
              <span className="text-sm"> 49.0mm × 49.0mm × 1.0mm</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Material:</b>
              <span className="text-sm">0Cr19Ni9</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Finish: </b>
              <span className="text-sm">Standard</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-3 items-center text-center">
          <div className="border-2 border-blue-600 rounded w-full p-2 flex flex-col gap-0">
            <p className="text-slate-500 font-medium">Standard</p>
            <b>2024.03.07</b>
            <p>
              <strong className="text-red-800">&yen;190.00</strong>{" "}
              <span className="text-slate-400 font-medium capitalize">
                (incl. VAT: &yen;21.97)
              </span>
            </p>
            <p className="font-semibold capitalize text-slate-500">
              &yen;191.00 / unit
            </p>
          </div>
        </section>
      </article>
      <footer className="flex justify-center gap-3 sm:justify-between flex-wrap  p-2 px-8">
        <button className="p-2 rounded shadow cursor-pointer hover:bg-white hover:text-blue-700 border-2 border-transparent  hover:border-2 hover:border-blue-700 transition-all duration-200 ease-linear bg-blue-600 font-semibold capitalize text-white">
          Edit specifications
        </button>
        <section className="flex gap-4">
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Duplicate
          </button>
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Delete
          </button>
        </section>
      </footer>
    </article>
    <article className="flex flex-col   bg-white">
      <header className="border-b-2 border-gray-300 flex justify-between items-center px-2">
        <h1 className="flex items-center p-2 gap-2 text-lg font-bold">
          <SecureIcon /> Sheet Metal
        </h1>
        <label className="flex gap-2 items-center ml-auto">
          <p className="font-medium">Qty: </p>
          <input
            type="number"
            inputMode="number"
            value={qty}
            className="p-1 w-32
                  border rounde border-gray-300"
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </header>
      <article
        className="grid md:grid-flow-col auto-cols-fr p-2 gap-2
          "
      >
        <section className="flex gap-2 items-start ">
          <picture className="border border-gray-400 rounded overflow-hidden">
            <div className="w-20 h-20 bg-red-500"></div>
          </picture>
          <div>
            <span className="flex gap-1 ">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
            <span className="">
              <b className="text-sm">Dimensions: </b>
              <span className="text-sm"> 49.0mm × 49.0mm × 1.0mm</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Material:</b>
              <span className="text-sm">0Cr19Ni9</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Finish: </b>
              <span className="text-sm">Standard</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-3 items-center text-center">
          <div className="border-2 border-blue-600 rounded w-full p-2 flex flex-col gap-0">
            <p className="text-slate-500 font-medium">Standard</p>
            <b>2024.03.07</b>
            <p>
              <strong className="text-red-800">&yen;190.00</strong>{" "}
              <span className="text-slate-400 font-medium capitalize">
                (incl. VAT: &yen;21.97)
              </span>
            </p>
            <p className="font-semibold capitalize text-slate-500">
              &yen;191.00 / unit
            </p>
          </div>
        </section>
      </article>
      <footer className="flex justify-center gap-3 sm:justify-between flex-wrap  p-2 px-8">
        <button className="p-2 rounded shadow cursor-pointer hover:bg-white hover:text-blue-700 border-2 border-transparent  hover:border-2 hover:border-blue-700 transition-all duration-200 ease-linear bg-blue-600 font-semibold capitalize text-white">
          Edit specifications
        </button>
        <section className="flex gap-4">
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Duplicate
          </button>
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Delete
          </button>
        </section>
      </footer>
    </article>
    <article className="flex flex-col   bg-white">
      <header className="border-b-2 border-gray-300 flex justify-between items-center px-2">
        <h1 className="flex items-center p-2 gap-2 text-lg font-bold">
          <SecureIcon /> Sheet Metal
        </h1>
        <label className="flex gap-2 items-center ml-auto">
          <p className="font-medium">Qty: </p>
          <input
            type="number"
            inputMode="number"
            value={qty}
            className="p-1 w-32
                  border rounde border-gray-300"
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </header>
      <article
        className="grid md:grid-flow-col auto-cols-fr p-2 gap-2
          "
      >
        <section className="flex gap-2 items-start ">
          <picture className="border border-gray-400 rounded overflow-hidden">
            <div className="w-20 h-20 bg-red-500"></div>
          </picture>
          <div>
            <span className="flex gap-1 ">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
            <span className="">
              <b className="text-sm">Dimensions: </b>
              <span className="text-sm"> 49.0mm × 49.0mm × 1.0mm</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Material:</b>
              <span className="text-sm">0Cr19Ni9</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Finish: </b>
              <span className="text-sm">Standard</span>
            </span>
            <span className="flex gap-1">
              <b className="text-sm">Technology: </b>
              <span className="text-sm">Sheet Metal</span>
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-3 items-center text-center">
          <div className="border-2 border-blue-600 rounded w-full p-2 flex flex-col gap-0">
            <p className="text-slate-500 font-medium">Standard</p>
            <b>2024.03.07</b>
            <p>
              <strong className="text-red-800">&yen;190.00</strong>{" "}
              <span className="text-slate-400 font-medium capitalize">
                (incl. VAT: &yen;21.97)
              </span>
            </p>
            <p className="font-semibold capitalize text-slate-500">
              &yen;191.00 / unit
            </p>
          </div>
        </section>
      </article>
      <footer className="flex justify-center gap-3 sm:justify-between flex-wrap  p-2 px-8">
        <button className="p-2 rounded shadow cursor-pointer hover:bg-white hover:text-blue-700 border-2 border-transparent  hover:border-2 hover:border-blue-700 transition-all duration-200 ease-linear bg-blue-600 font-semibold capitalize text-white">
          Edit specifications
        </button>
        <section className="flex gap-4">
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Duplicate
          </button>
          <button className="text-blue-400 hover:underline transition-all duration-150 ease-linear hover:text-blue-700 cursor-pointer font-medium">
            Delete
          </button>
        </section>
      </footer>
    </article>
  </section>
</main>;
