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
      .then((res) => {
        removeCookie("jwt");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="disconnectButton" onClick={logout}>
      Déconnexion
    </div>
  );
}

export default DisconnectButton;
