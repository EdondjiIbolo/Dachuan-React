import { CustomerIcon, MachinesIcon, PartsIcon, UsersIcon } from "./Icons";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { useTranslation } from "react-i18next";

export function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <section className="relative h-86 mt-20 sm:h-96 overflow-hidden">
          <picture className="absolute z-5  left-0  w-full  ">
            <img
              src="/img/Milling.jpeg"
              className="h-96 blur-lg object-[-235px] sm:object-center sm:h-96 block object-cover w-full"
              alt="Banner img"
            />
          </picture>

          <section className=" p-1 grid place-content-center z-10 text-wrap  relative  gap-8 w-full h-full   sm:h-[320px]">
            <h1 className="font-bold text-4xl w-full text-black text-center">
              {t("ABOUT.BANNER_TITLE")}
            </h1>
            <p className="font-semibold text-lg sm:text-2xl w-full max-w-[60ch] text-black text-center">
              川泰智能公司，根植于中国的高新技术领域，依托强大的研发实力
              和丰富的市场经验，逐渐成长为国内领先的科技企业。
            </p>
          </section>
        </section>

        <main className="w-full ">
          <section className=" bg-slate-50">
            <section className="w-full max-w-[1310px] m-auto  pt-20 px-10 ">
              <h3 className=" font-medium text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
                {t("ABOUT.SECTION_1_TITLE_1")}
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-center sm:text-left gap-4">
                  <p>
                    川泰智能公司，位于中国的科技前沿阵地，是一家专注于创新技术与先进解决方
                    案的研发与推广的领先企业。我们致力于将最新的科技理念转化为实际的产品和
                    服务，以满足客户在各个领域的需求。
                  </p>

                  <p>
                    我们的业务范围涵盖人工智能、云计算、大数据、物联网等多个领域。通过
                    我们的专业技术团队，我们能够为客户提供量身定制的解决方案，助力他们在各
                    自的行业中取得突破性的进展。
                  </p>
                </article>
                <picture className="flex justify-center p-4 pt-0">
                  <img
                    src="/img/CNC2.webp"
                    alt=""
                    className="object-cover h-60 w-full"
                  />
                </picture>
              </section>
            </section>
          </section>
          <section className=" bg-slate-100">
            <section className="w-full max-w-[1310px] m-auto py-10 px-10 ">
              <hr />
              <section className="grid sm:grid-flow-col  pt-2 gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-center sm:text-left gap-4">
                  <p>
                    川泰智能公司的优势在于我们的研发实力和创新精神。我们拥有一
                    支由业内顶尖专家组成的研发团队，他们凭借丰富的经验和深厚的
                    技术积累，不断推动公司在科技领域的突破。同时，我们注重创新，
                    勇于尝试新的技术和理念，为客户提供最具前瞻性的解决方案。
                  </p>
                  <p>
                    在企业文化方面，川泰智能公司秉持“客户至上、创新驱动、团队合作、诚信为本”的核心
                    价值观。我们坚持以客户为中心，不断提升服务质量和客户满意度；我们鼓励创新，为员工
                    提供广阔的发展空间和平台；我们注重团队合作，相信团队的力量能够战胜一切挑战；我们
                    坚守诚信，以诚信赢得客户的信任和市场的认可。
                  </p>
                  <p>
                    未来，川泰智能公司将继续深耕科技领域，以技术创新为动力，不断提升
                    企业核心竞争力。我们致力于成为国内外知名的科技企业，为全球客户提
                    供更优质、更智能、更高效的科技解决方案
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
              <hr />

              <section className="flex sm:flex-row gap-8     flex-col h-min p-2 rounded">
                <picture className="h-72 w-[70%] rounded overflow-hidden  pt-0">
                  <img
                    src="/img/CNC.webp"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </picture>
                <article className=" md:max-w-[60ch]">
                  <p>
                    将来，川泰智能公司将继续深入科技领域，以技术创新为驱动力，不断提升企业的核心竞争力。我们致力于成为国内外知名的科技企业，为全球客户提供更好、更智能、更高效的技术解决方案。
                  </p>
                </article>
              </section>
            </section>
          </section>
          <section className=" bg-slate-50">
            <section className="w-full max-w-[1310px] m-auto   p-6 pt-20 ">
              <h3 className=" font-semibold text-4xl mb-8 max-w-[50ch] text-start text-pretty ">
                {t("ABOUT.SECTION_4_TITLE_1")}
              </h3>
              <section className="grid sm:grid-flow-col gap-8 sm:gap-6 sm:auto-cols-fr">
                <article className="flex flex-col text-center sm:text-left gap-4">
                  <p>{t("ABOUT.SECTION_4_TITLE_1")}</p>

                  <p>{t("ABOUT.SECTION_4_DESCRIPTION_1")}</p>
                  <p>{t("ABOUT.SECTION_4_DESCRIPTION_2")}</p>
                  <p>{t("ABOUT.SECTION_4_DESCRIPTION_3")}</p>
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
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
}
