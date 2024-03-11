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
          "http://localhost:3000/assistant-quote"
        );
        setQuotesData(data);
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
