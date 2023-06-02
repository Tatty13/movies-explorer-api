const { AuthError } = require('../errors');
const { verifyToken } = require('../utils');

/**
 * gets token from cookies, if token is verified, sets payload to req.user
 * otherwise throw auth error
 * @param {Request} req
 * @param {Response} _
 * @param {import('express').NextFunction} next
 * @returns
 */
function auth(req, _, next) {
  const { token } = req.cookies;

  try {
    if (!token) {
      next(new AuthError('Требуется авторизация'));
      return;
    }

    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    next(new AuthError('Передан невалидный токен'));
  }
}

module.exports = auth;
