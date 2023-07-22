const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      enum: ["", 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    numberCourses: {
      bsonType: "Int",
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
