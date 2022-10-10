const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const { username, password } = req.body;
      const userData = await userService.registration(username, password);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return users.length
        ? res.json(users)
        : res.json({ message: "Пользователи не найдены" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
