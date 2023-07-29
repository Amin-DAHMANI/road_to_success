const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

const upload = require("./../middlewares/uploadProfilePicture.middleware");

// Authentification
router.post("/inscription", authController.signUp);
router.post("/connexion", authController.signIn);
router.get("/deconnexion", authController.logout);

//User DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

router.post(
  "/upload_profil_picture/:id",
  upload,
  userController.updateProfilePictureUser
);

module.exports = router;
