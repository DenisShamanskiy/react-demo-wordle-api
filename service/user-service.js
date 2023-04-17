const UserModel = require("../models/user-model");
const RoleModel = require("../models/role-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    try {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
        throw ApiError.BadRequest(`${email} уже зарегистрирован`);
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();
      const userRole = await RoleModel.findOne({ value: "USER" });
      const user = await UserModel.create({
        email,
        password: hashPassword,
        username: email,
        activationLink,
        roles: [userRole.value],
      });
      await mailService.sendActivationMail(
        email,
        `${process.env.API_URL_PRODUCTION}/api/activate/${activationLink}`
      );
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw ApiError.BadRequest(`Пользователь не найден`);
      }
      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
        throw ApiError.BadRequest("Неверный пароль");
      }
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      throw error;
    }
  }

  async logout(refreshToken) {
    try {
      const token = await tokenService.removeToken(refreshToken);
      return token;
    } catch (error) {
      throw error;
    }
  }

  async activate(activationLink) {
    try {
      const user = await UserModel.findOne({ activationLink });
      if (!user) {
        throw ApiError.BadRequest("Неккоректная ссылка активации");
      }
      user.isActivated = true;
      await user.save();
    } catch (error) {
      throw error;
    }
  }

  async refresh(refreshToken) {
    try {
      if (!refreshToken) {
        throw ApiError.UnauthorizedError();
      }
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
      }
      const user = await UserModel.findById(userData.id);
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      throw error;
    }
  }

  async updateStatistics(id, statistics) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        { statistics },
        { returnDocument: "after" }
      );
      if (!id) {
        throw ApiError.NotFound("Пользователь не найден");
      }
      const userDto = new UserDto(user);
      return userDto.statistics;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, username, email) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        { username, email },
        { returnDocument: "after" }
      );
      if (!id) {
        throw ApiError.NotFound("Пользователь не найден");
      }
      const userDto = new UserDto(user);
      return userDto;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await UserModel.find();
      if (!users) {
        throw ApiError.NotFound("Пользователи не найдены");
      }
      return users.map((user) => new UserDto(user));
    } catch (error) {
      throw error;
    }
  }

  async getUser(id) {
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        throw ApiError.NotFound("Пользователь не найден");
      }
      return new UserDto(user);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        throw ApiError.NotFound("Пользователь не найден");
      }
      return { message: "Учетная запись успешно удалена" };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
