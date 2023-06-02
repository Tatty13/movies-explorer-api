const bcrypt = require('bcryptjs');

/**
 * @param {string} password
 * @returns {Promise<string>} hash
 */
const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

/**
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
const checkPassword = async (password, hash) => {
  const isIdentic = await bcrypt.compare(password, hash);
  return isIdentic;
};

module.exports = {
  generateHash,
  checkPassword,
};
