const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

const maxAge = 1000 * 60 * 60 * 24 * 3;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { category, identifiant, password, pseudo, email, picture, bio } =
    req.body;

  try {
    const user = await UserModel.create({
      category,
      identifiant,
      password,
      pseudo,
      email,
      picture,
      bio,
    });
    res.redirect("/dashboard");
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { identifiant, password } = req.body;

  try {
    const user = await UserModel.login(identifiant, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  console.log(req.cookie);
  res.redirect("/");
};
