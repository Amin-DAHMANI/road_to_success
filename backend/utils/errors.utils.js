module.exports.signUpErrors = (err) => {
  let errors = {
    pseudo: "",
    identifiant: "",
    password: "",
    email: "",
  };

  if (err.message.includes("identifiant"))
    errors.identifiant = "L'identifiant est incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe est incorrect";

  if (err.message.includes("pseudo")) errors.pseudo = "Le pseudo incorrect";

  if (err.message.includes("email")) errors.email = "L'email est incorrect";

  if (
    err.code === 11000 &&
    Object.keys(err.keyValue)[0].includes("identifiant")
  )
    errors.pseudo = "Cet identifiant est déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { identifiant: "", password: "" };

  if (err.message.includes("identifiant"))
    errors.identifiant = "Identifiant inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};
