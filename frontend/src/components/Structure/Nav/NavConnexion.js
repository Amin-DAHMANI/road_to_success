import { useContext } from "react";
import { NavConnexionContext } from "../../../utils/context/NavConnexionContext";

import NavLink from "./NavLink";

function NavConnexion() {
  const { showNavConnexion } = useContext(NavConnexionContext);

  return (
    <nav
      id="navConnexion"
      className={showNavConnexion ? "showNavConnexion" : "hideNavConnexion"}
    >
      <NavLink path="/connexion">Connexion</NavLink>
      <hr />
      <NavLink path="/inscription">Inscription</NavLink>
    </nav>
  );
}

export default NavConnexion;
