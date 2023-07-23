import React from "react";
import { useContext } from "react";
import { NavMobileContext } from "../../../utils/context/NavMobileContext";

function NavMobileButton() {
  const { showNavMobile, setShowNavMobile, setTransitionNavMobile } =
    useContext(NavMobileContext);

  return (
    <div id="navMobileButtonBlock">
      <button
        id="navMobileButton"
        onClick={(e) => {
          e.stopPropagation();
          setShowNavMobile(!showNavMobile);
          setTransitionNavMobile(true);
        }}
      >
        <div className="burgerBarNavButton"></div>
      </button>
    </div>
  );
}

export default NavMobileButton;
