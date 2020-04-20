const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');
const ErrorHandler = require('../../common/errorHandler');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.status(200);
    res.json(boards);
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').get(async (req, res, next) => {
  try {
    const board = await boardsService.getBoardById(req.params.boardId);
    if (board) {
      res.status(200);
      res.json(board);
    } else {
      throw new ErrorHandler(404, 'Error! The board is not found.');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const { title, columns } = req.body;
    if (title && columns) {
      const newBoard = new Board({ title, columns });
      await boardsService.createBoard(newBoard);

      res.status(200);
      res.json(newBoard);
    } else {
      throw new ErrorHandler(400, 'Error! Bad request');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').put(async (req, res, next) => {
  try {
    await boardsService.updateBoard(req.params.boardId, req.body);
    res.status(200);
    res.send({ message: 'Success! The board has been updated.' });
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId').delete(async (req, res, next) => {
  try {
    const board = await boardsService.getBoardById(req.params.boardId);
    if (board) {
      await boardsService.deleteBoard(req.params.boardID);
      res.status(200);
      res.send({ message: 'The board has been deleted' });
    } else {
      throw new ErrorHandler(404, 'Error! Board was not found');
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
