const User = require('./user.model');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getAll = async () => {
  return await User.find({});
};

const addUser = async user => {
  const hash = await bcrypt.hash(user.password, saltRounds);
  return await User.create({ ...user, password: hash });
};

const updateUser = async (id, data) => {
  const hash = await bcrypt.hash(data.password, saltRounds);
  await User.updateOne({ id }, { ...data, hash });
};

const deleteUser = async id => {
  await User.deleteOne({ id });
};

const findUserBy = async fields => {
  return await User.findOne(fields);
};

module.exports = { getAll, addUser, updateUser, deleteUser, findUserBy };
