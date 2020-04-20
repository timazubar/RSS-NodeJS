const Board = require('./board.model');

const getAll = async () => {
  return await Board.find({});
};

const getBoardById = async id => {
  return await Board.findOne({ id });
};

const createBoard = async board => {
  await Board.create(board);
};

const updateBoard = async (id, data) => {
  return (await Board.updateOne({ id }, data))[0];
};

const deleteBoard = async id => {
  await Board.deleteOne({ id });
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
