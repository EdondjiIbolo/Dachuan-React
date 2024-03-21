import axios from "axios";
import { useEffect, useState } from "react";

export function useOrders({ email }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api-chuantai-dev-dbab.4.us-1.fl0.io/my-orders?id=${email}`
        );
        const newOrders = await data;
        setOrders(newOrders);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getOrders();
    console.log(orders);
  }, [email]);

  return { orders, loading };
}
