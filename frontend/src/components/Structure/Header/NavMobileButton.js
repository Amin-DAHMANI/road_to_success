import React from "react";
import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";

function NavMobileButton() {
  const {
    showNavMobile,
    setShowNavMobile,
    transitionNavMobile,
    setTransitionNavMobile,
  } = useContext(AllNavContext);

  return (
    <div id="navMobileButtonBlock">
      <button
        id="navMobileButton"
        onClick={(e) => {
          e.stopPropagation();
          setShowNavMobile(!showNavMobile);
        }}
      >
        <div className="burgerBarNavButton"></div>
      </button>
    </div>
  );
}

export default NavMobileButton;
