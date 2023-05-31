/**
 *
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {import('express').NextFunction} next
 */
function handleError(err, req, res, next) {
  const { statusCode = 500, message = 'На сервере произошла ошибка' } = err;
  res.status(statusCode).send({ message });

  next();
}

module.exports = handleError;
