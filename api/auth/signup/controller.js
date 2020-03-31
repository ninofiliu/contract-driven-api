const users = require('../../../server/modules/users');
const { errors } = require('./post.infos');

module.exports = async (newUser) => {
  if (await users.exists({ username: newUser.username })) {
    throw new Error(errors.userExists);
  }
  await users.add(newUser);
  return {};
};
