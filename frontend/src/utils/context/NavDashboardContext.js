import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavDashboardContext = createContext();

export const NavDashboardProvider = ({ children }) => {
  const [showNavDashboard, setShowNavDashboard] = useState(false);
  const { pathname } = useLocation();

  window.addEventListener("touchstart", () => {
    console.log("test");
    setShowNavDashboard(false);
  });

  useEffect(() => {
    setShowNavDashboard(false);
  }, [pathname]);

  return (
    <NavDashboardContext.Provider
      value={{ showNavDashboard, setShowNavDashboard }}
    >
      {children}
    </NavDashboardContext.Provider>
  );
};
