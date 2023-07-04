import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import "./css/index.sass";

/*useEffect(() => {
  const handleHideNavMobile = () => {
    setShowNavMobile(false);
  };

  window.addEventListener("onload", handleHideNavMobile);

  return () => {
    window.removeEventListener("onload", handleHideNavMobile);
  };
}, []);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
