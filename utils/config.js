const {
  PORT = 3000,
  BD_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET = 'secret',
} = process.env;

module.exports = {
  PORT,
  BD_URL,
  JWT_SECRET,
};
