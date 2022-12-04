module.exports = class UserDto {
  email;
  id;
  isActivated;
  statistics;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.statistics = model.statistics;
  }
};
