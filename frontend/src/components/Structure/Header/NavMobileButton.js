import React from "react";
import { useContext } from "react";
import { NavMobileContext } from "../../../utils/context/NavMobileContext";

function NavMobileButton() {
  const { showNavMobile, setShowNavMobile } = useContext(NavMobileContext);
  return (
    <div id="navMobileButtonBlock">
      <button
        id="navMobileButton"
        onClick={() => setShowNavMobile(!showNavMobile)}
      >
        <div className="burgerBarNavButton"></div>
      </button>
    </div>
  );
}

export default NavMobileButton;
