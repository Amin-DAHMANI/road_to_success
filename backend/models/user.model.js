const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        "STUDENT",
        "TUTOR",
        "TEACHER",
        "MODERATOR",
        "ADMINISTRATOR",
        "SUPER ADMINISTRATOR",
      ],
      default: "STUDENT",
      required: true,
    },
    identifiant: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLength: 6,
    },
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    picture: {
      type: String,
      default: "./uploads/profil_images/rainbow_trophy.png",
    },
    bio: {
      type: String,
      max: 4096,
    },
  },
  {
    timestamps: true,
  }
);

//Play function before save into DB
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
