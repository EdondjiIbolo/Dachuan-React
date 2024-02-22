import { Link, useNavigate } from "react-router-dom";
import signServices from "../../Hooks/login";
import "../sections/session.css";
import { useEffect, useState } from "react";
import { useUser } from "../../Hooks/useUser";
import { Loading } from "../Loading";
export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(null);
  const [verify, setVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState(null);
  const [verifytext, setVerifytext] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { setUser, user } = useUser();
  const navigate = useNavigate();

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
    if (!phone) {
      setError(true);
      setErrorText("The phone number is required");
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    setVerifytext(5);
    setVerify(true);
    try {
      const userdata = await signServices.verifyCode({ phone });
    } catch (error) {
      console.error("Error al enviar el código de verificación:", error);
    } finally {
      setVerify(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(password && phone && verifyCode && username && email)) {
      setError(true);
      setErrorText("All inputs must be filled");
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    try {
      setLoading(true);
      const userdata = await signServices.signup({
        name,
        password,
        email,
        phone,
        username,
        verifyCode,
      });
      const newdata = userdata;
      console.log(newdata);
      window.localStorage.setItem("user", JSON.stringify(newdata));
      setUser(newdata);
      console.log(user);
      navigate("/panel");
    } catch (err) {
      console.log(err.response.data.message);
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
          <section>
            <Link
              to="/login"
              className="w-16 bg-blue-600 px-3 py-2 mr-5 sm:mr-3 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white"
            >
              Log in
            </Link>
          </section>
        </section>
      </header>
      <main className="flex items-center min-h-screen justify-center w-screen px-5 pt-32 sm:pt-32 relative bg-slate-200 ">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" sm:pt-4 relative w-full max-w-[600px] bg-slate-500 mb-8 sm:mb-auto h-[600px] sm:h-[400px] px-5 flex flex-col items-center
        justify-center gap-4 rounded m-auto"
        >
          <picture className="absolute -top-10 rounded-full overflow-hidden">
            <div className="w-24 bg-red-500 h-24"></div>
          </picture>

          <section className="flex justify-between w-full flex-col sm:flex-row gap-4">
            <input
              type="text"
              className={`w-full italic p-2 outline-none focus:ring text-slate-800 ${
                error ? "border-red-500 border-2" : ""
              } bg-slate-100 shadow-lg rounded`}
              placeholder="Name"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <div className="w-full">
              <input
                type="text"
                className={`w-full italic p-2 outline-none focus:ring ${
                  error ? "border-red-500 border-2" : ""
                } text-slate-800 bg-slate-100 shadow-lg rounded`}
                placeholder="Username"
                name="username"
                value={username}
                onChange={({ target }) => setUserame(target.value)}
              />
            </div>
          </section>
          <section className="flex justify-between w-full flex-col sm:flex-row gap-4">
            <input
              type="password"
              className={`w-full italic p-2 outline-none focus:ring ${
                error ? "border-red-500 border-2" : ""
              } text-slate-800 bg-slate-100 shadow-lg rounded`}
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <div className="w-full">
              <input
                type="text"
                className={`w-full p-2 outline-none text-slate-800 ${
                  error ? "border-red-500 border-2" : ""
                } bg-slate-100 shadow-lg rounded`}
                placeholder="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
          </section>
          <section className="flex justify-between w-full flex-col sm:flex-row gap-4">
            <input
              type="number"
              id="telefono"
              name="telefono"
              inputMode="numeric"
              className={`w-full sm:w-1/2 p-2  focus:ring ${
                error ? "border-red-500 border-2" : ""
              } outline-none text-slate-800 bg-slate-100 shadow-lg rounded`}
              placeholder="Phone number"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <section className="grid grid-flow-col gap-2 sm:w-1/2 auto-cols-fr ">
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
          </section>
          <button className="text-white bg-blue-500 p-3 w-full sm:w-[250px] rounded-lg font-bold border-2 hover:bg-white hover:text-black hover:border-black transition-all mt-4 duration-200 ease border-slate-400">
            Sign Up
          </button>
          <p className="text-white">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-400 font-bold">
              Log in{" "}
            </Link>
            now.
          </p>
          {error && (
            <p className="text-white absolute flex w-72 bottom-4 left-1/2 -translate-x-1/2 border-red-500 rounded p-1 px-3 text-lg bg-red-500 duration-250 transition-all  justify-center ease-in ">
              Error : {errorText}
            </p>
          )}
        </form>
      </main>
    </>
  );
}
