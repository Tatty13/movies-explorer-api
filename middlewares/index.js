const auth = require('./auth');
const handleCors = require('./cors');
const handleError = require('./handleError');
const { requestLogger, errorLogger } = require('./logger');

module.exports = {
  auth,
  handleCors,
  handleError,
  requestLogger,
  errorLogger,
};
