const { urlPattern } = require('./patterns');

const handleMongooseValidationError = require('./handle-mongoose-validation-error');
const handleMongooseCastError = require('./handle-mongoose-cast-error');

/**
 * Checks if a string is a URL
 * @param {string} str
 * @returns boolean
 */
const isUrl = (str) => urlPattern.test(str);

module.exports = {
  isUrl,
  handleMongooseValidationError,
  handleMongooseCastError,
};
