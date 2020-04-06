const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = id => usersRepo.getUserById(id);

module.exports = { getAll, getUserById };
