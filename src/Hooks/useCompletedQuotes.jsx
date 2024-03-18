import axios from "axios";
import { useEffect, useState } from "react";

export function useCompletedQuotes({ email }) {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const status = "quoted";
  useEffect(() => {
    const getQuote = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/customer-quote?status=${status}&email=${email}`
        );
        const { quotes: newQuotes } = await data;
        setQuote(newQuotes);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getQuote();
  }, [email]);

  return { quotes, loading };
}
