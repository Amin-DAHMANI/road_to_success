const FieldModel = require("../models/field.model");

const ID_Validated = require("../utils/MongoDB_ID_Validator");

module.exports.getAllFields = async (req, res) => {
  try {
    const fields = await FieldModel.find().exec();
    res.status(201).json(fields);
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports.getOneField = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    const field = await FieldModel.findById(req.params.id).exec();
    res.status(201).json(field);
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports.createOneField = async (req, res) => {
  const { field, picture } = req.body;
  try {
    const oneField = await FieldModel.create({
      field,
      picture,
    });
    res.status(201).json({ field: oneField._id });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.updateOneField = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    const filters = { _id: req.params.id };
    const update = {
      $set: { field: req.body.field, picture: req.body.picture },
    };
    const options = {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    };
    const updatedField = await FieldModel.findOneAndUpdate(
      filters,
      update,
      options
    );
    return res.send(updatedField);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.deleteOneField = async (req, res) => {
  if (!ID_Validated(req.params.id))
    return res.status(400).send("ID unknown " + req.params.id);
  try {
    await FieldModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
