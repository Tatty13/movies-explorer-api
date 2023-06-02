const CustomError = require('./custom-error');
const { NOT_FOUND_404 } = require('../utils/constants');

class NotFoundError extends CustomError {
  /**
   * error with statusCode 404
   * @param {string} message
   */
  constructor(message) {
    super(message, NOT_FOUND_404, 'NotFoundError');
  }
}

module.exports = NotFoundError;
