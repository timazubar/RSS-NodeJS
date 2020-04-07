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
        order: 1
      },
      {
        id: '32',
        title: 'Column2',
        order: 2
      }
    ]
  }
];

const getAll = () => {
  return boards;
};

// const getBoardById = id => {
//   return boards.find(board => board.id === id);
// };

const createBoard = board => {
  boards.push(board);
};

const updateBoard = (id, newParams) => {
  const index = boards.map(board => board.id).indexOf(id);

  if (index !== -1) {
    boards[index] = { ...boards[index], ...newParams };
  }
};

const deleteBoard = id => {
  const index = boards.map(board => board.id).indexOf(id);

  if (index !== -1) {
    boards.splice(index, 1);
  }
};

module.exports = {
  getAll,
  // getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
