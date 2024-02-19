import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initialUserData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(initialUserData ? initialUserData : "");
  useEffect(() => {
    console.log(user);
    console.log(initialUserData);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
