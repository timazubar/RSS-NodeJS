const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../users/user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getUserById = id => {
  const users = usersRepo.getAll();
  return users.find(user => user.id === id);
};

const createUser = params => usersRepo.createUser(params);

const updateUser = (id, newParams) => usersRepo.updateUser(id, newParams);

const deleteUser = id => {
  usersRepo.deleteUser(id);
  const tasks = tasksRepo.getAll().filter(task => task.userId === id);

  for (let i = 0; i < tasks.length; i++) {
    const { id: taskId, boardId } = tasks[i];
    tasksService.updateTask(taskId, boardId, { ...tasks[i], userId: null });
  }
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
