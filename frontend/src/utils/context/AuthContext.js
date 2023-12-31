import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [UserID, setUserID] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUserID(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchToken();
  }, [UserID]);

  return (
    <AuthContext.Provider value={{ UserID }}>{children}</AuthContext.Provider>
  );
};
