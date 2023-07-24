const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const maxAge = 3 + 24 + 60 + 60 + 1000;
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
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
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
    res.status(400).send({ err });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
