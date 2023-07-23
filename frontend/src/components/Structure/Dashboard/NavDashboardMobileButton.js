import { useContext } from "react";
import { NavDashboardMobileContext } from "../../../utils/context/NavDashboardMobileContext";
import { ResizeContext } from "../../../utils/context/ResizeContext";

function NavDashboardMobileButton() {
  const {
    showNavDashboardMobile,
    setShowNavDashboardMobile,
    setTransitionNavDashboardMobile,
  } = useContext(NavDashboardMobileContext);
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
          setTransitionNavDashboardMobile(true);
        }}
      >
        Dashboard Menu
      </button>
    );
  }
}

export default NavDashboardMobileButton;
