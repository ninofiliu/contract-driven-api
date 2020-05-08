const usersModule = require('../../../../server/modules/users');

module.exports = async (newUser) => {
  if (await usersModule.exists((u) => u.username === newUser.username)) {
    throw new Error('userExists');
  }
  await usersModule.add(newUser);
  return {};
};
