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

const getAll = () => {
  return users;
};

const createUser = user => {
  users.push(user);
};

const updateUser = (id, newParams) => {
  const userIndex = users.map(user => user.id).indexOf(id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...newParams };
  }
};

const deleteUser = id => {
  const userIndex = users.map(user => user.id).indexOf(id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
  }
};

module.exports = { getAll, createUser, updateUser, deleteUser };
