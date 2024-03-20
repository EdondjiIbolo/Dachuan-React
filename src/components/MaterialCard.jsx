import { useTranslation } from "react-i18next";

export function MaterialCard({ feature, material, url }) {
  const { t, i18n } = useTranslation();
  return (
    <article className="flex flex-col pb-2 pt-3 gap-4 border-2 border-gray-300 h-[480px] shadow-md rounded bg-gradient-to-l  p-1  text-black to-slate-200 from-slate-300">
      <picture className="w-full flex justify-center overflow-hidden">
        <img
          src={`./images/${url}.png`}
          alt=""
          className="h-36 w-full object-contain"
        />
      </picture>

      <article className="p-3 pb-0 flex flex-col gap-3 h-min text-sm">
        <h3 className="font-bold text-md">{feature.featureName}</h3>
        <div className="flex justify-between items-center">
          <span className="p-1 px-4 text-center font-semibold text-sm text-blue-700 bg-blue-200 rounded-3xl uppercase">
            {t("CARD.PRICE_TEXT")}
          </span>
          <div className="text-blue-500 flex flex-nowrap">
            {" "}
            <p className="text-blue-700 font-bold">&#165;&#165;</p>
            &#165;&#165;&#165;
          </div>
        </div>

        <div className="text-pretty">
          <p>
            {" "}
            <b>{t("CARD.ALTERNATIVE_NAME")}:</b>{" "}
            {feature?.featureAlternativeName ?? "none"}
          </p>
        </div>

        <div>
          <p>
            <b>{t("CARD.DESCRIPTION")}: </b>
            {feature?.featureCharacter}
          </p>
        </div>
        <div>
          <p>
            <b>{t("CARD.UTILITY")}: </b>
            {feature?.featureUtility}
          </p>
        </div>
      </article>
    </article>
  );
}
