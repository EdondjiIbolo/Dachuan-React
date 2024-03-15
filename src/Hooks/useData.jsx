import axios from "axios";
import { useEffect, useState } from "react";

export function useData() {
  //finishing and material end point
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:3000/data");
        const dataInfo = await data;
        console.log(dataInfo);
        setInfo(dataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, []);
  return { loading, info };
}
