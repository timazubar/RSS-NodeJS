const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');
const User = require('./user.model');

const getAll = async () => await usersRepo.getAll();

const getUserById = async id => {
  const users = await usersRepo.getAll();
  const res = users.find(user => user.id === id);
  if (res) {
    return User.toResponse(res);
  }
};

const createUser = async user => {
  return User.toResponse(await usersRepo.createUser(user));
};

const updateUser = async (id, newParams) => {
  await usersRepo.updateUser(id, newParams);
};

const deleteUser = async id => {
  await usersRepo.deleteUser(id);
  const tasks = (await tasksRepo.getAll()).filter(task => task.userId === id);

  tasks.forEach(async task => {
    const { id: taskId, boardId } = task;
    await tasksRepo.updateTask(taskId, boardId, { ...tasks, userId: null });
  });
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
