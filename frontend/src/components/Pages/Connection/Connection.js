import axios from "axios";

import { useState, useEffect } from "react";

import Main from "../../Structure/Main/Main";
import InputText from "../../Reusable/InputText";
import InputPassword from "../../Reusable/InputPassword";
import ButtonForm from "../../Reusable/ButtonForm";

function Connection() {
  const [identifiantConnexion, setIdentifiantConnexion] = useState("");
  const [passwordConnexion, setPasswordConnexion] = useState("");

  const [identifiantConnexionError, setIdentifiantConnexionError] =
    useState(false);
  const [passwordConnexionError, setPasswordConnexionError] = useState(false);

  useEffect(() => {
    console.log("Component did mount / did update");
  }, []);

  const handleConnexion = (e) => {
    console.log("On Submit");
    e.preventDefault();
    setIdentifiantConnexionError(false);
    setPasswordConnexionError(false);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/connexion`,
      withCredentials: true,
      data: {
        identifiant: identifiantConnexion,
        password: passwordConnexion,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          if (
            res.data.errors.identifiant &&
            res.data.errors.identifiant !== ""
          ) {
            setIdentifiantConnexionError(true);
          }
          if (res.data.errors.password && res.data.errors.password !== "") {
            setPasswordConnexionError(true);
          }
        } else {
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleIdentifiantConnexion = (e) => {
    setIdentifiantConnexion(e.target.value);
  };

  const handlePasswordConnexion = (e) => {
    setPasswordConnexion(e.target.value);
  };

  return (
    <Main>
      <section className="page" id="connexionSection">
        <form
          action="POST"
          method="#"
          className="form"
          onSubmit={handleConnexion}
          id="connexionForm"
        >
          <InputText
            label={"Identifiant"}
            forid={"identifiantConnexion"}
            id={"identifiantConnexion"}
            name={"identifiantConnexion"}
            value={identifiantConnexion}
            setValue={handleIdentifiantConnexion}
          />
          {identifiantConnexionError && (
            <div id="errorIdentifiantConnexion">
              L'identifiant est incorrect ou n'existe pas.
            </div>
          )}
          <InputPassword
            label={"Mot de Passe"}
            forid={"passwordConnexion"}
            id={"passwordConnexion"}
            name={"passwordConnexion"}
            value={passwordConnexion}
            setValue={handlePasswordConnexion}
          />
          {passwordConnexionError && (
            <div id="errorPasswordConnexion">
              Le mot de passe est incorrect.
            </div>
          )}
          <ButtonForm id="buttonConnexion" formid="connexionForm">
            Connexion
          </ButtonForm>
        </form>
      </section>
    </Main>
  );
}

export default Connection;
