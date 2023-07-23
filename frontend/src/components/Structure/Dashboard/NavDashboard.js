import { useContext } from "react";
import { NavDashboardContext } from "../../../utils/context/NavDashboardContext";

import NavLink from "../Nav/NavLink";

function NavDashboard() {
  const { showNavDashboard } = useContext(NavDashboardContext);

  return (
    <nav
      id="navDashboard"
      className={showNavDashboard ? "showNavDashboard" : "hideNavDashboard"}
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
