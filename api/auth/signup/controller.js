const usersModule = require('../../../server/modules/users');
const { errors } = require('./infos');

module.exports = async (newUser) => {
  if (await usersModule.exists({ username: newUser.username })) {
    throw new Error(errors.userExists);
  }
  await usersModule.add(newUser);
  return {};
};
