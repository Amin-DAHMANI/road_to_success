import React from "react";
import { useContext } from "react";
import { AllNavContext } from "../../../utils/context/AllNavContext";

function NavConnexionButton({ img }) {
  const {
    showNavConnexion,
    setShowNavConnexion,
    transitionNavConnexion,
    setTransitionNavConnexion,
  } = useContext(AllNavContext);

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
        }}
      />
    </div>
  );
}

export default NavConnexionButton;
