const WordModel = require("../models/word-model");

const ApiError = require("../exceptions/api-error");

class WordService {
  async getWords() {
    try {
      const [data] = await WordModel.find();
      return data.words;
    } catch (error) {
      throw error;
    }
  }

  async addWord(word) {
    try {
      const database = await WordModel.findById({
        _id: process.env.ID_DATABASE,
      });
      if (!database) {
        throw ApiError.NotFound(`База слов не найдена`);
      }
      if (database.words.includes(word)) {
        throw ApiError.BadRequest("Слово уже есть в списке");
      }
      database.words.push(word);
      await database.save();
      return { message: "Слово добавлено" };
    } catch (error) {
      throw error;
    }
  }

  async deleteWord(word) {
    try {
      const { words } = await WordModel.findByIdAndUpdate(
        { _id: process.env.ID_DATABASE },
        { $pull: { words: word } }
      );
      return { message: "Слово удалено" };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new WordService();
