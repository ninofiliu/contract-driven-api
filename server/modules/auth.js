const jwt = require('jsonwebtoken');

const secret = 'ssshhh';

module.exports = {
  generateToken: async () => jwt.sign({}, secret),
  tokenIsValid: async (token) => {
    try {
      await jwt.verify(token, secret);
      return true;
    } catch (e) {
      return false;
    }
  },
};
