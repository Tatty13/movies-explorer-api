const auth = require('./auth');
const handleCors = require('./cors');
const handleCelebrateErrors = require('./handle-celebrate-errors');
const handleError = require('./handleError');
const { requestLogger, errorLogger } = require('./logger');

module.exports = {
  auth,
  handleCors,
  handleCelebrateErrors,
  handleError,
  requestLogger,
  errorLogger,
};
