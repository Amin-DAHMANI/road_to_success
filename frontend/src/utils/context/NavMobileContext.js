import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavMobileContext = createContext();

export const NavMobileProvider = ({ children }) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavMobile(false);
  }, [pathname]);

  return (
    <NavMobileContext.Provider value={{ showNavMobile, setShowNavMobile }}>
      {children}
    </NavMobileContext.Provider>
  );
};
