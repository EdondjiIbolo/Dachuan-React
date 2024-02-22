import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecoverServices from "../../Hooks/login";
import { useUser } from "../../Hooks/useUser";
import { Loading } from "../Loading";
export function Recover() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [verify, setVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState(null);
  const [verifytext, setVerifytext] = useState(false);
  const navigate = useNavigate();
  const { setUser, user } = useUser();
  const className = error
    ? "w-full italic p-2 outline-none focus:outline-none outline-red-500 text-slate-800 bg-slate-100 shadow-lg rounded"
    : "w-full italic p-2 outline-none focus:ring text-slate-800 bg-slate-100 shadow-lg rounded";

  useEffect(() => {
    const interval = setInterval(() => {
      if (verifytext > 0) {
        setVerifytext(verifytext - 1);
        console.log(verifytext);
      } else {
        clearInterval(interval);

        setVerify(false);
        console.log(verifytext);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [verifytext]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    setVerifytext(5);
    setVerify(true);
    try {
      const userdata = await RecoverServices.verifyCode({ email });
    } catch (error) {
      setError(true);
      setErrorText("UP HUBO UN PROBLEMA AL ENVIAR EL SMS");
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setVerify(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(email && password && verifyCode)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    try {
      setLoading(true);
      const userdata = await RecoverServices.recoverPassword({
        email,
        password,
        verifyCode,
      });
      const newdata = userdata;
      console.log(newdata);
      window.localStorage.setItem("user", JSON.stringify(newdata));
      setUser(newdata);
      console.log(user);
      navigate("/login");
    } catch (err) {
      setError(true);
      setErrorText(err.response.data.message);
      setTimeout(() => {
        setError(false);
      }, 5000);
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
          <p>enzombul@gmai.com</p>
          <section>
            <Link className="w-16 bg-blue-600 px-3 py-2 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white">
              Sign Up
            </Link>
          </section>
        </section>
      </header>
      <main className="flex items-center justify-center w-screen p-5 bg-slate-200 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-screen relative max-w-[500px] bg-slate-500 h-[400px] px-5 flex flex-col items-center
        justify-center gap-4 rounded m-auto"
        >
          <picture className="absolute -top-10 rounded-full overflow-hidden">
            <div className="w-24 bg-red-500 h-24"></div>
          </picture>
          <input
            type="text"
            name="email"
            value={email}
            className={className}
            placeholder="Enter email"
            onChange={({ target }) => setEmail(target.value)}
            onFocus={() => setError(false)}
            autoComplete="username"
          />
          <input
            type="text"
            name="email"
            value={password}
            className={className}
            placeholder="Set New password"
            onChange={({ target }) => setPassword(target.value)}
            onFocus={() => setError(false)}
            autoComplete="current-password"
          />
          <div className="w-full">
            <section className="grid grid-flow-col gap-2 auto-cols-fr w-full">
              <input
                type="number"
                placeholder="verification code"
                className={`w-full p-2  focus:ring ${
                  error ? "border-red-500 border-2" : ""
                } outline-none text-slate-800 bg-slate-100 shadow-lg rounded`}
                value={verifyCode}
                onChange={({ target }) => setVerifyCode(target.value)}
              />
              <div>
                <button
                  className=" p-2 w-full text-white bg-blue-500  rounded-lg font-bold border-2 hover:bg-blue-900 hover:text-white hover:border-slate-300 transition-all  duration-200 ease border-slate-400"
                  onClick={handleVerify}
                >
                  {!verify ? "verify code" : `${verifytext}s`}
                </button>
              </div>
            </section>
            {error && (
              <p className="text-white absolute flex w-72 bottom-4 left-1/2 -translate-x-1/2 border-red-500 rounded p-1 px-3 text-lg bg-red-500 duration-250 transition-all  justify-center ease-in ">
                Error : {errorText}
              </p>
            )}
          </div>
          <button className="text-white sm:w-1/2 bg-blue-500 p-3 w-full rounded-lg font-bold border-2 hover:bg-white hover:text-black hover:border-black transition-all duration-200 ease border-slate-400">
            Login
          </button>
        </form>
      </main>
    </>
  );
}
