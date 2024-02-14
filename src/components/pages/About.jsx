import { CustomerIcon, MachinesIcon, PartsIcon, UsersIcon } from "../Icons";

export function AboutUs() {
  return (
    <main>
      <section className="relative h-86 mt-20 sm:h-96 overflow-hidden">
        <picture className="absolute z-5  left-0  w-full  ">
          <img
            src="/img/Milling.jpeg"
            className="h-96 blur-lg object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
            alt="Banner img"
          />
        </picture>

        <section className=" p-1 grid place-content-center z-10 text-wrap  relative  gap-4 w-full h-full   sm:h-[320px]">
          <h1 className="font-bold text-4xl w-full text-black text-center">
            About us
          </h1>
          <p className="font-semibold text-lg sm:text-2xl w-full text-black text-center">
            Precision in Every Part – Your Reliable Source for High-Quality
            Machining Solutions
          </p>
        </section>
      </section>
      <main className="w-full ">
        <section className=" bg-slate-50">
          <section className="w-full max-w-[1310px] m-auto  pt-20 px-10 ">
            <h3 className=" font-medium text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
              Who we are ?
            </h3>
            <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
              <article className="flex flex-col text-center sm:text-left gap-4">
                <p>
                  Dachuan Technologies GmbH is a Munich-based technology company
                  that provides a manufacturing platform for CNC turning and
                  milling parts. It is our goal to make the manufacturing of
                  individual drawing parts as fast and efficient as possible for
                  both customers and suppliers, and thus forming the digital
                  backbone of an efficiently networked manufacturing industry.
                </p>

                <p>
                  To achieve this, we have a team of highly skilled
                  professionals with extensive experience in the field of
                  machining. We utilize state-of-the-art machinery and advanced
                  technology to guarantee that every piece we produce is
                  flawless in every aspect.
                </p>
                <p>
                  In addition to the quality of our products, we strive to offer
                  excellent service to our customers. Our team works closely
                  with you to understand your needs and exceed your
                  expectations. We are committed to providing personalized
                  solutions that cater to your specific requirements.
                </p>
              </article>
              <picture className="flex justify-center p-4 pt-0">
                <img src="/img/CNC.jpg" alt="" className="object-cover" />
              </picture>
            </section>
          </section>

          <section className="w-full max-w-[1310px] m-auto   pt-10 px-10 ">
            <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
              <article className="flex flex-col text-center sm:text-left gap-4">
                <p>
                  Trust is a core value in our company. We endeavour to earn and
                  maintain the trust of our customers through transparency in
                  our operations, punctuality in delivery, and consistency in
                  the quality of our products.
                </p>
                <p>
                  At our company, we take pride in providing our customers with
                  the highest quality products. Our number one priority is to
                  ensure that every part that leaves our facility meets the
                  highest standards of precision and accuracy.
                </p>
              </article>
            </section>
          </section>
        </section>
        <section className=" bg-slate-100">
          <section className="w-full max-w-[1310px] m-auto py-10 px-10 ">
            <h3 className=" font-medium text-4xl mb-3 max-w-[50ch] text-start text-pretty ">
              Our Priority
            </h3>
            <hr />
            <section className="grid sm:grid-flow-col  pt-2 gap-8 sm:gap-6 sm:auto-cols-fr">
              <article className="flex flex-col text-center sm:text-left gap-4">
                <p>
                  We are aware that there are numerous options in the market,
                  and we are incredibly grateful for choosing and trusting in
                  us.
                </p>
                <p>
                  We take great pride in sharing that we have a vast network of
                  clients spread across the world. From North America to Asia,
                  from Europe to Oceania, our global community continues to grow
                  each day. This signifies that not only have we met the needs
                  of our clients, but we have also exceeded their expectations.
                </p>
                <p>
                  Our dedication and passion for delivering high-quality
                  products and services have enabled us to cultivate solid and
                  lasting relationships with our clients. We deeply value their
                  loyalty and support, as they propel us to continuously surpass
                  ourselves and expand further.
                </p>
                <p>
                  Furthermore, we are thrilled to collaborate with individuals
                  from diverse cultures and traditions. Each client brings
                  something unique to our company and enriches us with their
                  perspective and experience. We consider every interaction as
                  an opportunity to learn and grow, both professionally and
                  personally. We pledge to adapt and personalize our work to
                  meet their specific needs and ensure their utmost
                  satisfaction.
                </p>
              </article>
              <article className="grid place-content-center gap-4 p-4 pt-0">
                <div className="flex md:items-start md:flex-row flex-col items-center gap-8">
                  <div className="flex gap-3 flex-col justify-center md:items-start items-center">
                    <CustomerIcon />
                    <p className="text-2xl flex gap-2  italic">
                      <strong className="text-blue-600 font-bold">
                        +8.000
                      </strong>
                      customers
                    </p>
                  </div>
                  <div className="flex gap-3 flex-col justify-center md:items-start items-center">
                    <UsersIcon />
                    <p className="text-2xl flex gap-2  italic">
                      <strong className="text-blue-600 font-bold">
                        +5.000
                      </strong>
                      Users
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center  gap-8">
                  <div className="flex gap-3 flex-col justify-center md:items-start items-center">
                    <MachinesIcon />
                    <p className="text-2xl flex gap-2  italic">
                      <strong className="text-blue-600 font-bold">
                        +50.000
                      </strong>{" "}
                      machines
                    </p>
                  </div>
                  <div className="flex gap-3 flex-col justify-center md:items-start items-center">
                    <PartsIcon />
                    <p className="text-2xl flex gap-2  italic">
                      <strong className="text-blue-600 font-bold">
                        +200.000{" "}
                      </strong>
                      Calculated parts
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </section>
        </section>
        <section className=" bg-slate-100">
          <section className="w-full max-w-[1310px] m-auto py-10 px-10 flex flex-col gap-4">
            <h3 className=" font-medium text-4xl mb-3 max-w-[50ch] text-start text-pretty ">
              Our Team Members
            </h3>
            <hr />
            <section className="flex sm:flex-row bg-white justify-between flex-col h-min p-2 rounded">
              <article className=" md:w-[60%]">
                <h3 className="font-semibold mb-2 text-lg italic">
                  Profession Title
                </h3>
                <p>
                  Our dedication and passion for delivering high-quality
                  products and services have enabled us to cultivate solid and
                  lasting relationships with our clients. We deeply value their
                  loyalty and support, as they propel us to continuously surpass
                  ourselves and expand further.relationships with our clients.
                  We deeply value their loyalty and support, as they propel us
                  to continuously surpass ourselves and expand further.
                </p>
              </article>

              <picture className="h-full rounded overflow-hidden md:w-[20%] pt-0">
                <img
                  src="/img/CNC.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </picture>
            </section>
            <section className="flex sm:flex-row bg-white justify-between flex-col h-min p-2 rounded">
              <picture className="h-full rounded overflow-hidden md:w-[20%] pt-0">
                <img
                  src="/img/CNC.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </picture>
              <article className=" md:w-[60%]">
                <h3 className="font-semibold mb-2 text-lg italic">
                  Profession Title
                </h3>
                <p>
                  Our dedication and passion for delivering high-quality
                  products and services have enabled us to cultivate solid and
                  lasting relationships with our clients. We deeply value their
                  loyalty and support, as they propel us to continuously surpass
                  ourselves and expand further.relationships with our clients.
                  We deeply value their loyalty and support, as they propel us
                  to continuously surpass ourselves and expand further.
                </p>
              </article>
            </section>
            <section className="flex sm:flex-row bg-white justify-between flex-col h-min p-2 rounded">
              <article className=" md:w-[60%]">
                <h3 className="font-semibold mb-2 text-lg italic">
                  Profession Title
                </h3>
                <p>
                  Our dedication and passion for delivering high-quality
                  products and services have enabled us to cultivate solid and
                  lasting relationships with our clients. We deeply value their
                  loyalty and support, as they propel us to continuously surpass
                  ourselves and expand further.relationships with our clients.
                  We deeply value their loyalty and support, as they propel us
                  to continuously surpass ourselves and expand further.
                </p>
              </article>

              <picture className="h-full rounded overflow-hidden md:w-[20%] pt-0">
                <img
                  src="/img/CNC.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </picture>
            </section>
          </section>
        </section>
        <section className=" bg-slate-50">
          <section className="w-full max-w-[1310px] m-auto   p-6 pt-20 ">
            <h3 className=" font-semibold text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
              Our History
            </h3>
            <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
              <article className="flex flex-col text-center sm:text-left gap-4">
                <p>
                  Dachuan Technologies GmbH is a Munich-based technology company
                  that provides a manufacturing platform for CNC turning and
                  milling parts. It is our goal to make the manufacturing of
                  individual drawing parts as fast and efficient as possible for
                  both customers and suppliers, and thus forming the digital
                  backbone of an efficiently networked manufacturing industry.
                </p>

                <p>
                  To achieve this, we have a team of highly skilled
                  professionals with extensive experience in the field of
                  machining. We utilize state-of-the-art machinery and advanced
                  technology to guarantee that every piece we produce is
                  flawless in every aspect.
                </p>
                <p>
                  In addition to the quality of our products, we strive to offer
                  excellent service to our customers. Our team works closely
                  with you to understand your needs and exceed your
                  expectations. We are committed to providing personalized
                  solutions that cater to your specific requirements.
                </p>
              </article>
              <picture className="flex justify-center p-4 pt-0">
                <img
                  src="/img/Spanflug_Team.webp"
                  alt="team members"
                  className="object-cover"
                />
              </picture>
            </section>
          </section>

          <section className="w-full max-w-[1310px] m-auto   p-4 px-10 ">
            <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
              <article className="flex flex-col text-center sm:text-left gap-4">
                <p>
                  Trust is a core value in our company. We endeavour to earn and
                  maintain the trust of our customers through transparency in
                  our operations, punctuality in delivery, and consistency in
                  the quality of our products.
                </p>
                <p>
                  At our company, we take pride in providing our customers with
                  the highest quality products. Our number one priority is to
                  ensure that every part that leaves our facility meets the
                  highest standards of precision and accuracy.
                </p>
              </article>
            </section>
          </section>
        </section>
      </main>
    </main>
  );
}
