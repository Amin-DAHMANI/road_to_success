import { useContext } from "react";
import { DashboardContext } from "../../../utils/context/DashboardContext";

function Footer() {
  const { inDashboard } = useContext(DashboardContext);
  return (
    <div id="footer" className={inDashboard ? "hideFooter" : "showFooter"}>
      <p>
        La plateforme Road To Success est en construction.
        <br />
        Webmaster contact : amin.dhm.otm@gmail.com
      </p>
    </div>
  );
}

export default Footer;
