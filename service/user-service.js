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

  async login(username, password) {
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким username не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }
    const userDto = new UserDto(user);
    return { user: userDto };
  }

  async getStats(id) {
    const _id = id;
    const user = await UserModel.findById({ _id });
    if (!_id) {
      throw ApiError.BadRequest("Пользователь с таким id не найден");
    }
    const userDto = new UserDto(user);
    return { stats: userDto.stats };
  }

  async updateStats(id, stats) {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { stats },
      { returnDocument: "after" }
    );
    if (!id) {
      throw ApiError.BadRequest("Пользователь с таким id не найден");
    }
    const userDto = new UserDto(user);
    return { user: userDto.stats };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
