const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get((req, res, next) => {
  try {
    const users = usersService.getAll();
    res.status(200);
    res.json(users.map(User.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:userId').get((req, res, next) => {
  try {
    const user = usersService.getUserById(req.params.userId);
    if (!user) {
      res.status(404);
      res.send({ message: 'Error! The user is not found' });
    } else {
      res.status(200);
      res.json(user);
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post((req, res, next) => {
  try {
    const { name, login, password } = req.body;
    if (!name || !login || !password) {
      res.status(400);
      res.end({ message: 'Error! Request cannot be handled.' });
    } else {
      const user = new User({ name, login, password });
      usersService.createUser(user);
      res.status(200);
      res.json(User.toResponse(user));
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:userId').put((req, res, next) => {
  try {
    const user = usersService.getUserById(req.params.userId);
    if (!user) {
      res.status(404);
      res.send({ message: 'Error! The board is not found' });
    } else {
      usersService.updateUser(req.params.userId, req.body);
      res.status(200);
      res.send({ message: 'Success! The user has been updated.' });
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:userId').delete((req, res, next) => {
  try {
    usersService.deleteUser(req.params.userId);
    res.status(204);
    res.send({ message: 'Success! The user has been deleted.' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
