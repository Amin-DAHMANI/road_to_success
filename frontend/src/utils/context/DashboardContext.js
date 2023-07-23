import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [inDashboard, setInDashboard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const regexPathname = new RegExp("/dashboard.*");
    if (regexPathname.test(location.pathname)) {
      setInDashboard(true);
    } else {
      setInDashboard(false);
    }
  }, [location, inDashboard]);

  return (
    <DashboardContext.Provider
      value={{
        inDashboard,
        setInDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
