const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/stats", userController.getStats);
router.put("/stats", userController.updateStats);
router.get("/users", userController.getUsers);

module.exports = router;
