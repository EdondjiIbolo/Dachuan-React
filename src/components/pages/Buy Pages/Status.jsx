import { useState } from "react";

export function Status({ showStatus, setShowStatus }) {
  const className = showStatus
    ? " w-full h-screen flex justify-center items-center z-50 absolute inset-0 px-44"
    : "hidden";
  const handleClick = () => {
    setShowStatus(false);
  };
  return (
    <article className={className}>
      <section className=" w-full h-full absolute  inset-0 bg-gray-900 opacity-70"></section>
      <section className="flex flex-col w-full h-52 rounded relative bg-slate-50 p-3 px-5">
        <div
          className="absolute cursor-pointer hover:scale-110 transition-all duration-150 ease-linear z-90  h-8 w-8 flex justify-center items-center -top-10 text-red-600 hover:text-orange-400 right-0"
          onClick={handleClick}
        >
          <span className="w-7 pointer-events-none rounded absolute rotate-45 bg-current shadow-md h-1 block"></span>
          <span className="w-7 pointer-events-none rounded absolute -rotate-45 bg-current shadow-md h-1 block"></span>
        </div>
        <h2 className="text-xl font-bold">Order Status</h2>
        <article className="flex flex-grow items-center ">
          <article className="flex items-center  flex-col gap-1">
            <h3>text</h3>
            <div className=" h-24 w-24 rounded-full  bg-blue-300"></div>
            <p>description</p>
          </article>
          <hr className=" flex-grow border-2 border-blue-600" />
          <article className="flex items-center  flex-col gap-1">
            <h3>text</h3>
            <div className=" h-24 w-24 rounded-full  bg-blue-300"></div>
            <p>description</p>
          </article>

          <hr className=" flex-grow border-2 border-slate-300" />
          <article className="flex items-center  flex-col gap-1">
            <h3>text</h3>
            <div className=" h-24 w-24 rounded-full  bg-blue-300"></div>
            <p>description</p>
          </article>

          <hr className=" flex-grow border-2 border-slate-300" />
          <article className="flex items-center  flex-col gap-1">
            <h3>text</h3>
            <div className=" h-24 w-24 rounded-full  bg-blue-300"></div>
            <p>description</p>
          </article>
        </article>
      </section>
    </article>
  );
}
