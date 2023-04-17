const WordService = require("../service/word-service");

class WordController {
  async getWords(req, res, next) {
    try {
      const words = await WordService.getWords();
      return res.status(200).json(words);
    } catch (error) {
      next(error);
    }
  }
  async addWord(req, res, next) {
    try {
      const { word } = req.body;
      const isAdded = await WordService.addWord(word);
      return res.status(200).json(isAdded);
    } catch (error) {
      next(error);
    }
  }
  async deleteWord(req, res, next) {
    try {
      const { word } = req.body;
      const isRemoved = await WordService.deleteWord(word);
      return res.status(200).json(isRemoved);
    } catch (error) {
      next(error);
    }
  }

  // WORDS //
  // DEVELOP //
  // async addWords(req, res, next) {
  //   try {
  //     const newWords = new WordModel({ words: WORDS });
  //     newWords.save();
  //     res.json("Слова добавлены");
  //   } catch (e) {
  //     next(e);
  //   }
  // }
  // DEVELOP //
}

module.exports = new WordController();
