const { Schema, model } = require("mongoose");

const StatisticsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  statistics: {
    bar: [
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
      {
        name: { type: Number },
        percent: { type: String },
        count: { type: Number },
      },
    ],
    loss: { type: Number },
    surrender: { type: Number },
    win: { type: Number },
  },
});

module.exports = model("Statistics", StatisticsSchema);
