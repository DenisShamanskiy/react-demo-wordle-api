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
      const [data] = await WordModel.find();
      return data.words;
    } catch (error) {
      console.log(error);
    }
  }

  // async addNewWord(word) {
  //   try {
  //     const [data] = await WordModel.find();
  //     if (!data) {
  //       throw ApiError.BadRequest(`База слов не найдена`);
  //     }
  //     if (data.words.includes(word)) {
  //       throw ApiError.BadRequest(
  //         `Слово "${word.toUpperCase()}" уже есть в базе данных`
  //       );
  //     }
  //     data.words.push(word);
  //     await data.save();
  //     return { status: 200 };
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // }

  async addWord(word) {
    try {
      const database = await WordModel.findById({
        _id: process.env.ID_DATABASE,
      });
      if (!database) {
        throw ApiError.BadRequest(`База слов не найдена`);
      }
      if (database.words.includes(word)) {
        throw ApiError.BadRequest(
          `Слово "${word.toUpperCase()}" уже есть в списке`
        );
      }
      database.words.push(word);
      await database.save();
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteWord(word) {
    try {
      const { words } = await WordModel.findByIdAndUpdate(
        { _id: process.env.ID_DATABASE },
        { $pull: { words: word } }
      );
      return { status: 200 };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
module.exports = new WordService();
