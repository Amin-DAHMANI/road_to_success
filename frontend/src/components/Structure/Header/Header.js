import LogoHeader from "./LogoHeader";
import NavMobileButton from "./NavMobileButton";
import NavConnexionButton from "./NavConnexionButton";

function Header() {
  return (
    <div id="header">
      <NavMobileButton />
      <LogoHeader />
      <NavConnexionButton img="/assets/images/profile_images/photo_profil_amin.jpg" />
    </div>
  );
}

export default Header;
