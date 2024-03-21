import axios from "axios";
import { useEffect, useState } from "react";

export function useData({ material, lang }) {
  //finishing and material end point

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    material !== undefined
      ? `https://api-chuantai-dev-dbab.4.us-1.fl0.io/data?data=${material}&lang=${lang}`
      : `https://api-chuantai-dev-dbab.4.us-1.fl0.io/data`;
  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        const dataInfo = await data;
        console.log(data);

        setInfo(dataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, [lang, material, url]);
  return { loading, info };
}
