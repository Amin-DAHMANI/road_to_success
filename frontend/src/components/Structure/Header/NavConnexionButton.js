import React from "react";
import { useContext } from "react";
import { NavConnexionContext } from "../../../utils/context/NavConnexionContext";

function NavConnexionButton({ img }) {
  const { showNavConnexion, setShowNavConnexion, setTransitionNavConnexion } =
    useContext(NavConnexionContext);

  return (
    <div id="navConnexionButton">
      <img
        id="navConnexionButtonImg"
        src={img}
        alt="Profil de votre compte Road To Success"
        title="Profil de votre compte Road To Success"
        onClick={(e) => {
          e.stopPropagation();
          setShowNavConnexion(!showNavConnexion);
          setTransitionNavConnexion(true);
        }}
      />
    </div>
  );
}

export default NavConnexionButton;
