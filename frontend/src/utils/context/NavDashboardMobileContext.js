import { useState, useEffect, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import { ResizeContext } from "./ResizeContext";

export const NavDashboardMobileContext = createContext();

export const NavDashboardMobileProvider = ({ children }) => {
  const [showNavDashboardMobile, setShowNavDashboardMobile] = useState(false);
  const [transitionNavDashboardMobile, setTransitionNavDashboardMobile] =
    useState(false);
  const { pathname } = useLocation();

  const { screenWidth } = useContext(ResizeContext);

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    if (showNavDashboardMobile && !transitionNavDashboardMobile) {
      setShowNavDashboardMobile(false);
      setTransitionNavDashboardMobile(true);
    }
  });

  window.addEventListener("touchstart", (e) => {
    if (showNavDashboardMobile && !transitionNavDashboardMobile) {
      setShowNavDashboardMobile(false);
    }
  });

  useEffect(() => {
    setShowNavDashboardMobile(false);
  }, [pathname, screenWidth]);

  return (
    <NavDashboardMobileContext.Provider
      value={{
        showNavDashboardMobile,
        setShowNavDashboardMobile,
        transitionNavDashboardMobile,
        setTransitionNavDashboardMobile,
      }}
    >
      {children}
    </NavDashboardMobileContext.Provider>
  );
};
