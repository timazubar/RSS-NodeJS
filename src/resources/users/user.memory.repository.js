// const User = require('./user.model');

const users = [
  {
    id: '1',
    name: 'Andrew',
    login: 'AndyJohnes',
    password: 'adasdas'
  },
  {
    id: '2',
    name: 'Troy',
    login: 'Peters',
    password: 'etrticxv1324'
  },
  {
    id: '3',
    name: 'Antony',
    login: 'Miles',
    password: 'adkasmo992r'
  }
];

const getAll = async () => {
  return users;
};

const getUserById = async id => {
  return users.find(u => u.id === id);
};

module.exports = { getAll, getUserById };
