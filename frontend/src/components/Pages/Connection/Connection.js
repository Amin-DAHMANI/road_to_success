import axios from "axios";

import { useState } from "react";

import Main from "../../Structure/Main/Main";
import InputText from "../../Reusable/InputText";
import InputPassword from "../../Reusable/InputPassword";
import ButtonForm from "../../Reusable/ButtonForm";

function Connection() {
  const [identifiantConnexion, setIdentifiantConnexion] = useState("");
  const [passwordConnexion, setPasswordConnexion] = useState("");

  const identifiantError = document.getElementById("errorIdentifiantConnexion");
  const passwordError = document.getElementById("errorPasswordConnexion");

  const handleConnexion = (e) => {
    e.preventDefault();
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
          identifiantError.innerHTML = res.data.errors.identifiant;
          passwordError.innerHTML = res.data.errors.password;
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
        <form className="form" onSubmit={handleConnexion} id="connexionForm">
          <InputText
            label={"Identifiant"}
            forid={"identifiantConnexion"}
            id={"identifiantConnexion"}
            name={"identifiantConnexion"}
            value={identifiantConnexion}
            setValue={handleIdentifiantConnexion}
          />
          <div id="errorIdentifiantConnexion"></div>
          <InputPassword
            label={"Mot de Passe"}
            forid={"passwordConnexion"}
            id={"passwordConnexion"}
            name={"passwordConnexion"}
            value={passwordConnexion}
            setValue={handlePasswordConnexion}
          />
          <div id="errorIdentifiantConnexion"></div>
          <ButtonForm id="buttonConnexion">Connexion</ButtonForm>
        </form>
      </section>
    </Main>
  );
}

export default Connection;
