import { Link } from "react-router-dom";
import "../../sections/session.css";

import { useUser } from "../../../Hooks/useUser";
import { useCompletedOrders } from "../../../Hooks/useCompletedOrders";
import { Order } from "./Order";
import { Loading } from "../../Loading";
export function OrdersCompleted() {
  const { user } = useUser();
  const { email } = user;
  const { quotes: orders, loading } = useCompletedOrders({ email });
  const mappedQuotes = orders.map((order) => ({
    id: order.id_quotation,
    phone: order.phone,
    name: order.name,
    userId: order.user_id,
    price: order.price,
    date: order.fecha_quotation,
    url: order.url,
    technology: order.technology,
    material: order.material,
    finishing: order.finishing,
    tolerance: order.tolerance,
    threads: order.threads,
    lead_time: order.lead_time,
    shipping_date: order.shipping_date,
    address: order.address,
    quantity: order.quantity,
    quotation_date: order.quotation_date,
    note: order.note,
    status: order.status,
  }));
  console.log(mappedQuotes);
  return (
    <>
      {loading && <Loading />}
      <main className="main-body flex flex-col gap-3 pt-20 pb-7 p-3 sm:px-24">
        <main className="w-full h-full pt-5">
          <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
            <header className="flex justify-between items-center">
              <h2 className="font-semibold text-xl py-2">Completed Orders</h2>
              <div className="flex items-center justify-between gap-3  ">
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
                {mappedQuotes.map((order) => {
                  return (
                    <tr
                      className="p-4 border border-gray-400 rounded"
                      key={order.id}
                    >
                      <Order quote={order} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </main>
      </main>
    </>
  );
}
