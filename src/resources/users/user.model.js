const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  id: {
    type: String,
    default: uuid
  }
});

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
