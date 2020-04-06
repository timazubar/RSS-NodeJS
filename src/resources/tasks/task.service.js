const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getTaskById = id => tasksRepo.getTaskById(id);
const getTasksByBoard = id => tasksRepo.getTasksByBoard(id);
const createTask = (id, newParams) => tasksRepo.createTask(id, newParams);
const updateTask = (id, newParams) => tasksRepo.updateTask(id, newParams);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getAll,
  getTaskById,
  getTasksByBoard,
  createTask,
  updateTask,
  deleteTask
};
