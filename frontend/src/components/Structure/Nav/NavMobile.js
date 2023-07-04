import { useContext } from "react";
import { NavMobileContext } from "../../../utils/context/NavMobileContext";

import NavLink from "./NavLink";

function NavMobile() {
  const { showNavMobile } = useContext(NavMobileContext);

  return (
    <nav
      id="navMobile"
      className={showNavMobile ? "showNavMobile" : "hideNavMobile"}
    >
      <NavLink path="/accueil">Accueil</NavLink>
      <hr />
      <NavLink path="/cours">Cours</NavLink>
      <hr />
      <NavLink path="/a-propos">À Propos</NavLink>
      <hr />
      <NavLink path="/contact">Contact</NavLink>
    </nav>
  );
}

export default NavMobile;
