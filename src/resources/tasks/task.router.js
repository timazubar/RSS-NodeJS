const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getTaskByBoard(req.params);

  if (tasks.length) {
    res.json(tasks);
  } else {
    res.status(401).end();
  }
});
