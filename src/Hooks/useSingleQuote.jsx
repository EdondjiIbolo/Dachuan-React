import axios from "axios";
import { useEffect, useState } from "react";

export function useSingleQuote({ id }) {
  const [quote, setQuotesData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api-chuantai-dev-dbab.4.us-1.fl0.io/quote/${id}`
        );
        const result = await data;
        console.log(result.quantity);
        setQuotesData(result);
      } catch (err) {
        return err;
      } finally {
        setLoading(false);
      }
    };
    getQuotes();
  }, [id]);

  return { quote, loading };
}
