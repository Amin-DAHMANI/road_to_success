import { useState } from "react";

import Main from "../../Structure/Main/Main";
import InputText from "../../Reusable/InputText";
import InputPassword from "../../Reusable/InputPassword";
import InputOptionList from "../../Reusable/InputOptionList";
import InputEmail from "../../Reusable/InputEmail";
import ButtonForm from "../../Reusable/ButtonForm";

function Registration() {
  const [categoryRegistration, setCategoryRegistration] = useState("");
  const [identifiantRegistration, setIdentifiantRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [pseudoRegistration, setPseudoRegistration] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");

  const handleCategoryRegistration = (e) => {
    setCategoryRegistration(e.target.value);
  };
  const handleIdentifiantRegistration = (e) => {
    setIdentifiantRegistration(e.target.value);
  };

  const handlePasswordRegistration = (e) => {
    setPasswordRegistration(e.target.value);
  };

  const handlePseudoRegistration = (e) => {
    setPseudoRegistration(e.target.value);
  };

  const handleEmailRegistration = (e) => {
    setEmailRegistration(e.target.value);
  };

  return (
    <Main>
      <section className="page" id="registrationSection">
        <form className="form">
          <InputOptionList
            label={"Type de compte"}
            textSelect={"Choisir un type de compte"}
            forId={"categoryRegistration"}
            id={"categoryRegistration"}
            name={"categoryRegistration"}
            setValue={handleCategoryRegistration}
            value={categoryRegistration}
            options={[
              {
                value: "STUDENT",
                name: "Etudiant",
              },
              {
                value: "TUTOR",
                name: "Tuteur",
              },
              {
                value: "TEACHER",
                name: "Enseignant",
              },
            ]}
          />
          <InputText
            label={"Identifiant"}
            forid={"identifiantRegistration"}
            id={"identifiantRegistration"}
            name={"identifiantRegistration"}
            value={identifiantRegistration}
            setValue={handleIdentifiantRegistration}
          />
          <InputPassword
            label={"Mot de Passe"}
            forid={"passwordRegistration"}
            id={"passwordRegistration"}
            name={"passwordRegistration"}
            value={passwordRegistration}
            setValue={handlePasswordRegistration}
          />
          <InputText
            label={"Pseudo"}
            forid={"pseudoRegistration"}
            id={"pseudoRegistration"}
            name={"pseudoRegistration"}
            value={pseudoRegistration}
            setValue={handlePseudoRegistration}
          />
          <InputEmail
            label={"Email"}
            forid={"emailRegistration"}
            id={"emailRegistration"}
            name={"emailRegistration"}
            value={emailRegistration}
            setValue={handleEmailRegistration}
          />
          <ButtonForm id="buttonRegistration">Inscription</ButtonForm>
        </form>
      </section>
    </Main>
  );
}

export default Registration;
