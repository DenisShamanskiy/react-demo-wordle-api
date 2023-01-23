const UserModel = require("../models/user-model");
const RoleModel = require("../models/role-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
// const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
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
    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/activate/${activationLink}`
    // );
    console.log(user);
    const userDto = new UserDto(user);
    console.log(userDto);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
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
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Неккоректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken) {
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
  }

  async updateStatistics(id, statistics) {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { statistics },
      { returnDocument: "after" }
    );
    if (!id) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const userDto = new UserDto(user);
    return userDto.statistics;
  }

  async updateUser(id, username, email) {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { username, email },
      { returnDocument: "after" }
    );
    if (!id) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const userDto = new UserDto(user);
    return userDto;
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users.map((user) => new UserDto(user));
  }

  async getUser(id) {
    const user = await UserModel.findById(id);
    return new UserDto(user);
  }

  async deleteUser(id) {
    try {
      await UserModel.findByIdAndDelete(id);
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = new UserService();
