import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "./useUser";

export function useUserQuote() {
  const { user } = useUser();
  const { email } = user;
  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/customer-quote?email=${email}`
        );
        const { quotes } = await data;
        console.log(quotes);
        setQuotesData(quotes);
      } catch (err) {
        return err;
      } finally {
        setLoading(false);
      }
    };
    getQuotes();
  }, [email]);

  return { quotesData, loading };
}
