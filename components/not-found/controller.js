const { NotFoundError } = require('../../errors');

function handleUnknownRoute(req, res, next) {
  next(new NotFoundError('Страница не найдена'));
}

module.exports = handleUnknownRoute;
