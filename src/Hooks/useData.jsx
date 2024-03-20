import axios from "axios";
import { useEffect, useState } from "react";
import { useLang } from "./useLang";

export function useData({ material, lang }) {
  //finishing and material end point

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/data?data=${material}&lang=${lang}`
        );
        const dataInfo = await data;
        setInfo(dataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, [lang, material]);
  return { loading, info };
}
