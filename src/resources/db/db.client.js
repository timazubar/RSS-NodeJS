const mongoose = require('mongoose');
const User = require('../users/user.model');

const users = [
  new User({ name: 'user1', login: 'login1', password: 'pass1' }),
  new User({ name: 'user2', login: 'login2', password: 'pass2' })
];
const connectDB = cb => {
  mongoose.connect(
    'mongodb+srv://admin:admin@rsschool-q6akp.mongodb.net/rest',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we are connected!');
    users.forEach(user => user.save());
    cb();
  });
};

module.exports = { connectDB, users };
