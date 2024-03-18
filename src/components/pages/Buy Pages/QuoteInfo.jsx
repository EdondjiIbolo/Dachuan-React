import { useParams } from "react-router-dom";
import { useSingleQuote } from "../../../Hooks/useSingleQuote";
import { SecureIcon, UploadIcon } from "../../Icons";
import { Loading } from "../../Loading";

export function QuoteInfo() {
  const { id } = useParams();
  const { quote, loading } = useSingleQuote({ id });
  console.log(quote);
  return (
    <>
      {loading && <Loading />}
      <main className="pt-20  min-h-screen main-body">
        <header className="sm:h-16 h-24 flex items-center fixed z-40 top-20 w-screen bg-white shadow-md  ">
          <article className="flex flex-col gap-3 sm:flex-row w-full items-center justify-between max-w-[1310px] m-auto">
            <section className="flex gap-4 items-center ">
              <p className="sm:text-base text-xs">
                <b>Quote No: </b>
                {id}
              </p>
            </section>
          </article>
        </header>
        <form className="md:px-32 px-2 pb-5 pt-20 flex gap-16 flex-col sm:flex-row">
          <section className="sm:w-2/3 flex flex-col  gap-3">
            <section className="  shadow rounded flex flex-col gap-3 bg-white p-3 ">
              <header className="flex sm:flex-row flex-col gap-2 border-b-2 pb-2 justify-between items-center">
                <h2 className="font-semibold">Parts & Configurations</h2>
                <div className="flex gap-3">
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
                    <b>Part Name :</b> {quote?.technology}
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
                    <b>Material</b> {quote?.material}
                  </p>
                  <p>
                    <b>Finishing</b> {quote?.finishing}
                  </p>
                  <p>
                    <b>Tolerance</b> {quote?.tolerance}
                  </p>
                  <p>
                    <b>Roughness</b> {quote?.roughness}
                  </p>

                  <p>
                    <b>Threads</b> None
                  </p>
                  <p>
                    <b>Notes</b> {quote?.notes ? "yes" : "none"}
                  </p>
                </article>
                <div className="bg-slate-200 p-1 rounded-md w-24 flex justify-between items-center">
                  <div className="p-1 font-bold text-gray-700 hover:text-black  hover:bg-slate-300 rounded">
                    +
                  </div>
                  <input
                    type="number"
                    inputMode="number"
                    disabled
                    name="quantity"
                    value={quote.quantity}
                    min={0}
                    className="border-gray-400 border w-10 pl-1 rounded focus:border focus:outline-none"
                  />
                  <div className="p-1 font-bold text-gray-700 hover:text-black  hover:bg-slate-300 rounded">
                    -
                  </div>
                </div>
              </section>
            </section>
            <section className="  shadow rounded flex flex-col gap-3 bg-white p-3 ">
              <header className="flex border-b-2 pb-2 justify-between items-center">
                <h2 className="font-semibold"> Configurations</h2>
              </header>
              <main className="flex gap-5 flex-col pl-5">
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Quantity</p>
                  <input
                    disabled
                    type="number"
                    inputMode="number"
                    value={quote?.quantity}
                    className="bg-slate-200 w-72 p-1 rounded border outline-none border-gray-400"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Technology</p>
                  <select
                    disabled
                    name="Technology"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="CNC MILLING">CNC MILLING</option>
                    <option value="CNC TURNING">CNC TURNING</option>
                    <option value="CNC DRILLING">CNC DRILLING</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Material</p>
                  <select
                    disabled
                    name="Material"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="Stainless Steel 1.4571">
                      Stainless Steel 1.4571
                    </option>
                    <option value="Aluminium 3.4365">Aluminium 3.4365</option>
                    <option value="Aluminium 3.4365">Aluminium 3.4365</option>
                    <option value="Steel 1.0570">Steel 1.0570</option>
                    <option value="Steel 1.7225">Steel 1.7225</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Finishing</p>
                  <select
                    disabled
                    name="Finishing"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="Polishing / Electropolishing">
                      Polishing / Electropolishing
                    </option>
                    <option value="Bead Blasting">Bead Blasting</option>
                    <option value="Painting & Powder Coating">
                      Painting & Powder Coating
                    </option>
                    <option value="Case Hardening">Case Hardening</option>
                    <option value="Conductive Anodizing Type II">
                      Conductive Anodizing Type II
                    </option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Tolerance</p>
                  <select
                    disabled
                    name="Tolerance"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="0.5mm to 3mm">0.5mm to 3mm</option>
                    <option value="Over 3mm to 6mm">Over 3mm to 6mm</option>
                    <option value="Over 6mm to 30mm">Over 6mm to 30mm</option>
                    <option value="Over 30mm to 120mm">
                      Over 30mm to 120mm
                    </option>
                    <option value="Over 120mm to 400mm">
                      Over 120mm to 400mm
                    </option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Roughness</p>
                  <select
                    disabled
                    name="Roughness"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="Ra1.6μm">Ra1.6μm</option>
                    <option value="Ra1.6μm">Ra1.6μm</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <p className="font-semibold">Threads</p>
                  <select
                    disabled
                    name="Threads"
                    className="p-1 w-72 border rounded border-gray-500 outline-none"
                  >
                    <option value="NO">NO</option>
                    <option value="Yes, as 2D Technical Drawing">
                      Yes, as 2D Technical Drawing
                    </option>
                  </select>
                </label>
                <div>
                  <p className="font-bold">*2D Technical Drawing</p>
                  <label className="flex flex-col gap-1 cursor-pointer hover:border-2 transition-all duration-150 ease-linear p-3 h-32 border border-dashed border-blue-600 w-72 justify-center rounded items-center">
                    <input disabled type="file" className="hidden" />
                    <UploadIcon />
                    <p className="font-medium text-zinc-600">
                      Upload your 2D file
                    </p>
                  </label>
                </div>
              </main>
            </section>
          </section>
          <section className="sm:w-1/3 flex flex-col gap-3 mb-3">
            <article>
              <header>
                <p className="font-semibold flex gap-2 items-center pb-1 text-blue-800">
                  <SecureIcon /> Lead Time
                </p>
              </header>
              <article className=" bg-white p-2 py-4 flex flex-col gap-3 rounded shadow-sm">
                <p className="text-xs">
                  The lead time will be evaluated with the quote or you can tell
                  us your expected lead time.
                </p>
                <label htmlFor="">
                  <p className="text-sm text-left p-1">Business days</p>
                  <input
                    disabled
                    type="text"
                    inputMode="text"
                    name="lead_time"
                    placeholder="Enetr your expexted lead time"
                    className="p-2 border rounded border-gray-400 w-full "
                  />
                </label>
              </article>
            </article>
            <article>
              <header>
                <p className="font-semibold flex gap-2 items-center pb-1 text-blue-800">
                  <SecureIcon /> Shipping Option
                </p>
              </header>
              <article className=" bg-white p-2 rounded shadow-sm flex flex-col ">
                <label className="flex gap-3 items-center cursor-pointer hover:bg-zinc-50 border-b border-gray-700 p-2">
                  <input
                    disabled
                    type="radio"
                    name="shipping"
                    value="Standard"
                    inputMode="text"
                    className="rounded-full w-4 h-4"
                  />
                  <span className="text-sm flex justify-between grow text-gray-500 font-medium">
                    <p>Standard</p>
                    <p>7-10 Business days</p>
                  </span>
                </label>
                <label className="flex gap-3 items-center cursor-pointer hover:bg-zinc-50 p-2">
                  <input
                    disabled
                    type="radio"
                    name="shipping"
                    value="Economy"
                    inputMode="text"
                    className="rounded-full w-4 h-4"
                  />
                  <span className="text-sm flex justify-between grow text-gray-500 font-medium">
                    <p>Economy</p>
                    <p>5-8 Business days</p>
                  </span>
                </label>
              </article>
            </article>
            <article>
              <header>
                <p className="font-semibold flex gap-2 items-center pb-1 text-blue-800">
                  <SecureIcon /> Shipping Shipping Addrss
                </p>
              </header>
              <article className=" bg-white p-2  rounded shadow-sm flex flex-row  gap-3 items-center ">
                <input
                  disabled
                  type="radio"
                  name="address"
                  value={`lino dachuan / rongtaicheng / + 1326717532`}
                  inputMode="text"
                  className="rounded-full w-5 h-5"
                />
                <div className="text-sm text-gray-500 font-medium">
                  <p>lino dachuan</p> <p>rongtaicheng</p> <p>+ 1326717532</p>
                </div>
              </article>
            </article>
            <section className="flex-grow bg-white rounded shadow p-2 px-4 flex flex-col justify-between">
              <picture>
                <div className="w-full aspect-square rounded bg-zinc-500"></div>
              </picture>
              <section className="flex flex-col py-2">
                <div className="flex p-2 py-4 items-center justify-between border-b border-gray-300">
                  <p className="text-base">Subtotal</p>
                  <p>--</p>
                </div>
                <div className="flex p-2 py-4 items-center justify-between border-b border-gray-300">
                  <p className="text-base">Shipping Cost</p>
                  <p>--</p>
                </div>
                <div className="flex p-2 py-4 items-center justify-between border-b border-gray-300">
                  <p className="text-base">Lead Time</p>
                  <p>--</p>
                </div>
                <div className="flex p-2 py-4 items-center justify-between border-b border-gray-300">
                  <p className="text-base">Shipping Method</p>
                  <div>
                    <p className="font-bold text-right pr-3 text-sm">
                      5-8 business days (Standard)
                    </p>
                    <p className="text-center text-gray-500  text-xs">
                      Estim.. Delivery{" "}
                      <span className="font-medium">Mar 12 2024</span>
                    </p>
                  </div>
                </div>
                <div className="flex p-2 py-4 items-center justify-between ">
                  <p className="text-base">Total</p>
                  <p className="font-bold text-2xl text-blue-600">
                    {quote.price ?? "Quote"} &yen;
                  </p>
                </div>
              </section>
              <section>
                {quote.status === "quoting" ? (
                  <button className="bg-blue-700 hover:bg-white mb-2 hover:text-blue-800 transition-all duration-150 ease-linear hover:border-2 border-blue-700 text-white w-full p-3 rounded font-bold">
                    Request For Quotation
                  </button>
                ) : quote.status === "quoted" ? (
                  <button className="bg-orange-600 hover:bg-white mb-2 hover:text-blue-800 transition-all duration-150 ease-linear hover:border-2 border-blue-700 text-white w-full p-3 rounded font-bold">
                    Order now
                  </button>
                ) : (
                  <button className="bg-orange-600 hover:bg-white mb-2 hover:text-blue-800 transition-all duration-150 ease-linear hover:border-2 border-blue-700 text-white w-full p-3 rounded font-bold">
                    Pay now
                  </button>
                )}
              </section>
            </section>
          </section>
        </form>
      </main>
    </>
  );
}
