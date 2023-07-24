import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { ResizeContext } from "../../../utils/context/ResizeContext";

function NavDashboardMobileButton() {
  const { showNavDashboardMobile, setShowNavDashboardMobile } =
    useContext(AllNavContext);
  const { isDesktopWidth } = useContext(ResizeContext);

  if (isDesktopWidth) {
    return <div style={{ display: "none" }}></div>;
  } else {
    return (
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
