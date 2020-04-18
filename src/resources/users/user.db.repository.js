/* eslint-disable no-unused-vars */
const users = [...require('../db/db.client').users];
const User = require('./user.model');

const getAll = () => {
  throw new Error();
  // return users;
};

const createUser = async user => {
  return User.create(user);
};

const updateUser = (id, newParams) => {
  throw new Error();
  // const userIndex = users.map(user => user.id).indexOf(id);
  // if (userIndex !== -1) {
  //   users[userIndex] = { ...users[userIndex], ...newParams };
  // }
};

const deleteUser = id => {
  throw new Error();
  // const userIndex = users.map(user => user.id).indexOf(id);
  // if (userIndex !== -1) {
  //   users.splice(userIndex, 1);
  // }
};

module.exports = { getAll, createUser, updateUser, deleteUser };
