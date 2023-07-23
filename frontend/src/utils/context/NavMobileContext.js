import { useState, useEffect, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import { ResizeContext } from "./ResizeContext";

export const NavMobileContext = createContext();

export const NavMobileProvider = ({ children }) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [transitionNavMobile, setTransitionNavMobile] = useState(false);
  const { pathname } = useLocation();

  const { screenWidth } = useContext(ResizeContext);

  window.addEventListener("touchstart", () => {
    if (showNavMobile && !transitionNavMobile) {
      setShowNavMobile(false);
    }
  });

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    if (showNavMobile && !transitionNavMobile) {
      setShowNavMobile(false);
      setTransitionNavMobile(true);
    }
  });

  useEffect(() => {
    setShowNavMobile(false);
  }, [pathname, screenWidth]);

  return (
    <NavMobileContext.Provider
      value={{
        showNavMobile,
        setShowNavMobile,
        transitionNavMobile,
        setTransitionNavMobile,
      }}
    >
      {children}
    </NavMobileContext.Provider>
  );
};
