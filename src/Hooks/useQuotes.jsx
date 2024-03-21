import axios from "axios";
import { useEffect, useState } from "react";

export function useQuotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api-chuantai-dev-dbab.4.us-1.fl0.io/assistant-quote"
        );
        const { quotes } = await data;
        setQuotesData(quotes);
      } catch (err) {
        return err;
      } finally {
        setLoading(false);
      }
    };
    getQuotes();
  }, []);

  return { quotesData, loading };
}
