const tasksRepo = require('./task.memory.repository');
const boardsService = require('../boards/board.service');
const Task = require('./task.model');

const getAll = boardId => {
  const tasks = tasksRepo.getAll();
  return tasks.filter(task => task.boardId === boardId);
};

const getTaskById = (boardId, taskId) => {
  const tasks = tasksRepo.getAll();
  const task = tasks.find(t => t.boardId === boardId && t.id === taskId);
  return task;
};

const createTask = (boardId, params) => {
  const board = boardsService.getBoardById(boardId);
  if (board) {
    const task = new Task(...params, boardId);
    tasksRepo.createTask(task);
    return task;
  }
};

const updateTask = (taskId, boardId, params) => {
  tasksRepo.updateTask(taskId, boardId, params);
};

const deleteTask = (taskId, boardId) => {
  tasksRepo.deleteTask(taskId, boardId);
};

module.exports = {
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
