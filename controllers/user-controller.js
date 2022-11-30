const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

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
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, password, stats } = req.body;
      const userData = await userService.registration(email, password, stats);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
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
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
