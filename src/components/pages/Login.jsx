import { Link, NavLink } from "react-router-dom";

export function Login() {
  return (
    <>
      <header className="main-header  justify-center h-20  bg-white w-full flex fixed top-0 left-0 z-40  md:pr-5">
        <section className="flex w-full max-w-[1320px]  items-center  border-b-2  bg-white  m-auto justify-between  h-20 z-30  fixed   ">
          <Link to="/" className="w-36">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-full object-cover object-top"
            />
          </Link>
          <section>
            <Link className="w-16 bg-blue-600 px-3 py-2 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white">
              Sign Up
            </Link>
          </section>
        </section>
      </header>
      <main className="grid place-content-center bg-slate-200 min-h-screen">
        <form
          action=""
          className="w-screen relative max-w-[500px] bg-slate-500 h-[400px] px-5 flex flex-col items-center
        justify-center gap-4 rounded m-auto"
        >
          <picture className="absolute -top-10 rounded-full overflow-hidden">
            <div className="w-24 bg-red-500 h-24"></div>
          </picture>
          <input
            type="text"
            className="w-full italic p-2 outline-none text-slate-800 bg-slate-100 shadow-lg rounded"
            placeholder="username or email"
          />
          <div className="w-full">
            <input
              type="passswor"
              className="w-full p-2 outline-none text-slate-800 bg-slate-100 shadow-lg rounded"
              placeholder="password"
            />
            <Link className="text-blue-900 text-end w-full block p-1 hover:font-semibold hover:underline">
              Forget your password?
            </Link>
          </div>
          <button className="text-white bg-blue-500 p-3 w-full rounded-lg font-bold border-2 hover:bg-white hover:text-black hover:border-black transition-all duration-200 ease border-slate-400">
            Login
          </button>
          <p className="text-white">
            Dont have an account ?{" "}
            <Link className="text-blue-400">Sing Up </Link>
            now.
          </p>
        </form>
      </main>
    </>
  );
}
