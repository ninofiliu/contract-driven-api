const authModule = require('../modules/auth');

module.exports = async (req) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('Authorization header must contain token');
  if (!await authModule.tokenIsValid(token)) throw new Error('Invalid token');
};
