const { BadRequestError } = require('../errors');

/**
 * creates a new BadRequestError with status code 400 and formated mongoose error massage,
 * then passes it to the next function
 * @param {import('mongoose').Error.ValidationError} err
 * @param {Function} next
 */
function handleMongooseValidationError(err, next) {
  const message = Object.values(err.errors).map((e) => e.message).join('. ');
  next(new BadRequestError(message));
}

module.exports = handleMongooseValidationError;
