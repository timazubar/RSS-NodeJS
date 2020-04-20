const boardsRepo = require('./board.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = async () => await boardsRepo.getAll();

const getBoardById = async id => {
  return await boardsRepo.getBoardById(id);
};

const createBoard = async board => {
  await boardsRepo.createBoard(board);
};

const updateBoard = async (id, newParams) => {
  await boardsRepo.updateBoard(id, newParams);
};

const deleteBoard = async id => {
  await boardsRepo.deleteBoard(id);
  const tasks = (await tasksRepo.getAll()).filter(task => task.boardId === id);

  tasks.forEach(async task => {
    const { id: taskId, boardId } = task;
    await tasksRepo.deleteTask(taskId, boardId);
  });
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
