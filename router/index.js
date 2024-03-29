const Router = require("express").Router;
const { body } = require("express-validator");
const router = new Router();
const userController = require("../controllers/user-controller");
const wordController = require("../controllers/word-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const roleMiddleware = require("../middlewares/role-middleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", roleMiddleware(["USER"]), userController.getUsers);
router.get("/users/:id", roleMiddleware(["ADMIN"]), userController.getUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/words", wordController.getWords);
router.patch("/words/add", roleMiddleware(["ADMIN"]), wordController.addWord);
router.patch(
  "/words/delete",
  roleMiddleware(["ADMIN"]),
  wordController.deleteWord
);
router.put("/profile/edit", authMiddleware, userController.updateUser);
router.put("/user/statistics", authMiddleware, userController.updateStatistics);

module.exports = router;
