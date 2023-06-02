const CustomError = require('./custom-error');
const { FORBIDDEN_403 } = require('../utils/constants');

class ForbiddenError extends CustomError {
  /**
   * error with statusCode 403
   * @param {string} message
   */
  constructor(message) {
    super(message, FORBIDDEN_403, ForbiddenError);
  }
}

module.exports = ForbiddenError;
