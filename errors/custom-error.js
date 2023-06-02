class CustomError extends Error {
  /**
   * @param {string} message - error.message
   * @param {number} statusCode - error.statusCode
   * @param {string} name - error.name
   */
  constructor(message, statusCode, name) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}

module.exports = CustomError;
