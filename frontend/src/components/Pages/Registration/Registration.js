import axios from "axios";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Main from "../../Structure/Main/Main";
import InputText from "../../Reusable/InputText";
import InputPassword from "../../Reusable/InputPassword";
import InputOptionList from "../../Reusable/InputOptionList";
import InputEmail from "../../Reusable/InputEmail";
import ButtonForm from "../../Reusable/ButtonForm";

function Registration() {
  const test = useLocation();
  const [categoryRegistration, setCategoryRegistration] = useState("");
  const [identifiantRegistration, setIdentifiantRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [pseudoRegistration, setPseudoRegistration] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");

  useEffect(() => console.log(test), [test]);
  const identifiantError = document.getElementById(
    "errorIdentifiantRegistration"
  );
  const passwordError = document.getElementById("errorPasswordRegistration");
  const pseudoError = document.getElementById("errorPseudoRegistration");
  const emailError = document.getElementById("errorEmailRegistration");

  const handleRegistration = async (e) => {
    console.log(`${process.env.REACT_APP_API_URL}api/user/inscription`);
    e.preventDefault();
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
          identifiantError.innerHTML = res.data.errors.identifiant;
          passwordError.innerHTML = res.data.errors.password;
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
        } else {
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handlePseudoRegistration = (e) => {
    setPseudoRegistration(e.target.value);
  };

  const handleEmailRegistration = (e) => {
    setEmailRegistration(e.target.value);
  };

  return (
    <Main>
      <section className="page" id="registrationSection">
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
          <div id="errorIdentifiantRegistration"></div>
          <InputPassword
            label={"Mot de Passe"}
            forid={"passwordRegistration"}
            id={"passwordRegistration"}
            name={"passwordRegistration"}
            value={passwordRegistration}
            setValue={handlePasswordRegistration}
          />
          <div id="errorPasswordRegistration"></div>
          <InputText
            label={"Pseudo"}
            forid={"pseudoRegistration"}
            id={"pseudoRegistration"}
            name={"pseudoRegistration"}
            value={pseudoRegistration}
            setValue={handlePseudoRegistration}
          />
          <div id="errorPseudoRegistration"></div>
          <InputEmail
            label={"Email"}
            forid={"emailRegistration"}
            id={"emailRegistration"}
            name={"emailRegistration"}
            value={emailRegistration}
            setValue={handleEmailRegistration}
          />
          <div id="errorEmailRegistration"></div>
          <ButtonForm id="buttonRegistration">Inscription</ButtonForm>
        </form>
      </section>
    </Main>
  );
}

export default Registration;
