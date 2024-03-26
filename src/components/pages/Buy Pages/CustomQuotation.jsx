import { Link, useNavigate, useParams } from "react-router-dom";
import { SecureIcon, UploadFileIcon, UploadIcon } from "../../Icons";
import "../../sections/quotations.css";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useUser } from "../../../Hooks/useUser";
import FetchCustomQuote from "../../../Hooks/login";
export function CustomQuotation() {
  const { id } = useParams();
  const { user } = useUser();
  const [orderId, setOrderId] = useState(id);
  const [material, setMaterial] = useState("Stainless Steel 1.4571");
  const [finishing, setFinishing] = useState("Polishing / Electropolishing");
  const [technology, setTechnology] = useState("CNC MILLING");
  const [tolerance, setTolerance] = useState("0.5mm to 3mm");
  const [roughness, setRoughness] = useState("Ra1.6μm");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState(false);
  const [error, setError] = useState(false);
  const [address, setAddress] = useState(false);
  const [addressText, setAddressText] = useState(null);
  const date = Date.now();
  const newDate = new Date(date);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api-chuantai-dev-dbab.4.us-1.fl0.io/quote/${id}`
      );
      console.log(data);
    };
    getData();
  }, [id]);
  const handdleAdd = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  const handleDiff = (e) => {
    e.preventDefault();
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);

    const newData = {
      ...formData,
      ...user,
      Quotation_id: id,
    };

    try {
      const response = await FetchCustomQuote.customQuote(newData);
      const data = await response;
      console.log(data);
      if (!response) {
        throw new Error("Todos los campos son obligatorios");
      }
      if (response) {
        setTimeout(() => {
          navigate("/panel/my-quotes");
        }, 1200);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setTimeout(() => {
        setError(false);
      }, 3200);
    }
  };
  const handleUpdateAddress = (e) => {
    e.preventDefault();
    const formdata = Object.fromEntries(new FormData(e.target));

    const { SendAddress, SenderName, SenderPhone } = formdata;
    setAddressText([SendAddress, SenderName, SenderPhone].join("/"));
  };
  return (
    <main className="pt-20  min-h-screen main-body">
      {error && (
        <div className="bg-red-500 text-white fixed h-10 z-50 w-full text-center text-lg font-medium top-0 left-0 animate-fade-down animate-once animate-duration-[400ms] animate-delay-[50ms] animate-ease-linear">
          All fields are mandatory
        </div>
      )}
      <header className="sm:h-16 h-24 flex items-center fixed top-20 w-screen bg-white shadow-md  ">
        <article className="flex flex-col gap-3 sm:flex-row w-full items-center justify-between max-w-[1310px] m-auto">
          <section className="flex gap-4 items-center ">
            <p className="sm:text-base text-xs">
              <b>Quote No: </b>
              {id}
            </p>
          </section>
          <button className="p-2 px-2 w-44 bg-blue-200 rounded-md hover:bg-blue-400 transition-all duration-150 ease-linear hover:scale-x-[1.02] hover:text-white text blue-800">
            Request for quotation
          </button>
        </article>
      </header>
      <form
        className="md:px-32 px-2 pb-5 pt-20 flex gap-16 flex-col sm:flex-row"
        onSubmit={handleSubmit}
      >
        <section className="sm:w-2/3 flex flex-col  gap-3">
          <section className="  shadow rounded flex flex-col gap-3 bg-white p-3 ">
            <header className="flex sm:flex-row flex-col gap-2 border-b-2 pb-2 justify-between items-center">
              <h2 className="font-semibold">Parts & Configurations</h2>
              <div className="flex gap-3">
                <Link
                  to="/panel"
                  className="bg-blue-300 p-1 rounded text-slate-800 px-2 font-semibold"
                >
                  Go to panel
                </Link>
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
                  <b>Part Name :</b> {technology}
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
                  <b>Material</b> {material}
                </p>
                <p>
                  <b>Finishing</b> {finishing}
                </p>
                <p>
                  <b>Tolerance</b> {tolerance}
                </p>
                <p>
                  <b>Roughness</b> {roughness}
                </p>

                <p>
                  <b>Threads</b> None
                </p>
                <p>
                  <b>Notes</b> {notes ? "yes" : "none"}
                </p>
              </article>
              <div className="bg-slate-200 p-1 rounded-md w-24 flex justify-between items-center">
                <div
                  className="p-1 font-bold text-gray-700 cursor-pointer hover:text-black  hover:bg-slate-300 rounded"
                  onClick={handdleAdd}
                >
                  +
                </div>
                <input
                  type="number"
                  inputMode="number"
                  name="quantity"
                  value={quantity}
                  min={0}
                  className="border-gray-400 border w-10 pl-1 rounded focus:border focus:outline-none"
                />
                <div
                  className="p-1 font-bold text-gray-700 cursor-pointer hover:text-black  hover:bg-slate-300 rounded"
                  onClick={handleDiff}
                >
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
                  type="number"
                  inputMode="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="bg-slate-200 w-72 p-1 rounded border outline-none border-gray-400"
                />
              </label>
              <label className="flex flex-col gap-1">
                <p className="font-semibold">Technology</p>
                <select
                  name="Technology"
                  className="p-1 w-72 border rounded border-gray-500 outline-none"
                  onChange={(e) => setTechnology(e.target.value)}
                >
                  <option value="CNC MILLING">CNC MILLING</option>
                  <option value="CNC TURNING">CNC TURNING</option>
                  <option value="CNC DRILLING">CNC DRILLING</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <p className="font-semibold">Material</p>
                <select
                  name="Material"
                  className="p-1 w-72 border rounded border-gray-500 outline-none"
                  onChange={(e) => setMaterial(e.target.value)}
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
                  name="Finishing"
                  className="p-1 w-72 border rounded border-gray-500 outline-none"
                  onChange={(e) => setFinishing(e.target.value)}
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
                  name="Tolerance"
                  className="p-1 w-72 border rounded border-gray-500 outline-none"
                  onChange={(e) => setTolerance(e.target.value)}
                >
                  <option value="0.5mm to 3mm">0.5mm to 3mm</option>
                  <option value="Over 3mm to 6mm">Over 3mm to 6mm</option>
                  <option value="Over 6mm to 30mm">Over 6mm to 30mm</option>
                  <option value="Over 30mm to 120mm">Over 30mm to 120mm</option>
                  <option value="Over 120mm to 400mm">
                    Over 120mm to 400mm
                  </option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <p className="font-semibold">Roughness</p>
                <select
                  name="Roughness"
                  className="p-1 w-72 border rounded border-gray-500 outline-none"
                  onChange={(e) => setRoughness(e.target.value)}
                >
                  <option value="Ra1.6μm">Ra1.6μm</option>
                  <option value="Ra1.6μm">Ra1.6μm</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <p className="font-semibold">Threads</p>
                <select
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
                  <input type="file" className="hidden" />
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
                  type="text"
                  inputMode="text"
                  name="lead_time"
                  placeholder="Enter your expexted lead time"
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
              <article className=" bg-white p-2 rounded shadow-sm flex flex-col ">
                <input
                  type="date"
                  name="shipping_date"
                  className="focus:outline-0 w-full"
                />
              </article>
            </article>
          </article>
          <article>
            <header>
              <p className="font-semibold flex gap-2 items-center pb-1 text-blue-800">
                <SecureIcon /> Shipping Shipping Address
              </p>
            </header>
            <article className=" bg-white p-2  rounded shadow-sm flex flex-row  gap-3 items-center  justify-between px-3">
              <section
                className="flex
               gap-3 items-center"
              >
                <input
                  type="radio"
                  name="address"
                  value={addressText}
                  inputMode="text"
                  className="rounded-full w-5 h-5"
                />
                <div className="text-sm text-gray-500  text-wrap  font-medium">
                  {addressText === null ? (
                    "Set tour address"
                  ) : (
                    <>
                      <p>{addressText?.split("/")[0]}</p>
                      <p className=" text-wrap">{addressText?.split("/")[1]}</p>
                      <p>{addressText?.split("/")[2]}</p>{" "}
                    </>
                  )}
                </div>
              </section>
              <div onClick={() => setAddress(true)}>
                <p className="text-blue-800 font-bold cursor-pointer underline italic">
                  Edit
                </p>
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
                <p className="font-bold text-2xl text-blue-600">Quote</p>
              </div>
            </section>
            <button className="bg-blue-700 hover:bg-white mb-2 hover:text-blue-800 transition-all duration-150 ease-linear hover:border-2 border-blue-700 text-white w-full p-3 rounded font-bold">
              Request For Quotation
            </button>
          </section>
        </section>
      </form>
      {address && (
        <form
          className="fixed top-0 left-0 z-[50] grid place-content-center w-full h-full bg-zinc-600 bg-opacity-70"
          onSubmit={handleUpdateAddress}
        >
          <section className="bg-white relative w-96 p-3 h-80 rounded">
            <div
              className="absolute cursor-pointer hover:scale-110 transition-all duration-150 ease-linear z-[70]  h-8 w-8 flex justify-center items-center -top-24 text-red-600 hover:text-orange-400 right-0 sm:-right-24"
              onClick={() => setAddress(false)}
            >
              <span className="w-7 pointer-events-none rounded absolute rotate-45 bg-current shadow-md h-1 block"></span>
              <span className="w-7 pointer-events-none rounded absolute -rotate-45 bg-current shadow-md h-1 block"></span>
            </div>
            <header className="flex justify-center p-2">
              <h1 className="mx-auto font-semibold">
                Set your Shipping information
              </h1>
            </header>
            <main className="flex flex-col gap-4">
              <label className="flex items-center justify-between gap-3">
                <p>Address: </p>
                <input
                  type="text"
                  placeholder="Address"
                  name="SendAddress"
                  className="bg-slate-200 w-[70%] p-2 rounded focus:ring outline-none"
                />
              </label>
              <label className="flex items-center justify-between gap-3">
                <p>Name: </p>
                <input
                  type="text"
                  placeholder="Name"
                  name="SenderName"
                  className="bg-slate-200 w-[70%] p-2 rounded focus:ring outline-none"
                />
              </label>
              <label className="flex items-center justify-between gap-3">
                <p>Phone: </p>
                <input
                  type="text"
                  placeholder="Phone"
                  name="SenderPhone"
                  className="bg-slate-200 w-[70%] p-2 rounded focus:ring outline-none"
                />
              </label>
            </main>
            <div className="w-full py-4 flex justify-center">
              <button className="p-2 bg-blue-500 text-white rounded w-24 ">
                Save
              </button>
            </div>
          </section>
        </form>
      )}
    </main>
  );
}

// onClick={(e)=> e.preventDefault()}
