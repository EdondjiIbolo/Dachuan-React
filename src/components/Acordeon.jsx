import { useState } from "react";
import { ArrowIcon } from "./Icons";
import "./sections/acordeon.css";
export function AcordeonItem({ question }) {
  const [show, setShow] = useState(false);
  const { question: qs, ans } = question;
  const className = show ? "qs-ans ans-show" : "qs-ans";
  return (
    <>
      <header
        className="cursor-pointer list__header flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <p className="item__title">{qs}</p>
        <div className="icono flecha rotate-180 transition-all duration-150 ease-in">
          <ArrowIcon />
        </div>
      </header>

      <p className={className}>{ans}</p>
    </>
  );
}
export function AcordeonMaterial({ item }) {
  const [show, setShow] = useState(false);
  const className = show
    ? "qs-ans   flex flex-col  gap-2 ans-show"
    : "qs-ans   flex flex-col  gap-2";
  return (
    <>
      <header
        className=" list__header flex border-b-[1px]  border-gray-300 items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <p className="font-bold text-lg p-2">{item.name}</p>
        <div className="icono flecha rotate-180 transition-all duration-150 ease-in">
          <ArrowIcon />
        </div>
      </header>
      <ul className={className}>
        {item.Features.map((feature, index) => {
          return (
            <li key={index} className="font-semibold ml-3 text-base">
              {feature}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export function Acordeon() {
  const questions = [
    {
      question: "What is Bookmark",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "What is Bookmark",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "What is Bookmark",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
  ];

  return (
    <section className="  sm:p-6 p-2">
      <article className="section-art text-center flex flex-col gap-3">
        <p className="text__title font-semibold text-xl">
          Frequently Asked Questions
        </p>
        <p className="text__description">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <article className="section-qs">
        <ul className="qs-list">
          {questions.map((question, index) => {
            return (
              <li className="list__item border-b border-gray-300" key={index}>
                <AcordeonItem question={question} />
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
