const WordService = require("../service/word-service");
// const WordModel = require("../models/word-model");

class WordController {
  async getWords(req, res, next) {
    try {
      const words = await WordService.getWords();
      res.json(words);
    } catch (e) {
      next(e);
    }
  }
  async addWord(req, res, next) {
    try {
      const { word } = req.body;
      const result = await WordService.addWord(word);
      return res.json(result);
    } catch (e) {
      next(e);
    }
  }
  async deleteWord(req, res, next) {
    try {
      const { word } = req.body;
      const result = await WordService.deleteWord(word);
      return res.json(result);
    } catch (e) {
      next(e);
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
