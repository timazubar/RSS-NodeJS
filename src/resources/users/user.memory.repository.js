const User = require('./user.model');

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

const createUser = async params => {
  const { name, login, password } = params;
  const newUser = new User({ name, login, password });
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, newParams) => {
  const user = users.find(u => u.id === id);
  Object.assign(user, newParams);
  return user;
};

const deleteUser = async id => {
  const index = users.findIndex(u => u.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }

  return false;
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
