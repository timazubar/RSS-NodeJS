const Board = require('./board.model');

const boards = [
  {
    id: '1',
    title: 'Board1',
    columns: [
      {
        id: '11',
        title: 'Column1',
        order: 1
      },
      {
        id: '12',
        title: 'Column2',
        order: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Board2',
    columns: [
      {
        id: '21',
        title: 'Column3',
        order: 3
      },
      {
        id: '22',
        title: 'Column4',
        order: 4
      }
    ]
  },
  {
    id: '3',
    title: 'Board3',
    columns: [
      {
        id: '31',
        title: 'Column1',
        order: 5
      },
      {
        id: '32',
        title: 'Column2',
        order: 2
      }
    ]
  }
];

const getAll = async () => {
  return boards;
};

const getBoardById = async id => {
  return boards.find(b => b.id === id);
};

const createBoard = async params => {
  const { title, columns } = params;
  const newBoard = new Board({ title, columns });
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, newParams) => {
  const board = boards.find(b => b.id === id);

  for (const column of board.columns) {
    for (const newColumn of newParams.columns) {
      if (column.id === newColumn.id) {
        Object.assign(board, newParams);

        return board;
      }

      return false;
    }
  }
};

const deleteBoard = async id => {
  const index = boards.findIndex(b => b.id === id);

  if (index !== -1) {
    boards.splice(index, 1);
    return true;
  }

  return false;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
