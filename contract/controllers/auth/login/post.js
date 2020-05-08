const usersModule = require('../../../../server/modules/users');
const authModule = require('../../../../server/modules/auth');

module.exports = async (user) => {
  if (!usersModule.exists((u) => u.username === user.username && u.password === user.password)) {
    throw new Error('wrong');
  }
  const token = await authModule.generateToken();
  return { token };
};
