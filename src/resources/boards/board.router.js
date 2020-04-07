const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');

router.route('/').get((req, res) => {
  const boards = boardsService.getAll();

  res.json(boards);
});

router.route('/:boardId').get((req, res) => {
  const board = boardsService.getBoardById(req.params.boardId);

  if (board) {
    res.json(board);
  } else {
    res.status(404);
    res.send({ message: 'Error! The board is not found.' });
  }
});

router.route('/').post((req, res) => {
  const { title, columns } = req.body;
  if (!title || !columns) {
    res.status(401);
    res.end({ message: 'Error! Request cannot be handled.' });
  } else {
    const newBoard = new Board({ title, columns });
    boardsService.createBoard(newBoard);

    res.json(newBoard);
  }
});

router.route('/:boardId').put((req, res) => {
  boardsService.updateBoard(req.params.boardId, req.body);
  res.send({ message: 'Success! The board has been updated.' });
});

router.route('/:boardId').delete((req, res) => {
  const board = boardsService.getBoardById(req.params.boardId);
  if (!board) {
    res.status(404);
    res.send({ message: 'Error! The board is not found' });
  } else {
    boardsService.deleteBoard(req.params.boardId);
    res.status(200);
    res.send({ message: 'Success! The board has been deleted.' });
  }
});

module.exports = router;
