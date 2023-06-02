const CustomError = require('./custom-error');
const { CONFLICT_409 } = require('../utils/constants');

class ConflictError extends CustomError {
  /**
   * error with statusCode 409
   * @param {string} message
   */
  constructor(message) {
    super(message, CONFLICT_409, 'ConflictError');
  }
}

module.exports = ConflictError;
