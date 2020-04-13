const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');

router.route('/').get((req, res, next) => {
  try {
    const tasks = boardsService.getAll();
    res.status(200);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').get((req, res, next) => {
  try {
    const board = boardsService.getBoardById(req.params.boardId);

    if (board) {
      res.status(200);
      res.json(board);
    } else {
      res.status(404);
      res.send({ message: 'Error! The board is not found.' });
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post((req, res, next) => {
  try {
    const { title, columns } = req.body;
    if (!title || !columns) {
      res.status(400);
      res.send({ message: 'Error! Request cannot be handled.' });
    } else {
      const newBoard = new Board({ title, columns });
      boardsService.createBoard(newBoard);
      res.status(200);
      res.json(newBoard);
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').put((req, res, next) => {
  try {
    boardsService.updateBoard(req.params.boardId, req.body);
    res.status(200);
    res.send({ message: 'Success! The board has been updated.' });
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').delete((req, res, next) => {
  try {
    const board = boardsService.getBoardById(req.params.boardId);
    if (!board) {
      res.status(404);
      res.send({ message: 'Error! The board is not found' });
    } else {
      boardsService.deleteBoard(req.params.boardId);
      res.status(200);
      res.send({ message: 'Success! The board has been deleted.' });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
