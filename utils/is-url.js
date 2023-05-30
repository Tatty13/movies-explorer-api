const { urlPattern } = require('./patterns');

/**
 * Checks if a string is a URL
 * @param {string} str
 * @returns boolean
 */
const isUrl = (str) => urlPattern.test(str);

module.exports = isUrl;
