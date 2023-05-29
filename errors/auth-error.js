const CustomError = require('./custom-error');
const { UNAUTHORIZED_401 } = require('../utils/constants');

class AuthError extends CustomError {
  /**
   * error with statusCode 401
   * @param {string} message
   */
  constructor(message) {
    super(message, UNAUTHORIZED_401, 'AuthError');
  }
}

module.exports = AuthError;
