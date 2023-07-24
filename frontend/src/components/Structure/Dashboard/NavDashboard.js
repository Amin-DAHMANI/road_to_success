import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { ResizeContext } from "../../../utils/context/ResizeContext";

import NavLink from "../Nav/NavLink";

function NavDashboard() {
  const { showNavDashboardMobile, setTransitionNavDashboardMobile } =
    useContext(AllNavContext);
  const { isDesktopWidth } = useContext(ResizeContext);

  if (isDesktopWidth) {
    return (
      <nav id="navDashboard">
        <NavLink path="/dashboard/mon-profil">Mon profil</NavLink>
        <hr />
        <NavLink path="/dashboard/comptes">Comptes</NavLink>
        <hr />
        <NavLink path="/dashboard/cours">Cours</NavLink>
        <hr />
        <NavLink path="/dashboard/niveaux">Niveaux</NavLink>
        <hr />
        <NavLink path="/dashboard/chapitres">Chapitres</NavLink>
      </nav>
    );
  } else {
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
}

export default NavDashboard;
