const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(username, password, stats) {
    const candidate = await UserModel.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с имнем ${username} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({
      username,
      password: hashPassword,
      stats,
    });

    const userDto = new UserDto(user);

    return { user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
