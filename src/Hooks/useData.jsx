import axios from "axios";
import { useEffect, useState } from "react";

export function useData({ material, lang }) {
  //finishing and material end point

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    material !== undefined
      ? `http://localhost:3000/data?data=${material}&lang=${lang}`
      : `http://localhost:3000/data`;
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
