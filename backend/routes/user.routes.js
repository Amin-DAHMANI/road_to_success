const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// Authentification
router.post("/inscription", authController.signUp);
router.post("/connexion", authController.signIn);
router.head("/deconnexion", authController.logout);

//User DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
