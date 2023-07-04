import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavConnexionContext = createContext();

export const NavConnexionProvider = ({ children }) => {
  const [showNavConnexion, setShowNavConnexion] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavConnexion(false);
  }, [pathname]);

  return (
    <NavConnexionContext.Provider
      value={{ showNavConnexion, setShowNavConnexion }}
    >
      {children}
    </NavConnexionContext.Provider>
  );
};
