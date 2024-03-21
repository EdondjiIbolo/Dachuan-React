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
          `https://api-chuantai-dev-dbab.4.us-1.fl0.io/customer-quote?status=${status}&email=${email}`
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
