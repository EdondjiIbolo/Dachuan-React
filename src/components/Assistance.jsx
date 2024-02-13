import { ArrowIcon } from "./Icons";

export function Assistance() {
  return (
    <section className="w-full pt-20 px-10 " id="Assistance">
      <h3 className=" font-medium text-2xl mb-8 max-w-[50ch] text-center text-pretty m-auto">
        Our priority is your satisfaction: We are always available to address
        your queries and needs.
      </h3>
      <section className="grid sm:grid-flow-col gap-8 sm:ga-6 sm:auto-cols-fr">
        <article className="flex flex-col text-center sm:text-left gap-4">
          <div className="flex   sm:items-start items-center flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              delectus qui exercitationem natus debitis, aspernatur doloremque
              eum optio ipsum corporis praesentium ullam dolore dolores numquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              sunt.
            </p>
            <div className="sm:justify-start justify-center flex p-1 items-center shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500  w-36 ">
              <div className="rotate-90">
                <ArrowIcon />
              </div>
              <a href="#" className="w-full text-center text-sm font-bold">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex sm:items-start items-center flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              delectus qui exercitationem natus debitis, aspernatur doloremque
              eum optio ipsum corporis praesentium ullam dolore dolores numquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              sunt.
            </p>
            <div className="flex p-1 items-center shadow-md rounded text-white hover:bg-emerald-50 transition-all duration-200 ease-in hover:outline-2   hover:outline-orange-400 hover:outline hover:text-orange-400  bg-orange-500  w-36 ">
              <div className="rotate-90">
                <ArrowIcon />
              </div>
              <a href="#" className="w-full text-center text-sm font-bold">
                Learn More
              </a>
            </div>
          </div>
        </article>
        <picture className="flex justify-center">
          <img src="/img/CNC.jpg" alt="" className="object-cover" />
        </picture>
      </section>
    </section>
  );
}
