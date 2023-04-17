const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      await userService.activate(req.params.link);
      return res.redirect(
        `${process.env.CLIENT_URL_PRODUCTION}/activate/${req.params.link}`
      );
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async updateStatistics(req, res, next) {
    try {
      const { id, statistics } = req.body;
      const userData = await userService.updateStatistics(id, statistics);
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const { id, username, email } = req.body;
      const userData = await userService.updateUser(id, username, email);
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const isRemoved = await userService.deleteUser(req.params.id);
      return res.status(200).json(isRemoved);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
