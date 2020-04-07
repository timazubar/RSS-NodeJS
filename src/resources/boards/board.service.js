const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoardById = id => {
  const boards = boardsRepo.getAll();
  return boards.find(board => board.id === id);
};

const createBoard = params => boardsRepo.createBoard(params);

const updateBoard = (id, newParams) => boardsRepo.updateBoard(id, newParams);

const deleteBoard = id => {
  boardsRepo.deleteBoard(id);
  const tasks = tasksRepo.getAll().filter(task => task.boardId === id);

  for (let i = 0; i < tasks.length; i++) {
    const { id: taskId, boardId } = tasks[i];
    tasksRepo.deleteTask(taskId, boardId);
  }
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
