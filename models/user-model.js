const { Schema, model } = require("mongoose");

const defaultStatisticsBar = [
  {
    percent: "0%",
    count: 0,
  },
  {
    percent: "0%",
    count: 0,
  },
  {
    percent: "0%",
    count: 0,
  },
  {
    percent: "0%",
    count: 0,
  },
  {
    percent: "0%",
    count: 0,
  },
  {
    percent: "0%",
    count: 0,
  },
];

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  roles: [{ type: String, ref: "Role" }],
  statistics: {
    bar: { type: Array, default: defaultStatisticsBar },
    fail: { type: Number, default: 0 },
    leave: { type: Number, default: 0 },
    win: { type: Number, default: 0 },
  },
});

module.exports = model("User", UserSchema);
