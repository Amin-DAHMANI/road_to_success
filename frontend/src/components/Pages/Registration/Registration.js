import axios from "axios";

import { useState, useEffect } from "react";

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
  const [passwordControlRegistration, setPasswordControlRegistration] =
    useState("");
  const [pseudoRegistration, setPseudoRegistration] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");

  const [identifiantRegistrationError, setIdentifiantRegistrationError] =
    useState("");
  const [passwordRegistrationError, setPasswordRegistrationError] =
    useState("");
  const [
    passwordControlRegistrationError,
    setPasswordControlRegistrationError,
  ] = useState("");
  const [pseudoRegistrationError, setPseudoRegistrationError] = useState("");
  const [emailRegistrationError, setEmailRegistrationError] = useState("");

  const [succededRegistration, setSuccededRegistration] = useState(false);

  const handleRegistration = (e) => {
    console.log(`${process.env.REACT_APP_API_URL}api/user/inscription`);
    e.preventDefault();
    setIdentifiantRegistrationError(false);
    setPasswordRegistrationError(false);
    setPasswordControlRegistrationError(false);
    setPseudoRegistrationError(false);
    setEmailRegistrationError(false);
    if (passwordRegistration === passwordControlRegistration) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/inscription`,
        withCredentials: true,
        data: {
          category: categoryRegistration,
          identifiant: identifiantRegistration,
          password: passwordRegistration,
          pseudo: pseudoRegistration,
          email: emailRegistration,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            if (
              res.data.errors.identifiant !== "" &&
              res.data.errors.identifiant
            ) {
              setIdentifiantRegistrationError(res.data.errors.identifiant);
              console.log(identifiantRegistrationError);
            }
            if (res.data.errors.password !== "" && res.data.errors.password) {
              setPasswordRegistrationError(res.data.errors.password);
            }
            if (res.data.errors.pseudo !== "" && res.data.errors.pseudo) {
              setPseudoRegistrationError(res.data.errors.pseudo);
            }
            if (res.data.errors.email !== "" && res.data.errors.email) {
              setEmailRegistrationError(res.data.errors.email);
            }
          } else {
            setSuccededRegistration(
              "Inscription réussie, vous pouvez vous connecter."
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPasswordControlRegistrationError(
        "Les mots de passe doivent être identiques"
      );
    }
  };

  const handleCategoryRegistration = (e) => {
    setCategoryRegistration(e.target.value);
  };
  const handleIdentifiantRegistration = (e) => {
    setIdentifiantRegistration(e.target.value);
  };

  const handlePasswordRegistration = (e) => {
    setPasswordRegistration(e.target.value);
  };

  const handlePasswordControlRegistration = (e) => {
    setPasswordControlRegistration(e.target.value);
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
        {succededRegistration && (
          <div id="succededRegistration">{succededRegistration}</div>
        )}
        <form
          className="form"
          onSubmit={handleRegistration}
          id="formRegistration"
        >
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
          {identifiantRegistrationError && (
            <div id="errorIdentifiantRegistration">
              {identifiantRegistrationError}
            </div>
          )}
          <InputPassword
            label={"Mot de passe"}
            forid={"passwordRegistration"}
            id={"passwordRegistration"}
            name={"passwordRegistration"}
            value={passwordRegistration}
            setValue={handlePasswordRegistration}
          />
          {passwordRegistrationError && (
            <div id="errorPasswordRegistration">
              {passwordRegistrationError}
            </div>
          )}
          <InputPassword
            label={"Confirmation du mot de passe"}
            forid={"passwordControlRegistration"}
            id={"passwordControlRegistration"}
            name={"passwordControlRegistration"}
            value={passwordControlRegistration}
            setValue={handlePasswordControlRegistration}
          />
          {passwordControlRegistrationError && (
            <div id="errorPasswordControlRegistration">
              {passwordControlRegistrationError}
            </div>
          )}
          <InputText
            label={"Pseudo"}
            forid={"pseudoRegistration"}
            id={"pseudoRegistration"}
            name={"pseudoRegistration"}
            value={pseudoRegistration}
            setValue={handlePseudoRegistration}
          />
          {pseudoRegistrationError && (
            <div id="errorPseudoRegistration">{pseudoRegistrationError}</div>
          )}
          <InputEmail
            label={"Email"}
            forid={"emailRegistration"}
            id={"emailRegistration"}
            name={"emailRegistration"}
            value={emailRegistration}
            setValue={handleEmailRegistration}
          />
          {emailRegistrationError && (
            <div id="errorEmailRegistration">{emailRegistrationError}</div>
          )}
          <ButtonForm id="buttonRegistration">Inscription</ButtonForm>
        </form>
      </section>
    </Main>
  );
}

export default Registration;
