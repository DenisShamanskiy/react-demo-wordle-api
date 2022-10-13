const userService = require("../service/user-service");

const statsDefault = {
  win: 0,
  loss: 0,
  surrender: 0,
  bar: [
    {
      name: 1,
      percent: "0%",
      count: 0,
    },
    {
      name: 2,
      percent: "0%",
      count: 0,
    },
    {
      name: 3,
      percent: "0%",
      count: 0,
    },
    {
      name: 4,
      percent: "0%",
      count: 0,
    },
    {
      name: 5,
      percent: "0%",
      count: 0,
    },
    {
      name: 6,
      percent: "0%",
      count: 0,
    },
  ],
};

class UserController {
  async registration(req, res, next) {
    try {
      const { username, password, stats = statsDefault } = req.body;
      const userData = await userService.registration(
        username,
        password,
        stats
      );
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const userData = await userService.login(username, password);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getStats(req, res, next) {
    try {
      const { id } = req.body;
      const userData = await userService.getStats(id);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async updateStats(req, res, next) {
    try {
      const { id, stats } = req.body;
      const userData = await userService.updateStats(id, stats);
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
