const CustomError = require('./custom-error');
const { BAD_REQUEST_400 } = require('../utils/constants');

class BadRequestError extends CustomError {
  /**
   * error with statusCode 400
   * @param {string} message
   */
  constructor(message) {
    super(message, BAD_REQUEST_400, 'BadRequestError');
  }
}

module.exports = BadRequestError;
