import { ArrowIcon } from "./Icons";

export function Assistance() {
  return (
    <section className="w-full max-w-[1300px] m-auto py-20 px-10 bg-opacity-80">
      <h3 className=" font-medium text-2xl mb-8 max-w-[50ch] text-center text-pretty m-auto">
        Our priority is your satisfaction: We are always available to address
        your queries and needs.
      </h3>
      <section className="grid sm:grid-flow-col gap-8 sm:ga-6 sm:auto-cols-fr">
        <article className="flex flex-col text-center sm:text-left gap-4">
          <div className="flex   sm:items-start items-center flex-col gap-4">
            <p>
              Chuantai design assistant platform is committed to providing
              detailed information about mechanical design, helping you to
              quickly find all kinds of technical annotations, drawing
              resources, design tutorials, and software tools.
            </p>
            <p>
              We will also regularly update relevant materials and news related
              to the machinery industry to ensure that you are always aware of
              the latest developments and trends in the machinery design
              industry at home and abroad.
            </p>
            <div
              className="sm:justify-start mt-5 justify-center flex p-2 items-center shadow-md rounded  transition-all duration-200 ease-in hover:outline-2  bg-blue-800 font-semibold text-white hover:bg-white hover:outline
              hover:outline-bg-blue-800 hover:text-blue-800  w-36 "
            >
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
          <img
            src="./images/assistance.jpeg"
            alt=""
            className="object-cover "
            style={{
              filter:
                " grayscale(40%) blur(1.5px) opacity(0.9) brightness(100%) contrast(100%)",
            }}
          />
        </picture>
      </section>
    </section>
  );
}
