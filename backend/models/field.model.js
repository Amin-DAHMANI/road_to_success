const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema(
  {
    field: {
      type: String,
      required: true,
      minLenght: 3,
      maxLenght: 100,
      unique: true,
      trim: true,
    },
    numberLevels: {
      type: Number,
      required: true,
      default: 0,
    },
    numberCourses: {
      type: Number,
      required: true,
      default: 0,
    },
    picture: {
      type: String,
      default: "À Remplir",
    },
  },
  {
    timestamps: true,
  }
);

const FieldModel = mongoose.model("Field", fieldSchema);

module.exports = FieldModel;
