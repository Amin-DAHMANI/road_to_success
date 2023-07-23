import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { ResizeContext } from "../../../utils/context/ResizeContext";

function NavDashboardMobileButton() {
  const {
    showNavDashboardMobile,
    setShowNavDashboardMobile,
    transitionNavDashboardMobile,
    setTransitionNavDashboardMobile,
  } = useContext(AllNavContext);
  const { isDesktopWidth } = useContext(ResizeContext);

  {
    return isDesktopWidth ? (
      <div style={{ display: "none" }}></div>
    ) : (
      <button
        id="navDashboardMobileButton"
        onClick={(e) => {
          e.stopPropagation();
          setShowNavDashboardMobile(!showNavDashboardMobile);
        }}
      >
        Dashboard Menu
      </button>
    );
  }
}

export default NavDashboardMobileButton;
