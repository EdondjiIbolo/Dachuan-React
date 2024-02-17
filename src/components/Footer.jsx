export function Footer() {
  return (
    <footer className="bg-indigo-950 w-full h-auto text-white ">
      <section className="p-12 pb-4 max-w-[1300px] m-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 pb-8 gap-16 border-b-[1px] :mdjustify-center border-zinc-500">
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">CNC Machining</p>
            <li>
              <a
                href="/machining-milling"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                CNC Milling
              </a>
            </li>
            <li>
              <a
                href="/machining-turning"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                CNC Turning
              </a>
            </li>
            <li>
              <a
                href="/machining-drilling"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                CNC Drilling
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400"> Resources</p>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                Guide
              </a>
            </li>
            <li>
              <a
                href="/materials"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                Materials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                Design Assistance
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">Others</p>
            <li>
              <a
                href="/about"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                Questions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-300 hover:border-b p-1 border-slate-300"
              >
                News
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3  text-sm">
            <p className="text-zinc-400">Contact Us</p>
            <li>
              <a href="tel:999 999 999" className="hover:text-blue-400 ">
                Phone : 999 999 999
              </a>
            </li>
            <li>
              <a
                href="mailto:example@gmail.com"
                className="hover:text-blue-400 "
              >
                Email : example@gmail.com
              </a>
            </li>
          </ul>
        </ul>
        <ul className="flex-col md:flex-row flex  md:justify-between items-center relative">
          <div className="flex h-32 gap-3 items-center justify-center flex-col sm:flex-row w-min ">
            <picture className=" h-20 overflow-hidden w-20 flex justify-start cursor-pointer text-zinc-500 ">
              <img
                className="object-cover  "
                src="img/logo.png"
                alt="Dachuan Logo"
              />
            </picture>
            <p className="text-nowrap w-min flex">
              &copy; 2024 , Chuantai Enterprise
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center sm:items-start text-xs sm:text-sm w-full sm:justify-between md:justify-end">
            <a href="#" className="text-blue-500">
              沪ICP备2022003370号-1
            </a>
            <a href="#" className="text-blue-500">
              沪公网安备31010902003376号
            </a>
          </div>
        </ul>
      </section>
    </footer>
  );
}
