import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { DashboardContext } from "../../../utils/context/DashboardContext";
import { AuthContext } from "../../../utils/context/AuthContext";

import NavLink from "./NavLink";

function NavConnexion() {
  const { showNavConnexion, setTransitionNavConnexion } =
    useContext(AllNavContext);
  const { inDashboard } = useContext(DashboardContext);
  const { UserID } = useContext(AuthContext);

  return (
    <nav
      id="navConnexion"
      className={showNavConnexion ? "showNavConnexion" : "hideNavConnexion"}
      onTransitionEnd={(e) => {
        setTransitionNavConnexion(false);
      }}
    >
      <NavLink path="/inscription">Inscription</NavLink>
      <hr />
      {UserID ? (
        <NavLink path={process.env.CLIENT_URL + "api/user/logout"}>
          Déconnexion
        </NavLink>
      ) : (
        <NavLink path="/connexion">Connexion</NavLink>
      )}

      <hr />
      {inDashboard ? (
        <NavLink path="/accueil">Website</NavLink>
      ) : (
        <NavLink path="/dashboard">Dashboard</NavLink>
      )}
    </nav>
  );
}

export default NavConnexion;
