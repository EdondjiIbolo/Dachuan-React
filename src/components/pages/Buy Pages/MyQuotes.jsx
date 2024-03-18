import { Link } from "react-router-dom";
import "../../sections/session.css";
import { Quote } from "./Quote";
import { useUserQuote } from "../../../Hooks/useUsersQuote";
import { Loading } from "../../Loading";

export function MyQuotes() {
  const { loading, quotesData } = useUserQuote();
  const mappedQuotes = quotesData.map((quote) => ({
    id: quote.id_quotation,
    phone: quote.telefono,
    name: quote.nombre,
    price: quote.price,
    date: quote.fecha_quotation,
    technology: quote.technology,
    material: quote.material,
    finishing: quote.finishing,
    tolerance: quote.tolerance,
    threads: quote.threads,
    lead_time: quote.lead_time,
    shipping_date: quote.shipping_date,
    address: quote.address,
    quantity: quote.quantity,
    quotation_date: quote.quotation_date,
    status: quote.status,
    url: quote.url,
  }));

  return (
    <>
      {loading && <Loading />}
      <main className="main-body flex flex-col gap-3 pt-20 pb-7 p-3 sm:px-24">
        <main className="w-full h-full pt-5">
          <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
            <header className="flex justify-between items-center">
              <h2 className="font-semibold text-xl py-2">My Quotes</h2>
              <div className=" flex gap-3 items-center">
                <Link
                  to="/panel"
                  className="bg-blue-600 rounded text-white p-2 px-9 font-medium border border-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600  hover:bg-white transition-all duration-150 ease-linear"
                >
                  Back
                </Link>
                <Link
                  to="/panel/new-quotation"
                  className="bg-blue-600 rounded text-white p-2 font-medium border border-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all duration-150 ease-linear"
                >
                  New Quotation
                </Link>
              </div>
            </header>
            <table className="table">
              <thead>
                <tr className=" w-full bg-slate-400 p-2 rounded px-3">
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      Quote id
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      user
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      Phone
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      technology
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      material
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      finishing
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      tolerance
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      threads
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      address
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      shipping time
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      quantity
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      amount
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs p-2 font-semibold">
                      status
                    </li>
                  </th>
                  <th>
                    <li className="list-none text-white text-xs  p-2 font-semibold">
                      file
                    </li>
                  </th>
                </tr>
              </thead>

              <tbody className="sm:text-base t-body text-xs ">
                {mappedQuotes.map((quote) => (
                  <tr
                    className="p-4 border border-gray-400 rounded"
                    key={quote.id}
                  >
                    <Quote quote={quote} />
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </main>
    </>
  );
}
