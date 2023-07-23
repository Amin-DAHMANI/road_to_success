import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";

import NavLink from "./NavLink";

function NavConnexion() {
  const { showNavConnexion, setTransitionNavConnexion } =
    useContext(AllNavContext);

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
      <NavLink path="/dashboard/accueil">Dashboard</NavLink>
    </nav>
  );
}

export default NavConnexion;
