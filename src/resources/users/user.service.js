const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);
// eslint-disable-next-line prettier/prettier
const createUser = params => usersRepo.createUser(params);
const updateUser = (id, newParams) => usersRepo.updateUser(id, newParams);
const deleteUser = async id => {
  const deletedUser = await usersRepo.deleteUser(id);
  return deletedUser;
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
