/* eslint-disable no-unused-expressions */
const { connectDB } = require('./resources/db/db.client');
const { PORT } = require('./common/config');
const app = require('./app');
require('dotenv').config;
const { processLogger } = require('./logger');

process.on('unhandledRejection', err => {
  processLogger('unhandledRejection', err.message);
});

process.on('uncaughtException', err => {
  processLogger('uncaughtException', err.message);
  // eslint-disable-next-line no-process-exit
  process.exit(500);
});

connectDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
