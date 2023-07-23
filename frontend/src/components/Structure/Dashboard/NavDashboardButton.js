import { useContext } from "react";
import { NavDashboardContext } from "../../../utils/context/NavDashboardContext";

function NavDashboardButton() {
  const { showNavDashboard, setShowNavDashboard } =
    useContext(NavDashboardContext);

  return (
    <button
      id="navDashboardButton"
      onClick={() => setShowNavDashboard(!showNavDashboard)}
    >
      Dashboard Menu
    </button>
  );
}

export default NavDashboardButton;
