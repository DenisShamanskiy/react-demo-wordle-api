const WordModel = require("../models/word-model");

const ApiError = require("../exceptions/api-error");

class WordService {
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

  async getWords() {
    try {
      const [BD] = await WordModel.find();
      return BD;
    } catch (error) {
      console.log(error);
    }
  }

  async addNewWord(id, word) {
    try {
      const BD = await WordModel.findById(id);
      if (!id) {
        throw ApiError.BadRequest(`База слов по ID ${id} не найдена`);
      }
      if (BD.words.includes(word)) {
        throw ApiError.BadRequest(
          `Слово ${word} уже есть в базе данных с ID ${id}`
        );
      }
      BD.words.push(word);
      await BD.save();
      return BD;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteWord(id, word) {
    try {
      const BD = await WordModel.findByIdAndUpdate(
        { _id: id },
        { $pull: { words: word } },
        { new: true }
      );
      if (!id) {
        throw ApiError.BadRequest(`База слов по ID ${id} не найдена`);
      }
      return BD;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new WordService();
