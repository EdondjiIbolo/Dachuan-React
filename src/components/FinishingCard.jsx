import { Link } from "react-router-dom";

export function FinishingCard({ feature, finishing }) {
  return (
    <article className="flex flex-col pb-2 pt-2 gap-4 border-2 border-gray-300 h-[500px] shadow-md rounded bg-gradient-to-l  p-1  text-black to-slate-200 from-slate-300">
      <picture className="w-full rounded max-h-36 flex justify-center overflow-hidden">
        <img
          src={`./images/${feature.name}.png`}
          alt={`${feature.name}`}
          className="h-36 w-full object-cover"
        />
      </picture>

      <article className="p-3 pb-0 flex flex-col gap-3 h-min text-sm">
        <h3 className="font-bold text-md">{feature.featureName}</h3>
        <div className="flex justify-between items-center">
          <span className="p-1 px-4 text-center font-semibold text-sm text-blue-700 bg-blue-200 rounded-3xl uppercase">
            材料成本
          </span>
          <div className="text-blue-500 flex flex-nowrap">
            {" "}
            <p className="text-blue-700 font-bold">&#165;&#165;</p>
            &#165;&#165;&#165;
          </div>
        </div>

        <div>
          <p className="text-[.8rem]">
            <b>特性: </b>
            {feature?.featureCharacter}
          </p>
        </div>
        <div>
          <p className="text-[.8rem]">
            <b>用途: </b>
            {feature?.featureUtility}
          </p>
        </div>
      </article>
    </article>
  );
}
