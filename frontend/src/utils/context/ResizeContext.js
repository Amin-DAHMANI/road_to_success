import { useState, useEffect, createContext } from "react";

export const ResizeContext = createContext();

export const ResizeProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [isTabletWidth, setIsTabletWidth] = useState(false);
  const [isDesktopWidth, setIsDesktopWidth] = useState(true);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth <= 500) {
        setIsMobileWidth(true);
        setIsTabletWidth(false);
        setIsDesktopWidth(false);
      } else if (window.innerWidth > 500 && window.innerWidth < 800) {
        setIsMobileWidth(false);
        setIsTabletWidth(true);
        setIsDesktopWidth(false);
      } else {
        setIsMobileWidth(false);
        setIsTabletWidth(false);
        setIsDesktopWidth(true);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <ResizeContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        isMobileWidth,
        setIsMobileWidth,
        isTabletWidth,
        setIsTabletWidth,
        isDesktopWidth,
        setIsDesktopWidth,
      }}
    >
      {children}
    </ResizeContext.Provider>
  );
};
