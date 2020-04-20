/* eslint-disable no-unused-vars */
const winston = require('winston');
const path = require('path');

const logFilePath = path.resolve(__dirname, '../reqs-errors.log');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath, flags: 'a' })
  ],
  format: winston.format.cli()
});

const requestLogger = async (req, res, next) => {
  const { method, url, params, body } = req;
  await logger.log(
    'info',
    `${method} url: ${url} params: ${JSON.stringify(
      params
    )} body: ${JSON.stringify(body)}`
  );
  next();
};

const errorLogger = async (err, req, res, next) => {
  const { statusCode, message } = err;
  await res.status(statusCode).send(message);
  await logger.log('error', `${statusCode}: ${message}`);
};

const processLogger = async (err, message) => {
  await logger.log('error', `${err}: ${message}`);
};

module.exports = { requestLogger, errorLogger, processLogger };
