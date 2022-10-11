module.exports = class UserDto {
  username;
  id;
  stats;

  constructor(model) {
    this.username = model.username;
    this.id = model._id;
    this.stats = model.stats;
  }
};
