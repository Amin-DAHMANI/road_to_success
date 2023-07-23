import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";

import NavLink from "./NavLink";

function NavMobile() {
  const { showNavMobile, setTransitionNavMobile } = useContext(AllNavContext);

  return (
    <nav
      id="navMobile"
      className={showNavMobile ? "showNavMobile" : "hideNavMobile"}
      onTransitionEnd={(e) => {
        setTransitionNavMobile(false);
      }}
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
