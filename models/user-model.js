const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  roles: [{ type: String, ref: "Role" }],
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

module.exports = model("User", UserSchema);
