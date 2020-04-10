const router = require('express').Router();
const tasksService = require('./task.service');
const Task = require('./task.model');

router.route('/boards/:boardId/tasks').get(async (req, res) => {
  const tasks = tasksService.getAll(req.params.boardId);
  res.json(tasks.map(Task.toResponse));
});

router.route('/boards/:boardId/tasks/:taskId').get((req, res) => {
  const task = tasksService.getTaskById(req.params.boardId, req.params.taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404);
    res.send({ message: 'Error! Task is not found.' });
  }
});

router.route('/boards/:boardId/tasks').post((req, res) => {
  const boardId = req.params.boardId;
  const data = req.body;
  const task = tasksService.createTask(boardId, data);
  res.json(Task.toResponse(task));
});

router.route('/boards/:boardId/tasks/:taskId').put((req, res) => {
  const task = tasksService.getTaskById(req.params.boardId, req.params.taskId);
  if (!task) {
    res.status(404);
    res.send({ message: 'Error! The task is not found.' });
  } else {
    tasksService.updateTask(req.params.taskId, req.params.boardId, req.body);
    res.status(200);
    res.send({ message: 'Success! The task has been updated.' });
  }
});

router.route('/boards/:boardId/tasks/:taskId').delete((req, res) => {
  const task = tasksService.getTaskById(req.params.boardId, req.params.taskId);
  if (!task) {
    res.status(404);
    res.send({ message: 'Error! The task is not found' });
  } else {
    tasksService.deleteTask(req.params.taskId, req.params.boardId);
    res.status(200);
    res.send({ message: 'Success! The task has been deleted.' });
  }
});

module.exports = router;
