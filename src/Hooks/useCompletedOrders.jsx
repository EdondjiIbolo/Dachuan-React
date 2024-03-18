import axios from "axios";
import { useEffect, useState } from "react";

export function useCompletedOrders({ email }) {
  const [quotes, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const status = "ordered";
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
