import { useContext, useState, useEffect } from "react";

import axios from "axios";

import { AuthContext } from "./../../../utils/context/AuthContext";

function ConnectionIcon({ showNav }) {
  const { UserID } = useContext(AuthContext);
  const connectionIconLink = "/assets/images/icone_images/utilisateur.svg";
  const [userPicture, setUserPicture] = useState(null);

  const fetchUser = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/` + UserID,
      withCredentials: true,
      responseType: "json",
    })
      .then((res) => {
        setUserPicture(res.data.picture);
        console.log(userPicture);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (UserID !== null && userPicture !== null) {
      fetchUser();
    }
  }, [UserID, userPicture]);

  return (
    <>
      {UserID && userPicture !== null ? (
        <img
          src={"/assets/uploads/images/profile_images/" + userPicture}
          alt="Mon compte Road To Success"
          title="Mon compte Road To Success"
          id="connectionIcon"
        />
      ) : (
        <img
          src={connectionIconLink}
          alt="Menu d'inscription / de connexion à Road To Success"
          title="Menu d'inscription / de connexion  à Road To Success"
          id="connectionIcon"
        />
      )}
    </>
  );
}

export default ConnectionIcon;
