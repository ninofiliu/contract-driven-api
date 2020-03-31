const usersModule = require('../../../server/modules/users');
const authModule = require('../../../server/modules/auth');
const { errors } = require('./infos');

module.exports = async (user) => {
  if (!usersModule.exists(user)) throw new Error(errors.wrong);
  const token = await authModule.generateToken();
  return { token };
};
