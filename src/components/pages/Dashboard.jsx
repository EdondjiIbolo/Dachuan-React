import { Link, redirect, useNavigate } from "react-router-dom";
import "../sections/panel.css";
import { useUser } from "../../Hooks/useUser";
import { useEffect } from "react";
export function Panel() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  useEffect(() => {
    if (!user.token) {
      console.log("no usuario");
      return navigate("/login");
    }
  }, [user]);

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <header className="main-header  justify-center h-20  bg-white w-full flex fixed top-0 left-0 z-40  md:pr-5">
        <section className="flex w-full max-w-[1320px]  items-center  border-b-2  bg-white  m-auto justify-between  h-20 z-30  fixed   ">
          <section className="h-20 flex items-center">
            <Link to="/" className="w-36">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="w-full object-cover object-top"
              />
            </Link>
            <h1 className="font-bold text-lg">Welcome to you panel</h1>
          </section>
          <section className="flex items-center gap-3">
            <p className="font-semibold hover:uderline text-blue-900">
              {user.name}
            </p>
            <button
              onClick={handleLogout}
              className="w-24 bg-blue-600 px-3 py-2 hover:text-blue-600 hover:bg-white hover:border-2 border-blue-600 transition-all duration-150 ease rounded text-white"
            >
              Log Out
            </button>
          </section>
        </section>
      </header>
    </>
  );
}
