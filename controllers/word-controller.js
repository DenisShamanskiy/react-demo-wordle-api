const WordService = require("../service/word-service");
// const WordModel = require("../models/word-model");

class WordController {
  async getWords(req, res, next) {
    try {
      const { _id, words } = await WordService.getWords();
      res.json({ id: _id, words });
    } catch (e) {
      next(e);
    }
  }
  async addNewWord(req, res, next) {
    try {
      const { id, word } = req.body;
      const updateWords = await WordService.addNewWord(id, word);
      return res.json(updateWords);
    } catch (e) {
      next(e);
    }
  }
  async deleteWord(req, res, next) {
    try {
      const { id, word } = req.body;
      const { _id, words } = await WordService.deleteWord(id, word);
      res.json({ id: _id, words });
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
