const auth = require('./auth');
const handleError = require('./handleError');
const { requestLogger, errorLogger } = require('./logger');

module.exports = {
  auth,
  handleError,
  requestLogger,
  errorLogger,
};
