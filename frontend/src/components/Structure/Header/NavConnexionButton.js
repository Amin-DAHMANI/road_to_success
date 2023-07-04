import React from "react";
import { useContext } from "react";
import { NavConnexionContext } from "../../../utils/context/NavConnexionContext";

function NavConnexionButton({ img }) {
  const { showNavConnexion, setShowNavConnexion } =
    useContext(NavConnexionContext);

  return (
    <div id="navConnexionButton">
      <img
        id="navConnexionButtonImg"
        src={img}
        alt="Photo de profil de votre compte Road To Success"
        title="Photo de profil de votre compte Road To Success"
        onClick={() => setShowNavConnexion(!showNavConnexion)}
      />
    </div>
  );
}

export default NavConnexionButton;
