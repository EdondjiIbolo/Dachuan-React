import { Link } from "react-router-dom";
import "../../sections/session.css";
import { Quote } from "./Quote";
export function MyQuotes() {
  return (
    <main className="main-body flex flex-col gap-3 pt-20 pb-7 p-3 sm:px-24">
      <main className="w-full h-full pt-5">
        <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
          <header className="flex justify-between items-center">
            <h2 className="font-semibold text-xl py-2">My Quotes Info</h2>
            <Link
              to="/panel/new-quotation"
              className="bg-blue-600 rounded text-white p-2 font-medium border border-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all duration-150 ease-linear"
            >
              New Quotation
            </Link>
          </header>
          <table className="w-full">
            <thead>
              <tr className=" w-full bg-slate-400 p-2 rounded px-3">
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    询价单号
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    名称
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    询价时间
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    零件款数
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    总件数
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    报价时间
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    总价(¥)
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    交货时间
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    状态
                  </li>
                </th>
                <th>
                  <li
                    className="list-none text-white text-sm p-2 font-medium"
                    href=""
                  >
                    操作
                  </li>
                </th>
              </tr>
            </thead>

            <tbody className="sm:text-base t-body text-xs ">
              <Quote />
              <Quote />
              <Quote />
              <Quote />
            </tbody>
          </table>
        </section>
      </main>
    </main>
  );
}
