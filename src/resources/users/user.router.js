const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get((req, res) => {
  const users = usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get((req, res) => {
  const user = usersService.getUserById(req.params.userId);
  if (!user) {
    res.status(404);
    res.send({ message: 'Error! The user is not found' });
  } else {
    res.status(200);
    res.json(user);
  }
});

router.route('/').post((req, res) => {
  const { name, login, password } = req.body;
  if (!name || !login || !password) {
    res.status(400);
    res.end({ message: 'Error! Request cannot be handled.' });
  } else {
    const user = new User({ name, login, password });
    usersService.createUser(user);
    res.json(User.toResponse(user));
  }
});

router.route('/:userId').put((req, res) => {
  const user = usersService.getUserById(req.params.userId);
  if (!user) {
    res.status(404);
    res.send({ message: 'Error! The board is not found' });
  } else {
    usersService.updateUser(req.params.userId, req.body);
    res.status(200);
    res.send({ message: 'Success! The user has been updated.' });
  }
});

router.route('/:userId').delete((req, res) => {
  usersService.deleteUser(req.params.userId);
  res.status(204);
  res.send({ message: 'Success! The user has been deleted.' });
});

module.exports = router;
