const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const destination = path.join(
  __dirname,
  "../../frontend/public/assets/uploads/images/profile_images/"
);
const filenamefunction = () => {
  return Date.now() + "-" + uuidv4();
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, destination);
  },
  filename: (req, file, callback) => {
    filename = filenamefunction();
    if (file.mimetype.includes("jpeg") || file.mimetype.includes("jpeg")) {
      finalfilename = filename + ".jpg";
    } else {
      finalfilename = filename + ".png";
    }
    callback(null, finalfilename);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload.single("ProfilePicture");
