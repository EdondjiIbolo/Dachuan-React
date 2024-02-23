import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginServices from "../../Hooks/login";
import { useUser } from "../../Hooks/useUser";
import { Loading } from "../Loading";
export function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setUser, user } = useUser();
  const className = error
    ? "w-full italic p-2 outline-none focus:outline-none outline-red-500 text-slate-800 bg-slate-100 shadow-lg rounded"
    : "w-full italic p-2 outline-none focus:ring text-slate-800 bg-slate-100 shadow-lg rounded";
  useEffect(() => {
    if (user.token) {
      navigate("/panel");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userdata = await loginServices.login({
        phone,
        password,
      });
      const newdata = userdata;
      window.localStorage.setItem("user", JSON.stringify(newdata));
      setUser(newdata);
      console.log(user);
      navigate("/panel");
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      console.log("Error : ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
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
            <Link
              to="/sign-up"
              className="w-16 bg-blue-600 px-3 py-2 mr-5 sm:mr-3 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white"
            >
              Sign Up
            </Link>
          </section>
        </section>
      </header>
      <main className="grid place-content-center w-screen p-5 bg-slate-200 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-screen relative max-w-[500px] bg-slate-500 h-[400px] px-5 flex flex-col items-center
        justify-center gap-4 rounded m-auto"
        >
          <picture className="absolute -top-10 rounded-full overflow-hidden">
            <div className="w-24 bg-red-500 h-24"></div>
          </picture>
          <input
            type="tel"
            name="number"
            value={phone}
            inputMode="tel"
            className={className}
            placeholder="tel : +8611222578856"
            onChange={({ target }) => setPhone(target.value)}
            onFocus={() => setError(false)}
            autoComplete="Phone Number"
          />
          <div className="w-full">
            <input
              type="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className={className}
              placeholder="password"
              autoComplete="current-password"
              onFocus={() => setError(false)}
            />
            {error && (
              <p className="text-red-400 mt-3 text-sm font-semibold italic text-left ">
                Incorrect username or password. Please try again.
              </p>
            )}
            <Link
              to="/forgot-password"
              className="text-blue-900 text-end w-full block p-1 hover:font-semibold hover:underline"
            >
              Forget your password?
            </Link>
          </div>
          <button className="text-white bg-blue-500 p-3 w-full rounded-lg font-bold border-2 hover:bg-white hover:text-black hover:border-black transition-all duration-200 ease border-slate-400">
            Login
          </button>
          <p className="text-white">
            Dont have an account ?{" "}
            <Link to="/sign-up" className="text-blue-400">
              Sign Up{" "}
            </Link>
            now.
          </p>
        </form>
      </main>
    </>
  );
}
