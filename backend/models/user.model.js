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
      minLength: 3,
      maxLength: 50,
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
      default: null,
    },
    bio: {
      type: String,
      max: 4096,
      default: "À compléter",
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

userSchema.statics.login = async function (identifiant, password) {
  const user = await this.findOne({ identifiant });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect identifiant");
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
