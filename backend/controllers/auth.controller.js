const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { identifiant, password, pseudo, email, bio } = req.body;

  try {
    const user = await UserModel.create({
      identifiant,
      password,
      pseudo,
      email,
      bio,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};
