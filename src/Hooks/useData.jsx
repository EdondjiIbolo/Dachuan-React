import axios from "axios";
import { useEffect, useState } from "react";

export function useData() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  console.log("aaquiiii");
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
