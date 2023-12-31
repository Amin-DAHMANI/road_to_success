import axios from "axios";
import cookie from "js-cookie";

function DisconnectButton() {
  const removeCookie = () => {
    if (window !== "undefined") {
      cookie.remove("roadtosuccess", { expires: 1 });
    }
  };
  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/deconnexion`,
      withCredentials: true,
    })
      .then((res) => {
        removeCookie("roadtosuccess");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location = "/";
  };
  return (
    <div id="disconnectButton" onClick={logout}>
      Déconnexion
    </div>
  );
}

export default DisconnectButton;
