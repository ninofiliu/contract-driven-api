const users = require('../../../server/modules/users');
const auth = require('../../../server/modules/auth');
const { errors } = require('./infos');

module.exports = async (user) => {
  if (!users.exists(user)) throw new Error(errors.wrong);
  const token = await auth.generateToken();
  return { token };
};
