const { Schema, model } = require("mongoose");

const Word = new Schema({
  words: { type: [String] },
});

module.exports = model("Word", Word);
