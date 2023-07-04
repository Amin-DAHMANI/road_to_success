const UserModel = require("../models/user.model.js");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(201).json(users);
  } catch {
    res.status(400).json({ err });
  }
};

module.exports.getOneUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    const user = await UserModel.findById(req.params.id).select("-password");
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send({ err });
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
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
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
