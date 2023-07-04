import { Link } from "react-router-dom";

function LogoHeader() {
  const imgLink = "./assets/images/logo_and_icon/logo_road_to_success.png";

  return (
    <Link to="/accueil" id="logoHeader">
      <img
        src={imgLink}
        alt="Logo du site web Road To Success"
        title="Logo du site web Road To Success"
      />
    </Link>
  );
}

export default LogoHeader;
