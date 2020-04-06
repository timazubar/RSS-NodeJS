const boardsRepo = require('./board.memory.repository');
// const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const getBoardById = id => boardsRepo.getBoardById(id);
const createBoard = params => boardsRepo.createBoard(params);
const updateBoard = (id, newParams) => boardsRepo.updateBoard(id, newParams);
const deleteBoard = async id => {
  const deletedBoard = await boardsRepo.deleteBoard(id);

  return deletedBoard;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
