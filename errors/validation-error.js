const CustomError = require('./custom-error');
const { BAD_REQUEST_400 } = require('../utils/constants');

class ValidationError extends CustomError {
  /**
   * error with statusCode 400
   * @param {string} message
   */
  constructor(message) {
    super(message, BAD_REQUEST_400, 'ValidationError');
  }
}

module.exports = ValidationError;
