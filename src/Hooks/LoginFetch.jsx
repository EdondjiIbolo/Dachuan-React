import { useEffect, useState } from "react";

export function UserFetch(objeto) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer token",
        },
        body: JSON.stringify({ objeto }),
      };
      try {
        const response = await fetch(
          `Servidor escuchando en el puerto http://localhost:3000`,
          options
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error :", error);
      }
    };

    getUser();
  }, [userData, objeto]);
  return { userData };
}
