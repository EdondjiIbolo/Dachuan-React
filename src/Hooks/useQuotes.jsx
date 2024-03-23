import { useEffect, useState } from "react";
import FetchQuotations from "../Hooks/login";
export function useQuotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);
        const data = FetchQuotations.getAssistantQuotes();
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
