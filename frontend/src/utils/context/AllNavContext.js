import { useContext, useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import { ResizeContext } from "./ResizeContext";

export const AllNavContext = createContext();

export const AllNavProvider = ({ children }) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [transitionNavMobile, setTransitionNavMobile] = useState(false);
  const [showNavConnexion, setShowNavConnexion] = useState(false);
  const [transitionNavConnexion, setTransitionNavConnexion] = useState(false);
  const [showNavDashboardMobile, setShowNavDashboardMobile] = useState(false);
  const [transitionNavDashboardMobile, setTransitionNavDashboardMobile] =
    useState(false);
  const pathname = useLocation();
  const { screenWidth } = useContext(ResizeContext);

  useEffect(() => {
    if (showNavMobile) {
      setShowNavConnexion(false);
      setShowNavDashboardMobile(false);
    }
    if (showNavConnexion) {
      setShowNavMobile(false);
      setShowNavDashboardMobile(false);
    }
    if (showNavDashboardMobile) {
      setShowNavMobile(false);
      setShowNavConnexion(false);
    }
  }, [showNavMobile, showNavConnexion, showNavDashboardMobile]);

  useEffect(() => {
    setShowNavMobile(false);
    setShowNavConnexion(false);
    setShowNavDashboardMobile(false);
  }, [pathname, screenWidth]);

  window.addEventListener("click", (e) => {
    if (showNavMobile || showNavConnexion || showNavDashboardMobile) {
      e.preventDefault();
      setShowNavMobile(false);
      setShowNavConnexion(false);
      setShowNavDashboardMobile(false);
    }
  });

  return (
    <AllNavContext.Provider
      value={{
        showNavMobile,
        setShowNavMobile,
        transitionNavMobile,
        setTransitionNavMobile,
        showNavConnexion,
        setShowNavConnexion,
        transitionNavConnexion,
        setTransitionNavConnexion,
        showNavDashboardMobile,
        setShowNavDashboardMobile,
        transitionNavDashboardMobile,
        setTransitionNavDashboardMobile,
      }}
    >
      {children}
    </AllNavContext.Provider>
  );
};
