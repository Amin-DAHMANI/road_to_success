import { useContext } from "react";

import { AllNavContext } from "../../../utils/context/AllNavContext";

import ConnectionIcon from "./../Header/ConnectionIcon";

function NavConnexionButton({ img }) {
  const { showNavConnexion, setShowNavConnexion } = useContext(AllNavContext);

  return (
    <div
      id="navConnexionButton"
      onClick={(e) => {
        e.stopPropagation();
        setShowNavConnexion(!showNavConnexion);
      }}
    >
      <ConnectionIcon />
    </div>
  );
}

export default NavConnexionButton;
