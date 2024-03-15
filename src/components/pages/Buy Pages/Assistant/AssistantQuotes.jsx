import { Link } from "react-router-dom";
import "../../../sections/session.css";
import { Loading } from "../../../Loading";
import { Quotes } from "./Quote";
import { useQuotes } from "../../../../Hooks/useQuotes";
export function AssistanceQuotes() {
  const { quotesData, loading } = useQuotes();
  console.log({ quotesData });
  const mappedQuotes = quotesData.map((quote) => ({
    id: quote.id_quotation,
    phone: quote.telefono,
    name: quote.nombre,
    userId: quote.user_id,
    price: quote.price,
    date: quote.fecha_quotation,
    url: quote.url,
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
    note: quote.note,
    status: quote.status,
  }));

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-body flex flex-col gap-3 pt-20 pb-7 p-3 sm:px-24">
          <main className="w-full h-full pt-5">
            <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
              <header className="flex justify-between items-center">
                <h2 className="font-semibold text-xl py-2">Customer Quotes</h2>
                <Link
                  to="/panel"
                  className="flex   text-center p-3 px-8 shadow-md rounded text-white bg-blue-600    font-semibold  hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2  hover:outline hover:text-blue-700"
                >
                  Back
                </Link>
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
                    <th>
                      <li className="list-none text-white text-xs  p-2 font-semibold">
                        Acction
                      </li>
                    </th>
                  </tr>
                </thead>

                <tbody className="sm:text-base t-body text-xs ">
                  {mappedQuotes.map((quote) => {
                    return (
                      <tr
                        className="p-4 border border-gray-400 rounded"
                        key={quote.id}
                      >
                        <Quotes quote={quote} />
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </main>
        </main>
      )}
    </>
  );
}
