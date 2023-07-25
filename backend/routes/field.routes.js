const router = require("express").Router();
const fieldController = require("../controllers/field.controller");

router.get("/", fieldController.getAllFields);
router.get("/:id", fieldController.getOneField);
router.post("/", fieldController.createOneField);
router.put("/:id", fieldController.updateOneField);
router.delete("/:id", fieldController.deleteOneField);

module.exports = router;
