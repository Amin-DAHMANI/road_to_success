const UserModel = require("../models/user.model.js");

const ID_Validated = require("../utils/MongoDB_ID_Validator");

const fs = require("fs");
const path = require("path");

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports.getOneUser = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    const user = await UserModel.findById(req.params.id).select("-password");
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send({ err });
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    const filters = { _id: req.params.id };
    const update = { $set: { bio: req.body.bio } };
    const options = {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    };
    const updatedUser = await UserModel.findOneAndUpdate(
      filters,
      update,
      options
    );
    return res.send(updatedUser);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.updateProfilePictureUser = async (req, res) => {
  try {
    if (!ID_Validated(req.params.id))
      return res.status(400).send("ID unknown " + req.params.id);
    const user = await UserModel.findById(req.params.id);
    const precPicture = path.join(
      __dirname,
      "../../frontend/public/assets/uploads/images/profile_images/" +
        user.picture
    );
    if (fs.existsSync(precPicture) && precPicture != null) {
      fs.unlinkSync(precPicture);
    }
    const filters = { _id: req.params.id };
    const update = { $set: { picture: req.file.filename } };
    const options = {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    };
    await UserModel.findByIdAndUpdate(filters, update, options);
    res.status(200).send("Mise à jour photo de profil réussie.");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
