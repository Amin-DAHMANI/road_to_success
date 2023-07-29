const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

const maxAge = 1000 * 60 * 60 * 24 * 3;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res, next) => {
  const { category, identifiant, password, pseudo, email } = req.body;
  try {
    const user = await UserModel.create({
      category,
      identifiant,
      password,
      pseudo,
      email,
    });
    res.status(201).json({ user: user._id });
    next();
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
    next();
  }
};

module.exports.signIn = async (req, res, next) => {
  const { identifiant, password } = req.body;
  try {
    const user = await UserModel.login(identifiant, password);
    const token = createToken(user._id);
    res.cookie("roadtosuccess", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
    next();
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
    next();
  }
};

module.exports.logout = (req, res, next) => {
  res.cookie("roadtosuccess", "", { maxAge: 1 });
  next();
};
