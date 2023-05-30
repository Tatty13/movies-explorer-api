const { BadRequestError } = require('../errors');

/**
 * creates a new BadRequestError with status code 400 and formated mongoose error massage,
 * then passes it to the next function
 * @param {import('mongoose').Error.CastError} err
 * @param {Function} next
 */
function handleMongooseCastError(err, next) {
  const message = `"${err.value}" incorrect. ${err.reason.message}`;
  next(new BadRequestError(message));
}

module.exports = handleMongooseCastError;
