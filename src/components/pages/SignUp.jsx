import { Link, NavLink, useNavigate } from "react-router-dom";
import signServices from "../../Hooks/login";
import "../sections/session.css";
import { useState } from "react";
import { useUser } from "../../Hooks/useUser";
import { Loading } from "../Loading";
export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { setUser, user } = useUser();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userdata = await signServices.signup({
        name,
        password,
        email,
        phone,
      });
      const newdata = userdata;
      console.log(newdata);
      window.localStorage.setItem("user", JSON.stringify(newdata));
      setUser(newdata);
      console.log(user);
      navigate("/panel");
    } catch (err) {
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
            <Link className="w-16 bg-blue-600 px-3 py-2 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white">
              Sign Up
            </Link>
          </section>
        </section>
      </header>
      <main className="flex items-center justify-center w-screen p-5 bg-slate-200 min-h-screen">
        <form
          action=""
          className=" relative w-full max-w-[600px] bg-slate-500 h-[500px] md:h-[400px] px-5 flex flex-col items-center
        justify-center gap-4 rounded m-auto"
        >
          <picture className="absolute -top-10 rounded-full overflow-hidden">
            <div className="w-24 bg-red-500 h-24"></div>
          </picture>
          <input
            type="text"
            className="w-full sm:mt-6 mt-12 italic p-2 outline-none focus:ring text-slate-800 bg-slate-100 shadow-lg rounded"
            placeholder="Name"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <section className="flex justify-between w-full flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="w-full italic p-2 outline-none focus:ring text-slate-800 bg-slate-100 shadow-lg rounded"
              placeholder="Username"
              name="username"
              value={username}
              onChange={({ target }) => setUserame(target.value)}
            />
            <div className="w-full">
              <input
                type="text"
                className="w-full p-2 outline-none text-slate-800 bg-slate-100 shadow-lg rounded"
                placeholder="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
          </section>
          <section className="flex justify-between w-full flex-col sm:flex-row gap-4">
            <input
              type="password"
              className="w-full italic p-2 outline-none focus:ring text-slate-800 bg-slate-100 shadow-lg rounded"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <div className="w-full">
              <input
                type="number"
                id="telefono"
                name="telefono"
                inputMode="numeric"
                className="w-full p-2  focus:ring outline-none text-slate-800 bg-slate-100 shadow-lg rounded"
                placeholder="Phone number"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </div>
          </section>
          <button
            className="text-white bg-blue-500 p-3 w-full sm:w-[250px] rounded-lg font-bold border-2 hover:bg-white hover:text-black hover:border-black transition-all mt-4 duration-200 ease border-slate-400"
            onClick={handleClick}
          >
            Sign Up
          </button>
          <p className="text-white">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-400 font-bold">
              Log in{" "}
            </Link>
            now.
          </p>
        </form>
      </main>
    </>
  );
}
