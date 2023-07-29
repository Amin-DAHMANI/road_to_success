const UserModel = require("../models/user.model");
const multer = require("multer");
const upload = multer();
const mv = require("mv");
const path = require("path");
const { uploadPhotoProfilErrors } = require("../utils/errors.utils");

module.exports.uploadPhotoProfil = async (req, res) => {
  try {
    if (
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/jpeg" &&
      req.file.detectedMimeType != "image/png"
    ) {
      throw Error("BadFormat");
    }
    if (req.file.size > 500000) {
      throw Error("MaxSize");
    }
  } catch (err) {
    const errors = uploadPhotoProfilErrors(err);
    res.status(201).json({ errors });
  }

  const destinationPath = path.join(
    __dirname,
    "../../frontend/public/assets/uploads/images/profil_images/"
  );
  console.log(destinationPath);
  const uploadingPicture = multer.diskStorage({
    destination: (req, file, callback) => {
      console.log(req, file);
      callback(null, destinationPath);
    },
    filename: (req, file, callback) => {
      console.log(req, file);
      const fileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
      console.log(fileName);
    },
  });
  try {
    const upload = multer({ storage: uploadingPicture });
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

/*module.exports.uploadPhotoProfil = async (req, res) => {
  try {
    if (
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/jpeg" &&
      req.file.detectedMimeType != "image/png"
    ) {
      throw Error("BadFormat");
    }
    if (req.file.size > 500000) {
      throw Error("MaxSize");
    }
  } catch (err) {
    const errors = uploadPhotoProfilErrors(err);
    res.status(201).json({ errors });
  }

  try {
    console.log(req.file);
    const originalPath = req.file.path + "\\";
    const originalName = req.file.originalname;
    const source = originalPath + originalName;
    console.log(req.file.path);
    const destinationName = req.params.id + "_profil_image.jpg";
    const destination = path.join(
      __dirname,
      "../../frontend/public/assets/uploads/images/profil_images/" +
        destinationName
    );
    mv(source, destination, function (err) {
      console.log(err);
      if (err) {
        res.status(200).send(err);
      }
    });
    console.log(source, destination);
  } catch (err) {
    res.status(200).send(err);
  }

  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          picture: "/assets/uploads/images/profil_images/" + destinationName,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};*/
