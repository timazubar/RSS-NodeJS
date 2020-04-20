const router = require('express').Router();
const tasksService = require('./task.service');
const ErrorHandler = require('../../common/errorHandler');

router.route('/boards/:boardId/tasks').get(async (req, res, next) => {
  try {
    const tasks = tasksService.getAll(req.params.boardId);
    res.status(200);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});

router.route('/boards/:boardId/tasks/:taskId').get(async (req, res, next) => {
  try {
    const task = tasksService.getTaskById(
      req.params.boardId,
      req.params.taskId
    );
    if (task) {
      res.status(200);
      res.json(task);
    } else {
      throw new ErrorHandler(404, 'Error! The task was not found.');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/boards/:boardId/tasks').post(async (req, res, next) => {
  try {
    const task = await tasksService.createTask(req.params.boardID, req.body);
    res.status(200);
    res.json(task);
  } catch (err) {
    return next(err);
  }
});

router.route('/boards/:boardId/tasks/:taskId').put(async (req, res, next) => {
  try {
    const task = tasksService.getTaskById(
      req.params.boardId,
      req.params.taskId
    );
    if (task) {
      await tasksService.updateTask(
        req.params.taskID,
        req.params.boardID,
        req.body
      );

      res.status(200);
      res.send({ message: 'The task has been updated.' });
    } else {
      throw new ErrorHandler(404, 'Task not found');
    }
  } catch (err) {
    return next(err);
  }
});

router
  .route('/boards/:boardId/tasks/:taskId')
  .delete(async (req, res, next) => {
    try {
      const task = tasksService.getTaskById(
        req.params.boardId,
        req.params.taskId
      );
      if (task) {
        await tasksService.deleteTask(req.params.taskID, req.params.boardID);

        res.status(200);
        res.send({ message: 'The Task has been deleted' });
      } else {
        throw new ErrorHandler(404, 'Task not found');
      }
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;
