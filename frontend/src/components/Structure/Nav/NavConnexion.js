import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { DashboardContext } from "../../../utils/context/DashboardContext";

import NavLink from "./NavLink";

function NavConnexion() {
  const { showNavConnexion, setTransitionNavConnexion } =
    useContext(AllNavContext);
  const { inDashboard } = useContext(DashboardContext);

  return (
    <nav
      id="navConnexion"
      className={showNavConnexion ? "showNavConnexion" : "hideNavConnexion"}
      onTransitionEnd={(e) => {
        setTransitionNavConnexion(false);
      }}
    >
      <NavLink path="/connexion">Connexion</NavLink>
      <hr />
      <NavLink path="/inscription">Inscription</NavLink>
      <hr />
      {inDashboard ? (
        <NavLink path="/accueil">Website</NavLink>
      ) : (
        <NavLink path="/dashboard/accueil">Dashboard</NavLink>
      )}
    </nav>
  );
}

export default NavConnexion;
