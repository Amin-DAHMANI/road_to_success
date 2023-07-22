const UserModel = require("../models/user.model");

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
