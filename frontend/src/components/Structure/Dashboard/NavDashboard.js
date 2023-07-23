import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { ResizeContext } from "../../../utils/context/ResizeContext";

import NavLink from "../Nav/NavLink";

function NavDashboard() {
  const {
    showNavDashboardMobile,
    transitionNavDashboardMobile,
    setTransitionNavDashboardMobile,
  } = useContext(AllNavContext);
  const { isDesktopWidth } = useContext(ResizeContext);

  return (
    <nav
      id="navDashboardMobile"
      className={
        showNavDashboardMobile
          ? "showNavDashboardMobile"
          : "hideNavDashboardMobile"
      }
      onTransitionEnd={(e) => {
        setTransitionNavDashboardMobile(false);
      }}
    >
      <NavLink path="/dashboard/cours">Cours</NavLink>
      <hr />
      <NavLink path="/dashboard/niveaux">Niveaux</NavLink>
      <hr />
      <NavLink path="/dashboard/chapitres">Chapitres</NavLink>
    </nav>
  );
}

export default NavDashboard;
