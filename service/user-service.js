const UserModel = require("../models/user-model");

class UserService {
  async registration(username, password) {
    const candidate = await UserModel.findOne({ username });
    if (candidate) {
      res.json({
        message: `Пользователь с почтовым адресом ${username} уже существует`,
      });
    }

    const user = await UserModel.create({
      username,
      password,
    });

    return { user };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
