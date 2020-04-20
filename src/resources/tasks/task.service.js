const tasksRepo = require('./task.db.repository');
const boardsRepo = require('../boards/board.db.repository');
const Task = require('./task.model');

const getAll = async boardId => {
  const tasks = await tasksRepo.getAll();
  return tasks.filter(task => task.boardId === boardId);
};

const getTaskById = async (boardId, taskId) => {
  const tasks = await tasksRepo.getAll();
  const task = tasks.find(t => t.boardId === boardId && t.id === taskId);
  return task;
};

const createTask = async (boardId, params) => {
  const board = await boardsRepo.getByID(boardId);
  if (board) {
    const task = new Task({ ...params, boardId });
    await tasksRepo.createTask(task);
    return task;
  }
};

const updateTask = async (taskId, boardId, params) => {
  await tasksRepo.updateTask(taskId, boardId, params);
};

const deleteTask = async (boardId, taskId) => {
  await tasksRepo.deleteTask(boardId, taskId);
};

module.exports = {
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
