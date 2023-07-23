import { useState, useEffect, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import { ResizeContext } from "./ResizeContext";

export const NavConnexionContext = createContext();

export const NavConnexionProvider = ({ children }) => {
  const [showNavConnexion, setShowNavConnexion] = useState(false);
  const [transitionNavConnexion, setTransitionNavConnexion] = useState(false);
  const { pathname } = useLocation();

  const { screenWidth } = useContext(ResizeContext);

  window.addEventListener("touchstart", () => {
    if (showNavConnexion && !transitionNavConnexion) {
      setShowNavConnexion(false);
    }
  });

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    if (showNavConnexion && !transitionNavConnexion) {
      setShowNavConnexion(false);
      setTransitionNavConnexion(true);
    }
  });

  useEffect(() => {
    setShowNavConnexion(false);
  }, [pathname, screenWidth]);

  return (
    <NavConnexionContext.Provider
      value={{
        showNavConnexion,
        setShowNavConnexion,
        transitionNavConnexion,
        setTransitionNavConnexion,
      }}
    >
      {children}
    </NavConnexionContext.Provider>
  );
};
