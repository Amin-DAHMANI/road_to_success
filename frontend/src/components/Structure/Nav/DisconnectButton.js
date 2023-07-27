import axios from "axios";
import cookie from "js-cookie";

function DisconnectButton() {
  const removeCookie = () => {
    if (window !== "undefined") {
      cookie.remove("jwt", { expires: 1 });
    }
  };
  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/deconnexion`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
  };
  return (
    <button type="button" id="disconnectButton" onClick={logout}>
      Déconnexion
    </button>
  );
}

export default DisconnectButton;
