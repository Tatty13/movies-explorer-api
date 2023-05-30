const BadRequestError = require('./bad-request-error');
const ValidationError = require('./validation-error');
const AuthError = require('./auth-error');
const ForbiddenError = require('./forbidden-error');
const NotFoundError = require('./not-found-error');
const ConflictError = require('./conflict-error');

module.exports = {
  BadRequestError,
  ValidationError,
  AuthError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
