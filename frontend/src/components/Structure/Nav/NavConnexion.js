import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";
import { AuthContext } from "../../../utils/context/AuthContext";

import NavLink from "./NavLink";
import DisconnectButton from "./DisconnectButton";

function NavConnexion() {
  const { showNavConnexion, setTransitionNavConnexion } =
    useContext(AllNavContext);
  const { UserID } = useContext(AuthContext);

  return (
    <nav
      id="navConnexion"
      className={showNavConnexion ? "showNavConnexion" : "hideNavConnexion"}
      onTransitionEnd={(e) => {
        setTransitionNavConnexion(false);
      }}
    >
      {UserID ? (
        <DisconnectButton />
      ) : (
        <>
          <NavLink path="/inscription">Inscription</NavLink>
          <hr />
          <NavLink path="/connexion">Connexion</NavLink>
        </>
      )}
      <hr />
      {UserID ? <NavLink path="/dashboard">Dashboard</NavLink> : <></>}
    </nav>
  );
}

export default NavConnexion;
