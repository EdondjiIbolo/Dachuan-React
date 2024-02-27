import { Link, useNavigate } from "react-router-dom";
import "../sections/panel.css";
import { useUser } from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import { SecureIcon, UsersIcon } from "../Icons";
export function Panel() {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  // useEffect(() => {
  //   if (!user.token) {
  //     console.log("no usuario");
  //     return navigate("/login");
  //   }
  // }, [user]);
  console.log(qty);
  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <main className="main-body flex flex-col gap-3 pt-20 pb-7 p-3 sm:px-24">
      <header className="w-full sm:h-28 gap-4 rounded shadow flex sm:flex-row flex-col  justify-between items-center p-3 sm:p-2 px-3 sm:gap-3 bg-white mt-3 ">
        <article className="flex gap-2 items-center">
          <picture className="w-20 h-20 p-2  overflow-hidden">
            <div className="w-full h-full rounded-full bg-red-500 object-cover"></div>
          </picture>
          <article className="">
            <p className="font-bold text-2xl capitalize">lino dachuan</p>
            <span className="flex gap-3">
              <p className="text-xs border-r px-1 border-gray-400">yewu</p>
              <p className="text-xs border-l px-1 border-gray-400">
                enzombul@gmail.com
              </p>
            </span>
          </article>
        </article>
        <button className="bg-blue-600 rounded text-white p-2 font-medium border border-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all duration-150 ease-linear">
          New Quotation
        </button>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 grow gap-5 h-full ">
        <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
          <h2 className="font-semibold text-xl py-2">My Quotes Info</h2>
          <section className=" grid md:grid-cols-4  flex-grow   items-center gap-3 md:gap-4">
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow  h-full items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded">
              <UsersIcon />
              <p className="text-xs text-center font-medium">Total Quotation</p>
            </article>
            <Link
              to="my-quotes"
              className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full  items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded"
            >
              <UsersIcon />
              <p className="text-xs text-center font-medium">Quotations</p>
            </Link>
            <Link
              to="quotes-completed"
              className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded"
            >
              <UsersIcon />
              <p className="text-xs text-center font-medium">
                Quotes Completed
              </p>
            </Link>

            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded">
              <UsersIcon />
              <p className="text-xs text-center font-medium">Quotes Amount</p>
            </article>
          </section>
        </section>
        <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
          <h2 className="font-semibold text-xl py-2">My Order Info</h2>
          <section className=" grid md:grid-cols-4  flex-grow   items-center gap-3 md:gap-4">
            <Link
              to="my-orders"
              className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full  items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded"
            >
              <UsersIcon />
              <p className="text-xs text-center font-medium">Orders</p>
            </Link>
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded">
              <UsersIcon />
              <p className="text-xs text-center font-medium">texto</p>
            </article>
            <Link
              to="orders-completed"
              className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow  h-full items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded"
            >
              <UsersIcon />
              <p className="text-xs text-center font-medium">
                Orders Completed
              </p>
            </Link>
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded">
              <UsersIcon />
              <p className="text-xs text-center font-medium">Total Paid</p>
            </article>
          </section>
        </section>
        <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
          <h2 className="font-semibold text-xl py-2">My Payment Info</h2>
          <section className=" grid md:grid-cols-4   flex-grow   items-center gap-3 md:gap-4">
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full  items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded">
              <UsersIcon />
              <p>texto</p>
            </article>
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded">
              <UsersIcon />
              <p>texto</p>
            </article>
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow  h-full items-center gap-2 p-3 border hover:border-2  border-blue-400 rounded">
              <UsersIcon />
              <p>texto</p>
            </article>
            <article className="flex flex-col justify-center hover:border-blue-900 hover:bg-cyan-50 transition-all duration-150 ease-linear cursor-pointer flex-grow h-full items-center gap-2 p-3 border  hover:border-2 border-blue-400 rounded">
              <UsersIcon />
              <p>texto</p>
            </article>
          </section>
        </section>
        <section className="bg-white flex flex-col gap-4  rounded shadow-sm p-4">
          <h2 className="font-semibold text-xl py-2">Account Info</h2>
          <section className=" flex flex-col md:flex-row p-2 flex-grow  w-full items-center border border-blue-600 rounded gap-3 md:gap-4">
            <picture>
              <div className="bg-red-500 rounded w-20 h-20 object-cover"></div>
            </picture>
            <article>
              <section className="flex md:justify-between md:flex-row flex-col md:items-center">
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <p>
                    <b>name </b>: enzombul
                  </p>
                  <p>
                    <b>telephone </b>: enzombul
                  </p>
                </div>
                <div className="flex flex-col  gap-2 text-sm sm:text-base">
                  <p>
                    <b>email </b>: enzombul
                  </p>
                  <p>
                    <b>wechatContact </b>: enzombul
                  </p>
                </div>
              </section>
              <span className="text-slate-500 text-xs sm:text-lg ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                animi sit, vero
              </span>
            </article>
          </section>
        </section>
      </main>
    </main>
  );
}
