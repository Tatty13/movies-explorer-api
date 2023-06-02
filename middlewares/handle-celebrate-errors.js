const { isCelebrateError } = require('celebrate');
const { BadRequestError } = require('../errors');

/**
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {import('express').NextFunction} next
 */
function handleCelebrateErrors(err, req, res, next) {
  if (isCelebrateError(err)) {
    const [errData] = err.details.values().next().value.details;
    next(new BadRequestError(errData.message));
    return;
  }

  next(err);
}

module.exports = handleCelebrateErrors;
