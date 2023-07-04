import { useState } from "react";

import Main from "../../Structure/Main/Main";
import InputText from "../../Reusable/InputText";
import InputPassword from "../../Reusable/InputPassword";
import ButtonForm from "../../Reusable/ButtonForm";

function Connection() {
  const [identifiantConnexion, setIdentifiantConnexion] = useState("");
  const [passwordConnexion, setPasswordConnexion] = useState("");

  const handleIdentifiantConnexion = (e) => {
    setIdentifiantConnexion(e.target.value);
  };

  const handlePasswordConnexion = (e) => {
    setPasswordConnexion(e.target.value);
  };

  return (
    <Main>
      <div className="page" id="connexion">
        <form className="form">
          <InputText
            label={"Identifiant"}
            forid={"identifiantConnexion"}
            id={"identifiantConnexion"}
            name={"identifiantConnexion"}
            value={identifiantConnexion}
            setValue={handleIdentifiantConnexion}
          />
          <InputPassword
            label={"Mot de Passe"}
            forid={"passwordConnexion"}
            id={"passwordConnexion"}
            name={"passwordConnexion"}
            value={passwordConnexion}
            setValue={handlePasswordConnexion}
          />
          <ButtonForm id="buttonConnexion">Connexion</ButtonForm>
        </form>
      </div>
    </Main>
  );
}

export default Connection;
